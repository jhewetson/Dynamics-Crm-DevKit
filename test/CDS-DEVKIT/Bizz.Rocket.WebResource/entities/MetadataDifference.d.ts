///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class MetadataDifferenceApi {
		/**
		* PL.DynamicsCrm.DevKit MetadataDifferenceApi
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
		/** Date and time when the metadata difference was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Difference Xml */
		DifferenceXml: DevKit.WebApi.StringValue;
		/** Introduced Version */
		IntroducedVersion: DevKit.WebApi.DoubleValue;
		/** Version in which the differences were introduced. */
		IntroducedVersionString: DevKit.WebApi.StringValue;
		/** Unique identifier of the metadata difference. */
		MetadataDifferenceId: DevKit.WebApi.GuidValue;
		/** Date and time when the metadata difference was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MetadataDifference {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}