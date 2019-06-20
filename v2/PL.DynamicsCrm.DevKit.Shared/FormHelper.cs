using System.IO;
using EnvDTE;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class FormHelper
    {
        public static string GetProjectName(DTE dte, FormType formType)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo?.Name?.Split(".".ToCharArray());
            var data = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                data += parts[i] + ".";
            if (data.EndsWith(".Report."))
                data = data.Replace(".Report.", ".");
            if (data.EndsWith(".Test."))
                data = data.Replace(".Test.", ".");
            return $"{data}{formType.ToString()}";
        }
    }
}
