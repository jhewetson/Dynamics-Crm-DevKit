///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class TimeZoneLocalizedNameApi {
		/**
		* PL.DynamicsCrm.DevKit TimeZoneLocalizedNameApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the timezonelocalizedname. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the culture that the UI names are encoded in. */
		CultureId: DevKit.WebApi.IntegerValue;
		/** Name of the time zone for the daylight time. */
		DaylightName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the time zone localized name. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the timezonelocalizedname. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the time zone localized name. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Name of the time zone for the standard time. */
		StandardName: DevKit.WebApi.StringValue;
		/** Unique identifier of time zone definition entity instances. */
		TimeZoneDefinitionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of entity instances. */
		TimeZoneLocalizedNameId: DevKit.WebApi.GuidValue;
		/** Unique display name for the time zone in the Microsoft Windows registry. */
		UserInterfaceName: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TimeZoneLocalizedName {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}