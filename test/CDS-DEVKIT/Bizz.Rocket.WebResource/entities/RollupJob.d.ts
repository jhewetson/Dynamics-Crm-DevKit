///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class RollupJobApi {
		/**
		* PL.DynamicsCrm.DevKit RollupJobApi
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
		DepthProcessed: DevKit.WebApi.IntegerValueReadonly;
		PostponeUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		RecordCreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		RegardingObjectId: DevKit.WebApi.LookupValueReadonly;
		RetryCount: DevKit.WebApi.IntegerValueReadonly;
		RollupJobId: DevKit.WebApi.BigIntValueReadonly;
		RollupPropertiesId: DevKit.WebApi.LookupValueReadonly;
		SourceEntityTypeCode: DevKit.WebApi.IntegerValueReadonly;
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		StatusCode: DevKit.WebApi.OptionSetValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RollupJob {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}