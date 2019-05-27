﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class CompetitorAddressApi {
		/**
		* PL.DynamicsCrm.DevKit CompetitorAddressApi
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
		/** Information about which competitor address is applicable. */
		AddressNumber: DevKit.WebApi.IntegerValue;
		/** Type of address for the competitor, such as primary address. */
		AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name in the competitor address. */
		City: DevKit.WebApi.StringValue;
		/** Unique identifier of the competitor address. */
		CompetitorAddressId: DevKit.WebApi.GuidValue;
		/** Shows the complete address. */
		Composite: DevKit.WebApi.StringValueReadonly;
		/** Country/region name in the competitor address. */
		Country: DevKit.WebApi.StringValue;
		/** County name in the competitor address. */
		County: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the competitor address. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the competitor address was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the competitor address. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Fax number for the competitor address. */
		Fax: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Latitude for the competitor address. */
		Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address information. */
		Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address information. */
		Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address information. */
		Line3: DevKit.WebApi.StringValue;
		/** Longitude for the address for the competitor. */
		Longitude: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the user who last modified the competitor address. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the competitor address was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the competitor address. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name used to identify the competitor address. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the parent object with which the competitor address is associated. */
		ParentId: DevKit.WebApi.LookupValue;
		/** ZIP Code or postal code in the competitor address. */
		PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number in the competitor address. */
		PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for the competitor. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province in the competitor address. */
		StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number for the competitor address. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number for the competitor address. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number for the competitor address. */
		Telephone3: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** United Parcel Service (UPS) zone for the address of the competitor. */
		UPSZone: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CompetitorAddress {
		enum AddressTypeCode {
		}
		enum ShippingMethodCode {
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}