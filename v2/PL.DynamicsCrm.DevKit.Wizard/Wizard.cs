using System.Collections.Generic;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class Wizard
    {
        public static void ProcessProjectReplacementsDictionary(Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            replacementsDictionary.Add("$CrmConnectionString$", form.WizardCrmConnectionString);
            replacementsDictionary.Add("$ShortCrmName$", form.WizardShortCrmName);
            replacementsDictionary.Add("$NameSpace$", Utility.SafeNamespace(form.WizardNameSpace));
            replacementsDictionary.Add("$DevKitVersion$", Const.Version);
            replacementsDictionary.Add("$SharedProject$", Utility.GetSharedProject(form.DTE));
            replacementsDictionary.Add("$ProjectName$", form.ProjectName);
            replacementsDictionary.Add("$ProjectNetVersion$", Utility.GetProjectNetVersion(form.CrmName));
            replacementsDictionary.Add("$PL.DynamicsCrm.DevKit.Cli.TargetFramework$", Utility.GetProjectNetVersion(form.CrmName).Replace(".", ""));
            replacementsDictionary.Add("$PL.DynamicsCrm.DevKit.Analyzers.TargetFramework$", Utility.GetProjectNetVersion(form.CrmName).Replace(".", ""));
            replacementsDictionary.Add("$CrmUrl$", form.CrmConnection.Url);
            replacementsDictionary.Add("$CrmUserName$", form.CrmConnection.UserName);
            replacementsDictionary.Add("$PL.DynamicsCrm.DevKit.Cli.Version$", NugetHelper.GetLatestPackageVersion(Const.PLDynamicsCrmDevKitCli));
            replacementsDictionary.Add("$PL.DynamicsCrm.DevKit.Analyzers.Version$", NugetHelper.GetLatestPackageVersion(Const.PLDynamicsCrmDevKitAnalyzers));
            var CoreAssemblies = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkCoreAssemblies, form.CrmName);
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreAssemblies.Version$", CoreAssemblies.Version);
            if (form.CrmName.StartsWith(Const.DynamicsCrm2013) || form.CrmName.StartsWith(Const.DynamicsCrm2015))
                CoreAssemblies.TargetFramework = "45";
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreAssemblies.TargetFramework$", CoreAssemblies.TargetFramework);
        }
    }
}
