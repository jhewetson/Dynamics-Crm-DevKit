///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class EntityDataProviderApi {
		/**
		* PL.DynamicsCrm.DevKit EntityDataProviderApi
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
		/** Create Plugin */
		CreatePlugin: DevKit.WebApi.GuidValue;
		/** When creating a Data Provider, the end user must select the name of the Data Source entity that will be created for the provider. */
		DataSourceLogicalName: DevKit.WebApi.StringValue;
		/** Delete Plugin */
		DeletePlugin: DevKit.WebApi.GuidValue;
		/** What is this Data Provider used for and data store technologies does it target? */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data provider. */
		EntityDataProviderId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		EntityDataProviderIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** The name of this Data Provider. This is the name that appears in the dropdown when creating a new entity. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** MultipleRetrieve Plugin */
		RetrieveMultiplePlugin: DevKit.WebApi.GuidValue;
		/** Retrieve Plugin */
		RetrievePlugin: DevKit.WebApi.GuidValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Update Plugin */
		UpdatePlugin: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace EntityDataProvider {
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