﻿///<reference path='DevKit.d.ts' />
declare namespace Rocket {
	namespace FormRecurringAppointment {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			generalinformation: DevKit.Form.Controls.ControlSection;
			appointmentdescription: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the recurring appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the recurring appointment series relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the recurring appointment. */
			RequiredAttendees: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the recurring appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormRecurringAppointment extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form RecurringAppointment
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form RecurringAppointment */
		Body: Rocket.FormRecurringAppointment.Body;
		/** The Header section of form RecurringAppointment */
		Header: Rocket.FormRecurringAppointment.Header;
	}
	class RecurringAppointmentMasterApi {
		/**
		* PL.DynamicsCrm.DevKit RecurringAppointmentMasterApi
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
		/** Unique identifier of the recurring appointment series. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type a category to identify the recurring appointment type, such as status meeting or service call, to tie the appointment to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The day of the month on which the recurring appointment occurs. */
		DayOfMonth: DevKit.WebApi.IntegerValue;
		/** Bitmask that represents the days of the week on which the recurring appointment occurs. */
		DaysOfWeekMask: DevKit.WebApi.IntegerValue;
		/** List of deleted instances of the recurring appointment series. */
		DeletedExceptionsList: DevKit.WebApi.StringValueReadonly;
		/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
		Description: DevKit.WebApi.StringValue;
		/** Duration of the recurring appointment series in minutes. */
		Duration: DevKit.WebApi.IntegerValue;
		/** Actual end date of the recurring appointment series based on the specified end date and recurrence pattern. */
		EffectiveEndDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Actual start date of the recurring appointment series based on the specified start date and recurrence pattern. */
		EffectiveStartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** End time of the associated activity. */
		EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** State code to indicate whether the recurring appointment series is expanded fully or partially. */
		ExpansionStateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** First day of week for the recurrence pattern. */
		FirstDayOfWeek: DevKit.WebApi.IntegerValue;
		/** Unique Outlook identifier to correlate recurring appointment series across Exchange mailboxes. */
		GlobalObjectId: DevKit.WebApi.StringValue;
		/** Unique identifier of the recurring appointment series for which the recurrence information was updated.  */
		GroupId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Specifies the recurring appointment series to occur on every Nth day of a month. Valid for monthly and yearly recurrence patterns only. */
		Instance: DevKit.WebApi.OptionSetValue;
		/** Type of instance of a recurring appointment series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Number of units of a given recurrence type between occurrences. */
		Interval: DevKit.WebApi.IntegerValue;
		/** Select whether the recurring appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
		IsAllDayEvent: DevKit.WebApi.BooleanValue;
		/** Indicates whether the recurring appointment series was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Indicates whether the recurring appointment series should occur after every N months. Valid for monthly recurrence pattern only. */
		IsNthMonthly: DevKit.WebApi.BooleanValue;
		/** Indicates whether the recurring appointment series should occur after every N years. Valid for yearly recurrence pattern only. */
		IsNthYearly: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsRegenerate: DevKit.WebApi.BooleanValue;
		/** Indicates whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		IsUnsafe: DevKit.WebApi.IntegerValueReadonly;
		/** Indicates whether the weekly recurrence pattern is a daily weekday pattern. Valid for weekly recurrence pattern only. */
		IsWeekDayPattern: DevKit.WebApi.BooleanValue;
		/** Indicates whether the recurring appointment series was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Date of last expanded instance of a recurring appointment series. */
		LastExpandedInstanceDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
		Location: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Indicates the month of the year for the recurrence pattern. */
		MonthOfYear: DevKit.WebApi.OptionSetValue;
		/** Date of the next expanded instance of a recurring appointment series. */
		NextExpansionInstanceDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Number of appointment occurrences in a recurring appointment series. */
		Occurrences: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the Microsoft Office Outlook recurring appointment series owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
		OutlookOwnerApptId: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the recurring appointment series. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the recurring appointment series. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the recurring appointment series. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** End date of the recurrence range. */
		PatternEndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the type of end date for the recurring appointment, such as no end date or the number of occurrences. */
		PatternEndType: DevKit.WebApi.OptionSetValue;
		/** Start date of the recurrence range. */
		PatternStartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Select the pattern type for the recurring appointment to indicate whether the appointment occurs daily, weekly, monthly, or yearly. */
		RecurrencePatternType: DevKit.WebApi.OptionSetValue;
		/** Choose the record that the recurring appointment series relates to. */
		regardingobjectid_account_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the record that the recurring appointment series relates to. */
		regardingobjectid_contact_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the record that the recurring appointment series relates to. */
		regardingobjectid_devkit_webapi_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the record that the recurring appointment series relates to. */
		regardingobjectid_knowledgearticle_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the record that the recurring appointment series relates to. */
		regardingobjectid_knowledgebaserecord_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the recurrence rule that is associated with the recurring appointment series. */
		RuleId: DevKit.WebApi.LookupValueReadonly;
		/** Safe body text of the recurring appointment. */
		SafeDescription: DevKit.WebApi.StringValueReadonly;
		/** Scheduled end time of the recurring appointment series. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Scheduled start time of the recurring appointment series. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Indicates whether the recurring appointment series is active or inactive. */
		SeriesStatus: DevKit.WebApi.BooleanValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Start time of the recurring appointment series. */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the recurring appointment's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the recurring appointment type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the recurring appointment. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace RecurringAppointmentMaster {
		enum ExpansionStateCode {
			/** 0 */
			Unexpanded,
			/** 1 */
			Partial,
			/** 2 */
			Full
		}
		enum Instance {
			/** 1 */
			First,
			/** 2 */
			Second,
			/** 3 */
			Third,
			/** 4 */
			Fourth,
			/** 5 */
			Last
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum MonthOfYear {
			/** 0 */
			Invalid_Month_Of_Year,
			/** 1 */
			January,
			/** 2 */
			February,
			/** 3 */
			March,
			/** 4 */
			April,
			/** 5 */
			May,
			/** 6 */
			June,
			/** 7 */
			July,
			/** 8 */
			August,
			/** 9 */
			September,
			/** 10 */
			October,
			/** 11 */
			November,
			/** 12 */
			December
		}
		enum PatternEndType {
			/** 1 */
			No_End_Date,
			/** 2 */
			Occurrences,
			/** 3 */
			Pattern_End_Date
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum RecurrencePatternType {
			/** 0 */
			Daily,
			/** 1 */
			Weekly,
			/** 2 */
			Monthly,
			/** 3 */
			Yearly
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 1 */
			Free,
			/** 2 */
			Tentative,
			/** 3 */
			Completed,
			/** 4 */
			Canceled,
			/** 5 */
			Busy,
			/** 6 */
			Out_of_Office
		}
	}
}
//{'JsForm':['Recurring Appointment'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}