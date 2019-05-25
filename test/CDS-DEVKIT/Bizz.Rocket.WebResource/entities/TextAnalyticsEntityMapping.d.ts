///<reference path='devkit.d.ts' />
declare namespace Rocket {
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
		Entity: DevKit.WebApi.StringValue;
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}