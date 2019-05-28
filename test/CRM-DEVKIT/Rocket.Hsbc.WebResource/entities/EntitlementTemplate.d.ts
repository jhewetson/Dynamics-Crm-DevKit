﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormEntitlementTemplate {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
			entitlementterms: DevKit.Form.Controls.ControlSection;
			entitlementtemplateterms: DevKit.Form.Controls.ControlSection;
			entitlementtemplatetermsInUCI: DevKit.Form.Controls.ControlSection;
			products: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			grid_EntitlementChannel: DevKit.Form.Controls.ControlGrid;
			editableEntitlementChannelGridControl: DevKit.Form.Controls.ControlActionCards;
			grid_EntitlementProducts: DevKit.Form.Controls.ControlGrid;
			/** Select whether the entitlement allocation is based on number of cases or number of hours. */
			AllocationTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Information about whether to decrease the remaining terms when the case is created or when it is resolved */
			DecreaseRemainingOn: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the date and time when the entitlement ends. */
			EndDate: DevKit.Form.Controls.ControlDate;
			/** Type a descriptive name for the entitlement template. */
			Name: DevKit.Form.Controls.ControlString;
			/** Tells whether case creation is restricted based on entitlement terms. */
			RestrictCaseCreation: DevKit.Form.Controls.ControlBoolean;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			SLAId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date and time when the entitlement begins. */
			StartDate: DevKit.Form.Controls.ControlDate;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Form.Controls.ControlDecimal;
		}
	}
	class FormEntitlementTemplate extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form EntitlementTemplate
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form EntitlementTemplate */
		Body: Hsbc.FormEntitlementTemplate.Body;
	}
	class EntitlementTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit EntitlementTemplateApi
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
		/** Select whether the entitlement allocation is based on number of cases or number of hours. */
		AllocationTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Information about whether to decrease the remaining terms when the case is created or when it is resolved */
		DecreaseRemainingOn: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: DevKit.WebApi.StringValue;
		/** Enter the date and time when the entitlement ends. */
		EndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for entity instances */
		EntitlementTemplateId: DevKit.WebApi.GuidValue;
		/** Entity type for which the entitlement template applies */
		entitytype: DevKit.WebApi.OptionSetValue;
		/** Exchange rate for the currency associated with the contact with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select the access someone will have to the knowledge base on the portal. */
		KbAccessLevel: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the entitlement template. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Tells whether case creation is restricted based on entitlement terms. */
		RestrictCaseCreation: DevKit.WebApi.BooleanValue;
		/** Choose the service level agreement (SLA) associated with the entitlement. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Enter the date and time when the entitlement begins. */
		StartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type the total number of entitlement terms. */
		TotalTerms: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the currency associated with the contact. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace EntitlementTemplate {
		enum AllocationTypeCode {
			/** 0 */
			Number_of_cases,
			/** 1 */
			Number_of_hours
		}
		enum DecreaseRemainingOn {
			/** 0 */
			Case_Resolution,
			/** 1 */
			Case_Creation
		}
		enum entitytype {
			/** 0 */
			Case
		}
		enum KbAccessLevel {
			/** 0 */
			Standard,
			/** 1 */
			Premium,
			/** 2 */
			None
		}
	}
}
//{'JsForm':['Entitlement Template'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}