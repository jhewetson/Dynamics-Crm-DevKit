///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class devkit_processwebapi1Api {
		/**
		* PL.DynamicsCrm.DevKit devkit_processwebapi1Api
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
		/** Unique identifier of the active stage for the Business Process Flow instance. */
		ActiveStageId: DevKit.WebApi.LookupValue;
		/** Date and time when current active stage is started */
		ActiveStageStartedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		bpf_devkit_webapiid: DevKit.WebApi.LookupValue;
		/** Duration of Business Process Flow */
		bpf_Duration: DevKit.WebApi.IntegerValueReadonly;
		/** Description */
		bpf_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		BusinessProcessFlowInstanceId: DevKit.WebApi.GuidValue;
		/** Date and time when Business Process Flow instance is completed. */
		CompletedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
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
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Status of the Process WebApi 1 */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Process WebApi 1 */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace devkit_processwebapi1 {
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
			Finished,
			/** 3 */
			Aborted
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}