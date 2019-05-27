///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormServiceAppointmentInformation {
		interface tab_service_Sections {
			generalinformation: DevKit.Form.Controls.ControlSection;
			schedulinginformation: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_Sections {
			appointmentdetails: DevKit.Form.Controls.ControlSection;
		}
		interface tab_service extends DevKit.Form.Controls.IControlTab {
			Section: tab_service_Sections;
		}
		interface tab_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_Sections;
		}
		interface Tabs {
			service: tab_service;
			details: tab_details;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Type a category to identify the service activity type, such as routine maintenance or service call, to tie the service activity to a business group or function. */
			Category: DevKit.Form.Controls.ControlString;
			/** Enter the accounts and contacts for whom the service activity is being performed. */
			Customers: DevKit.Form.Controls.ControlLookup;
			/** Select whether the service activity is an all-day event to make sure the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the service activity will take place, such as a conference room, customer office, or other venue. */
			Location: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the record that the service activity relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the user, facility, or equipment required to complete the service activity. */
			Resources: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the service activity, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected due date and time. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Choose the service scheduled to be performed during the service activity. */
			ServiceId: DevKit.Form.Controls.ControlLookup;
			/** Choose the site or location where the service activity will be performed. */
			SiteId: DevKit.Form.Controls.ControlLookup;
			/** Select the service activity's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a subcategory to identify the service activity type and relate the activity to a specific product, service region, business group, or other function. */
			Subcategory: DevKit.Form.Controls.ControlString;
			/** Type a short description about the objective or primary topic of the service activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows whether the service activity is open, completed, or canceled. Completed and canceled service activities are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormServiceAppointmentInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ServiceAppointmentInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ServiceAppointmentInformation */
		Body: Hsbc.FormServiceAppointmentInformation.Body;
		/** The Footer section of form ServiceAppointmentInformation */
		Footer: Hsbc.FormServiceAppointmentInformation.Footer;
	}
	class ServiceAppointmentApi {
		/**
		* PL.DynamicsCrm.DevKit ServiceAppointmentApi
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
		/** Unique identifier of the service activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Shows the value selected in the Duration field on the service activity at the time the service activity is closed as completed. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the service activity. By default, it displays when the activity was closed or canceled. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the actual start date and time for the service activity. By default, it displays when the activity was created. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Type a category to identify the service activity type, such as routine maintenance or service call, to tie the service activity to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the activity. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the service activity, such as key talking points or objectives. */
		Description: DevKit.WebApi.StringValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select whether the service activity is an all-day event to make sure the required resources are scheduled for the full day. */
		IsAllDayEvent: DevKit.WebApi.BooleanValue;
		/** Information which specifies whether the service activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information which specifies if the service activity was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Type the location where the service activity will take place, such as a conference room, customer office, or other venue. */
		Location: DevKit.WebApi.StringValue;
		/** Unique identifier of user who last modified the activity. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when activity was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_account_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_bookableresourcebooking_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_bookableresourcebookingheader_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_bulkoperation_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_campaign_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_campaignactivity_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_contact_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_contract_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_entitlement_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_entitlementtemplate_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_incident_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_new_interactionforemail_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_invoice_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_knowledgearticle_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_knowledgebaserecord_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_lead_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_playbookinstance_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_postalbum_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_opportunity_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_quote_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_salesorder_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_site_serviceappointment: DevKit.WebApi.LookupValue;
		/** Shows the expected duration of the service activity, in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Choose the service scheduled to be performed during the service activity. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the site or location where the service activity will be performed. */
		SiteId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the service appointment record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this email. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the service activity is open, completed, or canceled. Completed and canceled service activities are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the service activity's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the service activity type and relate the activity to a specific product, service region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the service activity. */
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
		/** Version number of the activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace ServiceAppointment {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
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
			Closed,
			/** 2 */
			Canceled,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 1 */
			Requested,
			/** 2 */
			Tentative,
			/** 3 */
			Pending,
			/** 4 */
			Reserved,
			/** 6 */
			In_Progress,
			/** 7 */
			Arrived,
			/** 8 */
			Completed,
			/** 9 */
			Canceled,
			/** 10 */
			No_Show
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}