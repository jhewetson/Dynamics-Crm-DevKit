///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class LanguageProvisioningStateApi {
		/**
		* PL.DynamicsCrm.DevKit LanguageProvisioningStateApi
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
		/** Application Version */
		ApplicationVersion: DevKit.WebApi.StringValue;
		/** Language Id */
		LanguageId: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		LanguageProvisioningStateId: DevKit.WebApi.GuidValue;
		/** Provisioning Stage */
		ProvisioningStage: DevKit.WebApi.OptionSetValue;
		/** Solution File Version */
		SolutionFileVersion: DevKit.WebApi.StringValue;
		/** Solution Unique Name */
		SolutionUniqueName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace LanguageProvisioningState {
		enum ProvisioningStage {
			/** 1 */
			FileBased,
			/** 2 */
			MetadataHelperDependent,
			/** 3 */
			SystemOnly,
			/** 4 */
			Other,
			/** 5 */
			Ribbon
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}