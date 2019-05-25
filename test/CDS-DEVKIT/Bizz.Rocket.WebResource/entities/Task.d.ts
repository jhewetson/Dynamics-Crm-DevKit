///<reference path='devkit.intellisense.js' />
Rocket.FormTask = function (executionContext, defaultWebResourceName) {
	var task = intellisense.Form;
	task.Utility = intellisense.Utility;
	var tab = {};
	tab.TASK_TAB = {
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
			TASK: intellisense.FormSection,
			Description: intellisense.FormSection,
			task_details: intellisense.FormSection,
			tab_2_section_2: intellisense.FormSection
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
	task.Body = body;
	var header = {
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup,
		///<field name='PriorityCode' type='OptionSet'></field>
		PriorityCode: intellisense.FieldOptionSet,
		///<field name='ScheduledEnd' type='DateTime'></field>
		ScheduledEnd: intellisense.FieldDateTime,
		///<field name='StateCode' type='OptionSet'></field>
		StateCode: intellisense.FieldOptionSet
	};
	task.Header = header;
	var footer = {

	};
	task.Footer = footer;
	var quickForm = {

	};
	task.QuickForm = quickForm;
	var navigation = {

	};
	task.Navigation = navigation;
	task.OptionSet = {};
	///<field name='PriorityCode' type='PickList'></field>
	task.OptionSet.PriorityCode = {
		///<field name='Low' type='PickListValue'>Low = 0</field>
		Low: 0,
		///<field name='Normal' type='PickListValue'>Normal = 1</field>
		Normal: 1,
		///<field name='High' type='PickListValue'>High = 2</field>
		High: 2
	};
	///<field name='StateCode' type='PickList'></field>
	task.OptionSet.StateCode = {
		///<field name='Open' type='PickListValue'>Open = 0</field>
		Open: 0,
		///<field name='Completed' type='PickListValue'>Completed = 1</field>
		Completed: 1,
		///<field name='Canceled' type='PickListValue'>Canceled = 2</field>
		Canceled: 2
	};
	///<field name='StatusCode' type='PickList'></field>
	task.OptionSet.StatusCode = {
		///<field name='Not_Started' type='PickListValue'>Not_Started = 2</field>
		Not_Started: 2,
		///<field name='In_Progress' type='PickListValue'>In_Progress = 3</field>
		In_Progress: 3,
		///<field name='Waiting_on_someone_else' type='PickListValue'>Waiting_on_someone_else = 4</field>
		Waiting_on_someone_else: 4,
		///<field name='Completed' type='PickListValue'>Completed = 5</field>
		Completed: 5,
		///<field name='Canceled' type='PickListValue'>Canceled = 6</field>
		Canceled: 6,
		///<field name='Deferred' type='PickListValue'>Deferred = 7</field>
		Deferred: 7
	};
	return task;
};
Rocket.TaskApi = function (entity) {
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
		///<field name='Category' type='String'>Edm.String</field>
		Category: intellisense.EntityValue,
		///<field name='CreatedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name='CreatedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='CreatedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name='CrmTaskAssignedUniqueId' type='Uniqueidentifier'>Edm.Guid</field>
		CrmTaskAssignedUniqueId: intellisense.EntityValue,
		///<field name='Description' type='Memo'>Edm.String</field>
		Description: intellisense.EntityValue,
		///<field name='ExchangeRate' type='Decimal'>ReadOnly - Edm.Decimal</field>
		ExchangeRate: intellisense.EntityValue,
		///<field name='ImportSequenceNumber' type='Integer'>Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name='IsBilled' type='Boolean'>Edm.Boolean</field>
		IsBilled: intellisense.EntityValue,
		///<field name='IsRegularActivity' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsRegularActivity: intellisense.EntityValue,
		///<field name='IsWorkflowCreated' type='Boolean'>Edm.Boolean</field>
		IsWorkflowCreated: intellisense.EntityValue,
		///<field name='LastOnHoldTime_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		LastOnHoldTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name='ModifiedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
		///<field name='OnHoldTime' type='Integer'>ReadOnly - Edm.Int32</field>
		OnHoldTime: intellisense.EntityValue,
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
		///<field name='PercentComplete' type='Integer'>Edm.Int32</field>
		PercentComplete: intellisense.EntityValue,
		///<field name='PriorityCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PriorityCode</field>
		PriorityCode: intellisense.EntityValue,
		///<field name='ProcessId' type='Uniqueidentifier'>Edm.Guid</field>
		ProcessId: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_account_task: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_contact_task: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_devkit_webapi_task: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_knowledgearticle_task: intellisense.EntityValue,
		///<field name='RegardingObjectId' type='Lookup'>Edm.Guid</field>
		regardingobjectid_knowledgebaserecord_task: intellisense.EntityValue,
		///<field name='ScheduledDurationMinutes' type='Integer'>ReadOnly - Edm.Int32</field>
		ScheduledDurationMinutes: intellisense.EntityValue,
		///<field name='ScheduledEnd_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		ScheduledEnd_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ScheduledStart_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		ScheduledStart_UtcDateAndTime: intellisense.EntityValue,
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
		///<field name='SubscriptionId' type='Uniqueidentifier'>Edm.Guid</field>
		SubscriptionId: intellisense.EntityValue,
		///<field name='TimeZoneRuleVersionNumber' type='Integer'>Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
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
				///<field name='Not_Started' type='PickListValue'>Not_Started = 2</field>
				Not_Started: 2,
				///<field name='In_Progress' type='PickListValue'>In_Progress = 3</field>
				In_Progress: 3,
				///<field name='Waiting_on_someone_else' type='PickListValue'>Waiting_on_someone_else = 4</field>
				Waiting_on_someone_else: 4,
				///<field name='Completed' type='PickListValue'>Completed = 5</field>
				Completed: 5,
				///<field name='Canceled' type='PickListValue'>Canceled = 6</field>
				Canceled: 6,
				///<field name='Deferred' type='PickListValue'>Deferred = 7</field>
				Deferred: 7
			}
		}
	};
};
//{'JsForm':['Task'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}