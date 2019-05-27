///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class KnowledgeSearchModelApi {
		/**
		* PL.DynamicsCrm.DevKit KnowledgeSearchModelApi
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
		/** Unique identifier for AzureServiceConnection associated with KnowledgeSearchModel. */
		AzureServiceConnectionId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the Knowledge Search Model. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Knowledge Search Model was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the knowledge search Model. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a description for the search configuration */
		Description: DevKit.WebApi.StringValue;
		/** entity */
		_Entity: DevKit.WebApi.StringValue;
		/** FetchXml. */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier for entity instances */
		KnowledgeSearchModelId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Knowledge Search Model used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		KnowledgeSearchModelIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
		MaxKeyWords: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the Knowledge Search Model. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Knowledge Search model was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the knowledge search model. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a logical name for the search configuration. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the maximum number of key phrase words to use in a topic. */
		NgramSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the organization associated with the Knowledge Search Model entity. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Knowledge Search Model */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Knowledge Search Model */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace KnowledgeSearchModel {
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