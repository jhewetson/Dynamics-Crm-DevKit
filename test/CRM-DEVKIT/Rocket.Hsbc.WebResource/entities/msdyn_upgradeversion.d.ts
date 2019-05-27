﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace Formmsdyn_upgradeversionInformation {
		interface Tabs {
		}
		interface Body {
			UpgradeSteps: DevKit.Form.Controls.ControlGrid;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date/time when a single-version upgrade finished */
			msdyn_Finished: DevKit.Form.Controls.ControlDateTime;
			/** Version that was installed before a single-version upgrade */
			msdyn_StartingVersion: DevKit.Form.Controls.ControlString;
			/** Status/outcome of a single-version upgrade */
			msdyn_Status: DevKit.Form.Controls.ControlOptionSet;
			/** Summary of a single-version upgrade */
			msdyn_summary: DevKit.Form.Controls.ControlString;
			/** Version that will be achieved by a single-version upgrade */
			msdyn_TargetVersion: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_upgradeversionInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form msdyn_upgradeversionInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_upgradeversionInformation */
		Body: Hsbc.Formmsdyn_upgradeversionInformation.Body;
	}
	class msdyn_upgradeversionApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_upgradeversionApi
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
		/** Date/time when a single-version upgrade finished */
		msdyn_Finished_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Version that was installed before a single-version upgrade */
		msdyn_StartingVersion: DevKit.WebApi.StringValue;
		/** Status/outcome of a single-version upgrade */
		msdyn_Status: DevKit.WebApi.OptionSetValue;
		/** Summary of a single-version upgrade */
		msdyn_summary: DevKit.WebApi.StringValue;
		/** Version that will be achieved by a single-version upgrade */
		msdyn_TargetVersion: DevKit.WebApi.StringValue;
		/** Package deployer run that invoked a single-version upgrade */
		msdyn_UpgradeRun: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_upgradeversionId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the UpgradeVersion */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UpgradeVersion */
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
	namespace msdyn_upgradeversion {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}