///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ReplicationBacklogApi {
		/**
		* PL.DynamicsCrm.DevKit ReplicationBacklogApi
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
		/** Additional data related to the replication backlog entry. For internal use only. */
		Data: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the replication backlog entry. */
		ReplicationBacklogId: DevKit.WebApi.GuidValueReadonly;
		/** The type of replication backlog. */
		ReplicationBacklogType: DevKit.WebApi.OptionSetValueReadonly;
		/** For internal use only. */
		TargetDatacenterId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the target object */
		TargetObjectId: DevKit.WebApi.LookupValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ReplicationBacklog {
		enum ReplicationBacklogType {
			/** 0 */
			Create,
			/** 1 */
			Update,
			/** 2 */
			Delete
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}