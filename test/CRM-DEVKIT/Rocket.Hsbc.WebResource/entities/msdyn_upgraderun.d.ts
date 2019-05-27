///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_upgraderunApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_upgraderunApi
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
		/** Errors during upgrade or installation, if any */
		msdyn_Error: DevKit.WebApi.StringValue;
		/** Date/time when an upgrade run finished */
		msdyn_FinishedDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Name of the Package Deployer package */
		msdyn_Package: DevKit.WebApi.StringValue;
		/** Name of the Solution that is upgraded */
		msdyn_Solution: DevKit.WebApi.StringValue;
		/** Version that was installed before upgrade run */
		msdyn_StartingVersion: DevKit.WebApi.StringValue;
		/** Status/outcome of an upgrade run */
		msdyn_Status: DevKit.WebApi.OptionSetValue;
		/** Summary of an upgrade operation performed by Package Deployer */
		msdyn_Summary: DevKit.WebApi.StringValue;
		/** Version that will be achieved by the upgrade run */
		msdyn_TargetVersion: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_upgraderunId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the UpgradeRun */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UpgradeRun */
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
	namespace msdyn_upgraderun {
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