///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ThemeApi {
		/**
		* PL.DynamicsCrm.DevKit ThemeApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Choose the Unified Interface secondary theme color to be used on the process control */
		AccentColor: DevKit.WebApi.StringValue;
		/** For internal use only. */
		BackgroundColor: DevKit.WebApi.StringValue;
		/** Choose the color that controls will use for borders */
		ControlBorder: DevKit.WebApi.StringValue;
		/** Choose the background color for controls to use to indicate when you hover over items */
		ControlShade: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the default custom entity color if no color is assigned */
		DefaultCustomEntityColor: DevKit.WebApi.StringValue;
		/** Choose the default color for system entities if no color is assigned */
		DefaultEntityColor: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus */
		GlobalLinkColor: DevKit.WebApi.StringValue;
		/** Choose the color for title text, such as form tab labels */
		HeaderColor: DevKit.WebApi.StringValue;
		/** Choose the color that commands or lists will use to indicate hovered over items */
		HoverLinkEffect: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Default status of theme. */
		IsDefaultTheme: DevKit.WebApi.BooleanValue;
		/** Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels. */
		LogoId: DevKit.WebApi.LookupValue;
		/** Enter text that will be used as the tooltip and alt text for the logo. */
		LogoToolTip: DevKit.WebApi.StringValue;
		/** Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs */
		MainColor: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the Theme Entity. */
		Name: DevKit.WebApi.StringValue;
		/** Choose the primary Navigation Bar background color */
		NavBarBackgroundColor: DevKit.WebApi.StringValue;
		/** Choose the secondary Navigation Bar background color */
		NavBarShelfColor: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Choose the page header background color */
		PageHeaderBackgroundColor: DevKit.WebApi.StringValue;
		/** Choose the panel header background color */
		PanelHeaderBackgroundColor: DevKit.WebApi.StringValue;
		/** Choose the primary background color for process controls */
		ProcessControlColor: DevKit.WebApi.StringValue;
		/** Choose the color that commands or lists will use to indicate selected items */
		SelectedLinkEffect: DevKit.WebApi.StringValue;
		/** Status of the Theme */
		statecode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the Theme */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		ThemeId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the Theme with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Define type of theme. */
		Type: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Theme {
		enum statecode {
			/** 0 */
			Custom,
			/** 1 */
			System
		}
		enum statuscode {
			/** 1 */
			Custom,
			/** 2 */
			System
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}