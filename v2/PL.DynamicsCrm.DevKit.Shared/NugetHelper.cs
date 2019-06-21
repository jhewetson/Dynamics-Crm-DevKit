using System.Collections.Generic;
using System.Linq;
using NuGet;
using PL.DynamicsCrm.DevKit.Shared.Models;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class NugetHelper
    {
        public static List<IPackage> GetPackages(string packageId)
        {
            try
            {
                const string url = "https://www.nuget.org/api/v2/";
                var repo = PackageRepositoryFactory.Default.CreateRepository(url);
                var packages = repo
                    .FindPackagesById(packageId)
                    .Where(package => !package.Version.ToOriginalString().ToLower().Contains("preview"))
                    .OrderByDescending(package => package.Version)
                    .ToList();
                return packages;
            }
            catch
            {
                return null;
            }
        }

        public static string GetLatestPackageVersion(string packageId)
        {
            var packages = GetPackages(packageId);
            if (packages == null) return DefaultPackageVersion(packageId);
            var package = (from p in packages
                           orderby p.Version descending
                           select p
                           ).FirstOrDefault();
            if (package == null) return DefaultPackageVersion(packageId);
            return package.Version.ToOriginalString();
        }

        public static CrmNuget GetLatestPackageVersion(string packageId, string comboboxCrmName)
        {
            var parts = comboboxCrmName.Split("-".ToCharArray());
            var crmName = parts[0].Trim();
            var crmVersion = parts[1].Trim();
            var packages = GetPackages(packageId);
            var package = (from p in packages
                           where crmName == Utility.GetCrmName(p.Version.Version) && crmVersion == p?.GetSupportedFrameworks()?.LastOrDefault()?.Version.ToString()
                           orderby p.Version descending
                           select p
                           ).FirstOrDefault();
            if (package != null)
            {
                return new CrmNuget
                {
                    Version = package.Version.ToOriginalString(),
                    TargetFramework = package?.GetSupportedFrameworks()?.LastOrDefault()?.Version.ToString().Replace(".", "")
                };
            }
            return new CrmNuget
            {
                TargetFramework = "000",
                Version = "0.0.0"
            };
        }



        private static string DefaultPackageVersion(string packageId)
        {
            switch (packageId)
            {
                case Const.PLDynamicsCrmDevKitCli:
                    return "1.3.0";
                case Const.PLDynamicsCrmDevKitAnalyzers:
                    return "1.3.0";
            }
            return "0.0.0.0";
        }
    }
}
