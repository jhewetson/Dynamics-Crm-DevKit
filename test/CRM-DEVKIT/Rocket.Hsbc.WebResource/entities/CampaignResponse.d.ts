﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormCampaignResponse {
		interface tab_newcampaignresponse_Sections {
			summary: DevKit.Form.Controls.ControlSection;
			details: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_newcampaignresponse extends DevKit.Form.Controls.IControlTab {
			Section: tab_newcampaignresponse_Sections;
		}
		interface Tabs {
			newcampaignresponse: tab_newcampaignresponse;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the account, contact, or lead that submitted the campaign response, if it was received from an existing prospect or customer. */
			Customer: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the campaign response, such as key discussion points or objectives. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
			ResponseCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a short description about the objective or primary topic of the campaign response. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCampaignResponse extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form CampaignResponse
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form CampaignResponse */
		Body: Hsbc.FormCampaignResponse.Body;
	}
	class CampaignResponseApi {
		/**
		* PL.DynamicsCrm.DevKit CampaignResponseApi
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
		/** Unique identifier of the campaign response. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent on this activity. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the date when the campaign response was actually completed. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the campaign response. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type a category to identify the campaign response type, such as new business development or customer retention, to tie the campaign response to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Select how the response was received, such as phone, letter, fax, or email. */
		ChannelTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Type the name of the company if the campaign response was received from a new prospect or customer. */
		CompanyName: DevKit.WebApi.StringValue;
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
		/** Type additional information to describe the campaign response, such as key discussion points or objectives. */
		Description: DevKit.WebApi.StringValue;
		/** Type the responder's email address. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Type the responder's fax number. */
		Fax: DevKit.WebApi.StringValue;
		/** Type the responder's first name if the campaign response was received from a new prospect or customer. */
		FirstName: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Specifies whether the campaign response was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Specifies whether the campaign response is created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Type the responder's last name if the campaign response was received from a new prospect or customer. */
		LastName: DevKit.WebApi.StringValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Unique identifier of user who last modified the activity. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when activity was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_appointment: DevKit.WebApi.LookupValue;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_email: DevKit.WebApi.LookupValue;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_fax: DevKit.WebApi.LookupValue;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_letter: DevKit.WebApi.LookupValue;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_phonecall: DevKit.WebApi.LookupValue;
		OriginatingActivityName: DevKit.WebApi.StringValueReadonly;
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
		/** Type a promotional code to track sales related to the campaign response or to allow the responder to redeem a discount offer. */
		PromotionCodeName: DevKit.WebApi.StringValue;
		/** Enter the date when the campaign response was received. */
		ReceivedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
		regardingobjectid_bulkoperation_campaignresponse: DevKit.WebApi.LookupValue;
		/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
		regardingobjectid_campaign_campaignresponse: DevKit.WebApi.LookupValue;
		/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
		ResponseCode: DevKit.WebApi.OptionSetValue;
		/** Scheduled duration of the campaign response in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign response. */
		ScheduledEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the expected start date and time for the activity to provide details about the timing of the campaign response. */
		ScheduledStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for the associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the campaign response is open, closed, or canceled. Closed and canceled campaign responses are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the campaign response's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the campaign response type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the campaign response. */
		Subject: DevKit.WebApi.StringValue;
		/** Type the responder's primary phone number. */
		Telephone: DevKit.WebApi.StringValue;
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
		/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiCompanyName: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the campaign responder's first name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiFirstName: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the campaign responder's last name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiLastName: DevKit.WebApi.StringValue;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace CampaignResponse {
		enum ChannelTypeCode {
			/** 1 */
			Email,
			/** 2 */
			Phone,
			/** 3 */
			Fax,
			/** 4 */
			Letter,
			/** 5 */
			Appointment,
			/** 6 */
			Others
		}
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
		enum ResponseCode {
			/** 1 */
			Interested,
			/** 2 */
			Not_Interested,
			/** 3 */
			Do_Not_Send_Marketing_Materials,
			/** 4 */
			Error
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Closed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Closed,
			/** 3 */
			Canceled
		}
	}
}
//{'JsForm':['Campaign Response'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}