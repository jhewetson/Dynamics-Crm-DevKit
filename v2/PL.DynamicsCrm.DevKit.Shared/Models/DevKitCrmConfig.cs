using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Shared.Models
{
    public class DevKitCrmConfig
    {
        public string DefaultCrmVersion { get; set; }
        public string DefaultNetVersion { get; set; }
        public string DefaultCrmName { get; set; }
        public string DefaultCrmConnection { get; set; }
        public string SolutionPrefix { get; set; }
        public List<CrmConnection> CrmConnections { get; set; }
        public string UseTypeScriptDeclaration { get; set; }
    }
}
