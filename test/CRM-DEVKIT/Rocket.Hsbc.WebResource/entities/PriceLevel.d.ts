﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormPriceLevel {
		interface Header {
			/** Reason for the status of the price list. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_General_Sections {
			pricelevelinformation: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Price_List_Items_Sections {
			pricelistbyproduct: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TERRITORYRELATIONSHIP_TAB_Sections {
			Territories: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface tab_Price_List_Items extends DevKit.Form.Controls.IControlTab {
			Section: tab_Price_List_Items_Sections;
		}
		interface tab_TERRITORYRELATIONSHIP_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_TERRITORYRELATIONSHIP_TAB_Sections;
		}
		interface Tabs {
			General: tab_General;
			Price_List_Items: tab_Price_List_Items;
			TERRITORYRELATIONSHIP_TAB: tab_TERRITORYRELATIONSHIP_TAB;
		}
		interface Body {
			Tab: Tabs;
			pricelistitemsgrid: DevKit.Form.Controls.ControlGrid;
			RelatedTerritoriesGrid: DevKit.Form.Controls.ControlGrid;
			/** Date on which the price list becomes effective. */
			BeginDate: DevKit.Form.Controls.ControlDate;
			/** Description of the price list. */
			Description: DevKit.Form.Controls.ControlString;
			/** Date that is the last day the price list is valid. */
			EndDate: DevKit.Form.Controls.ControlDate;
			/** Name of the price list. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the currency associated with the price level. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPriceLevel extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form PriceLevel
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form PriceLevel */
		Body: Hsbc.FormPriceLevel.Body;
		/** The Header section of form PriceLevel */
		Header: Hsbc.FormPriceLevel.Header;
	}
	class PriceLevelApi {
		/**
		* PL.DynamicsCrm.DevKit PriceLevelApi
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
		/** Date on which the price list becomes effective. */
		BeginDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the user who created the price list. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the pricelevel. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the price list. */
		Description: DevKit.WebApi.StringValue;
		/** Date that is the last day the price list is valid. */
		EndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Freight terms for the price list. */
		FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the price list. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the pricelevel. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the price list. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Payment terms to use with the price list. */
		PaymentMethodCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the price list. */
		PriceLevelId: DevKit.WebApi.GuidValue;
		/** Method of shipment for products in the price list. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Status of the price list. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the price list. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the price level. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PriceLevel {
		enum FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum PaymentMethodCode {
			/** 1 */
			Default_Value
		}
		enum ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 100001 */
			Active,
			/** 100002 */
			Inactive
		}
	}
}
//{'JsForm':['PriceLevel'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}