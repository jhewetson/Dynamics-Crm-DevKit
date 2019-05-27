///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SalesLiteratureItemApi {
		/**
		* PL.DynamicsCrm.DevKit SalesLiteratureItemApi
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
		/** Abstract of the document. */
		Abstract: DevKit.WebApi.StringValue;
		/** URL of the Website on which the document is located. */
		AttachedDocumentUrl: DevKit.WebApi.StringValue;
		/** Author name for the document. */
		AuthorName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the document. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the salesliteratureitem. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the encoded contents of the sales literature document attachment. */
		DocumentBody: DevKit.WebApi.StringValue;
		/** File name of the document. */
		FileName: DevKit.WebApi.StringValue;
		/** File size of the document. */
		FileSize: DevKit.WebApi.IntegerValue;
		FileType: DevKit.WebApi.IntegerValueReadonly;
		/** Select the file type of the document. */
		FileTypeCode: DevKit.WebApi.OptionSetValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Tells whether the document can be shared with customers or is for internal use only. */
		IsCustomerViewable: DevKit.WebApi.BooleanValue;
		/** Keywords to use for searches in documents. */
		KeyWords: DevKit.WebApi.StringValue;
		/** Shows the file type of the sales literature document attachment, such as text or document. */
		MimeType: DevKit.WebApi.StringValue;
		/** Defines the mode of the sales literature document attachment. */
		Mode: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the document. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the salesliteratureitem. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the document. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the sales literature that is associated with the individual item. */
		SalesLiteratureId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the document. */
		SalesLiteratureItemId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type the title or name that describes the document. */
		Title: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SalesLiteratureItem {
		enum FileTypeCode {
			/** 1 */
			Default_Value
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}