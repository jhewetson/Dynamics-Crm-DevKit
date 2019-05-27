///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class MultiSelectAttributeOptionValuesApi {
		/**
		* PL.DynamicsCrm.DevKit MultiSelectAttributeOptionValuesApi
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
		MultiSelectFullTextIdKey: DevKit.WebApi.BigIntValueReadonly;
		/** Object Column Number */
		ObjectColumnNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Object Id */
		ObjectId: DevKit.WebApi.LookupValue;
		/** ObjectId Type Code */
		ObjectIdTypeCode: DevKit.WebApi.IntegerValue;
		/** Multi Select Option Values */
		SelectedOptionValues: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace MultiSelectAttributeOptionValues {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}