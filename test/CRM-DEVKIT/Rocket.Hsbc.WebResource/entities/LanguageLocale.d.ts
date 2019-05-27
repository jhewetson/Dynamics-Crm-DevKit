///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class LanguageLocaleApi {
		/**
		* PL.DynamicsCrm.DevKit LanguageLocaleApi
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
		/** Code */
		Code: DevKit.WebApi.StringValueReadonly;
		/** Language */
		Language: DevKit.WebApi.StringValueReadonly;
		/** LanguageLocaleId */
		LanguageLocaleId: DevKit.WebApi.GuidValue;
		/** Locale ID */
		LocaleId: DevKit.WebApi.IntegerValue;
		/** Name */
		Name: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the organization associated with the language locale. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Region */
		Region: DevKit.WebApi.StringValueReadonly;
		/** State Code */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Language Status Code */
		statuscode: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace LanguageLocale {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}