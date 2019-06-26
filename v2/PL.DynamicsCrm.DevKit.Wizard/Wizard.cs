using System.Collections.Generic;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.Helper;

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
            replacementsDictionary.Add("$ProjectNetVersion$", Utility.GetProjectNetVersion(form.ComboBoxCrmName));
            replacementsDictionary.Add("$CrmUrl$", form.CrmConnection.Url);
            replacementsDictionary.Add("$CrmUserName$", form.CrmConnection.UserName);
            replacementsDictionary.Add("$PL.DynamicsCrm.DevKit.Cli.Version$", NugetHelper.GetLatestPackageVersion(Const.PLDynamicsCrmDevKitCli));
            replacementsDictionary.Add("$PL.DynamicsCrm.DevKit.Analyzers.Version$", NugetHelper.GetLatestPackageVersion(Const.PLDynamicsCrmDevKitAnalyzers));
            replacementsDictionary.Add("$WebApiClientMin$", Utility.GetWebApiClientMin(form.ProjectJsName));
            replacementsDictionary.Add("$ProjectJsName$", form.ProjectJsName);

            var CoreAssemblies = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkCoreAssemblies, form.ComboBoxCrmName);
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreAssemblies.Version$", CoreAssemblies.Version);
            if (form.ComboBoxCrmName.StartsWith(Const.DynamicsCrm2013) || form.ComboBoxCrmName.StartsWith(Const.DynamicsCrm2015))
                CoreAssemblies.TargetFramework = "45";
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreAssemblies.TargetFramework$", CoreAssemblies.TargetFramework);

            var Workflow = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkWorkflow, form.ComboBoxCrmName);
            replacementsDictionary.Add("$Microsoft.CrmSdk.Workflow.Version$", Workflow.Version);
            replacementsDictionary.Add("$Microsoft.CrmSdk.Workflow.TargetFramework$", Workflow.TargetFramework);

            var coreToolsVersion = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkCoreTools);
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreTools.Version$", coreToolsVersion);

            if (form.FormType == FormType.Test)
            {
                var Deployment = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkDeployment, form.ComboBoxCrmName);
                replacementsDictionary.Add("$Microsoft.CrmSdk.Deployment.Version$", Deployment.Version);
                replacementsDictionary.Add("$Microsoft.CrmSdk.Deployment.TargetFramework$", Deployment.TargetFramework);
                if (form.ComboBoxCrmName != Const.DynamicsCrm2011)
                {
                    var CoreAssembly = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkXrmToolingCoreAssembly, form.ComboBoxCrmName);
                    replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.Version$", CoreAssembly.Version);
                    replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.TargetFramework$", CoreAssembly.TargetFramework);
                }

                var shortPackage = "." + form.WizardShortCrmName;
                if (shortPackage == ".365") shortPackage = ".9";
                else if (shortPackage == ".2011") shortPackage = string.Empty;
                var fakeXrmEasyPackage = "FakeXrmEasy" + shortPackage;

                replacementsDictionary.Add("$FakeXrmEasy.Package$", fakeXrmEasyPackage);
                var fakeXrmEasyVersion = NugetHelper.GetLatestPackageVersion(fakeXrmEasyPackage);
                replacementsDictionary.Add("$FakeXrmEasy.Version$", fakeXrmEasyVersion);
                var fakeXrmEasyTargetFramework = NugetHelper.GetLatestPackageTargetFramework(fakeXrmEasyPackage);
                replacementsDictionary.Add("$FakeXrmEasy.TargetFramework$", fakeXrmEasyTargetFramework);
            }
            else if (form.FormType == FormType.UiTest)
            {
                replacementsDictionary.Add("$Dynamics365.UIAutomation.Api.Version$", NugetHelper.GetLatestPackageVersion(Const.Dynamics365UIAutomationApi));
                replacementsDictionary.Add("$Dynamics365.UIAutomation.Api.TargetFramework$", NugetHelper.GetLatestPackageTargetFramework(Const.Dynamics365UIAutomationApi));
                replacementsDictionary.Add("$Selenium.Chrome.WebDriver.Version$", NugetHelper.GetLatestPackageVersion(Const.SeleniumChromeWebDriver));
                //replacementsDictionary.Add("$Selenium.Chrome.WebDriver.TargetFramework$", NugetHelper.GetLatestPackageTargetFramework(Const.SeleniumChromeWebDriver));
                replacementsDictionary.Add("$Selenium.Support.Version$", NugetHelper.GetLatestPackageVersion(Const.SeleniumSupport));
                replacementsDictionary.Add("$Selenium.Support.TargetFramework$", NugetHelper.GetLatestPackageTargetFramework(Const.SeleniumSupport));
                replacementsDictionary.Add("$Selenium.WebDriver.Version$", NugetHelper.GetLatestPackageVersion(Const.SeleniumWebDriver));
                replacementsDictionary.Add("$Selenium.WebDriver.TargetFramework$", NugetHelper.GetLatestPackageTargetFramework(Const.SeleniumWebDriver));
            }
        }
    }
}
