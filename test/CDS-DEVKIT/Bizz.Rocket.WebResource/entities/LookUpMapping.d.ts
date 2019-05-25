﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class LookUpMappingApi {
		/**
		* PL.DynamicsCrm.DevKit LookUpMappingApi
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
		/** Unique identifier of the column mapping with which this lookup mapping is associated. */
		ColumnMappingId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the lookup mapping. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the lookup mapping was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the lookupmapping. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Name of the field with which the lookup is associated. */
		LookUpAttributeName: DevKit.WebApi.StringValue;
		/** Name of the entity with which the lookup is associated. */
		LookUpEntityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the lookup mapping. */
		LookUpMappingId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the LookUp Mapping. */
		LookUpMappingIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Lookup source code for lookup mapping. */
		LookUpSourceCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the lookup mapping. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the lookup mapping was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the lookupmapping. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Information about whether the lookup mapping has to be processed. */
		ProcessCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the lookup mapping. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the lookup mapping. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the transformation parameter mapping with which this lookup mapping is associated. */
		TransformationParameterMappingId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace LookUpMapping {
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
		enum LookUpSourceCode {
			/** 0 */
			Source,
			/** 1 */
			System
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