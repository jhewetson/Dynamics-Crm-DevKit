﻿///<reference path='DevKit.d.ts' />
declare namespace Rocket {
	class DocumentTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit DocumentTemplateApi
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
		/** Client data regarding this document template. */
		ClientData: DevKit.WebApi.StringValue;
		/** Bytes of the document template. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the document template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the document template. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Additional information to describe the Document Template */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the document template. */
		DocumentTemplateId: DevKit.WebApi.GuidValue;
		/** Option set for selecting the type of the document template */
		DocumentType: DevKit.WebApi.OptionSetValue;
		/** Language of Document Template. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the document template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the document template. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the document template. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the web resource. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Information about whether the document template is active. */
		Status: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DocumentTemplate {
		enum DocumentType {
			/** 1 */
			Microsoft_Excel,
			/** 2 */
			Microsoft_Word
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}