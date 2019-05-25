﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SolutionHistoryDataApi {
		/**
		* PL.DynamicsCrm.DevKit SolutionHistoryDataApi
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
		/** The Activity Id. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** The Correlation Id. */
		CorrelationId: DevKit.WebApi.GuidValue;
		/** DateTime of the end of the solution event. */
		EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The error code of the operation performed on the solution. */
		ErrorCode: DevKit.WebApi.IntegerValue;
		/** The Exception Message. */
		ExceptionMessage: DevKit.WebApi.StringValue;
		/** The Exception Stack. */
		ExceptionStack: DevKit.WebApi.StringValue;
		/** Is Solution Managed */
		IsManaged: DevKit.WebApi.BooleanValue;
		/** Is the solution published by a Microsoft publisher. */
		IsMicrosoftPublisher: DevKit.WebApi.BooleanValue;
		/** Does the event overwrite customizations. */
		IsOverwriteCustomizations: DevKit.WebApi.BooleanValue;
		/** Is Solution Patch */
		IsPatch: DevKit.WebApi.BooleanValue;
		/** The operation performed on the solution. */
		Operation: DevKit.WebApi.OptionSetValue;
		/** Name of the package. */
		PackageName: DevKit.WebApi.StringValue;
		/** Version of the package. */
		PackageVersion: DevKit.WebApi.StringValue;
		/** Name of the solution's publisher. */
		PublisherName: DevKit.WebApi.StringValue;
		/** The result of the operation performed on the solution. */
		Result: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		SolutionHistoryDataId: DevKit.WebApi.GuidValue;
		/** The Solution. */
		SolutionId: DevKit.WebApi.GuidValue;
		/** Name of the solution. */
		SolutionName: DevKit.WebApi.StringValue;
		/** The Version of the Solution. */
		SolutionVersion: DevKit.WebApi.StringValue;
		/** DateTime of the start of the solution event. */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The status of the operation performed on the solution. */
		Status: DevKit.WebApi.OptionSetValue;
		/** The suboperation performed on the solution. */
		SubOperation: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace SolutionHistoryData {
		enum Operation {
			/** 0 */
			Import,
			/** 1 */
			Uninstall,
			/** 2 */
			Export
		}
		enum Status {
			/** 0 */
			Start,
			/** 1 */
			End
		}
		enum SubOperation {
			/** 0 */
			None,
			/** 1 */
			New,
			/** 2 */
			Upgrade,
			/** 3 */
			Update,
			/** 4 */
			Delete
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}