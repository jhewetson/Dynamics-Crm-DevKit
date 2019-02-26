﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class WorkflowProjectTemplateWizard : IWizard
    {
        private string _keyName;
        private DTE Dte { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }
        private string NewFolder { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
            project.Name = ProjectName;
            Project = project;
            Signing.GenerateKey(project, NewFolder, _keyName);
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            var projectFullName = Project.FullName;
            Dte.Solution.Remove(Project);
            var fInfoProject = new FileInfo(projectFullName);
            var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName ?? throw new InvalidOperationException());
            var folder = dInfoProject.Parent?.FullName + "\\" + ProjectName;
            Utility.TryDeleteDirectory(folder);
            dInfoProject.MoveTo(folder);
            Dte.Solution.AddFromFile(dInfoProject.Parent?.FullName + "\\" + ProjectName + "\\" + ProjectName + ".csproj");
            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var tfs = new Tfs(Dte);
            tfs.Undo(fInfoProject.DirectoryName);
            tfs.Add(dInfoProject.FullName);
            Dte.ExecuteCommand("SolutionExplorer.Refresh");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind != WizardRunKind.AsNewProject) return;

            Dte = (DTE)automationObject;
            if (!Utility.SharedProjectExist(Dte))
            {
                MessageBox.Show(@"Please add shared project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
                throw new WizardCancelledException("Shared project should exist");
            }
            var form = new FormProject(FormType.Workflow, Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                ProjectName = form.ProjectName;
                if (!Utility.ExistProject(Dte, ProjectName))
                {
                    replacementsDictionary.Add("$CrmName$", form.CrmName);
                    replacementsDictionary.Add("$DevKitVersion$", Const.Version);
                    replacementsDictionary.Remove("$projectname$");
                    replacementsDictionary.Add("$projectname$", ProjectName);
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$NugetNetVersion$", form.NugetNetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    if (form.Others)
                        replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                    else
                        replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace2(form.RootNamespace));
                    replacementsDictionary.Add("$ProjectName$", ProjectName);
                    replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                    if (replacementsDictionary.ContainsKey("$ProjectName$"))
                        _keyName = replacementsDictionary["$ProjectName$"] + ".snk";
                    var solutionFullName = Dte?.Solution?.FullName;
                    replacementsDictionary.Add("$ShareProject$", Utility.GetSharedProject(solutionFullName));
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitAnalyzersVersion$", form.PLDynamicsCrmDevKitAnalyzersVersion);
                    replacementsDictionary.Add("$versionWorkflow$", form.MicrosoftCrmSdkWorkflow.Version);
                    replacementsDictionary.Add("$NugetNetWorkflowVersion$", form.MicrosoftCrmSdkWorkflow.NetVersion.Replace(".", string.Empty));
                    NewFolder = Utility.GetFolderProject(solutionFullName, ProjectName);
                    replacementsDictionary.Remove("$destinationdirectory$");
                    replacementsDictionary["$destinationdirectory$"] = NewFolder;
                    return;
                }
                else
                {
                    MessageBox.Show($@"{FormType.Workflow.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
            throw new WizardCancelledException("Cancel Click");
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
