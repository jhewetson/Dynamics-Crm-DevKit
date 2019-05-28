﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormEntitlementTemplateChannel {
		interface tab_general_Sections {
			entitlementtemplatechannelinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select a channel for which you are defining the entitlement terms. */
			Channel: DevKit.Form.Controls.ControlOptionSet;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Form.Controls.ControlDecimal;
		}
	}
	class FormEntitlementTemplateChannel extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form EntitlementTemplateChannel
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form EntitlementTemplateChannel */
		Body: Hsbc.FormEntitlementTemplateChannel.Body;
	}
	class EntitlementTemplateChannelApi {
		/**
		* PL.DynamicsCrm.DevKit EntitlementTemplateChannelApi
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
		/** Select a channel for which you are defining the entitlement terms. */
		Channel: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for entity instances */
		EntitlementTemplateChannelId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Entitlement Template associated with Entitlement Template Channel. */
		EntitlementTemplateId: DevKit.WebApi.LookupValue;
		/** Exchange rate for the currency associated with the incident with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the custom entity. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the entitlement template channel is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type the total number of entitlement terms. */
		TotalTerms: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the currency associated with the incident. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace EntitlementTemplateChannel {
		enum Channel {
			/** 1 */
			Phone,
			/** 2 */
			Email,
			/** 3 */
			Web,
			/** 2483 */
			Facebook,
			/** 3986 */
			Twitter
		}
	}
}
//{'JsForm':['Entitlement Template Channel'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}