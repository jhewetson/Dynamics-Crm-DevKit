///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class TimeZoneDefinitionApi {
		/**
		* PL.DynamicsCrm.DevKit TimeZoneDefinitionApi
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
		/** Base time bias of the time zone. */
		Bias: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who created the time zone record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the time zone record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the timezonedefinition. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Time zone name for the daylight time. */
		DaylightName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the time zone record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the time zone record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the timezonedefinition. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the time zone definition. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Order an entry for a time zone definition is retired. 0 for the latest entry. */
		RetiredOrder: DevKit.WebApi.IntegerValue;
		/** Time zone name for the standard time. */
		StandardName: DevKit.WebApi.StringValue;
		/** Time zone identification code. */
		TimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the time zone record. */
		TimeZoneDefinitionId: DevKit.WebApi.GuidValue;
		/** Display name for the time zone in the Microsoft Windows registry. */
		UserInterfaceName: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TimeZoneDefinition {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}