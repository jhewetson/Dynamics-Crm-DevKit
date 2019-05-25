///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class AdvancedSimilarityRuleApi {
		/**
		* PL.DynamicsCrm.DevKit AdvancedSimilarityRuleApi
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
		/** Unique identifier for entity instances */
		AdvancedSimilarityRuleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Advanced Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AdvancedSimilarityRuleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for AzureServiceConnection associated with AdvancedSimilarityRule. */
		AzureServiceConnectionId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the Advanced Similarity Rules. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a description for the Advanced Similarity Rule */
		Description: DevKit.WebApi.StringValue;
		/** entity */
		Entity: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ExactMatchList: DevKit.WebApi.StringValue;
		/** For internal use only. */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Filter Result By Status */
		FilterResultByStatus: DevKit.WebApi.OptionSetValue;
		/** Filter Result By Status */
		FilterResultByStatusDisplayName: DevKit.WebApi.StringValue;
		/** Use Text Analytics for Target Match */
		IsAzureMLRequired: DevKit.WebApi.BooleanValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Enter the maximum number of keywords and key phrases to use with text analytics. */
		MaxNumberKeyphrases: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the Advanced Similarity Rules. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the advanced similarity rules. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a logical name for the similarity configuration */
		name: DevKit.WebApi.StringValue;
		/** Enter the maximum number of words in a key phrase to use with text analytics. */
		NgramSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the organization associated with the advanced similarity rules */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the advanced similarity rules */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the advanced similarity rules */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AdvancedSimilarityRule {
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
		enum FilterResultByStatus {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
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