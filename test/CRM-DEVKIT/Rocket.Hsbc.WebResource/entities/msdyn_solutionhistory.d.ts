///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_solutionhistoryApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_solutionhistoryApi
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
		msdyn_activityid: DevKit.WebApi.StringValue;
		msdyn_correlationid: DevKit.WebApi.StringValue;
		msdyn_endtime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_errorcode: DevKit.WebApi.StringValue;
		msdyn_exceptionmessage: DevKit.WebApi.StringValue;
		msdyn_exceptionstack: DevKit.WebApi.StringValue;
		msdyn_ismanaged: DevKit.WebApi.BooleanValue;
		msdyn_isoverwritecustomizations: DevKit.WebApi.BooleanValue;
		msdyn_ispatch: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_operation: DevKit.WebApi.OptionSetValue;
		msdyn_packagename: DevKit.WebApi.StringValue;
		msdyn_packageversion: DevKit.WebApi.StringValue;
		msdyn_publisherid: DevKit.WebApi.StringValue;
		msdyn_publishername: DevKit.WebApi.StringValue;
		msdyn_result: DevKit.WebApi.BooleanValue;
		/** Unique identifier for entity instances */
		msdyn_solutionhistoryId: DevKit.WebApi.GuidValue;
		msdyn_solutionid: DevKit.WebApi.StringValue;
		msdyn_solutionversion: DevKit.WebApi.StringValue;
		msdyn_starttime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_status: DevKit.WebApi.OptionSetValue;
		msdyn_suboperation: DevKit.WebApi.OptionSetValue;
		msdyn_totaltime: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace msdyn_solutionhistory {
		enum msdyn_operation {
			/** 0 */
			Import,
			/** 1 */
			Uninstall,
			/** 2 */
			Export
		}
		enum msdyn_status {
			/** 0 */
			Started,
			/** 1 */
			Completed
		}
		enum msdyn_suboperation {
			/** 0 */
			None,
			/** 1 */
			New,
			/** 2 */
			Upgrade,
			/** 3 */
			Update,
			/** 4 */
			Delete
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}