﻿using Microsoft.Dynamics365.UIAutomation.Browser;

namespace $NameSpace$
{
    public static class TestSettings
    {
        public static BrowserOptions Options = new BrowserOptions
        {
            BrowserType = BrowserType.Chrome,
            PrivateMode = true,
            FireEvents = true,
            Headless = false,
            UserAgent = false
        };
    }
}
