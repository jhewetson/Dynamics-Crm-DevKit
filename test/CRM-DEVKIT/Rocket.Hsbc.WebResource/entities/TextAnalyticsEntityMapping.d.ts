///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormTextAnalyticsEntityMappingInformation {
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections {
		}
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F extends DevKit.Form.Controls.IControlTab {
			Section: tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections;
		}
		interface Tabs {
			_C01C55A7_B832_422F_B768_4BDA9674E00F: tab__C01C55A7_B832_422F_B768_4BDA9674E00F;
		}
		interface Body {
			Tab: Tabs;
			/** Select Entity */
			EntityPickList: DevKit.Form.Controls.ControlOptionSet;
			entitypicklist_UC: DevKit.Form.Controls.ControlActionCards;
			/** Select Field */
			FieldPickList: DevKit.Form.Controls.ControlOptionSet;
			fieldpicklist_UC: DevKit.Form.Controls.ControlActionCards;
			/** Specify if the mapping is for text match or exact match */
			IsTextMatchMapping: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormTextAnalyticsEntityMappingInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form TextAnalyticsEntityMappingInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TextAnalyticsEntityMappingInformation */
		Body: Hsbc.FormTextAnalyticsEntityMappingInformation.Body;
	}
	class TextAnalyticsEntityMappingApi {
		/**
		* PL.DynamicsCrm.DevKit TextAnalyticsEntityMappingApi
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
		/** Advanced Similarity RuleId associated with entity mapping. */
		AdvancedSimilarityRuleId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Entity */
		_Entity: DevKit.WebApi.StringValue;
		/** Entity Display Name */
		EntityDisplayName: DevKit.WebApi.StringValue;
		/** Select Entity */
		EntityPickList: DevKit.WebApi.OptionSetValue;
		/** Field */
		Field: DevKit.WebApi.StringValue;
		/** Field Display Name */
		FieldDisplayName: DevKit.WebApi.StringValue;
		/** Select Field */
		FieldPickList: DevKit.WebApi.OptionSetValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Specify if the mapping is for text match or exact match */
		IsTextMatchMapping: DevKit.WebApi.BooleanValue;
		/** Knowledge Search Model associated with entity mapping. */
		KnowledgeSearchModelId: DevKit.WebApi.LookupValue;
		/** Model Type. */
		ModelType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the organization associated with the Text Analytics Entity Mapping. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Relationship Name */
		RelationshipName: DevKit.WebApi.StringValue;
		/** Similarity Rule associated with entity mapping. */
		SimilarityRuleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for entity instances */
		TextAnalyticsEntityMappingId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Text Analytics Entity Mapping */
		TextAnalyticsEntityMappingIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Topic Model Configuration associated with entity mapping. */
		TopicModelConfigurationId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace TextAnalyticsEntityMapping {
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
		enum EntityPickList {
			/** 1 */
			No,
			/** 2 */
			Yes
		}
		enum FieldPickList {
			/** 1 */
			No,
			/** 2 */
			Yes
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}