///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class MailboxStatisticsApi {
		/**
		* PL.DynamicsCrm.DevKit MailboxStatisticsApi
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
		AsyncEventId: DevKit.WebApi.GuidValueReadonly;
		/** Items remaining in CRM to process after this synchronization cycle. */
		CrmItemsBacklog: DevKit.WebApi.IntegerValueReadonly;
		/** Time each exchange sync step is taking */
		IndividualStepDurations: DevKit.WebApi.StringValueReadonly;
		/** Number of items processed unsuccessfully. */
		ItemsFailed: DevKit.WebApi.IntegerValueReadonly;
		/** Number of items processed. */
		ItemsProcessed: DevKit.WebApi.IntegerValueReadonly;
		/** Name of Machine on which mailbox was processed */
		MachineName: DevKit.WebApi.StringValueReadonly;
		/** Regarding Mailbox. */
		MailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Completion time of the synchronization cycle. */
		MailboxProcessCompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Scheduled time of the synchronization cycle. */
		MailboxProcessScheduledOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Start time of the synchronization cycle. */
		MailboxProcessStartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		MailboxStatisticsId: DevKit.WebApi.GuidValueReadonly;
		/** Type of the mailbox operation */
		OperationTypeId: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Result of Mailbox processing cycle */
		ProcessResult: DevKit.WebApi.BooleanValueReadonly;
		/** Time it took to process the mailbox. */
		ProcessTimeIntervalInMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Time it took from the scheduled time to the actual start time to process the mailbox. */
		ScheduledTimeIntervalInMinutes: DevKit.WebApi.IntegerValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailboxStatistics {
		enum OperationTypeId {
			/** 0 */
			Incoming_Email,
			/** 1 */
			Outgoing_Email,
			/** 2 */
			ACT
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}