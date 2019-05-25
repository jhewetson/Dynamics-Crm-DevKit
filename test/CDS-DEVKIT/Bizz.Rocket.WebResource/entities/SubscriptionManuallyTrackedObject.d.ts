///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SubscriptionManuallyTrackedObjectApi {
		/**
		* PL.DynamicsCrm.DevKit SubscriptionManuallyTrackedObjectApi
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
		/** Unique identifier of the object with which the subscription is associated. */
		ObjectId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the subscription. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SubscriptionManuallyTrackedObjectId: DevKit.WebApi.GuidValue;
		/** Information that specifies if the object is tracked. */
		Track: DevKit.WebApi.BooleanValue;
		/** Version number of the subscription manually tracked object. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SubscriptionManuallyTrackedObject {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}