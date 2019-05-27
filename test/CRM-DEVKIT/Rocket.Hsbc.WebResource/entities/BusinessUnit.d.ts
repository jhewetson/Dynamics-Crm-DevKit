﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class BusinessUnitApi {
		/**
		* PL.DynamicsCrm.DevKit BusinessUnitApi
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
		/** Unique identifier for address 1. */
		Address1_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 1. */
		Address1_City: DevKit.WebApi.StringValue;
		/** Country/region name for address 1. */
		Address1_Country: DevKit.WebApi.StringValue;
		/** County name for address 1. */
		Address1_County: DevKit.WebApi.StringValue;
		/** Fax number for address 1. */
		Address1_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 1. */
		Address1_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 1 information. */
		Address1_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 1 information. */
		Address1_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 1 information. */
		Address1_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 1. */
		Address1_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 1. */
		Address1_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 1. */
		Address1_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 2. */
		Address2_City: DevKit.WebApi.StringValue;
		/** Country/region name for address 2. */
		Address2_Country: DevKit.WebApi.StringValue;
		/** County name for address 2. */
		Address2_County: DevKit.WebApi.StringValue;
		/** Fax number for address 2. */
		Address2_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 2. */
		Address2_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 2 information. */
		Address2_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 2 information. */
		Address2_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 2 information. */
		Address2_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 2. */
		Address2_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 2. */
		Address2_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 2. */
		Address2_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the business unit. */
		BusinessUnitId: DevKit.WebApi.GuidValue;
		/** Fiscal calendar associated with the business unit. */
		CalendarId: DevKit.WebApi.LookupValue;
		/** Name of the business unit cost center. */
		CostCenter: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the business unit. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the business unit was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the businessunit. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Credit limit for the business unit. */
		CreditLimit: DevKit.WebApi.DoubleValue;
		/** Description of the business unit. */
		Description: DevKit.WebApi.StringValue;
		/** Reason for disabling the business unit. */
		DisabledReason: DevKit.WebApi.StringValueReadonly;
		/** Name of the division to which the business unit belongs. */
		DivisionName: DevKit.WebApi.StringValue;
		/** Email address for the business unit. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the businessunit with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Alternative name under which the business unit can be filed. */
		FileAsName: DevKit.WebApi.StringValue;
		/** FTP site URL for the business unit. */
		FtpSiteUrl: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Inheritance mask for the business unit. */
		InheritanceMask: DevKit.WebApi.IntegerValue;
		/** Information about whether the business unit is enabled or disabled. */
		IsDisabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the business unit. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the business unit was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the businessunit. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the business unit. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the business unit. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for the parent business unit. */
		ParentBusinessUnitId: DevKit.WebApi.LookupValue;
		/** Picture or diagram of the business unit. */
		Picture: DevKit.WebApi.StringValue;
		/** Stock exchange on which the business is listed. */
		StockExchange: DevKit.WebApi.StringValue;
		/** Stock exchange ticker symbol for the business unit. */
		TickerSymbol: DevKit.WebApi.StringValue;
		/** Unique identifier of the currency associated with the businessunit. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		UserGroupId: DevKit.WebApi.GuidValueReadonly;
		/** UTC offset for the business unit. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: DevKit.WebApi.IntegerValue;
		/** Version number of the business unit. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Website URL for the business unit. */
		WebSiteUrl: DevKit.WebApi.StringValue;
		/** Information about whether workflow or sales process rules have been suspended. */
		WorkflowSuspended: DevKit.WebApi.BooleanValue;
	}
}
declare namespace OptionSet {
	namespace BusinessUnit {
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}