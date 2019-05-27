///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class CalendarApi {
		/**
		* PL.DynamicsCrm.DevKit CalendarApi
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
		/** Unique identifier of the business unit with which the calendar is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the calendar. */
		CalendarId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the calendar. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the calendar was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the calendar. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
		Description: DevKit.WebApi.StringValue;
		/** Holiday Schedule CalendarId */
		HolidayScheduleCalendarId: DevKit.WebApi.LookupValue;
		/** Calendar is shared by other calendars, such as the organization calendar. */
		IsShared: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the calendar. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the calendar was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the calendar. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the calendar. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the calendar is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the primary user of this calendar. */
		PrimaryUserId: DevKit.WebApi.GuidValue;
		/** Calendar type, such as User work hour calendar, or Customer service hour calendar. */
		Type: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Calendar {
		enum Type {
			/** 0 */
			Default,
			/** 1 */
			Customer_Service,
			/** 2 */
			Holiday_Schedule,
			/** -1 */
			Inner_Calendar_type
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}