///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class OrgInsightsNotificationApi {
		/**
		* PL.DynamicsCrm.DevKit OrgInsightsNotificationApi
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
		/** Date and time when the organization insights notification was created */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Name of the notification which is used for retrieving the data */
		InternalName: DevKit.WebApi.StringValue;
		/** Notification Data in Json format */
		JsonData: DevKit.WebApi.StringValueReadonly;
		/** Legend Name used while displaying the notification */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the record */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		OrgInsightsNotificationId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace OrgInsightsNotification {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}