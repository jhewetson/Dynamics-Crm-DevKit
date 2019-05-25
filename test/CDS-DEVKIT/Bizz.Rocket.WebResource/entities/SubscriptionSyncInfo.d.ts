///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SubscriptionSyncInfoApi {
		/**
		* PL.DynamicsCrm.DevKit SubscriptionSyncInfoApi
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
		/** Client (subscriber) version number. */
		ClientVersion: DevKit.WebApi.StringValue;
		/** For internal use only. */
		DataSize: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		DeleteObjectCount: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		EndTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		InsertObjectCount: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		StartTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		SubscriptionSyncInfoId: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		SyncResult: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace SubscriptionSyncInfo {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}