﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class UserFiscalCalendarApi {
		/**
		* PL.DynamicsCrm.DevKit UserFiscalCalendarApi
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
		/** Unique identifier of the business unit with which the user fiscal calendar is associated. */
		BusinessUnitId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who created the fiscal calendar. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the fiscal calendar was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the userfiscalcalendar. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the fiscal calendar takes effect. */
		EffectiveOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Exchange rate for the currency associated with the user fiscal calendar with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type of fiscal period used in the fiscal calendar. */
		FiscalPeriodType: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the fiscal calendar. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the fiscal calendar was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the userfiscalcalendar. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sales quota for the first period in the fiscal year. */
		Period1: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
		Period1_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the tenth period in the fiscal year. */
		Period10: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the tenth period in the fiscal year. */
		Period10_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the eleventh period in the fiscal year. */
		Period11: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the eleventh period in the fiscal year. */
		Period11_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the twelfth period in the fiscal year. */
		Period12: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the twelfth period in the fiscal year. */
		Period12_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the thirteenth period in the fiscal year. */
		Period13: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the thirteenth period in the fiscal year. */
		Period13_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the second period in the fiscal year. */
		Period2: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the second period in the fiscal year. */
		Period2_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the third period in the fiscal year. */
		Period3: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the third period in the fiscal year. */
		Period3_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the fourth period in the fiscal year. */
		Period4: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the fourth period in the fiscal year. */
		Period4_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the fifth period in the fiscal year. */
		Period5: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the fifth period in the fiscal year. */
		Period5_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the sixth period in the fiscal year. */
		Period6: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the sixth period in the fiscal year. */
		Period6_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the seventh period in the fiscal year. */
		Period7: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the seventh period in the fiscal year. */
		Period7_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the eighth period in the fiscal year. */
		Period8: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the eighth period in the fiscal year. */
		Period8_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the ninth period in the fiscal year. */
		Period9: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the ninth period in the fiscal year. */
		Period9_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier of the salesperson to whom the fiscal calendar is assigned. */
		SalesPersonId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the user fiscal calendar. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the fiscal calendar. */
		UserFiscalCalendarId: DevKit.WebApi.GuidValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace UserFiscalCalendar {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}