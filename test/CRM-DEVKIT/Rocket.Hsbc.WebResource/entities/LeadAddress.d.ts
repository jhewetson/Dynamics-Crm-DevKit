﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class LeadAddressApi {
		/**
		* PL.DynamicsCrm.DevKit LeadAddressApi
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
		/** Information about the address for the lead. */
		AddressNumber: DevKit.WebApi.IntegerValue;
		/** Type of address for the lead address. */
		AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name in the address for the lead. */
		City: DevKit.WebApi.StringValue;
		/** Shows the complete address. */
		Composite: DevKit.WebApi.StringValueReadonly;
		/** Country/region name in the address for the lead. */
		Country: DevKit.WebApi.StringValue;
		/** County name in the address for the lead. */
		County: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the lead address. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the lead address was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the leadaddress. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the leadaddress with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Fax number for the address for the lead. */
		Fax: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Latitude for the address for the lead. */
		Latitude: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the lead address. */
		LeadAddressId: DevKit.WebApi.GuidValue;
		/** First line for entering address information. */
		Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address information. */
		Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address information. */
		Line3: DevKit.WebApi.StringValue;
		/** Longitude for the address for the lead. */
		Longitude: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the user who last modified the lead address. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the lead address was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the leadaddress. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name used to identify the lead address. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		OwnerId: DevKit.WebApi.GuidValueReadonly;
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the parent object with which the lead address is associated. */
		ParentId: DevKit.WebApi.LookupValue;
		/** ZIP Code or postal code in the address for the lead. */
		PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number in the address for the lead. */
		PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for the lead. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province in the address for the lead. */
		StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number for the lead address. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number for the lead address. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number for the lead address. */
		Telephone3: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the leadaddress. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** United Parcel Service (UPS) zone for the address of the lead. */
		UPSZone: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** UTC offset for the lead address. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace LeadAddress {
		enum AddressTypeCode {
		}
		enum ShippingMethodCode {
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}