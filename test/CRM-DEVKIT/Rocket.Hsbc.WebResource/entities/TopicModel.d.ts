///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class TopicModelApi {
		/**
		* PL.DynamicsCrm.DevKit TopicModelApi
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
		/** Shows the average number of topics found per build. */
		AvgNumberofTopics: DevKit.WebApi.IntegerValue;
		/** Azure Scheduler Job Name. */
		AzureSchedulerJobName: DevKit.WebApi.StringValue;
		/** Azure Scheduler Job Name for build model */
		AzureSchedulerOnDemandJobName: DevKit.WebApi.StringValue;
		/** Azure Scheduler Job Name for test model */
		AzureSchedulerTestJobName: DevKit.WebApi.StringValue;
		/** Unique identifier for AzureServiceConnection associated with TopicModel. */
		AzureServiceConnectionId: DevKit.WebApi.LookupValue;
		/** Shows how frequently topic analysis is done. */
		BuildRecurrence: DevKit.WebApi.StringValue;
		/** Shows the configuration used for topic analysis. */
		ConfigurationUsed: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the Topic Model. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the topic Model. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a description for the model. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the time when topic analysis will stop */
		EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows the maximum number of topics found across builds. */
		MaxNumberofTopics: DevKit.WebApi.IntegerValue;
		/** Shows the maximum number of topics to be determined. */
		MaxTopics: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the Topic Model. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the Topic model. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the name of the topic model. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the time when topic analysis will start according to the recurrence schedule. */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the status of the topic model build */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the TopicModel */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		TopicModelId: DevKit.WebApi.GuidValue;
		/** Shows when the topics were last created. */
		TopicsLastCreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the total number of topics found. */
		TotalTopicsFound: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TopicModel {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}