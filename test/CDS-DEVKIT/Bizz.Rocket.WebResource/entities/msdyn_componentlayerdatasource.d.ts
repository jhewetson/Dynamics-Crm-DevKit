///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class msdyn_componentlayerdatasourceApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_componentlayerdatasourceApi
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
		/** Unique identifier for entity instances */
		msdyn_componentlayerdatasourceId: DevKit.WebApi.GuidValue;
		msdyn_name: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace msdyn_componentlayerdatasource {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}