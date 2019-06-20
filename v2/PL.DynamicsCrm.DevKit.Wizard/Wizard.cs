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
            replacementsDictionary.Add("$NameSpace$", form.WizardNameSpace);



            replacementsDictionary.Add("$DevKitVersion$", Const.Version);

        }
    }
}
