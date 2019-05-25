///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class AppConfigMasterApi {
		/**
		* PL.DynamicsCrm.DevKit AppConfigMasterApi
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
		/** System-Populated App Configuration instance identifier. */
		AppConfigMasterId: DevKit.WebApi.GuidValueReadonly;
		/** Enter the App Configuration and Setting property data type. */
		ConfigType: DevKit.WebApi.StringValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalfÂ of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the default value of the App Configuration and Setting property. */
		DefaultValue: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Enter whether this App Configuration and Setting is Navigation Setting. */
		IsNavigationSetting: DevKit.WebApi.IntegerValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the name of the App Configuration and Setting property with which this customization will be identified. */
		Name: DevKit.WebApi.StringValue;
		/** System-calculated field for Organization identifier. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** ParentAppConfigMasterId */
		ParentAppConfigMasterId: DevKit.WebApi.StringValueReadonly;
		/** Validator */
		Validator: DevKit.WebApi.StringValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AppConfigMaster {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}