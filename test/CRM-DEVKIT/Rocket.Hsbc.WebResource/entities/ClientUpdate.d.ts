///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ClientUpdateApi {
		/**
		* PL.DynamicsCrm.DevKit ClientUpdateApi
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
		/** Unique identifier of the client update. */
		ClientUpdateId: DevKit.WebApi.GuidValue;
		/** For internal use only. Date and time when the ClientUpdate script was created on server. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Description of the client update. */
		Description: DevKit.WebApi.StringValue;
		/** Contents of the client update. */
		SqlScript: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** For internal use only. Should be set by client to 1 after action was executed. */
		WasExecuted: DevKit.WebApi.BooleanValue;
		/** For internal use only. Values are: 1 - Before SchemaChanges; 2 - After SchemaChanges but before Download data; 3 - After download data. */
		WhenExecute: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace ClientUpdate {
		enum WhenExecute {
			/** 1 */
			Before_SchemaChanges,
			/** 2 */
			After_SchemaChanges_but_before_Download_data,
			/** 3 */
			After_download_data
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}