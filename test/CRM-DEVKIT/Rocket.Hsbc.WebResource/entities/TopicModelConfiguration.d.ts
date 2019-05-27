///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormTopicModelConfigurationInformation {
		interface tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2_Sections {
		}
		interface tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B_Sections {
			_5E0987A5_6DEC_4225_BBB4_7CC1F9DD8347: DevKit.Form.Controls.ControlSection;
		}
		interface tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2 extends DevKit.Form.Controls.IControlTab {
			Section: tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2_Sections;
		}
		interface tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B extends DevKit.Form.Controls.IControlTab {
			Section: tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B_Sections;
		}
		interface Tabs {
			_29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2: tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2;
			_C9B62E5D_9925_479D_87BA_DBE9FA64B47B: tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B;
		}
		interface Body {
			Tab: Tabs;
			textanalyticsentitymappings: DevKit.Form.Controls.ControlGrid;
			/** Specify the data filter configured to filter records. */
			DataFilter: DevKit.Form.Controls.ControlString;
			/** Enter a description for the model */
			Description: DevKit.Form.Controls.ControlString;
			/** Type a logical name for the model. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the time window to filter on for the last number of days or weeks. */
			TimeFilter: DevKit.Form.Controls.ControlOptionSet;
			/** Time Filter Duration */
			TimeFilterDuration: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormTopicModelConfigurationInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form TopicModelConfigurationInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TopicModelConfigurationInformation */
		Body: Hsbc.FormTopicModelConfigurationInformation.Body;
	}
	class TopicModelConfigurationApi {
		/**
		* PL.DynamicsCrm.DevKit TopicModelConfigurationApi
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
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Specify the data filter configured to filter records. */
		DataFilter: DevKit.WebApi.StringValue;
		/** Enter a description for the model */
		Description: DevKit.WebApi.StringValue;
		/** Fetch Xml */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Enter the minimum relevance score of a topic. */
		MinRelevanceScore: DevKit.WebApi.DecimalValue;
		/** Type a logical name for the model. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the maximum number of key phrase words to use in a topic. */
		NgramSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Stop words. */
		StopWords: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Select the time window to filter on for the last number of days or weeks. */
		TimeFilter: DevKit.WebApi.OptionSetValue;
		/** Time Filter Duration */
		TimeFilterDuration: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		TopicModelConfigurationId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Topic Model Configuration used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		TopicModelConfigurationIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for Model associated with Topic Model Configuration. */
		TopicModelId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TopicModelConfiguration {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum TimeFilter {
			/** 1 */
			Last_N_Days,
			/** 2 */
			Last_N_Weeks
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}