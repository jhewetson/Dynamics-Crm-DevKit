///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class GlobalSearchConfigurationApi {
		/**
		* PL.DynamicsCrm.DevKit GlobalSearchConfigurationApi
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
		GlobalSearchConfigurationId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		GlobalSearchConfigurationidUnique: DevKit.WebApi.GuidValueReadonly;
		/** Information that specifies whether the specified search is enabled. */
		IsEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether the search logical name is localized. */
		IsLocalized: DevKit.WebApi.BooleanValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information that specifies whether the Search Box is visible. */
		IsSearchBoxVisible: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		SearchProviderName: DevKit.WebApi.StringValue;
		SearchProviderResultsPage: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace GlobalSearchConfiguration {
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
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}