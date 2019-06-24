﻿
using System.Collections.Generic;
using PL.DynamicsCrm.DevKit.Shared.Models;

namespace PL.DynamicsCrm.DevKit.Shared
{
    class Const
    {
        public static readonly List<DataSourceCrm> DataSourceCrm = new List<DataSourceCrm>
        {
            new DataSourceCrm{ Version = "4.6.2", Name = $"{Const.Dynamics365} - 4.6.2"},
            //new DataSourceCrm{ Version = "4.5.2", Name = $"{Const.Dynamics365} - 4.5.2"},
            new DataSourceCrm{ Version = "4.5.2", Name = $"{Const.DynamicsCrm2016} - 4.5.2"},
            new DataSourceCrm{ Version = "4.5.2", Name = $"{Const.DynamicsCrm2015} - 4.5.2"},
            new DataSourceCrm{ Version = "4.5.2", Name = $"{Const.DynamicsCrm2013} - 4.5.2"},
            new DataSourceCrm{ Version = "4.0", Name = $"{Const.DynamicsCrm2011} - 4.0"}
        };
        public const string PLDynamicsCrmDevKitResourcesDll = "PL.DynamicsCrm.DevKit.Resources.dll";
        public const string Version = "2.0.0";

        public const string Chutzpah = "Chutzpah";
        public const string MicrosoftCrmSdkCoreAssemblies = "Microsoft.CrmSdk.CoreAssemblies";
        public const string MicrosoftCrmSdkCoreTools = "Microsoft.CrmSdk.CoreTools";
        public const string PLDynamicsCrmDevKitCli = "PL.DynamicsCrm.DevKit.Cli";
        public const string MicrosoftCrmSdkDeployment = "Microsoft.CrmSdk.Deployment";
        public const string MicrosoftCrmSdkWorkflow = "Microsoft.CrmSdk.Workflow";
        public const string MicrosoftCrmSdkXrmToolingCoreAssembly = "Microsoft.CrmSdk.XrmTooling.CoreAssembly";
        public const string PLDynamicsCrmDevKitAnalyzers = "PL.DynamicsCrm.DevKit.Analyzers";

        public const string DynamicsCrm2011 = "Dynamics Crm 2011";
        public const string DynamicsCrm2013 = "Dynamics Crm 2013";
        public const string DynamicsCrm2015 = "Dynamics Crm 2015";
        public const string DynamicsCrm2016 = "Dynamics Crm 2016";
        public const string Dynamics365 = "Dynamics 365";
    }
}
