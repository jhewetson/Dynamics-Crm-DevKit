﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using CmdLine;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public enum TaskType
    {
        Plugins,
        Workflows,
        WebResources,
        SolutionPackagers,
        DataProviders,
        Generators,
        DownloadWebResources,
        DownloadPortalWebResources,
        ProxyTypes
    }

    public class Program
    {
        private static string CurrentDirectory
        {
            get
            {
#if DEBUG
                return @"C:\src\github\phuocle\Dynamics-Crm-DevKit\test\CRM-DEVKIT\Rocket.Hsbc.WebResource\entities";
#else
                return Directory.GetCurrentDirectory();
#endif
            }
        }

        private static string CrmConnectOrgUriActual { get; set; }
        private static Plugin PluginJson { get; set; }
        private static Plugin WorkflowJson { get; set; }
        private static WebResource WebResourceJson { get; set; }
        private static SolutionPackager SolutionPackagerJson { get; set; }
        private static DataProvider DataProviderJson { get; set; }
        private static Generator GeneratorJson { get; set; }
        private static DownloadWebResource DownloadWebResourceJson { get; set; }
        private static Portal PortalJson { get; set; }
        private static ProxyType ProxyTypeJson { get; set; }

        private static CrmServiceClient CrmServiceClient { get; set; }

        public static void Main(string[] args)
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "PL.DynamicsCrm.DevKit.Cli ", CliLog.ColorRed, Const.Version);
            CliLog.WriteLine(CliLog.ColorGreen, "Path: ", CliLog.ColorWhite, GetCliPath());
            #if DEBUG
            CliLog.WriteLine(CliLog.ColorRed, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorRed, "DEBUG MODE");
            CliLog.WriteLine(CliLog.ColorRed, new string('*', CliLog.StarLength));
            #endif
#if !DEBUG
            try
            {
#endif
            var arguments = CommandLine.Parse<CommandLineArgs>();
            var jsonFile = Path.Combine(CurrentDirectory, arguments.Json);
            CliLog.WriteLine(CliLog.ColorGreen, "PL.DynamicsCrm.DevKit.Cli.json path: ", CliLog.ColorWhite, jsonFile);
            CliLog.WriteLine(CliLog.ColorGreen, "Arguments: ",
                CliLog.ColorMagenta, "/conn:", CliLog.ColorCyan, arguments.Connection, " ",
                CliLog.ColorMagenta, "/json:", CliLog.ColorCyan, arguments.Json, " ",
                CliLog.ColorMagenta, "/type:", CliLog.ColorCyan, arguments.Type, " ",
                CliLog.ColorMagenta, "/profile:", CliLog.ColorCyan, arguments.Profile, " ",
                CliLog.ColorMagenta, "/version:", CliLog.ColorCyan, arguments.Version
                );
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            Run(arguments);
//#if DEBUG
//            CliLog.WriteLine(CliLog.ColorRed, "!!! FINISHED !!!");
//            Console.ReadKey();
//#endif
#if !DEBUG
            }
            catch (Exception e)
            {
                CliLog.WriteLine(CliLog.ColorError, $"{e.Message}");
                Console.ReadKey();
            }
