///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_upgradestepApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_upgradestepApi
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
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Database version for internal use only */
		msdyn_dbversion: DevKit.WebApi.IntegerValue;
		/** Diagnostic output from an upgrade step */
		msdyn_Details: DevKit.WebApi.StringValue;
		/** Error text, if an error occurred during this step */
		msdyn_Errors: DevKit.WebApi.StringValue;
		/** Date/time when an upgrade step finished */
		msdyn_FinishedDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Name of the method or stored procedure corresponding to an upgrade step */
		msdyn_Name: DevKit.WebApi.StringValue;
		/** Status/outcome of an upgrade step */
		msdyn_Status: DevKit.WebApi.OptionSetValue;
		msdyn_StepID: DevKit.WebApi.GuidValue;
		/** Unique identifier for entity instances */
		msdyn_upgradestepId: DevKit.WebApi.GuidValue;
		/** Single-version upgrade that contains this upgrade step */
		msdyn_UpgradeVersion: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the UpgradeStep */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UpgradeStep */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_upgradestep {
		enum msdyn_Status {
			/** 100000000 */
			Started,
			/** 100000001 */
			Success,
			/** 100000002 */
			Failure
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}