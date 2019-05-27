﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ExpiredProcessApi {
		/**
		* PL.DynamicsCrm.DevKit ExpiredProcessApi
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
		/** Date and time when current active stage is started. */
		ActiveStageStartedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for Expired Process bpf entity instances */
		BusinessProcessFlowInstanceId: DevKit.WebApi.GuidValue;
		/** Date and time when Business Process Flow instance is completed. */
		CompletedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Duration the business process flow was active. */
		Duration: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		KnowledgeArticleId: DevKit.WebApi.LookupValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Process Name. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the SDK message request is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Shows whether the Delve action record is pending, completed, or tracking. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the delve action record status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Traversed Path */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the business process instance. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ExpiredProcess {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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