///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class AppModuleMetadataOperationLogApi {
		/**
		* PL.DynamicsCrm.DevKit AppModuleMetadataOperationLogApi
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
		AppModuleId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		AppModuleMetadataOperationLogId: DevKit.WebApi.GuidValue;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		RetryCount: DevKit.WebApi.IntegerValue;
		/** Date and time when the Async job was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		State: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace AppModuleMetadataOperationLog {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}