///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class RuntimeDependencyApi {
		/**
		* PL.DynamicsCrm.DevKit RuntimeDependencyApi
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
		/** Date and time when the record was created. */
		CreatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of a dependency. */
		DependencyId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the dependent component's node. */
		DependentComponentNodeId: DevKit.WebApi.GuidValue;
		/** Dependent Component Node Type */
		DependentComponentType: DevKit.WebApi.IntegerValue;
		/** Determines whether required component is published */
		IsPublished: DevKit.WebApi.ManagedPropertyValue;
		/** Date and time when the required component was modified. */
		RequiredComponentModifiedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the required component's node */
		RequiredComponentNodeId: DevKit.WebApi.StringValue;
		/** Required Component Node Type */
		RequiredComponentType: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace RuntimeDependency {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}