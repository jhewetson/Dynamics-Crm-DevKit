///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SubscriptionSyncEntryOutlookApi {
		/**
		* PL.DynamicsCrm.DevKit SubscriptionSyncEntryOutlookApi
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
		/** Object Id */
		ObjectId: DevKit.WebApi.GuidValue;
		/** Entity object type code */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Subscription Id */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** Sync state */
		SyncState: DevKit.WebApi.IntegerValue;
		/** Version number */
		VersionNumber: DevKit.WebApi.BigIntValue;
	}
}
declare namespace OptionSet {
	namespace SubscriptionSyncEntryOutlook {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}