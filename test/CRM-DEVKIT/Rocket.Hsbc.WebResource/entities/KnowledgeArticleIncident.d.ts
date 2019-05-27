///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormKnowledgeArticleIncident {
		interface Tabs {
		}
		interface Body {
			/** Choose the Incident id for the knowledge article. */
			IncidentId: DevKit.Form.Controls.ControlLookup;
			/** This should be set to Yes when the user emails the article link to a customer.  */
			IsSentToCustomer: DevKit.Form.Controls.ControlBoolean;
			/** Knowledge Usage. */
			KnowledgeUsage: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormKnowledgeArticleIncident extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form KnowledgeArticleIncident
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeArticleIncident */
		Body: Hsbc.FormKnowledgeArticleIncident.Body;
	}
	namespace FormKnowledgeArticleIncidentforInteractiveexperience {
		interface Tabs {
		}
		interface Body {
			/** Choose the Incident id for the knowledge article. */
			IncidentId: DevKit.Form.Controls.ControlLookup;
			/** This should be set to Yes when the user emails the article link to a customer.  */
			IsSentToCustomer: DevKit.Form.Controls.ControlBoolean;
			/** Knowledge Usage. */
			KnowledgeUsage: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormKnowledgeArticleIncidentforInteractiveexperience extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form KnowledgeArticleIncidentforInteractiveexperience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeArticleIncidentforInteractiveexperience */
		Body: Hsbc.FormKnowledgeArticleIncidentforInteractiveexperience.Body;
	}
	class KnowledgeArticleIncidentApi {
		/**
		* PL.DynamicsCrm.DevKit KnowledgeArticleIncidentApi
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
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Choose the Incident id for the knowledge article. */
		IncidentId: DevKit.WebApi.LookupValue;
		/** This should be set to Yes when the user emails the article link to a customer.  */
		IsSentToCustomer: DevKit.WebApi.BooleanValue;
		/** Choose the Knowledge Article. */
		KnowledgeArticleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the Knowledge Article for the incident. */
		KnowledgeArticleIncidentId: DevKit.WebApi.GuidValue;
		/** Knowledge Usage. */
		KnowledgeUsage: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Knowledge Article Incident */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Knowledge Article Incident */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticleIncident {
		enum KnowledgeUsage {
			/** 1 */
			Reference,
			/** 2 */
			Solution,
			/** 3 */
			Source
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
//{'JsForm':['Knowledge Article Incident','Knowledge Article Incident for Interactive experience'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}