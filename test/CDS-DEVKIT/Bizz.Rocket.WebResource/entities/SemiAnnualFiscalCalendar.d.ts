///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SemiAnnualFiscalCalendarApi {
		/**
		* PL.DynamicsCrm.DevKit SemiAnnualFiscalCalendarApi
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
		/** Unique identifier of the business unit with which the calendar is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who created the semiannual fiscal calendar. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the quota for the semiannual fiscal calendar was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the semiannualfiscalcalendar. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the semiannual fiscal calendar sales quota takes effect. */
		EffectiveOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Exchange rate for the currency associated with the semiannual fiscal calendar with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type of fiscal period used in the sales quota. */
		FiscalPeriodType: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the semiannual fiscal calendar. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the semiannual fiscal calendar was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the semiannualfiscalcalendar. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sales quota for the first half of the fiscal year. */
		Period1: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent for the sales quota for the first half of the fiscal year. */
		Period1_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the second half of the fiscal year. */
		Period7: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the second half of the fiscal year. */
		Period7_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier of the associated salesperson. */
		SalesPersonId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the semiannual fiscal calendar. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the user who created the semiannual fiscal calendar. */
		UserFiscalCalendarId: DevKit.WebApi.GuidValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace SemiAnnualFiscalCalendar {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}