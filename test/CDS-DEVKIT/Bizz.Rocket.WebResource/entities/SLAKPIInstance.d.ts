///<reference path='DevKit.d.ts' />
declare namespace Rocket {
	namespace FormSLAKPIInstance {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
			Status: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
			FailureTime: DevKit.Form.Controls.ControlDateTime;
			/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
			Regarding: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
			SucceededOn: DevKit.Form.Controls.ControlDateTime;
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
			WarningTime: DevKit.Form.Controls.ControlDateTime;
		}
	}
	class FormSLAKPIInstance extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form SLAKPIInstance
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SLAKPIInstance */
		Body: Rocket.FormSLAKPIInstance.Body;
		/** The Header section of form SLAKPIInstance */
		Header: Rocket.FormSLAKPIInstance.Header;
	}
	class SLAKPIInstanceApi {
		/**
		* PL.DynamicsCrm.DevKit SLAKPIInstanceApi
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
		/** Computed Failure Date and time */
		ComputedFailureTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Computed Warning Date and time */
		ComputedWarningTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		Description: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
		FailureTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Owning Business Unit. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** OwningTeam. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** Owning User. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_task: DevKit.WebApi.LookupValue;
		/** RegardingName */
		RegardingIdName: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the SLA KPI Instance. */
		SLAKPIInstanceId: DevKit.WebApi.GuidValue;
		/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
		Status: DevKit.WebApi.OptionSetValue;
		/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
		SucceededOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
		WarningTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows information about whether the case has reached its warning time. */
		WarningTimeReached: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace SLAKPIInstance {
		enum Status {
			/** 0 */
			In_Progress,
			/** 1 */
			Noncompliant,
			/** 2 */
			Nearing_Noncompliance,
			/** 3 */
			Paused,
			/** 4 */
			Succeeded,
			/** 5 */
			Canceled
		}
		enum WarningTimeReached {
			/** 0 */
			No,
			/** 1 */
			Yes
		}
	}
}
//{'JsForm':['SLA KPI Instance'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}