﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    class GeneratorTask
    {
        private CrmServiceClient CrmServiceClient { get; }
        private Generator GeneratorJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }

        public GeneratorTask(CrmServiceClient crmServiceClient, string currentDirectory, Generator lateBoundJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            GeneratorJson = lateBoundJson;
            Version = version;
        }

        internal void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            if (GeneratorJson.rootnamespace.Length == 0 || GeneratorJson.rootnamespace == "???")
                throw new Exception("No rootnamespace found. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            if (GeneratorJson.rootfolder == "???")
                throw new Exception("No rootfolder found. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            if (GeneratorJson.crmversion.Length == 0 || GeneratorJson.crmversion == "???")
                throw new Exception("No crmversion found. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            if (GeneratorJson.usetypescriptdeclaration != "true" && GeneratorJson.usetypescriptdeclaration != "false")
                throw new Exception("No usetypescriptdeclaration found. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");

            if (GeneratorJson.type.ToLower() == "csharp" || GeneratorJson.type.ToLower() == "c#")
                GeneratorLateBound();
            else if (GeneratorJson.type.ToLower() == "jsform")
                GeneratorJsForm();
            else if (GeneratorJson.type.ToLower() == "jswebapi")
                GeneratorWebApi();

            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
        }


        public List<string> GetAllEntities()
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)CrmServiceClient.Execute(request);
            var entities = new List<string>();
            foreach (var entity in response.EntityMetadata)
                entities.Add(entity.SchemaName);
            entities.Sort();
            return entities;
        }

        private void GeneratorWebApi()
        {
            //var list = GetAllEntities();
            //var a = string.Empty;
            //foreach (var entity in list)
            //{
            //    a += $"\t\t\"{entity}\",\r\n";
            //}

            CliLog.WriteLine(CliLog.ColorGreen, "START GENERATOR - JS WEBAPI - TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            var entities = new List<string>();
            string[] files;
            var folder = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}";
            if (GeneratorJson.entities.Count == 0)            {
                var pattern = "*.webapi.js";

                files = Directory.GetFiles(folder, pattern);
            }
            else
            {
                files = GeneratorJson.entities.Select(e => $"{folder}{e}.webapi.js").ToArray();
            }

            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorRed, "NOT FOUND ENTIIES !!!");
                return;
            }
            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
#if DEBUG
                if (entity != "ImageDescriptor") continue;
#endif
                GeneratorJsWebApi(entity, i, entities.Count);
                i++;
