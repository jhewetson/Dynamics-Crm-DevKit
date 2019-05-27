﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SalesOrderApi {
		/**
		* PL.DynamicsCrm.DevKit SalesOrderApi
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
		/** Shows the parent account related to the record. This information is used to link the sales order to the account selected in the Customer field for reporting and analytics. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the billing address. */
		BillTo_AddressId: DevKit.WebApi.GuidValue;
		/** Type the city for the customer's billing address. */
		BillTo_City: DevKit.WebApi.StringValue;
		/** Shows the complete Bill To address. */
		BillTo_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the primary contact name at the customer's billing address. */
		BillTo_ContactName: DevKit.WebApi.StringValue;
		/** Type the country or region for the customer's billing address. */
		BillTo_Country: DevKit.WebApi.StringValue;
		/** Type the fax number for the customer's billing address. */
		BillTo_Fax: DevKit.WebApi.StringValue;
		/** Type the first line of the customer's billing address. */
		BillTo_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the customer's billing address. */
		BillTo_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the billing address. */
		BillTo_Line3: DevKit.WebApi.StringValue;
		/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
		BillTo_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the billing address. */
		BillTo_PostalCode: DevKit.WebApi.StringValue;
		/** Type the state or province for the billing address. */
		BillTo_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the phone number for the customer's billing address. */
		BillTo_Telephone: DevKit.WebApi.StringValue;
		/** Shows the campaign that the order was created from. */
		CampaignId: DevKit.WebApi.LookupValue;
		/** Shows the parent contact related to the record. This information is used to link the contract to the contact selected in the Customer field for reporting and analytics. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Enter the date that all or part of the order was shipped to the customer. */
		DateFulfilled_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type additional information to describe the order, such as the products or services offered or details about the customer's product preferences. */
		Description: DevKit.WebApi.StringValue;
		/** Type the discount amount for the order if the customer is eligible for special savings. */
		DiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Order Discount Amount in base currency. */
		DiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the order. */
		DiscountPercentage: DevKit.WebApi.DecimalValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the cost of freight or shipping for the products included in the order for use in calculating the Total Amount field. */
		FreightAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Freight Amount in base currency. */
		FreightAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the freight terms to make sure shipping charges are processed correctly. */
		FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select whether prices specified on the invoice are locked from any further updates. */
		IsPriceLocked: DevKit.WebApi.BooleanValue;
		/** Enter the date and time when the order was last submitted to an accounting or ERP system for processing. */
		LastBackofficeSubmit_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the order. */
		Name: DevKit.WebApi.StringValue;
		/** Shows the duration in minutes for which the order was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Choose the related opportunity so that the data for the order and opportunity are linked for reporting and analytics. */
		OpportunityId: DevKit.WebApi.LookupValue;
		/** Shows the order number for customer reference and to use in search. The number cannot be modified. */
		OrderNumber: DevKit.WebApi.StringValue;
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
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.WebApi.OptionSetValue;
		/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
		PriceLevelId: DevKit.WebApi.LookupValue;
		/** Select the type of pricing error, such as a missing or invalid product, or missing quantity. */
		PricingErrorCode: DevKit.WebApi.OptionSetValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the related quote so that order data and quote data are linked for reporting and analytics. */
		QuoteId: DevKit.WebApi.LookupValue;
		/** Enter the delivery date requested by the customer for all products in the order. */
		RequestDeliveryBy_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the order. */
		SalesOrderId: DevKit.WebApi.GuidValue;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the shipping address. */
		ShipTo_AddressId: DevKit.WebApi.GuidValue;
		/** Type the city for the customer's shipping address. */
		ShipTo_City: DevKit.WebApi.StringValue;
		/** Shows the complete Ship To address. */
		ShipTo_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the primary contact name at the customer's shipping address. */
		ShipTo_ContactName: DevKit.WebApi.StringValue;
		/** Type the country or region for the customer's shipping address. */
		ShipTo_Country: DevKit.WebApi.StringValue;
		/** Type the fax number for the customer's shipping address. */
		ShipTo_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms to make sure shipping orders are processed correctly. */
		ShipTo_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the first line of the customer's shipping address. */
		ShipTo_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the customer's shipping address. */
		ShipTo_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the shipping address. */
		ShipTo_Line3: DevKit.WebApi.StringValue;
		/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
		ShipTo_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the shipping address. */
		ShipTo_PostalCode: DevKit.WebApi.StringValue;
		/** Type the state or province for the shipping address. */
		ShipTo_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the phone number for the customer's shipping address. */
		ShipTo_Telephone: DevKit.WebApi.StringValue;
		/** Skip Price Calculation */
		SkipPriceCalculation: DevKit.WebApi.OptionSetValue;
		/** Choose the service level agreement (SLA) that you want to apply to the sales order record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this sales order. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the order is active, submitted, fulfilled, canceled, or invoiced. Only active orders can be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the order's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Enter the date when the order was submitted to the fulfillment or shipping center. */
		SubmitDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the code for the submitted status in the fulfillment or shipping center system. */
		SubmitStatus: DevKit.WebApi.IntegerValue;
		/** Type additional details or notes about the order for the fulfillment or shipping center. */
		SubmitStatusDescription: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
		TotalAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Amount in base currency. */
		TotalAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total product amount for the order, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the order. */
		TotalAmountLessFreight: DevKit.WebApi.MoneyValue;
		/** Value of the Total Pre-Freight Amount in base currency. */
		TotalAmountLessFreight_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total discount amount, based on the discount price and rate entered on the order. */
		TotalDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Discount Amount in base currency. */
		TotalDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the sum of all existing and write-in products included on the order, based on the specified price list and quantities. */
		TotalLineItemAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Detail Amount in base currency. */
		TotalLineItemAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total of the Manual Discount amounts specified on all products included in the order. This value is reflected in the Detail Amount field on the order and is added to any discount amount or rate specified on the order. */
		TotalLineItemDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Line Item Discount Amount in base currency. */
		TotalLineItemDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the Tax amounts specified on all products included in the order, included in the Total Amount due calculation for the order. */
		TotalTax: DevKit.WebApi.MoneyValue;
		/** Value of the Total Tax in base currency. */
		TotalTax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Select whether the products included in the order should be shipped to the specified address or held until the customer calls with further pick-up or delivery instructions. */
		WillCall: DevKit.WebApi.BooleanValue;
	}
}
declare namespace OptionSet {
	namespace SalesOrder {
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum PaymentTermsCode {
			/** 1 */
			Net_30,
			/** 2 */
			_2_10_Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
		}
		enum PricingErrorCode {
			/** 0 */
			None,
			/** 1 */
			Detail_Error,
			/** 2 */
			Missing_Price_Level,
			/** 3 */
			Inactive_Price_Level,
			/** 4 */
			Missing_Quantity,
			/** 5 */
			Missing_Unit_Price,
			/** 6 */
			Missing_Product,
			/** 7 */
			Invalid_Product,
			/** 8 */
			Missing_Pricing_Code,
			/** 9 */
			Invalid_Pricing_Code,
			/** 10 */
			Missing_UOM,
			/** 11 */
			Product_Not_In_Price_Level,
			/** 12 */
			Missing_Price_Level_Amount,
			/** 13 */
			Missing_Price_Level_Percentage,
			/** 14 */
			Missing_Price,
			/** 15 */
			Missing_Current_Cost,
			/** 16 */
			Missing_Standard_Cost,
			/** 17 */
			Invalid_Price_Level_Amount,
			/** 18 */
			Invalid_Price_Level_Percentage,
			/** 19 */
			Invalid_Price,
			/** 20 */
			Invalid_Current_Cost,
			/** 21 */
			Invalid_Standard_Cost,
			/** 22 */
			Invalid_Rounding_Policy,
			/** 23 */
			Invalid_Rounding_Option,
			/** 24 */
			Invalid_Rounding_Amount,
			/** 25 */
			Price_Calculation_Error,
			/** 26 */
			Invalid_Discount_Type,
			/** 27 */
			Discount_Type_Invalid_State,
			/** 28 */
			Invalid_Discount,
			/** 29 */
			Invalid_Quantity,
			/** 30 */
			Invalid_Pricing_Precision,
			/** 31 */
			Missing_Product_Default_UOM,
			/** 32 */
			Missing_Product_UOM_Schedule_,
			/** 33 */
			Inactive_Discount_Type,
			/** 34 */
			Invalid_Price_Level_Currency,
			/** 35 */
			Price_Attribute_Out_Of_Range,
			/** 36 */
			Base_Currency_Attribute_Overflow,
			/** 37 */
			Base_Currency_Attribute_Underflow,
			/** 38 */
			Transaction_currency_is_not_set_for_the_product_price_list_item
		}
		enum PriorityCode {
			/** 1 */
			Default_Value
		}
		enum ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 4 */
			UPS,
			/** 5 */
			Postal_Mail,
			/** 6 */
			Full_Load,
			/** 7 */
			Will_Call
		}
		enum ShipTo_FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum SkipPriceCalculation {
			/** 0 */
			DoPriceCalcAlways,
			/** 1 */
			SkipPriceCalcOnRetrieve
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Submitted,
			/** 2 */
			Canceled,
			/** 3 */
			Fulfilled,
			/** 4 */
			Invoiced
		}
		enum StatusCode {
			/** 3 */
			In_Progress,
			/** 4 */
			No_Money,
			/** 1 */
			New,
			/** 2 */
			Pending,
			/** 100001 */
			Complete,
			/** 100002 */
			Partial,
			/** 100003 */
			Invoiced
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}