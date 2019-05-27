﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormTransactionCurrencyInformation {
		interface tab_general_Sections {
			SelectBaseCurrency: DevKit.Form.Controls.ControlSection;
			Transactioncurrencyinformation: DevKit.Form.Controls.ControlSection;
			Currencyconversion: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			systemcurrency: DevKit.Form.Controls.ControlActionCards;
			/** Name of the transaction currency. */
			CurrencyName: DevKit.Form.Controls.ControlString;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision: DevKit.Form.Controls.ControlInteger;
			/** Symbol for the transaction currency. */
			CurrencySymbol: DevKit.Form.Controls.ControlString;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate: DevKit.Form.Controls.ControlDecimal;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTransactionCurrencyInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form TransactionCurrencyInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TransactionCurrencyInformation */
		Body: Rocket.FormTransactionCurrencyInformation.Body;
	}
	class TransactionCurrencyApi {
		/**
		* PL.DynamicsCrm.DevKit TransactionCurrencyApi
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
		/** Unique identifier of the user who created the transaction currency. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transaction currency was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the transactioncurrency. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the transaction currency. */
		CurrencyName: DevKit.WebApi.StringValue;
		/** Number of decimal places that can be used for currency. */
		CurrencyPrecision: DevKit.WebApi.IntegerValue;
		/** Symbol for the transaction currency. */
		CurrencySymbol: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange rate between the transaction currency and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** ISO currency code for the transaction currency. */
		ISOCurrencyCode: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the transaction currency. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transaction currency was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the transactioncurrency. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the transaction currency. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the transaction currency. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the transaction currency. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the transaction currency. */
		TransactionCurrencyId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		UniqueDscId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the transaction currency. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TransactionCurrency {
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
			Inactive
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}