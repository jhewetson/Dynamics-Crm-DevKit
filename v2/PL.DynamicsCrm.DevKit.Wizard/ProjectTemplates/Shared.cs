using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Shared : IWizard
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
                var form = new FormProject(FormType.Shared, DTE);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating project ...
                Wizard.ProcessProjectReplacementsDictionary(replacementsDictionary, form);
                ProjectName = form.ProjectName;
                var file = Utility.GetDevKitCliJsonFile(DTE);
                if (!File.Exists(file))
                {
                    var solutionName = Utility.GetSolutionName(DTE);
                    var json = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Resources.PL.DynamicsCrm.DevKit.Cli.json");
                    json = json
                        .Replace("???.Plugin.*.dll", $"{solutionName}.Plugin.*.dll")
                        .Replace("???.CustomAction.*.dll", $"{solutionName}.CustomAction.*.dll")
                        .Replace("???.Workflow.*.dll", $"{solutionName}.Workflow.*.dll")
                        .Replace("???.DataProvider.*.dll", $"{solutionName}.DataProvider.*.dll")
                        .Replace("???.*.Test.dll", $"{solutionName}.*.Test.dll")
                        ;
                    File.WriteAllText(file, json);
                }
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
