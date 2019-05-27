﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_forecastdefinitionApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_forecastdefinitionApi
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
		/** Select the fiscal month for the forecast definition. */
		msdyn_fiscalmonth: DevKit.WebApi.OptionSetValue;
		/** Select the fiscal quarter for the forecast definition. */
		msdyn_fiscalquarter: DevKit.WebApi.OptionSetValue;
		/** Select the fiscal year for the forecast definition. */
		msdyn_fiscalyear: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for the forecast definition. */
		msdyn_forecastdefinitionId: DevKit.WebApi.GuidValue;
		/** Name of the forecast definition. */
		msdyn_forecastdefinitionname: DevKit.WebApi.StringValue;
		/** Select the type of period for which the forecast must be generated. */
		msdyn_forecastperiodtype: DevKit.WebApi.OptionSetValue;
		/** Select metric to attach with forecast */
		msdyn_metricid: DevKit.WebApi.LookupValue;
		/** Indicate the number of recurrences that the forecast will be generated. */
		msdyn_numberofrecurrences: DevKit.WebApi.IntegerValue;
		/** Select whether the quota for the forecast must to be taken from a goal or entered manually. */
		msdyn_quotasource: DevKit.WebApi.OptionSetValue;
		/** Select the query that will be used to calculate data for the rollup field. */
		msdyn_rollupquery: DevKit.WebApi.LookupValue;
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
		/** Status of the Forecast Definition */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Forecast Definition */
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
	namespace msdyn_forecastdefinition {
		enum msdyn_fiscalmonth {
			/** 0 */
			January,
			/** 1 */
			February,
			/** 2 */
			March,
			/** 3 */
			April,
			/** 4 */
			May,
			/** 5 */
			June,
			/** 6 */
			July,
			/** 7 */
			August,
			/** 8 */
			September,
			/** 9 */
			October,
			/** 10 */
			November,
			/** 11 */
			December
		}
		enum msdyn_fiscalquarter {
			/** 0 */
			Q1,
			/** 1 */
			Q2,
			/** 2 */
			Q3,
			/** 3 */
			Q4
		}
		enum msdyn_fiscalyear {
			/** 22 */
			FY2040,
			/** 21 */
			FY2039,
			/** 20 */
			FY2038,
			/** 19 */
			FY2037,
			/** 18 */
			FY2036,
			/** 17 */
			FY2035,
			/** 16 */
			FY2034,
			/** 15 */
			FY2033,
			/** 14 */
			FY2032,
			/** 13 */
			FY2031,
			/** 12 */
			FY2030,
			/** 11 */
			FY2029,
			/** 10 */
			FY2028,
			/** 9 */
			FY2027,
			/** 8 */
			FY2026,
			/** 7 */
			FY2025,
			/** 6 */
			FY2024,
			/** 5 */
			FY2023,
			/** 4 */
			FY2022,
			/** 3 */
			FY2021,
			/** 2 */
			FY2020,
			/** 1 */
			FY2019,
			/** 0 */
			FY2018
		}
		enum msdyn_forecastperiodtype {
			/** 0 */
			Monthly,
			/** 1 */
			Quarterly,
			/** 2 */
			Custom
		}
		enum msdyn_quotasource {
			/** 192350000 */
			Goal_based,
			/** 192350001 */
			Manual
		}
		enum statecode {
			/** 0 */
			Draft,
			/** 1 */
			Published
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 2 */
			In_progress,
			/** 3 */
			Success,
			/** 4 */
			Failed
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}