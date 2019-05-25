﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class TransformationMappingApi {
		/**
		* PL.DynamicsCrm.DevKit TransformationMappingApi
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
		/** Unique identifier of the user who created the transformation mapping. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transformation mapping was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the transformationmapping. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated data map. */
		ImportMapId: DevKit.WebApi.LookupValue;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the mapping. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transformation mapping was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the transformationmapping. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Information about whether the transformation mapping needs to be processed. */
		ProcessCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Name of the source entity. */
		SourceEntityName: DevKit.WebApi.StringValue;
		/** Status of the transformation mapping. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the transformation mapping. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Name of the Microsoft Dynamics 365 entity. */
		TargetEntityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the transformation mapping. */
		TransformationMappingId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Transformation Mapping. */
		TransformationMappingIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Type of transformation. */
		TransformationTypeName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace TransformationMapping {
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
		enum ProcessCode {
			/** 1 */
			Process,
			/** 2 */
			Ignore,
			/** 3 */
			Internal
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Active
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}