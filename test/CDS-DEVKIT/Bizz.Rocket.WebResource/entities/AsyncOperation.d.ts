﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class AsyncOperationApi {
		/**
		* PL.DynamicsCrm.DevKit AsyncOperationApi
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
		/** Unique identifier of the system job. */
		AsyncOperationId: DevKit.WebApi.GuidValue;
		/** Date and time when the system job was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier used to correlate between multiple SDK requests and system jobs. */
		CorrelationId: DevKit.WebApi.GuidValue;
		/** Last time the correlation depth was updated. */
		CorrelationUpdatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who created the system job. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system job was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the asyncoperation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unstructured data associated with the system job. */
		Data: DevKit.WebApi.StringValue;
		/** Execution of all operations with the same dependency token is serialized. */
		DependencyToken: DevKit.WebApi.StringValue;
		/** Number of SDK calls made since the first call. */
		Depth: DevKit.WebApi.IntegerValue;
		/** Error code returned from a canceled system job. */
		ErrorCode: DevKit.WebApi.IntegerValueReadonly;
		/** Time that the system job has taken to execute. */
		ExecutionTimeSpan: DevKit.WebApi.DoubleValueReadonly;
		/** Message provided by the system job. */
		FriendlyMessage: DevKit.WebApi.StringValue;
		/** Unique identifier of the host that owns this system job. */
		HostId: DevKit.WebApi.StringValue;
		/** Indicates that the system job is waiting for an event. */
		IsWaitingForEvent: DevKit.WebApi.BooleanValueReadonly;
		/** Message related to the system job. */
		Message: DevKit.WebApi.StringValueReadonly;
		/** Name of the message that started this system job. */
		MessageName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the system job. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system job was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the asyncoperation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the system job. */
		Name: DevKit.WebApi.StringValue;
		/** Type of the system job. */
		OperationType: DevKit.WebApi.OptionSetValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the system job. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the owning extension with which the system job is associated. */
		OwningExtensionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the team who owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		ParentPluginExecutionId: DevKit.WebApi.GuidValue;
		/** Indicates whether the system job should run only after the specified date and time. */
		PostponeUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Pattern of the system job's recurrence. */
		RecurrencePattern: DevKit.WebApi.StringValue;
		/** Starting time in UTC for the recurrence pattern. */
		RecurrenceStartTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Unique identifier of the request that generated the system job. */
		RequestId: DevKit.WebApi.GuidValue;
		/** Number of times to retry the system job. */
		RetryCount: DevKit.WebApi.IntegerValueReadonly;
		/** Root execution context of the job that trigerred async job. */
		RootExecutionContext: DevKit.WebApi.StringValue;
		/** Order in which operations were submitted. */
		Sequence: DevKit.WebApi.BigIntValueReadonly;
		/** Date and time when the system job was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Status of the system job. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the system job. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** The Subtype of the Async Job */
		Subtype: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the workflow activation related to the system job. */
		WorkflowActivationId: DevKit.WebApi.LookupValue;
		/** Indicates whether the workflow instance was blocked when it was persisted. */
		WorkflowIsBlocked: DevKit.WebApi.BooleanValueReadonly;
		/** Name of a workflow stage. */
		WorkflowStageName: DevKit.WebApi.StringValueReadonly;
		/** State of the workflow job. */
		WorkflowState: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AsyncOperation {
		enum OperationType {
			/** 1 */
			System_Event,
			/** 2 */
			Bulk_Email,
			/** 3 */
			Import_File_Parse,
			/** 4 */
			Transform_Parse_Data,
			/** 5 */
			Import,
			/** 6 */
			Activity_Propagation,
			/** 7 */
			Duplicate_Detection_Rule_Publish,
			/** 8 */
			Bulk_Duplicate_Detection,
			/** 9 */
			SQM_Data_Collection,
			/** 10 */
			Workflow,
			/** 11 */
			Quick_Campaign,
			/** 12 */
			Matchcode_Update,
			/** 13 */
			Bulk_Delete,
			/** 14 */
			Deletion_Service,
			/** 15 */
			Index_Management,
			/** 16 */
			Collect_Organization_Statistics,
			/** 17 */
			Import_Subprocess,
			/** 18 */
			Calculate_Organization_Storage_Size,
			/** 19 */
			Collect_Organization_Database_Statistics,
			/** 20 */
			Collection_Organization_Size_Statistics,
			/** 21 */
			Database_Tuning,
			/** 22 */
			Calculate_Organization_Maximum_Storage_Size,
			/** 23 */
			Bulk_Delete_Subprocess,
			/** 24 */
			Update_Statistic_Intervals,
			/** 25 */
			Organization_Full_Text_Catalog_Index,
			/** 26 */
			Database_log_backup,
			/** 27 */
			Update_Contract_States,
			/** 28 */
			DBCC_SHRINKDATABASE_maintenance_job,
			/** 29 */
			DBCC_SHRINKFILE_maintenance_job,
			/** 30 */
			Reindex_all_indices_maintenance_job,
			/** 31 */
			Storage_Limit_Notification,
			/** 32 */
			Cleanup_inactive_workflow_assemblies,
			/** 35 */
			Recurring_Series_Expansion,
			/** 38 */
			Import_Sample_Data,
			/** 40 */
			Goal_Roll_Up,
			/** 41 */
			Audit_Partition_Creation,
			/** 42 */
			Check_For_Language_Pack_Updates,
			/** 43 */
			Provision_Language_Pack,
			/** 44 */
			Update_Organization_Database,
			/** 45 */
			Update_Solution,
			/** 46 */
			Regenerate_Entity_Row_Count_Snapshot_Data,
			/** 47 */
			Regenerate_Read_Share_Snapshot_Data,
			/** 50 */
			Outgoing_Activity,
			/** 51 */
			Incoming_Email_Processing,
			/** 52 */
			Mailbox_Test_Access,
			/** 53 */
			Encryption_Health_Check,
			/** 54 */
			Execute_Async_Request,
			/** 49 */
			Post_to_Yammer,
			/** 56 */
			Update_Entitlement_States,
			/** 57 */
			Calculate_Rollup_Field,
			/** 58 */
			Mass_Calculate_Rollup_Field,
			/** 59 */
			Import_Translation,
			/** 62 */
			Convert_Date_And_Time_Behavior,
			/** 63 */
			EntityKey_Index_Creation,
			/** 65 */
			Update_Knowledge_Article_States,
			/** 68 */
			Resource_Booking_Sync,
			/** 69 */
			Relationship_Assistant_Cards,
			/** 71 */
			Cleanup_Solution_Components,
			/** 72 */
			App_Module_Metadata_Operation,
			/** 73 */
			ALM_Anomaly_Detection_Operation,
			/** 75 */
			Flow_Notification,
			/** 76 */
			Ribbon_Client_Metadata_Operation,
			/** 79 */
			CallbackRegistration_Expander_Operation,
			/** 90 */
			CascadeAssign,
			/** 91 */
			CascadeDelete,
			/** 92 */
			Event_Expander_Operation,
			/** 93 */
			Import_Solution_Metadata
		}
		enum StateCode {
			/** 0 */
			Ready,
			/** 1 */
			Suspended,
			/** 2 */
			Locked,
			/** 3 */
			Completed
		}
		enum StatusCode {
			/** 0 */
			Waiting_For_Resources,
			/** 10 */
			Waiting,
			/** 20 */
			In_Progress,
			/** 21 */
			Pausing,
			/** 22 */
			Canceling,
			/** 30 */
			Succeeded,
			/** 31 */
			Failed,
			/** 32 */
			Canceled
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}