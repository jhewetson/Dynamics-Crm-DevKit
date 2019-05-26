///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class MultiEntitySearchEntitiesApi {
		/**
		* PL.DynamicsCrm.DevKit MultiEntitySearchEntitiesApi
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
		/** Logical entity name of the entity participating in the multi entity search. */
		_EntityName: DevKit.WebApi.StringValueReadonly;
		/** Order of the entity in the result collection. */
		EntityOrder: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the entity used for the multiple entity search. */
		MultiEntitySearchEntityId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the ID of the multiple entity search. */
		MultiEntitySearchId: DevKit.WebApi.LookupValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MultiEntitySearchEntities {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}