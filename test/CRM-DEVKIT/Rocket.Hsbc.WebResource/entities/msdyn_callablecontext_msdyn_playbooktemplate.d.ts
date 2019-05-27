///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_callablecontext_msdyn_playbooktemplateApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_callablecontext_msdyn_playbooktemplateApi
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
		msdyn_callablecontext_msdyn_playbooktemplateId: DevKit.WebApi.GuidValueReadonly;
		msdyn_callablecontextid: DevKit.WebApi.GuidValueReadonly;
		msdyn_playbooktemplateid: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_callablecontext_msdyn_playbooktemplate {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}