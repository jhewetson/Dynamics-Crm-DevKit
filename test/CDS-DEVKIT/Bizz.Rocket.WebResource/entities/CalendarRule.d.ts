///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormCalendarRuleInformation {
		interface tab_general_Sections {
			section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the calendar rule. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCalendarRuleInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form CalendarRuleInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form CalendarRuleInformation */
		Body: Rocket.FormCalendarRuleInformation.Body;
	}
	class CalendarRuleApi {
		/**
		* PL.DynamicsCrm.DevKit CalendarRuleApi
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
		/** Unique identifier of the business unit with which the calendar rule is associated. */
		BusinessUnitId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the calendar with which the calendar rule is associated. */
		CalendarId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the calendar rule. */
		CalendarRuleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the calendar rule. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the calendar rule was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the calendarrule. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked. */
		Description: DevKit.WebApi.StringValue;
		/** Duration of the calendar rule in minutes. */
		Duration: DevKit.WebApi.IntegerValue;
		/** Effective interval end of the calendar rule. */
		EffectiveIntervalEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Effective interval start of the calendar rule. */
		EffectiveIntervalStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Effort available for a resource during the time described by the calendar rule. */
		Effort: DevKit.WebApi.DoubleValue;
		/** For internal use only. */
		EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Extent of the calendar rule. */
		ExtentCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the group. */
		GroupDesignator: DevKit.WebApi.StringValue;
		/** Unique identifier of the inner calendar for non-leaf calendar rules. */
		InnerCalendarId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		IsModified: DevKit.WebApi.BooleanValue;
		/** Flag used in vary-by-day calendar rules. */
		IsSelected: DevKit.WebApi.BooleanValue;
		/** Flag used in vary-by-day calendar rules. */
		IsSimple: DevKit.WebApi.BooleanValue;
		/** Flag used in leaf nonrecurring rules. */
		IsVaried: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the calendar rule. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the calendar rule was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the calendarrule. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the calendar rule. */
		Name: DevKit.WebApi.StringValue;
		/** Start offset for leaf nonrecurring rules. */
		Offset: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the organization with which the calendar rule is associated. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Pattern of the rule recurrence. */
		Pattern: DevKit.WebApi.StringValue;
		/** Rank of the calendar rule. */
		Rank: DevKit.WebApi.IntegerValue;
		/** Start time for the rule. */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Sub-type of calendar rule. */
		SubCode: DevKit.WebApi.IntegerValue;
		/** Type of calendar rule such as working hours, break, holiday, or time off. */
		TimeCode: DevKit.WebApi.IntegerValue;
		/** Local time zone for the calendar rule. */
		TimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CalendarRule {
	}
}
//{'JsForm':['CalendarRule Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}