﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class ReportProjectTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
            project.Name = ProjectName;
            Project = project;
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            try
            {
                var projectFullName = Project.FullName;
                Dte.Solution.Remove(Project);
                File.WriteAllText(projectFullName, Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.ReportProjectTemplate.csproj"), System.Text.Encoding.UTF8);
                var fInfoProject = new FileInfo(projectFullName);
                fInfoProject.MoveTo(fInfoProject.DirectoryName + "\\" + ProjectName + ".rptproj");
                var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName ?? throw new InvalidOperationException());
                var folder = dInfoProject.Parent?.FullName + "\\" + ProjectName;
                Utility.TryDeleteDirectory(folder);
                dInfoProject.MoveTo(folder);
                Dte.Solution.AddFromFile(dInfoProject.Parent?.FullName + "\\" + ProjectName + "\\" + ProjectName + ".rptproj");
                Dte.Solution.SaveAs(Dte.Solution.FullName);
                var tfs = new Tfs(Dte);
                tfs.Undo(fInfoProject.DirectoryName);
                tfs.Add(dInfoProject.FullName);
            }
            catch { }
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind != WizardRunKind.AsNewProject) return;
            Dte = (DTE)automationObject;
            var form = new FormProject(FormType.Report, Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                ProjectName = form.ProjectName;
                if (!Utility.ExistProject(Dte, ProjectName))
                {
                    replacementsDictionary.Add("$CrmName$", form.CrmName);
                    replacementsDictionary.Add("$DevKitVersion$", Const.Version);
                    replacementsDictionary.Add("$ProjectName$", ProjectName);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    return;
                }
                else
                {
                    MessageBox.Show($@"{FormType.Report.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
