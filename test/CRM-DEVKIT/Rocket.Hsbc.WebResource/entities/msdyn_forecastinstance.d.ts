﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace Formmsdyn_forecastinstanceInformation {
		interface tab_tab_Sections {
			section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_Sections;
		}
		interface Tabs {
			tab: tab_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the actual value (money) achieved toward the target as of the last rollup date. */
			msdyn_actualamount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for the forecast definition that is associated with the forecast. */
			msdyn_forecastdefinitionid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for the forecast recurrence associated with the forecast. */
			msdyn_forecastrecurrenceid: DevKit.Form.Controls.ControlLookup;
			/** Shows the changed value of the best case rollup (Money type) as of the last rolled-up date. */
			msdyn_manualbestcaseamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the changed value of the committed rollup (Money type) as of the last rolled-up date. */
			msdyn_manualcommittedamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the changed value of the pipeline rollup (Money type) as of the last rolled-up date. */
			msdyn_manualpipelineamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the percentage achieved against the target. */
			msdyn_percentageachieved: DevKit.Form.Controls.ControlDecimal;
			/** Select a target (Money type) to track a monetary amount, such as estimated revenue from an opportunity. */
			msdyn_targetamount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_forecastinstanceInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form msdyn_forecastinstanceInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_forecastinstanceInformation */
		Body: Hsbc.Formmsdyn_forecastinstanceInformation.Body;
	}
	class msdyn_forecastinstanceApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_forecastinstanceApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the actual value (money) achieved toward the target as of the last rollup date. */
		msdyn_actualamount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual (Money) in base currency. */
		msdyn_actualamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the rollup value (money) for the best case category as of the last rollup date. */
		msdyn_bestcaseamount: DevKit.WebApi.MoneyValue;
		/** Value of the BestCase in base currency. */
		msdyn_bestcaseamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the committed rollup value (money) as of the last rollup date. */
		msdyn_committedamount: DevKit.WebApi.MoneyValue;
		/** Value of the Committed in base currency. */
		msdyn_committedamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier for the forecast definition that is associated with the forecast. */
		msdyn_forecastdefinitionid: DevKit.WebApi.LookupValue;
		/** Unique identifier for the forecast. */
		msdyn_forecastinstanceId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		msdyn_forecastinstancetype: DevKit.WebApi.IntegerValue;
		/** Name of the forecast. */
		msdyn_forecastname: DevKit.WebApi.StringValue;
		/** Unique identifier for the parent forecast that is associated with the forecast. */
		msdyn_forecastparentid: DevKit.WebApi.LookupValue;
		/** Unique identifier for the forecast recurrence associated with the forecast. */
		msdyn_forecastrecurrenceid: DevKit.WebApi.LookupValue;
		/** Select whether the bestcase rollup has been manually updated. */
		msdyn_ismanualbestcase: DevKit.WebApi.IntegerValue;
		/** Select whether the committed rollup has been manually updated. */
		msdyn_ismanualcommitted: DevKit.WebApi.IntegerValue;
		/** Select whether the pipeline rollup has been manually updated. */
		msdyn_ismanualpipeline: DevKit.WebApi.IntegerValue;
		/** Is quota source manual */
		msdyn_isquotasourcemanual: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		msdyn_level: DevKit.WebApi.IntegerValue;
		/** Shows the changed value of the best case rollup (Money type) as of the last rolled-up date. */
		msdyn_manualbestcaseamount: DevKit.WebApi.MoneyValue;
		/** Value of the Manual BestCase in base currency. */
		msdyn_manualbestcaseamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the changed value of the committed rollup (Money type) as of the last rolled-up date. */
		msdyn_manualcommittedamount: DevKit.WebApi.MoneyValue;
		/** Value of the Manual Committed in base currency. */
		msdyn_manualcommittedamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the changed value of the pipeline rollup (Money type) as of the last rolled-up date. */
		msdyn_manualpipelineamount: DevKit.WebApi.MoneyValue;
		/** Value of the Manual Pipeline in base currency. */
		msdyn_manualpipelineamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier for the matching goal associated with the forecast. */
		msdyn_matchinggoalid: DevKit.WebApi.LookupValue;
		/** Shows the percentage achieved against the target. */
		msdyn_percentageachieved: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the pipeline rollup value (money) as of the last rollup date. */
		msdyn_pipelineamount: DevKit.WebApi.MoneyValue;
		/** Value of the Pipeline in base currency. */
		msdyn_pipelineamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the recurrence index of the forecast created from the forecast definition. */
		msdyn_recurrenceindex: DevKit.WebApi.IntegerValue;
		/** Select a target (Money type) to track a monetary amount, such as estimated revenue from an opportunity. */
		msdyn_targetamount: DevKit.WebApi.MoneyValue;
		/** Value of the Target (Money) in base currency. */
		msdyn_targetamount_Base: DevKit.WebApi.MoneyValueReadonly;
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
		/** Status of the Forecast */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Forecast */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_forecastinstance {
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