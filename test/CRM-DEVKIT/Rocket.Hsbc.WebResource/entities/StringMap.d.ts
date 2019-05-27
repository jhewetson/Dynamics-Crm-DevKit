///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class StringMapApi {
		/**
		* PL.DynamicsCrm.DevKit StringMapApi
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
		AttributeName: DevKit.WebApi.StringValueReadonly;
		AttributeValue: DevKit.WebApi.IntegerValueReadonly;
		DisplayOrder: DevKit.WebApi.IntegerValue;
		LangId: DevKit.WebApi.IntegerValueReadonly;
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the string map. */
		StringMapId: DevKit.WebApi.GuidValue;
		Value: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace StringMap {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}