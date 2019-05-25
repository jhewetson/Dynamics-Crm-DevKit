///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class NotificationApi {
		/**
		* PL.DynamicsCrm.DevKit NotificationApi
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
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		CreatedOnString: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EventData: DevKit.WebApi.StringValue;
		/** For internal use only. */
		EventId: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		NotificationId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		NotificationNumber: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		OrganizationId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace Notification {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}