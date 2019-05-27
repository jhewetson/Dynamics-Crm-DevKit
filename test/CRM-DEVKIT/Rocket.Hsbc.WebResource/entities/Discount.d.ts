﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormDiscountInformation {
		interface tab_general_Sections {
			discountinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Amount of the discount, specified either as a percentage or as a monetary amount. */
			Amount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier of the discount list associated with the discount. */
			DiscountTypeId: DevKit.Form.Controls.ControlLookup;
			/** Upper boundary for the quantity range to which a particular discount can be applied. */
			HighQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Lower boundary for the quantity range to which a particular discount is applied. */
			LowQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Percentage discount value. */
			Percentage: DevKit.Form.Controls.ControlDecimal;
		}
	}
	class FormDiscountInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form DiscountInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form DiscountInformation */
		Body: Hsbc.FormDiscountInformation.Body;
	}
	class DiscountApi {
		/**
		* PL.DynamicsCrm.DevKit DiscountApi
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
		/** Amount of the discount, specified either as a percentage or as a monetary amount. */
		Amount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		Amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier of the user who created the discount. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the discount was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the discount. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the discount. */
		DiscountId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the discount list associated with the discount. */
		DiscountTypeId: DevKit.WebApi.LookupValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Upper boundary for the quantity range to which a particular discount can be applied. */
		HighQuantity: DevKit.WebApi.DecimalValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Specifies whether the discount is specified as a monetary amount or a percentage. */
		IsAmountType: DevKit.WebApi.BooleanValueReadonly;
		/** Lower boundary for the quantity range to which a particular discount is applied. */
		LowQuantity: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the user who last modified the discount. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the discount was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the discount. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** name */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the discount. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Percentage discount value. */
		Percentage: DevKit.WebApi.DecimalValue;
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
	namespace Discount {
		enum StatusCode {
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}