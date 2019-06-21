using System;
using System.IO;
using System.Linq;
using System.Reflection;
using EnvDTE;
using PL.DynamicsCrm.DevKit.Resources;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class Utility
    {
        private const string IndentString = "  ";


        public static void TryDeleteDirectory(string directory)
        {
            if (Directory.Exists(directory))
            {
                try
                {
                    Directory.Delete(directory, true);
                }
                catch
                {
                }
            }
        }

        public static string GetDevKitCliJsonFile(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var dir = Path.GetDirectoryName(solutionFullName);
            var file = $"{dir}\\PL.DynamicsCrm.DevKit.Cli.json";
            return file;
        }

        public static string GetSolutionName(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            return Path.GetFileNameWithoutExtension(solutionFullName);
        }

        public static string ReadEmbeddedResource(string path)
        {
            try
            {
                string data;
                var executingAssembly = Assembly.GetExecutingAssembly();
                var directoryName = Path.GetDirectoryName(executingAssembly.Location);
                var assembly = Assembly.LoadFile(Path.Combine(directoryName, Const.PLDynamicsCrmDevKitResourcesDll));
                using (var stream = assembly.GetManifestResourceStream(path))
                using (var reader = new StreamReader(stream ?? throw new InvalidOperationException()))
                {
                    data = reader.ReadToEnd();
                }
                return data;
            }
            catch
            {
            }
            return string.Empty;
        }

        public static string FormatJson(string json)
        {
            var indentation = 0;
            var quoteCount = 0;
            var result =
                from ch in json
                let quotes = ch == '"' ? quoteCount++ : quoteCount
                let lineBreak = ch == ',' && quotes % 2 == 0
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, indentation))
                    : null
                let openChar = ch == '{' || ch == '['
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, ++indentation))
                    : ch.ToString()
                let closeChar = ch == '}' || ch == ']'
                    ? Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, --indentation)) + ch
                    : ch.ToString()
                select lineBreak ?? (openChar.Length > 1
                           ? openChar
                           : closeChar);

            var @return = string.Concat(result);
            @return = @return.Replace("\":[", "\": [").Replace("\":\"", "\": \"");
            return @return;
        }

        public static bool ExistProject(DTE dte, string projectName)
        {
            foreach (Project project in dte.Solution.Projects)
            {
                if (project.ProjectItems == null || project.FileName.Length == 0) continue;
                if (project.Name == projectName) return true;
            }
            return false;
        }

        public static string GetCrmName(Version version)
        {
            if (version.Major == 5) return Const.DynamicsCrm2011;
            if (version.Major == 6) return Const.DynamicsCrm2013;
            if (version.Major == 7) return Const.DynamicsCrm2015;
            if (version.Major == 8 && version < new Version("8.2.0")) return Const.DynamicsCrm2016;
            return Const.Dynamics365;
        }

        public static void TfsUndoAdd(DTE dte, string oldProjectFolder, string newProjectFolder)
        {
            var tfs = new Tfs(dte);
            tfs.Undo(oldProjectFolder);
            tfs.Add(newProjectFolder);
        }

        public static void FixCorrectProjectFolder(DTE dte, Project Project, string oldProjectFolder, string newProjectFolder)
        {
            var projectFullName = Project.FullName;
            dte.Solution.Remove(Project);
            Directory.Move(oldProjectFolder, newProjectFolder);
            dte.Solution.AddFromFile(newProjectFolder + "\\" + Path.GetFileName(projectFullName));
            dte.Solution.SaveAs(dte?.Solution?.FullName);
        }

        public static bool SharedProjectExist(DTE dte)
        {
            var sharedProjectName = Utility.GetSharedProject(dte);
            return Utility.ExistProject(dte, sharedProjectName);
        }

        public static string GetSharedProject(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{FormType.Shared.ToString()}";
        }


        public static void ForceWriteAllText(string file, string content)
        {
            if (!File.Exists(file))
            {
                File.WriteAllText(file, content, System.Text.Encoding.UTF8);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                File.WriteAllText(file, content, System.Text.Encoding.UTF8);
            }
        }

        public static string GetProjectNetVersion(string comboboxCrmName)
        {
            return comboboxCrmName.Split("-".ToCharArray())[1].Trim();
        }

        public static string GetCrmName(string comboboxCrmName)
        {
            return comboboxCrmName.Split("-".ToCharArray())[0].Trim();
        }

        public static string SafeNamespace(string @namespace)
        {
            var items = @namespace.Split('.');
            for (var i = 0; i < items.Length; i++)
            {
                if (int.TryParse(items[i], out _))
                {
                    items[i] = $"_{items[i]}";
                }
                else if (int.TryParse(items[i].Substring(0, 1), out _))
                {
                    items[i] = $"_{items[i]}";
                }
            }
            return string.Join(".", items);
        }
    }
}
