namespace PL.DynamicsCrm.DevKit.Shared.Xrm
{
    public class ControlClassId
    {
        public const string SINGLE_LINE_OF_TEXT = "{4273EDBD-AC1D-40D3-9FB2-095C621B552D}";
        public const string SINGLE_LINE_OF_TEXT_EMAIL = "{ADA2203E-B4CD-49BE-9DDF-234642B43B52}";
        public const string SINGLE_LINE_OF_TEXT_TICKER_SYMBOL = "{1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4}";
        public const string SINGLE_LINE_OF_TEXT_URL = "{71716B6C-711E-476C-8AB8-5D11542BFB47}";
        public const string STATUS_CODE = "{5D68B988-0661-4DB2-BC3E-17598AD3BE6C}";
        public const string STATE_CODE = "{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}";
        public const string OPTIONSET = STATUS_CODE;
        public const string MULTI_OPTIONSET = "{4AA28AB7-9C13-4F57-A73D-AD894D048B5F}";
        public const string TWO_OPTIONS = "{67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED}";
        public const string WHOLE_NUMBER = "{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}";
        public const string WHOLE_NUMBER_DURATION = "{AA987274-CE4E-4271-A803-66164311A958}";
        public const string WHOLE_NUMBER_LANGUAGE = "{671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5}";
        public const string WHOLE_NUMBER_TIMEZONE = "{7C624A0B-F59E-493D-9583-638D34759266}";
        public const string FLOATING_POINT_NUMBER = "{0D2C745A-E5A8-4C8F-BA63-C6D3BB604660}";
        public const string DECIMAL_NUMBER = "{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}";
        public const string CURRENCY = "{533B9E00-756B-4312-95A0-DC888637AC78}";
        public const string MULTI_LINES_OF_TEXT = "{E0DECE4B-6FC8-4A8F-A065-082708572369}";
        public const string MULTI_LINES_OF_TEXT_MAX = "{6F3FB987-393B-4D2D-859F-9D0F0349B6AD}";
        public const string DATE_TIME = "{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}";
        public const string LOOKUP = "{270BD3DB-D9AF-4782-9025-509E298DEC0A}";
        public const string CUSTOMER = LOOKUP;
        public const string WEB_RESOURCE = "{9FDF5F91-88B1-47F4-AD53-C11EFC01A01D}";
        public const string IFRAME = "{FD2A7985-3187-444E-908D-6624B21F69C0}";
        public const string QUICK_VIEW_FORM = "{5C5600E0-1D6E-4205-A272-BE80DA87FD42}";
        public const string ACI_WIDGET = "{C8BFBBEF-6851-4401-A0CC-7450062FE085}";
        public const string SUB_GRID = "{E7A81278-8635-4D9E-8D4D-59480B391C5B}";
        public const string TIMER = "{9C5CA0A1-AB4D-4781-BE7E-8DFBE867B87E}";
        public const string BING_MAP = "{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}";
        public const string COMPOSITE = MULTI_LINES_OF_TEXT;
        public const string NOTE = "{06375649-C143-495E-A496-C962E5B4488E}";
        public const string EMAIL_ENGAGEMENT_ACTIONS = "{F454228D-1D25-4319-E12F-D27968BC0234}";
        public const string EMAIL_RECIPIENT_ACTIVITY = "{26E9760F-7454-40DE-BB07-F6DCCCB82040}";
        public const string KB_KNOWLEDGE = "";
        public const string MAP_CONTROL = "{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}";
        public const string ACTION_CARDS = "{F9A8A302-114E-466A-B582-6771B2AE0D92}";
        public const string PARTY_LISTS = "{CBFB742C-14E7-4A17-96BB-1A13F7F64AA2}";
        public const string REGRADING = "{F3015350-44A2-4AA0-97B5-00166532B5E9}";

        public static readonly string[] CONTROLS =
        {
            SINGLE_LINE_OF_TEXT,
            SINGLE_LINE_OF_TEXT_EMAIL,
            SINGLE_LINE_OF_TEXT_TICKER_SYMBOL,
            SINGLE_LINE_OF_TEXT_URL,
            STATUS_CODE,
            STATE_CODE,
            OPTIONSET,
            MULTI_OPTIONSET,
            TWO_OPTIONS,
            WHOLE_NUMBER,
            WHOLE_NUMBER_DURATION,
            WHOLE_NUMBER_LANGUAGE,
            WHOLE_NUMBER_TIMEZONE,
            FLOATING_POINT_NUMBER,
            DECIMAL_NUMBER,
            CURRENCY,
            MULTI_LINES_OF_TEXT,
            MULTI_LINES_OF_TEXT_MAX,
            DATE_TIME,
            LOOKUP,
            CUSTOMER,
            PARTY_LISTS,
            REGRADING
        };
        public static readonly string[] VIRTUAL_CONTROLS =
        {
            WEB_RESOURCE,
            IFRAME,
            QUICK_VIEW_FORM,
            ACI_WIDGET,
            SUB_GRID,
            TIMER,
            BING_MAP,
            NOTE,
            EMAIL_ENGAGEMENT_ACTIONS,
            EMAIL_RECIPIENT_ACTIVITY,
            KB_KNOWLEDGE,
            MAP_CONTROL,
            ACTION_CARDS
        };
    }
}
