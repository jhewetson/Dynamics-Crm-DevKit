///<reference path='devkit.intellisense.js' />
Rocket.FormEmail = function (executionContext, defaultWebResourceName) {
	var email = intellisense.Form;
	email.Utility = intellisense.Utility;
	var tab = {};
	tab.Email = {
		///<field name='AddTabStateChange' type='Function'></field>
		AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
		///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
		DisplayState: '',
		///<field name='Focus' type='Function'></field>
		Focus: intellisense.FunctionControlFocus,
		///<field name='Label' type='String'>[GetSet] the tab label.</field>
		Label: '',
		///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
		Name: '',
		///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
		Parent: '',
		///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
		Visible: '',
		///<field name='RemoveTabStateChange' type='Function'></field>
		RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
		///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
		Section: {
			recipient_information: intellisense.FormSection,
			email_description: intellisense.FormSection,
			Regarding_information: intellisense.FormSection,
			attachments: intellisense.FormSection,
			emailengagementactions: intellisense.FormSection,
			Emailrecipient_section_6: intellisense.FormSection,
			tab_4_section_2: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='ActualDurationMinutes' type='Integer'></field>
		ActualDurationMinutes: intellisense.FieldNumber,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='RegardingObjectId' type='Lookup'></field>
		RegardingObjectId: intellisense.FieldLookup,
		///<field name='Subject' type='String'></field>
		Subject: intellisense.FieldString
	};
	email.Body = body;
	var header = {
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup,
		///<field name='PriorityCode' type='OptionSet'></field>
		PriorityCode: intellisense.FieldOptionSet,
		///<field name='ScheduledEnd' type='DateTime'></field>
		ScheduledEnd: intellisense.FieldDateTime,
		///<field name='StatusCode' type='OptionSet'></field>
		StatusCode: intellisense.FieldOptionSet
	};
	email.Header = header;
	var footer = {
		///<field name='IsEmailFollowed' type='Boolean'></field>
		IsEmailFollowed: intellisense.FieldBoolean,
		///<field name='IsEmailReminderSet' type='Boolean'></field>
		IsEmailReminderSet: intellisense.FieldBoolean
	};
	email.Footer = footer;
	var quickForm = {

	};
	email.QuickForm = quickForm;
	var navigation = {

	};
	email.Navigation = navigation;
	email.OptionSet = {};
	///<field name='CorrelationMethod' type='PickList'></field>
	email.OptionSet.CorrelationMethod = {
		///<field name='None' type='PickListValue'>None = 0</field>
		None: 0,
		///<field name='Skipped' type='PickListValue'>Skipped = 1</field>
		Skipped: 1,
		///<field name='XHeader' type='PickListValue'>XHeader = 2</field>
		XHeader: 2,
		///<field name='InReplyTo' type='PickListValue'>InReplyTo = 3</field>
		InReplyTo: 3,
		///<field name='TrackingToken' type='PickListValue'>TrackingToken = 4</field>
		TrackingToken: 4,
		///<field name='ConversationIndex' type='PickListValue'>ConversationIndex = 5</field>
		ConversationIndex: 5,
		///<field name='SmartMatching' type='PickListValue'>SmartMatching = 6</field>
		SmartMatching: 6,
		///<field name='CustomCorrelation' type='PickListValue'>CustomCorrelation = 7</field>
		CustomCorrelation: 7
	};
	///<field name='DeliveryPriorityCode' type='PickList'></field>
	email.OptionSet.DeliveryPriorityCode = {
		///<field name='Low' type='PickListValue'>Low = 0</field>
		Low: 0,
		///<field name='Normal' type='PickListValue'>Normal = 1</field>
		Normal: 1,
		///<field name='High' type='PickListValue'>High = 2</field>
		High: 2
	};
	///<field name='EmailReminderStatus' type='PickList'></field>
	email.OptionSet.EmailReminderStatus = {
		///<field name='NotSet' type='PickListValue'>NotSet = 0</field>
		NotSet: 0,
		///<field name='ReminderSet' type='PickListValue'>ReminderSet = 1</field>
		ReminderSet: 1,
		///<field name='ReminderExpired' type='PickListValue'>ReminderExpired = 2</field>
		ReminderExpired: 2,
		///<field name='ReminderInvalid' type='PickListValue'>ReminderInvalid = 3</field>
		ReminderInvalid: 3
	};
	///<field name='EmailReminderType' type='PickList'></field>
	email.OptionSet.EmailReminderType = {
		///<field name='If_I_do_not_receive_a_reply_by' type='PickListValue'>If_I_do_not_receive_a_reply_by = 0</field>
		If_I_do_not_receive_a_reply_by: 0,
		///<field name='If_the_email_is_not_opened_by' type='PickListValue'>If_the_email_is_not_opened_by = 1</field>
		If_the_email_is_not_opened_by: 1,
		///<field name='Remind_me_anyways_at' type='PickListValue'>Remind_me_anyways_at = 2</field>
		Remind_me_anyways_at: 2
	};
	///<field name='Notifications' type='PickList'></field>
	email.OptionSet.Notifications = {
		///<field name='None' type='PickListValue'>None = 0</field>
		None: 0,
		///<field name='The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid' type='PickListValue'>The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid = 1</field>
		The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1,
		///<field name='Truncated_body' type='PickListValue'>Truncated_body = 2</field>
		Truncated_body: 2
	};
	///<field name='PriorityCode' type='PickList'></field>
	email.OptionSet.PriorityCode = {
		///<field name='Low' type='PickListValue'>Low = 0</field>
		Low: 0,
		///<field name='Normal' type='PickListValue'>Normal = 1</field>
		Normal: 1,
		///<field name='High' type='PickListValue'>High = 2</field>
		High: 2
	};
	///<field name='StateCode' type='PickList'></field>
	email.OptionSet.StateCode = {
		///<field name='Open' type='PickListValue'>Open = 0</field>
		Open: 0,
		///<field name='Completed' type='PickListValue'>Completed = 1</field>
		Completed: 1,
		///<field name='Canceled' type='PickListValue'>Canceled = 2</field>
		Canceled: 2
	};
	///<field name='StatusCode' type='PickList'></field>
	email.OptionSet.StatusCode = {
		///<field name='Draft' type='PickListValue'>Draft = 1</field>
		Draft: 1,
		///<field name='Completed' type='PickListValue'>Completed = 2</field>
		Completed: 2,
		///<field name='Sent' type='PickListValue'>Sent = 3</field>
		Sent: 3,
		///<field name='Received' type='PickListValue'>Received = 4</field>
		Received: 4,
		///<field name='Canceled' type='PickListValue'>Canceled = 5</field>
		Canceled: 5,
		///<field name='Pending_Send' type='PickListValue'>Pending_Send = 6</field>
		Pending_Send: 6,
		///<field name='Sending' type='PickListValue'>Sending = 7</field>
		Sending: 7,
		///<field name='Failed' type='PickListValue'>Failed = 8</field>
		Failed: 8
	};
	return email;
};
Rocket.EmailApi = function (entity) {
	return {
		///<field name='ActivityAdditionalParams' type='Memo'>Edm.String</field>
		ActivityAdditionalParams: intellisense.EntityValue,
		///<field name='ActivityId' type='Uniqueidentifier'>Edm.Guid</field>
		ActivityId: intellisense.EntityValue,
		///<field name='ActualDurationMinutes' type='Integer'>Edm.Int32</field>
		ActualDurationMinutes: intellisense.EntityValue,
		///<field name='ActualEnd_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		ActualEnd_UtcDateOnly: intellisense.EntityValue,
		///<field name='ActualStart_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		ActualStart_UtcDateOnly: intellisense.EntityValue,
		///<field name='AttachmentCount' type='Integer'>ReadOnly - Edm.Int32</field>
		AttachmentCount: intellisense.EntityValue,
		///<field name='AttachmentOpenCount' type='Integer'>Edm.Int32</field>
		AttachmentOpenCount: intellisense.EntityValue,
		///<field name='BaseConversationIndexHash' type='Integer'>Edm.Int32</field>
		BaseConversationIndexHash: intellisense.EntityValue,
		///<field name='Category' type='String'>Edm.String</field>
		Category: intellisense.EntityValue,
		///<field name='Compressed' type='Boolean'>ReadOnly - Edm.Boolean</field>
		Compressed: intellisense.EntityValue,
		///<field name='ConversationIndex' type='String'>ReadOnly - Edm.String</field>
		ConversationIndex: intellisense.EntityValue,
		///<field name='ConversationTrackingId' type='Uniqueidentifier'>Edm.Guid</field>
		ConversationTrackingId: intellisense.EntityValue,
		///<field name='CorrelationMethod' type='OptionSet'>ReadOnly - Edm.Int32 - this.OptionSet.CorrelationMethod</field>
		CorrelationMethod: intellisense.EntityValue,
		///<field name='CreatedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name='CreatedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='CreatedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name='DelayedEmailSendTime_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		DelayedEmailSendTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='DeliveryAttempts' type='Integer'>Edm.Int32</field>
		DeliveryAttempts: intellisense.EntityValue,
		///<field name='DeliveryPriorityCode' type='OptionSet'>Edm.Int32 - this.OptionSet.DeliveryPriorityCode</field>
		DeliveryPriorityCode: intellisense.EntityValue,
		///<field name='DeliveryReceiptRequested' type='Boolean'>Edm.Boolean</field>
		DeliveryReceiptRequested: intellisense.EntityValue,
		///<field name='Description' type='Memo'>Edm.String</field>
		Description: intellisense.EntityValue,
		///<field name='DirectionCode' type='Boolean'>Edm.Boolean</field>
		DirectionCode: intellisense.EntityValue,
		///<field name='EmailReminderExpiryTime_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		EmailReminderExpiryTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='EmailReminderStatus' type='OptionSet'>ReadOnly - Edm.Int32 - this.OptionSet.EmailReminderStatus</field>
		EmailReminderStatus: intellisense.EntityValue,
		///<field name='EmailReminderText' type='String'>Edm.String</field>
		EmailReminderText: intellisense.EntityValue,
		///<field name='EmailReminderType' type='OptionSet'>Edm.Int32 - this.OptionSet.EmailReminderType</field>
		EmailReminderType: intellisense.EntityValue,
		///<field name='EmailSender' type='Lookup'>ReadOnly - Edm.Guid</field>
		emailsender_account: intellisense.EntityValue,
		///<field name='EmailSender' type='Lookup'>ReadOnly - Edm.Guid</field>
		emailsender_contact: intellisense.EntityValue,
		///<field name='EmailSender' type='Lookup'>ReadOnly - Edm.Guid</field>
		emailsender_queue: intellisense.EntityValue,
		///<field name='EmailSender' type='Lookup'>ReadOnly - Edm.Guid</field>
		emailsender_systemuser: intellisense.EntityValue,
		///<field name='EmailTrackingId' type='Uniqueidentifier'>Edm.Guid</field>
		EmailTrackingId: intellisense.EntityValue,
		///<field name='ExchangeRate' type='Decimal'>ReadOnly - Edm.Decimal</field>
		ExchangeRate: intellisense.EntityValue,
		///<field name='FollowEmailUserPreference' type='Boolean'>Edm.Boolean</field>
		FollowEmailUserPreference: intellisense.EntityValue,
		///<field name='ImportSequenceNumber' type='Integer'>Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name='InReplyTo' type='String'>ReadOnly - Edm.String</field>
		InReplyTo: intellisense.EntityValue,
		///<field name='IsBilled' type='Boolean'>Edm.Boolean</field>
		IsBilled: intellisense.EntityValue,
		///<field name='IsEmailFollowed' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsEmailFollowed: intellisense.EntityValue,
		///<field name='IsEmailReminderSet' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsEmailReminderSet: intellisense.EntityValue,
		///<field name='IsRegularActivity' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsRegularActivity: intellisense.EntityValue,
		///<field name='IsUnsafe' type='Integer'>ReadOnly - Edm.Int32</field>
		IsUnsafe: intellisense.EntityValue,
		///<field name='IsWorkflowCreated' type='Boolean'>Edm.Boolean</field>
		IsWorkflowCreated: intellisense.EntityValue,
		///<field name='LastOnHoldTime_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		LastOnHoldTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='LastOpenedTime_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		LastOpenedTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='LinksClickedCount' type='Integer'>Edm.Int32</field>
		LinksClickedCount: intellisense.EntityValue,
		///<field name='MessageId' type='String'>Edm.String</field>
		MessageId: intellisense.EntityValue,
		///<field name='MimeType' type='String'>Edm.String</field>
		MimeType: intellisense.EntityValue,
		///<field name='ModifiedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name='ModifiedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
		///<field name='Notifications' type='OptionSet'>Edm.Int32 - this.OptionSet.Notifications</field>
		Notifications: intellisense.EntityValue,
		///<field name='OnHoldTime' type='Integer'>ReadOnly - Edm.Int32</field>
		OnHoldTime: intellisense.EntityValue,
		///<field name='OpenCount' type='Integer'>Edm.Int32</field>
		OpenCount: intellisense.EntityValue,
		///<field name='OverriddenCreatedOn_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		OverriddenCreatedOn_UtcDateOnly: intellisense.EntityValue,
		///<field name='OwnerId_systemuser' type='Lookup'></field>
		OwnerId_systemuser: intellisense.EntityValue,
		///<field name='OwnerId_team' type='Lookup'></field>
		OwnerId_team: intellisense.EntityValue,
		///<field name='OwningBusinessUnit' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningBusinessUnit: intellisense.EntityValue,
		///<field name='OwningTeam' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningTeam: intellisense.EntityValue,
		///<field name='OwningUser' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningUser: intellisense.EntityValue,
		///<field name='ParentActivityId' type='Lookup'>Edm.Guid</field>
		ParentActivityId: intellisense.EntityValue,
		///<field name='PostponeEmailProcessingUntil_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		PostponeEmailProcessingUntil_UtcDateAndTime: intellisense.EntityValue,
		///<field name='PriorityCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PriorityCode</field>
		PriorityCode: intellisense.EntityValue,
		///<field name='ProcessId' type='Uniqueidentifier'>Edm.Guid</field>
		ProcessId: intellisense.EntityValue,
		///<field name='ReadReceiptRequested' type='Boolean'>Edm.Boolean</field>
		ReadReceiptRequested: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_account_email: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_asyncoperation: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_contact_email: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_devkit_webapi_email: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_knowledgearticle_email: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_knowledgebaserecord_email: intellisense.EntityValue,
		///<field name='ReminderActionCardId' type='Uniqueidentifier'>Edm.Guid</field>
		ReminderActionCardId: intellisense.EntityValue,
		///<field name='ReplyCount' type='Integer'>ReadOnly - Edm.Int32</field>
		ReplyCount: intellisense.EntityValue,
		///<field name='ScheduledDurationMinutes' type='Integer'>ReadOnly - Edm.Int32</field>
		ScheduledDurationMinutes: intellisense.EntityValue,
		///<field name='ScheduledEnd_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		ScheduledEnd_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ScheduledStart_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		ScheduledStart_UtcDateAndTime: intellisense.EntityValue,
		///<field name='Sender' type='String'>Edm.String</field>
		Sender: intellisense.EntityValue,
		///<field name='SenderMailboxId' type='Lookup'>ReadOnly - Edm.Guid</field>
		SenderMailboxId: intellisense.EntityValue,
		///<field name='SendersAccount' type='Lookup'>ReadOnly - Edm.Guid</field>
		SendersAccount: intellisense.EntityValue,
		///<field name='SentOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		SentOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='SLAId' type='Lookup'>Edm.Guid</field>
		SLAId: intellisense.EntityValue,
		///<field name='SLAInvokedId' type='Lookup'>ReadOnly - Edm.Guid</field>
		SLAInvokedId: intellisense.EntityValue,
		///<field name='SortDate_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		SortDate_UtcDateAndTime: intellisense.EntityValue,
		///<field name='StageId' type='Uniqueidentifier'>Edm.Guid</field>
		StageId: intellisense.EntityValue,
		///<field name='StateCode' type='OptionSet'>Edm.Int32 - this.OptionSet.StateCode</field>
		StateCode: intellisense.EntityValue,
		///<field name='StatusCode' type='OptionSet'>Edm.Int32 - this.OptionSet.StatusCode</field>
		StatusCode: intellisense.EntityValue,
		///<field name='Subcategory' type='String'>Edm.String</field>
		Subcategory: intellisense.EntityValue,
		///<field name='Subject' type='String'>Edm.String</field>
		Subject: intellisense.EntityValue,
		///<field name='SubmittedBy' type='String'>Edm.String</field>
		SubmittedBy: intellisense.EntityValue,
		///<field name='TemplateId' type='Lookup'>Edm.Guid</field>
		TemplateId: intellisense.EntityValue,
		///<field name='TimeZoneRuleVersionNumber' type='Integer'>Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
		///<field name='ToRecipients' type='String'>Edm.String</field>
		ToRecipients: intellisense.EntityValue,
		///<field name='TrackingToken' type='String'>Edm.String</field>
		TrackingToken: intellisense.EntityValue,
		///<field name='TransactionCurrencyId' type='Lookup'>Edm.Guid</field>
		TransactionCurrencyId: intellisense.EntityValue,
		///<field name='TraversedPath' type='String'>Edm.String</field>
		TraversedPath: intellisense.EntityValue,
		///<field name='UTCConversionTimeZoneCode' type='Integer'>Edm.Int32</field>
		UTCConversionTimeZoneCode: intellisense.EntityValue,
		///<field name='VersionNumber' type='BigInt'>ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name='Entity' type='Object'></field>
		Entity: null,
		///<field name='EntityName' type='String'></field>
		EntityName: null,
		///<field name='EntityCollectionName' type='String'></field>
		EntityCollectionName: null,
		///<field name='OptionSet' type='Object'></field>
		OptionSet: {
			///<field name='CorrelationMethod' type='PickList'></field>
			CorrelationMethod: {
				///<field name='None' type='PickListValue'>None = 0</field>
				None: 0,
				///<field name='Skipped' type='PickListValue'>Skipped = 1</field>
				Skipped: 1,
				///<field name='XHeader' type='PickListValue'>XHeader = 2</field>
				XHeader: 2,
				///<field name='InReplyTo' type='PickListValue'>InReplyTo = 3</field>
				InReplyTo: 3,
				///<field name='TrackingToken' type='PickListValue'>TrackingToken = 4</field>
				TrackingToken: 4,
				///<field name='ConversationIndex' type='PickListValue'>ConversationIndex = 5</field>
				ConversationIndex: 5,
				///<field name='SmartMatching' type='PickListValue'>SmartMatching = 6</field>
				SmartMatching: 6,
				///<field name='CustomCorrelation' type='PickListValue'>CustomCorrelation = 7</field>
				CustomCorrelation: 7
			},
			///<field name='DeliveryPriorityCode' type='PickList'></field>
			DeliveryPriorityCode: {
				///<field name='Low' type='PickListValue'>Low = 0</field>
				Low: 0,
				///<field name='Normal' type='PickListValue'>Normal = 1</field>
				Normal: 1,
				///<field name='High' type='PickListValue'>High = 2</field>
				High: 2
			},
			///<field name='EmailReminderStatus' type='PickList'></field>
			EmailReminderStatus: {
				///<field name='NotSet' type='PickListValue'>NotSet = 0</field>
				NotSet: 0,
				///<field name='ReminderSet' type='PickListValue'>ReminderSet = 1</field>
				ReminderSet: 1,
				///<field name='ReminderExpired' type='PickListValue'>ReminderExpired = 2</field>
				ReminderExpired: 2,
				///<field name='ReminderInvalid' type='PickListValue'>ReminderInvalid = 3</field>
				ReminderInvalid: 3
			},
			///<field name='EmailReminderType' type='PickList'></field>
			EmailReminderType: {
				///<field name='If_I_do_not_receive_a_reply_by' type='PickListValue'>If_I_do_not_receive_a_reply_by = 0</field>
				If_I_do_not_receive_a_reply_by: 0,
				///<field name='If_the_email_is_not_opened_by' type='PickListValue'>If_the_email_is_not_opened_by = 1</field>
				If_the_email_is_not_opened_by: 1,
				///<field name='Remind_me_anyways_at' type='PickListValue'>Remind_me_anyways_at = 2</field>
				Remind_me_anyways_at: 2
			},
			///<field name='Notifications' type='PickList'></field>
			Notifications: {
				///<field name='None' type='PickListValue'>None = 0</field>
				None: 0,
				///<field name='The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid' type='PickListValue'>The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid = 1</field>
				The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1,
				///<field name='Truncated_body' type='PickListValue'>Truncated_body = 2</field>
				Truncated_body: 2
			},
			///<field name='PriorityCode' type='PickList'></field>
			PriorityCode: {
				///<field name='Low' type='PickListValue'>Low = 0</field>
				Low: 0,
				///<field name='Normal' type='PickListValue'>Normal = 1</field>
				Normal: 1,
				///<field name='High' type='PickListValue'>High = 2</field>
				High: 2
			},
			///<field name='StateCode' type='PickList'></field>
			StateCode: {
				///<field name='Open' type='PickListValue'>Open = 0</field>
				Open: 0,
				///<field name='Completed' type='PickListValue'>Completed = 1</field>
				Completed: 1,
				///<field name='Canceled' type='PickListValue'>Canceled = 2</field>
				Canceled: 2
			},
			///<field name='StatusCode' type='PickList'></field>
			StatusCode: {
				///<field name='Draft' type='PickListValue'>Draft = 1</field>
				Draft: 1,
				///<field name='Completed' type='PickListValue'>Completed = 2</field>
				Completed: 2,
				///<field name='Sent' type='PickListValue'>Sent = 3</field>
				Sent: 3,
				///<field name='Received' type='PickListValue'>Received = 4</field>
				Received: 4,
				///<field name='Canceled' type='PickListValue'>Canceled = 5</field>
				Canceled: 5,
				///<field name='Pending_Send' type='PickListValue'>Pending_Send = 6</field>
				Pending_Send: 6,
				///<field name='Sending' type='PickListValue'>Sending = 7</field>
				Sending: 7,
				///<field name='Failed' type='PickListValue'>Failed = 8</field>
				Failed: 8
			}
		}
	};
};
//{'JsForm':['Email'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}