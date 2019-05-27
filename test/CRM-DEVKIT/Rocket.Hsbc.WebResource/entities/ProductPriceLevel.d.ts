///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ProductPriceLevelApi {
		/**
		* PL.DynamicsCrm.DevKit ProductPriceLevelApi
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
		/** Monetary amount for the price list. */
		Amount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		Amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier of the user who created the price list. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the price list was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the discount list associated with the price list. */
		DiscountTypeId: DevKit.WebApi.LookupValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the price list. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the price list was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the price list. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Percentage for the price list. */
		Percentage: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the price level associated with this price list. */
		PriceLevelId: DevKit.WebApi.LookupValue;
		/** Pricing method applied to the price list. */
		PricingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Product associated with the price list. */
		ProductId: DevKit.WebApi.LookupValue;
		/** User-defined product number. */
		ProductNumber: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the price list. */
		ProductPriceLevelId: DevKit.WebApi.GuidValue;
		/** Quantity of the product that must be sold for a given price level. */
		QuantitySellingCode: DevKit.WebApi.OptionSetValue;
		/** Rounding option amount for the price list. */
		RoundingOptionAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Rounding Amount in base currency. */
		RoundingOptionAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Option for rounding the price list. */
		RoundingOptionCode: DevKit.WebApi.OptionSetValue;
		/** Policy for rounding the price list. */
		RoundingPolicyCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Unique identifier of the unit for the price list. */
		UoMId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the unit schedule for the price list. */
		UoMScheduleId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ProductPriceLevel {
		enum PricingMethodCode {
			/** 1 */
			Currency_Amount,
			/** 2 */
			Percent_of_List,
			/** 3 */
			Percent_Markup_Current_Cost,
			/** 4 */
			Percent_Margin_Current_Cost,
			/** 5 */
			Percent_Markup_Standard_Cost,
			/** 6 */
			Percent_Margin_Standard_Cost
		}
		enum QuantitySellingCode {
			/** 1 */
			No_Control,
			/** 2 */
			Whole,
			/** 3 */
			Whole_and_Fractional
		}
		enum RoundingOptionCode {
			/** 1 */
			Ends_in,
			/** 2 */
			Multiple_of
		}
		enum RoundingPolicyCode {
			/** 1 */
			None,
			/** 2 */
			Up,
			/** 3 */
			Down,
			/** 4 */
			To_Nearest
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}