#endif
        }

        private static string GetCliPath()
        {
            var assembly = Assembly.GetExecutingAssembly();
            return assembly.Location;
        }

        private static void Run(CommandLineArgs arguments)
        {
            if (!IsValid(arguments)) return;
            if (arguments.Type == TaskType.Plugins.ToString().ToLower())
            {
                var task = new PluginTask(CrmServiceClient, CurrentDirectory, PluginJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.Workflows.ToString().ToLower())
            {
                var task = new WorkflowTask(CrmServiceClient, CurrentDirectory, WorkflowJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.WebResources.ToString().ToLower())
            {
                var task = new WebResourceTask(CrmServiceClient, CurrentDirectory, WebResourceJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.SolutionPackagers.ToString().ToLower())
            {
                var task = new SolutionPackagerTask(CrmServiceClient, CurrentDirectory, SolutionPackagerJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.DataProviders.ToString().ToLower())
            {
                var task = new DataProviderTask(CrmServiceClient, CurrentDirectory, DataProviderJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.Generators.ToString().ToLower())
            {
                var task = new GeneratorTask(CrmServiceClient, CurrentDirectory, GeneratorJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.DownloadWebResources.ToString().ToLower())
            {
                var task = new DownloadWebResourceTask(CrmServiceClient, CurrentDirectory, DownloadWebResourceJson, arguments.Version, Path.Combine(CurrentDirectory, arguments.Json));
                task.Run();
            }
            else if (arguments.Type == TaskType.DownloadPortalWebResources.ToString().ToLower())
            {
                var task = new PortalTask(CrmServiceClient, CurrentDirectory, PortalJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.ProxyTypes.ToString().ToLower())
            {
                var task = new ProxyTypesTask(CrmServiceClient, CurrentDirectory, ProxyTypeJson, arguments.Version);
                task.Run();
            }
        }

        private static bool IsValid(CommandLineArgs arguments)
        {
            if (arguments.Connection.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/conn: missing");
                return false;
            }
            if (arguments.Json.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/json: missing");
                return false;
            }
            if (arguments.Type.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/type: missing");
                return false;
            }
            var jsonFile = Path.Combine(CurrentDirectory, arguments.Json);
            if (!File.Exists(jsonFile))
            {
                CliLog.WriteLine(CliLog.ColorError, $"/json: PL.DynamicsCrm.DevKit json missing [{jsonFile}]");
                return false;
            }
            var json = SimpleJson.DeserializeObject<CliJson>(File.ReadAllText(jsonFile));
            if (arguments.Type.Length > 0)
            {
                var types = new List<string>
                {
                    TaskType.Plugins.ToString().ToLower(),
                    TaskType.Workflows.ToString().ToLower(),
                    TaskType.WebResources.ToString().ToLower(),
                    TaskType.SolutionPackagers.ToString().ToLower(),
                    TaskType.DataProviders.ToString().ToLower(),
                    TaskType.Generators.ToString().ToLower(),
                    TaskType.DownloadWebResources.ToString().ToLower(),
                    TaskType.DownloadPortalWebResources.ToString().ToLower(),
                    TaskType.ProxyTypes.ToString().ToLower()
                };
                if (!types.Contains(arguments.Type))
                {
                    throw new Exception($"/type: should be: {TaskType.Plugins.ToString().ToLower()}/" +
                        $"{TaskType.Workflows.ToString().ToLower()}/" +
                        $"{TaskType.WebResources.ToString().ToLower()}/" +
                        $"{TaskType.SolutionPackagers.ToString().ToLower()}/" +
                        $"{TaskType.DataProviders.ToString().ToLower()}/" +
                        $"{TaskType.Generators.ToString().ToLower()}/" +
                        $"{TaskType.DownloadWebResources.ToString().ToLower()}/" +
                        $"{TaskType.DownloadPortalWebResources.ToString().ToLower()}" +
                        $"{TaskType.ProxyTypes.ToString().ToLower()}"
                        );
                }
            }
            else
            {
                PluginJson = json.plugins.FirstOrDefault(x => x.profile == arguments.Profile);
                WorkflowJson = json.workflows.FirstOrDefault(x => x.profile == arguments.Profile);
                WebResourceJson = json.webresources.FirstOrDefault(x => x.profile == arguments.Profile);
                SolutionPackagerJson = json.solutionpackagers.FirstOrDefault(x => x.profile == arguments.Profile);
                DataProviderJson = json.dataproviders.FirstOrDefault(x => x.profile == arguments.Profile);
                GeneratorJson = json.generators.FirstOrDefault(x => x.profile == arguments.Profile);
                DownloadWebResourceJson = json.downloadwebresources.FirstOrDefault(x => x.profile == arguments.Profile);
                PortalJson = json.portals.FirstOrDefault(x => x.profile == arguments.Profile);
                ProxyTypeJson = json.proxytypes.FirstOrDefault(x => x.profile == arguments.Profile);
            }
            if (arguments.Profile.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/profile: missing");
                return false;
            }
            if (arguments.Version.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/version: missing");
                return false;
            }
            if (arguments.Type == TaskType.Plugins.ToString().ToLower())
            {
                PluginJson = json.plugins.FirstOrDefault(x => x.profile == arguments.Profile);
                if (PluginJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.Workflows.ToString().ToLower())
            {
                WorkflowJson = json.workflows.FirstOrDefault(x => x.profile == arguments.Profile);
                if (WorkflowJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.WebResources.ToString().ToLower())
            {
                WebResourceJson = json.webresources.FirstOrDefault(x => x.profile == arguments.Profile);
                if (WebResourceJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.SolutionPackagers.ToString().ToLower())
            {
                SolutionPackagerJson = json.solutionpackagers.FirstOrDefault(x => x.profile == arguments.Profile);
                if (SolutionPackagerJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.DataProviders.ToString().ToLower())
            {
                DataProviderJson = json.dataproviders.FirstOrDefault(x => x.profile == arguments.Profile);
                if (DataProviderJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.Generators.ToString().ToLower())
            {
                GeneratorJson = json.generators.FirstOrDefault(x => x.profile == arguments.Profile);
                if (GeneratorJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.DownloadWebResources.ToString().ToLower())
            {
                DownloadWebResourceJson = json.downloadwebresources.FirstOrDefault(x => x.profile == arguments.Profile);
                if (DownloadWebResourceJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.DownloadPortalWebResources.ToString().ToLower())
            {
                PortalJson = json.portals.FirstOrDefault(x => x.profile == arguments.Profile);
                if (PortalJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.ProxyTypes.ToString().ToLower())
            {
                ProxyTypeJson = json.proxytypes.FirstOrDefault(x => x.profile == arguments.Profile);
                if (ProxyTypeJson == null)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
                ProxyTypeJson.connection = arguments.Connection;
            }
            if (!IsConnectedDynamics365(arguments.Connection))
            {
                CliLog.WriteLine(CliLog.ColorError, $"/conn: Cannot connect to Dynamics 365 with your Connection String: {arguments.Connection}");
                return false;
            }
            CliLog.WriteLine(CliLog.ColorYellow, "Connected ", CliLog.ColorMagenta, "Dynamics CRM: ", CliLog.ColorRed, CrmConnectOrgUriActual);
            return true;
        }

        private static bool IsConnectedDynamics365(string connection)
        {
            var password = connection.Substring(connection.IndexOf("Password=", StringComparison.Ordinal));
            password = password.Substring("Password=".Length);
            password = password.Substring(0, password.Length - 1);
            password = TryDecryptPassword(password);
            connection = $"{connection.Substring(0, connection.IndexOf("Password=", StringComparison.Ordinal))}Password={password};";
            try
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                CrmServiceClient = new CrmServiceClient(connection);
                CrmServiceClient.OrganizationServiceProxy.Timeout = new TimeSpan(2, 0, 0);
                CrmConnectOrgUriActual = CrmServiceClient.CrmConnectOrgUriActual.AbsoluteUri;
                return true;
            }
            catch
            {
                return false;
            }
        }

        private static string TryDecryptPassword(string password)
        {
            try
            {
                password = EncryptDecrypt.DecryptString(password);
            }
            catch
            {
                // ignored
            }
            return password;
        }
    }
}
