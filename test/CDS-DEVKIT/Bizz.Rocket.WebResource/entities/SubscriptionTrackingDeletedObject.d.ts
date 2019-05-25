///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SubscriptionTrackingDeletedObjectApi {
		/**
		* PL.DynamicsCrm.DevKit SubscriptionTrackingDeletedObjectApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		DeleteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Indicates whether solution aware entity record is logical delete or not */
		IsLogicalDelete: DevKit.WebApi.BooleanValue;
		ObjectId: DevKit.WebApi.GuidValueReadonly;
		TimeStamp: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SubscriptionTrackingDeletedObject {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}