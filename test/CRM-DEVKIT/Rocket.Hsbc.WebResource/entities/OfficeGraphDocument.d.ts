﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class OfficeGraphDocumentApi {
		/**
		* PL.DynamicsCrm.DevKit OfficeGraphDocumentApi
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
		/** Shows Author Names of Office Graph Document. */
		AuthorNames: DevKit.WebApi.StringValueReadonly;
		/** Shows Created By of Office Graph Document. */
		CreatedBy: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Document Id. */
		DocumentId: DevKit.WebApi.StringValue;
		/** Document Last Modified By */
		DocumentLastModifiedBy: DevKit.WebApi.StringValueReadonly;
		/** Document Last Modified On */
		DocumentLastModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** document preview metadata */
		DocumentPreviewMetadata: DevKit.WebApi.StringValueReadonly;
		/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** File Extension of Office Graph Document. */
		FileExtension: DevKit.WebApi.StringValueReadonly;
		/** Shows the File Type of Office Graph Document. */
		FileType: DevKit.WebApi.StringValueReadonly;
		/** Shows modified by of Office Graph Document. */
		ModifiedBy: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier for entity instances */
		OfficeGraphDocumentId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the Preview Image Url Office Graph Document. */
		PreviewImageUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows Query Type of child folders */
		QueryType: DevKit.WebApi.IntegerValueReadonly;
		/** The relevancy rank of the document retrieved */
		Rank: DevKit.WebApi.IntegerValueReadonly;
		/** The online read url */
		ReadUrl: DevKit.WebApi.StringValueReadonly;
		/** Secondary File Extension of Office Graph Document. */
		SecondaryFileExtension: DevKit.WebApi.StringValueReadonly;
		/** The title of the parent document site */
		SiteTitle: DevKit.WebApi.StringValueReadonly;
		/** The site url for the parent document site */
		SiteUrl: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** The title of the entity. */
		Title: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Shows View Count of child folders. */
		ViewCount: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the Web Location Url of Office Graph Document. */
		WebLocationUrl: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace OfficeGraphDocument {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}