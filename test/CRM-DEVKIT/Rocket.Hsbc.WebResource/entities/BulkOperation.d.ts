///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class BulkOperationApi {
		/**
		* PL.DynamicsCrm.DevKit BulkOperationApi
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
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the bulk operation. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Actual duration of the bulk operation in minutes. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the date and time when the quick campaign was completed or canceled. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date and time when the activity was started or created. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the number for the quick campaign record, used to identify the quick campaign. */
		BulkOperationNumber: DevKit.WebApi.StringValueReadonly;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the bulk operation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the activity to create that determines how target prospects or customers in this quick campaign are contacted. */
		CreatedRecordTypeCode: DevKit.WebApi.OptionSetValue;
		/** Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the quick campaign, such as the products or services offered. */
		Description: DevKit.WebApi.StringValueReadonly;
		/** Shows the error code that is used to troubleshoot issues in the quick campaign. */
		ErrorNumber: DevKit.WebApi.IntegerValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Number of records which failed in the bulk operation. */
		FailureCount: DevKit.WebApi.IntegerValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** For internal use only. */
		IsBilled: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Specifies if the bulk operation was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValueReadonly;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the bulk operation was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the bulk operation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Select the type of bulk operation process, such as quick campaign or campaign activity distribution. */
		OperationTypeCode: DevKit.WebApi.OptionSetValue;
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
		/** XML string that contains the parameters to the bulk operation. */
		Parameters: DevKit.WebApi.StringValue;
		/** For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of the activity. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the campaign from which the campaign activities were bulk-distributed. */
		regardingobjectid_campaignactivity_bulkoperation: DevKit.WebApi.LookupValue;
		/** Choose the campaign from which the campaign activities were bulk-distributed. */
		regardingobjectid_list: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the bulk operation, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Scheduled end date and time of the bulk operation. */
		ScheduledEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Scheduled start date and time of the bulk operation. */
		ScheduledStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for an associated service. */
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
		/** Shows whether the quick campaign is open, closed, or canceled.  Closed or canceled quick campaigns are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select the quick campaign's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a short description about the objective or primary topic of the quick campaign. */
		Subject: DevKit.WebApi.StringValue;
		/** Number of records which succeeded in the bulk operation. */
		SuccessCount: DevKit.WebApi.IntegerValue;
		/** Select the type of records targeted in the quick campaign to identify the target audience. */
		TargetedRecordTypeCode: DevKit.WebApi.OptionSetValue;
		/** Number of members to target. */
		TargetMembersCount: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Information for bulk operation workflow. */
		WorkflowInfo: DevKit.WebApi.StringValue;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace BulkOperation {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum CreatedRecordTypeCode {
			/** 1 */
			Phone_Call,
			/** 2 */
			Fax,
			/** 3 */
			Letter,
			/** 4 */
			Email,
			/** 5 */
			Appointment,
			/** 6 */
			Send_Direct_Email
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
		enum OperationTypeCode {
			/** 1 */
			Create_Opportunities,
			/** 2 */
			Create_Activities,
			/** 3 */
			Send_Direct_Mail,
			/** 4 */
			Distribute,
			/** 5 */
			Execute,
			/** 7 */
			Quick_Campaign
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
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Pending,
			/** 2 */
			In_Progress,
			/** 3 */
			Aborted,
			/** 4 */
			Completed,
			/** 5 */
			Canceled
		}
		enum TargetedRecordTypeCode {
			/** 1 */
			Account,
			/** 2 */
			Contact,
			/** 4 */
			Lead
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}