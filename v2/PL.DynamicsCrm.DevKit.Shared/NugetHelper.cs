using System.Collections.Generic;
using System.Linq;
using NuGet;

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
    }
}