//#if DEBUG
//                if (i == 50) break;
//#endif
            }
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END GENERATOR - JS WEBAPI - TASKS");
        }

        private void GeneratorJsWebApi(string entity, int i, int count)
        {
            var isDebugWebApi = true;
            var jsForm = new List<string>();
            var isDebugForm = true;

            if (GeneratorJson.usetypescriptdeclaration == "true")
            {
                if (!File.Exists($"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.js"))
                {
                    var text = string.Empty;
                    text += "//@ts-check\r\n";
                    text += $"///<reference path=\"{entity}.d.ts\" />\r\n";
                    File.WriteAllText($"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.js", text, System.Text.Encoding.UTF8);
                }
                var fileTypeScriptDeclaration = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.d.ts";
                if (File.Exists(fileTypeScriptDeclaration))
                {
                    var lines = File.ReadAllLines(fileTypeScriptDeclaration);
                    var json = lines[lines.Length - 1];
                    var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));
                    isDebugWebApi = comment.IsDebugWebApi;
                    jsForm = comment.JsForm;
                    isDebugForm = comment.IsDebugForm;
                }
                var parts = GeneratorJson.rootnamespace.Split(".".ToCharArray());
                var projectName = parts.Length > 1 ? parts[1] : parts[0];
                var jsWebApi = new JsWebApi(CrmServiceClient.OrganizationServiceProxy, projectName, entity, isDebugWebApi, jsForm, isDebugForm);
                jsWebApi.GeneratorCode();
                var old = string.Empty;
                if (File.Exists(fileTypeScriptDeclaration))
                    old = File.ReadAllText(fileTypeScriptDeclaration).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                var @new = jsWebApi.WebApiCodeTypeScriptDeclaration.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".d.ts");
                    if (Utility.CanWriteAllText(fileTypeScriptDeclaration))
                    {
                        File.WriteAllText(fileTypeScriptDeclaration, jsWebApi.WebApiCodeTypeScriptDeclaration, System.Text.Encoding.UTF8);
                    }
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".d.ts");
                var fileWebApi = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.webapi.js";
                old = string.Empty;
                if (File.Exists(fileWebApi))
                    old = File.ReadAllText(fileWebApi).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                @new = jsWebApi.WebApiCode.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".webapi.js");
                    if (Utility.CanWriteAllText(fileWebApi))
                    {
                        File.WriteAllText(fileWebApi, jsWebApi.WebApiCode, System.Text.Encoding.UTF8);
                    }
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".webapi.js");
            }
            else
            {
                var fileIntellisense = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.intellisense.js";
                var lines = File.ReadAllLines(fileIntellisense);
                var json = lines[lines.Length - 1];
                var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));
                var parts = GeneratorJson.rootnamespace.Split(".".ToCharArray());
                var projectName = parts.Length > 1 ? parts[1] : parts[0];
                var jsWebApi = new JsWebApi(CrmServiceClient.OrganizationServiceProxy, projectName, entity, comment.IsDebugWebApi, comment.JsForm, comment.IsDebugForm);
                jsWebApi.GeneratorCode();
                var old = File.ReadAllText(fileIntellisense).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                var @new = jsWebApi.WebApiCodeIntellisense.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".intellisense.js");
                    if (Utility.CanWriteAllText(fileIntellisense))
                    {
                        File.WriteAllText(fileIntellisense, jsWebApi.WebApiCodeIntellisense, System.Text.Encoding.UTF8);
                    }
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".intellisense.js");
                var fileWebApi = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.webapi.js";
                old = File.ReadAllText(fileWebApi).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                @new = jsWebApi.WebApiCode.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".webapi.js");
                    if (Utility.CanWriteAllText(fileWebApi))
                    {
                        File.WriteAllText(fileWebApi, jsWebApi.WebApiCode, System.Text.Encoding.UTF8);
                    }
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".webapi.js");
            }
        }

        private void GeneratorJsForm()
        {
            CliLog.WriteLine(CliLog.ColorGreen, "START GENERATOR - JS FORM - TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            var entities = new List<string>();
            const string pattern = "*.form.js";
            var folder = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}";
            var files = Directory.GetFiles(folder, pattern);
            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorRed, "NOT FOUND ENTIIES !!!");
                return;
            }

            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                GeneratorJsForm(entity, i, entities.Count);
                i++;
            }
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END GENERATOR - JS FORM - TASKS");
        }

        private void GeneratorJsForm(string entity, int i, int count)
        {
            if (GeneratorJson.usetypescriptdeclaration == "true")
            {
                var fileTypeScriptDeclaration = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.d.ts";
                var lines = File.ReadAllLines(fileTypeScriptDeclaration);
                var json = lines[lines.Length - 1];
                var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));
                var parts = GeneratorJson.rootnamespace.Split(".".ToCharArray());
                var projectName = parts.Length > 1 ? parts[1] : parts[0];
                var jsForm = new JsForm(CrmServiceClient.OrganizationServiceProxy, projectName, entity);
                jsForm.GeneratorCode(comment.JsForm, comment.IsDebugForm, comment.JsWebApi, comment.IsDebugWebApi);
                var old = File.ReadAllText(fileTypeScriptDeclaration).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                var @new = jsForm.FormCodeIntellisense2.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".d.ts");
                    if (Utility.CanWriteAllText(fileTypeScriptDeclaration))
                    {
                        File.WriteAllText(fileTypeScriptDeclaration, jsForm.FormCodeIntellisense, System.Text.Encoding.UTF8);
                    }
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".d.ts");
                var fileForm = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.form.js";
                old = File.ReadAllText(fileForm).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                @new = jsForm.FormCode.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".form.js");
                    if (Utility.CanWriteAllText(fileForm))
                    {
                        File.WriteAllText(fileForm, jsForm.FormCode, System.Text.Encoding.UTF8);
                    }
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".form.js");
            }
            else
            {
                var fileIntellisense = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.intellisense.js";
                var lines = File.ReadAllLines(fileIntellisense);
                var json = lines[lines.Length - 1];
                var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));
                var parts = GeneratorJson.rootnamespace.Split(".".ToCharArray());
                var projectName = parts.Length > 1 ? parts[1] : parts[0];
                var jsForm = new JsForm(CrmServiceClient.OrganizationServiceProxy, projectName, entity);
                jsForm.GeneratorCode(comment.JsForm, comment.IsDebugForm, comment.JsWebApi, comment.IsDebugWebApi);
                var fileForm = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.form.js";

                var old = File.ReadAllText(fileIntellisense).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                var @new = jsForm.FormCodeIntellisense.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".intellisense.js");
                    File.WriteAllText(fileIntellisense, jsForm.FormCodeIntellisense, System.Text.Encoding.UTF8);
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".intellisense.js");

                old = File.ReadAllText(fileForm).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                @new = jsForm.FormCode.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
                if (old != @new)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".form.js");
                    File.WriteAllText(fileForm, jsForm.FormCode, System.Text.Encoding.UTF8);
                }
                else
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".form.js");
            }
        }

        private void GeneratorLateBound()
        {
            CliLog.WriteLine(CliLog.ColorGreen, "START GENERATOR - LATE BOUND - TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            var entities = new List<string>();
            const string pattern = "*.generated.cs";
            var folder = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}";
            var files = Directory.GetFiles(folder, pattern);
            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorRed, "NOT FOUND ENTITIES !!!");
                return;
            }

            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                GeneratorLateBound(entity, i, entities.Count);
                i++;
            }
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END GENERATOR - LATE BOUND - TASKS");
        }

        private void GeneratorLateBound(string entity, int i, int count)
        {
            var lateBound = new GeneratedCSharpLateBound();
            var rootNameSpace = GeneratorJson.rootnamespace + ".Shared.Entities";
            var sharedNameSpace = GeneratorJson.rootnamespace + ".";
            var crmVersionName = (CrmVersionName)int.Parse(GeneratorJson.crmversion);
            var generated = lateBound.Go(CrmServiceClient.OrganizationServiceProxy, crmVersionName, entity, rootNameSpace, sharedNameSpace);
            var file = $"{CurrentDirectory}\\{GeneratorJson.rootfolder}\\{entity}.generated.cs";

            var old = File.ReadAllText(file).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            var @new = generated.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t",string.Empty);
            if (old != @new)
            {
                File.WriteAllText(file, generated, System.Text.Encoding.UTF8);
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing ", CliLog.ColorGreen, entity, ".generated.cs");
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": No change ", CliLog.ColorGreen, entity, ".generated.cs");
            }
        }
    }
}
