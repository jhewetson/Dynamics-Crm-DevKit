﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class PersonalDocumentTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit PersonalDocumentTemplateApi
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
		/** Client data regarding this personal document template. */
		ClientData: DevKit.WebApi.StringValue;
		/** Bytes of the personal document template. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the personal document template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the personal document template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the personal document template. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Additional information to describe the Personal Document Template */
		Description: DevKit.WebApi.StringValue;
		/** Option set for selecting the type of the personal document template */
		DocumentType: DevKit.WebApi.OptionSetValue;
		/** Language of Personal Document Template. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the personal document template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the personal document template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the personal document template. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the personal document template. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the personal document template. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the personal document template. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the personal document template. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the personal document template. */
		PersonalDocumentTemplateId: DevKit.WebApi.GuidValue;
		/** Information about whether the personal document template is active. */
		Status: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PersonalDocumentTemplate {
		enum DocumentType {
			/** 1 */
			Microsoft_Excel,
			/** 2 */
			Microsoft_Word
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}