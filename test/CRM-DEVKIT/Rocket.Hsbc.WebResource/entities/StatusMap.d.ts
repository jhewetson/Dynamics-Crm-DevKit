///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class StatusMapApi {
		/**
		* PL.DynamicsCrm.DevKit StatusMapApi
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
		IsDefault: DevKit.WebApi.BooleanValue;
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		State: DevKit.WebApi.IntegerValueReadonly;
		Status: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the status map. */
		StatusMapId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace StatusMap {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}