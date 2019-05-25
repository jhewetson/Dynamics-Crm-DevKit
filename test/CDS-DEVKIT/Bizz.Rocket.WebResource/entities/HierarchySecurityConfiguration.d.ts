///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class HierarchySecurityConfigurationApi {
		/**
		* PL.DynamicsCrm.DevKit HierarchySecurityConfigurationApi
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
		/** Logical entity name of the entity that is configured for hierarchy security. */
		EntityName: DevKit.WebApi.StringValue;
		/** Shows the entity used for the Hierarchy Security Modeling Configuration. */
		HierarchySecurityModelingSettingId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValue;
	}
}
declare namespace OptionSet {
	namespace HierarchySecurityConfiguration {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}