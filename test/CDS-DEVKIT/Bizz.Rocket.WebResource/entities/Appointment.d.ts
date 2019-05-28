﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormAppointment {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_appointment_Sections {
			generalinformation: DevKit.Form.Controls.ControlSection;
			attachments: DevKit.Form.Controls.ControlSection;
			schedulinginformation: DevKit.Form.Controls.ControlSection;
			appointmentdescription: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_appointment extends DevKit.Form.Controls.IControlTab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointment extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form Appointment
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Appointment */
		Body: Rocket.FormAppointment.Body;
		/** The Header section of form Appointment */
		Header: Rocket.FormAppointment.Header;
	}
	namespace FormAppointmentforInteractiveexperience {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_5_Sections {
			tab_5_section_5: DevKit.Form.Controls.ControlSection;
			tab_5_section_2: DevKit.Form.Controls.ControlSection;
			appointmentdescription: DevKit.Form.Controls.ControlSection;
			tab_5_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointmentforInteractiveexperience extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form AppointmentforInteractiveexperience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form AppointmentforInteractiveexperience */
		Body: Rocket.FormAppointmentforInteractiveexperience.Body;
		/** The Header section of form AppointmentforInteractiveexperience */
		Header: Rocket.FormAppointmentforInteractiveexperience.Header;
	}
	namespace FormAppointmentWizard {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_appointment_Sections {
			HiddenSection: DevKit.Form.Controls.ControlSection;
			generalinformation: DevKit.Form.Controls.ControlSection;
			attachments: DevKit.Form.Controls.ControlSection;
			schedulinginformation: DevKit.Form.Controls.ControlSection;
			appointmentdescription: DevKit.Form.Controls.ControlSection;
		}
		interface tab_appointment extends DevKit.Form.Controls.IControlTab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Select the appointment's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointmentWizard extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form AppointmentWizard
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form AppointmentWizard */
		Body: Rocket.FormAppointmentWizard.Body;
		/** The Header section of form AppointmentWizard */
		Header: Rocket.FormAppointmentWizard.Header;
	}
	namespace FormAppointmentquickcreateform {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointmentquickcreateform extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form Appointmentquickcreateform
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Appointmentquickcreateform */
		Body: Rocket.FormAppointmentquickcreateform.Body;
	}
	class AppointmentApi {
		/**
		* PL.DynamicsCrm.DevKit AppointmentApi
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
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the appointment. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Shows the value selected in the Duration field on the appointment at the time that the appointment is closed as completed. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the appointment. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the appointment. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the actual start date and time for the appointment. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the appointment. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the number of attachments on the appointment. */
		AttachmentCount: DevKit.WebApi.IntegerValueReadonly;
		/** Select the error code to identify issues with the outlook item recipients or attachments, such as blocked attachments. */
		AttachmentErrors: DevKit.WebApi.OptionSetValue;
		/** Type a category to identify the appointment type, such as sales demo, prospect call, or service call, to tie the appointment to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the purpose of the appointment. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the ID of the appointment in Microsoft Office Outlook. The ID is used to synchronize the appointment between Microsoft Dynamics 365 and the correct Exchange account. */
		GlobalObjectId: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
		IsAllDayEvent: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the appointment was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the appointment is a draft. */
		IsDraft: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		IsUnsafe: DevKit.WebApi.IntegerValueReadonly;
		/** Information regarding whether the appointment was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Type the location where the appointment will take place, such as a conference room or customer office. */
		Location: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only.  */
		ModifiedFieldsMask: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** The original start date of the appointment. */
		OriginalStartDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the Microsoft Office Outlook appointment owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
		OutlookOwnerApptId: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the appointment. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the appointment. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_account_appointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_contact_appointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_devkit_webapi_appointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_knowledgearticle_appointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_knowledgebaserecord_appointment: DevKit.WebApi.LookupValue;
		/** Safe body text of the appointment. */
		SafeDescription: DevKit.WebApi.StringValueReadonly;
		/** Shows the expected duration of the appointment, in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Choose the service level agreement (SLA) that you want to apply to the appointment record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this appointment. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the appointment's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the appointment type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the appointment. */
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
		/** Version number of the appointment. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace Appointment {
		enum AttachmentErrors {
			/** 0 */
			None,
			/** 1 */
			The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid
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
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
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
//{'JsForm':['Appointment','Appointment for Interactive experience','Appointment quick create form.','Wizard'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}