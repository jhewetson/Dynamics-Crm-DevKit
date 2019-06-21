﻿using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Console : IWizard
    {
        private DTE DTE { get; set; }
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
            var oldProjectFolder = Path.GetDirectoryName(Project.FullName);
            var newProjectFolder = Path.GetDirectoryName(DTE?.Solution?.FullName) + "\\" + ProjectName;
            Utility.FixCorrectProjectFolder(DTE, Project, oldProjectFolder, newProjectFolder);
            Utility.TfsUndoAdd(DTE, oldProjectFolder, newProjectFolder);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var destinationDirectory = replacementsDictionary["$destinationdirectory$"];
            try
            {
                DTE = (DTE)automationObject;
                if (!Utility.SharedProjectExist(DTE))
                {
                    MessageBox.Show(@"Please add PL.DynamicsCrm.DevKit Shared project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    throw new WizardCancelledException();
                }
                var form = new FormProject(FormType.Console, DTE);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating project ...
                ProjectName = form.ProjectName;
                if (Utility.ExistProject(DTE, ProjectName))
                {
                    MessageBox.Show($@"{ProjectName} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    throw new WizardCancelledException();
                }
                Wizard.ProcessProjectReplacementsDictionary(replacementsDictionary, form);
            }
            catch
            {
                if (Directory.Exists(destinationDirectory))
                {
                    Utility.TryDeleteDirectory(destinationDirectory);
                }
                throw;
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
