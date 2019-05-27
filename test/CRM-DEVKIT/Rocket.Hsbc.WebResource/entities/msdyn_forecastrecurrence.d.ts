﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_forecastrecurrenceApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_forecastrecurrenceApi
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
		/** Stores the FetchXML for participating records for closed opportunities. For internal use. */
		msdyn_actualparticipatingrecordsfetchxml: DevKit.WebApi.StringValue;
		/** Stores information about why the recalculation of forecast hierarchy failed. */
		msdyn_failureinfo: DevKit.WebApi.StringValue;
		/** Unique identifier for the forecast definition that is associated with the forecast recurrence. */
		msdyn_forecastdefinitionid: DevKit.WebApi.LookupValue;
		/** Unique identifier for the forecast recurrence. */
		msdyn_forecastrecurrenceId: DevKit.WebApi.GuidValue;
		/** Stores the FetchXML for participating records for inprogress opportunities. For internal use. */
		msdyn_inprogressparticipatingrecordsfetchxml: DevKit.WebApi.StringValue;
		/** For internal use only */
		msdyn_ishierarchylocked: DevKit.WebApi.BooleanValue;
		/** The date and time when the forecast hierarchy was successfully recalculated. */
		msdyn_lastrecalculatedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the name of the forecast recurrence. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_recalculatestatuschangedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		msdyn_recalculationstarttime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the recalculation status for the forecast recurrence hierarchy. */
		msdyn_recalculationstatus: DevKit.WebApi.IntegerValue;
		/** Stores the description for the recalculation status of forecast hierarchy. */
		msdyn_recalculationstatusdescription: DevKit.WebApi.StringValue;
		/** Stores the recurrence index that is associated with the forecast recurrence hierarchy. */
		msdyn_recurrenceindex: DevKit.WebApi.IntegerValue;
		/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validfrom_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validto_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Forecast Recurrence */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Forecast Recurrence */
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
	namespace msdyn_forecastrecurrence {
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