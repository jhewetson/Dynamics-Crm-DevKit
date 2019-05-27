///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ContractApi {
		/**
		* PL.DynamicsCrm.DevKit ContractApi
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
		/** Unique identifier of the account with which the contract is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the date when the contract becomes active. */
		ActiveOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type of allotment that the contract supports. */
		AllotmentTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the account to which the contract is to be billed. */
		BillingAccountId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the contact to whom the contract is to be billed. */
		BillingContactId: DevKit.WebApi.LookupValueReadonly;
		billingcustomerid_account: DevKit.WebApi.LookupValue;
		billingcustomerid_contact: DevKit.WebApi.LookupValue;
		/** Enter the end date for the contract's billing period to indicate the period for which the customer must pay for a service. */
		BillingEndOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the billing schedule of the contract to indicate how often the customer should be invoiced. */
		BillingFrequencyCode: DevKit.WebApi.OptionSetValue;
		/** Enter the start date for the contract's billing period to indicate the period for which the customer must pay for a service. This defaults to the same date that is selected in the Contract Start Date field. */
		BillingStartOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Choose which address to send the invoice to. */
		BillToAddress: DevKit.WebApi.LookupValue;
		/** Shows the date and time when the contract was canceled. */
		CancelOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the contact specified for the contract. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the contract. */
		ContractId: DevKit.WebApi.GuidValue;
		/** Type additional information about the contract, such as the products or services provided to the customer. */
		ContractLanguage: DevKit.WebApi.StringValue;
		/** Shows the number for the contract for customer reference and searching capabilities. You cannot modify this number. */
		ContractNumber: DevKit.WebApi.StringValue;
		/** Select the level of service that should be provided for the contract based on your company's definition of bronze, silver, or gold. */
		ContractServiceLevelCode: DevKit.WebApi.OptionSetValue;
		/** Shows the abbreviation of the contract template selected when the contract is created. */
		ContractTemplateAbbreviation: DevKit.WebApi.StringValueReadonly;
		/** Choose the contract template that should be used to determine the terms of the contract, such as allotment type, available hours, and billing frequency. */
		ContractTemplateId: DevKit.WebApi.LookupValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Shows for the duration of the contract, in days, based on the contract start and end dates. */
		Duration: DevKit.WebApi.IntegerValueReadonly;
		/** Days of the week and times during which customer service support is available for the duration of the contract. */
		EffectivityCalendar: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the date when the contract expires. */
		ExpiresOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the total charge to the customer for the service contract, calculated as the sum of values in the Net field for each existing contract line related to the contract. */
		NetPrice: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Net Price in base currency. */
		NetPrice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the original contract that this contract was created from. This information is used to track renewal history. */
		OriginatingContract: DevKit.WebApi.LookupValue;
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
		/** Choose the address for the customer account or contact where the services are provided. */
		ServiceAddress: DevKit.WebApi.LookupValue;
		/** Shows whether the contract is in draft, invoiced, active, on hold, canceled, or expired. You can edit only the contracts that are in draft status. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the contract's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a title or name for the contract that indicates the purpose of the contract. */
		Title: DevKit.WebApi.StringValue;
		/** Shows the total discount applied to the contract's service charges, calculated as the sum of values in the Discount fields for each existing contract line related to the contract. */
		TotalDiscount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Discount in base currency. */
		TotalDiscount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total service charge for the contract, before any discounts are credited. This is calculated as the sum of values in the Total Price field for each existing contract line related to the contract. */
		TotalPrice: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Price in base currency. */
		TotalPrice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Select whether the discounts entered on contract lines for this contract should be entered as a percentage or a fixed dollar value. */
		UseDiscountAsPercentage: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Contract {
		enum AllotmentTypeCode {
			/** 1 */
			Number_of_Cases,
			/** 2 */
			Time,
			/** 3 */
			Coverage_Dates
		}
		enum BillingFrequencyCode {
			/** 1 */
			Monthly,
			/** 2 */
			Bimonthly,
			/** 3 */
			Quarterly,
			/** 4 */
			Semiannually,
			/** 5 */
			Annually
		}
		enum ContractServiceLevelCode {
			/** 1 */
			Gold,
			/** 2 */
			Silver,
			/** 3 */
			Bronze
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Invoiced,
			/** 2 */
			Active,
			/** 3 */
			On_Hold,
			/** 4 */
			Canceled,
			/** 5 */
			Expired
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Invoiced,
			/** 3 */
			Active,
			/** 4 */
			On_Hold,
			/** 5 */
			Canceled,
			/** 6 */
			Expired
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}