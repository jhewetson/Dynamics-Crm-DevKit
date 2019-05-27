﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormPropertyOptionSetItem {
		interface tab_general_Sections {
			dynamicpropertyoptionsetiteminformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the property that uses this option set item. */
			DynamicPropertyId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information about the property option set item. */
			DynamicPropertyOptionDescription: DevKit.Form.Controls.ControlString;
			/** Type the name of the property option set item. */
			DynamicPropertyOptionName: DevKit.Form.Controls.ControlString;
			/** Shows the value of the property option set item. */
			DynamicPropertyOptionValue: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormPropertyOptionSetItem extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form PropertyOptionSetItem
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form PropertyOptionSetItem */
		Body: Hsbc.FormPropertyOptionSetItem.Body;
	}
	class DynamicPropertyOptionSetItemApi {
		/**
		* PL.DynamicsCrm.DevKit DynamicPropertyOptionSetItemApi
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
		/** Internal Use Only */
		DMTImportState: DevKit.WebApi.IntegerValue;
		/** Shows the property that uses this option set item. */
		DynamicPropertyId: DevKit.WebApi.LookupValue;
		/** Type additional information about the property option set item. */
		DynamicPropertyOptionDescription: DevKit.WebApi.StringValue;
		/** Type the name of the property option set item. */
		DynamicPropertyOptionName: DevKit.WebApi.StringValue;
		/** Shows the unique identifier of the property option set item. */
		DynamicPropertyOptionSetValueId: DevKit.WebApi.GuidValue;
		/** Internal Use Only */
		DynamicPropertyOptionSetValueSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows the value of the property option set item. */
		DynamicPropertyOptionValue: DevKit.WebApi.IntegerValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
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
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DynamicPropertyOptionSetItem {
	}
}
//{'JsForm':['PropertyOptionSetItem'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}