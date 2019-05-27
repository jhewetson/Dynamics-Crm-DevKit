///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SharedObjectsForReadApi {
		/**
		* PL.DynamicsCrm.DevKit SharedObjectsForReadApi
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
		ObjectId: DevKit.WebApi.GuidValueReadonly;
		ObjectTypeCode: DevKit.WebApi.IntegerValueReadonly;
		SharedObjectsForReadId: DevKit.WebApi.GuidValueReadonly;
		UserIds: DevKit.WebApi.StringValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SharedObjectsForRead {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}