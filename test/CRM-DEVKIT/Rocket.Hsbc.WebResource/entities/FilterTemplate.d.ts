///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class FilterTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit FilterTemplateApi
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
		/** For internal use only. */
		Description: DevKit.WebApi.StringValue;
		/** String that specifies the filter template in Fetch XML language. */
		FetchXml: DevKit.WebApi.StringValue;
		/** Unique identifier of the filter template. */
		FilterTemplateId: DevKit.WebApi.GuidValue;
		/** Name of the filter template. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		QueryType: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace FilterTemplate {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}