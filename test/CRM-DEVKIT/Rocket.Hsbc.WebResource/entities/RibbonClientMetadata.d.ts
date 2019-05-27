///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class RibbonClientMetadataApi {
		/**
		* PL.DynamicsCrm.DevKit RibbonClientMetadataApi
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
		ComponentState: DevKit.WebApi.IntegerValueReadonly;
		/** Entity logical name */
		EntityLogicalName: DevKit.WebApi.StringValue;
		/** Ribbon context */
		RibbonContext: DevKit.WebApi.StringValue;
		/** Unique identifier of a ribbon client metadata. */
		RibbonId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Ribbon client Metadata */
		RibbonIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Ribbon representation in JSON format. */
		RibbonJson: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RibbonClientMetadata {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}