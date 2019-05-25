///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ACIViewMapperApi {
		/**
		* PL.DynamicsCrm.DevKit ACIViewMapperApi
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
		/** Unique identifier for entity instances */
		ACIViewMapperId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the display string. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the display string was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the displaystring. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who last modified the display string. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the display string was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the displaystring. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the display string. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Status of the ACIViewMapper */
		statecode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the Unit Group. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		ViewName: DevKit.WebApi.StringValue;
		/** End point of web application */
		WebApplicationEndPoint: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ACIViewMapper {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}