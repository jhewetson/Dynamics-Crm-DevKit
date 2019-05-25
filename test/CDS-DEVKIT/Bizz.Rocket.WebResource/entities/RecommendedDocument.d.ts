///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class RecommendedDocumentApi {
		/**
		* PL.DynamicsCrm.DevKit RecommendedDocumentApi
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
		/** Type the URL where the recommended document is located. */
		AbsoluteUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows the associated record name of the recommended document. */
		AssociatedRecordName: DevKit.WebApi.StringValue;
		/** Shows the name of the author of the recommended document. */
		Author: DevKit.WebApi.StringValue;
		/** Select the document content type. */
		ContentType: DevKit.WebApi.StringValueReadonly;
		/** Shows the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the Edit URL of the recommended document. */
		EditUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the external document. */
		ExternalDocumentId: DevKit.WebApi.StringValue;
		/** Shows who last updated the document record. */
		ExternalModifiedBy: DevKit.WebApi.StringValue;
		/** Shows the file size. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the file type. */
		FileType: DevKit.WebApi.StringValueReadonly;
		/** Shows the full name of the recommended document. */
		FullName: DevKit.WebApi.StringValueReadonly;
		/** Stores the Icon Class name of the recommended document. */
		IconClassName: DevKit.WebApi.StringValueReadonly;
		/** Shows the location of the recommended document. */
		Location: DevKit.WebApi.StringValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the Read URL of the recommended document. */
		ReadUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows the recommended document record. */
		RecommendedDocumentId: DevKit.WebApi.GuidValue;
		/** Choose the parent record that the recommended document record is associated with. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Shows the source storage of the recommended document. */
		Source: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a title for the entity. */
		Title: DevKit.WebApi.StringValue;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Shows the recommended document version. */
		Version: DevKit.WebApi.StringValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RecommendedDocument {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}