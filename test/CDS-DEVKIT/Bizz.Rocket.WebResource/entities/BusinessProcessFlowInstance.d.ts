﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class BusinessProcessFlowInstanceApi {
		/**
		* PL.DynamicsCrm.DevKit BusinessProcessFlowInstanceApi
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
		/** Date and time when the active stage was started. */
		ActiveStageStartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the business process flow instance. */
		BusinessProcessFlowInstanceId: DevKit.WebApi.GuidValue;
		/** Date and time when the process completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the first entity instance. */
		Entity1Id: DevKit.WebApi.GuidValue;
		/** Unique identifier of the second entity instance. */
		Entity2Id: DevKit.WebApi.GuidValue;
		/** Unique identifier of the third entity instance. */
		Entity3Id: DevKit.WebApi.GuidValue;
		/** Unique identifier of the fourth entity instance. */
		Entity4Id: DevKit.WebApi.GuidValue;
		/** Unique identifier of the fifth entity instance. */
		Entity5Id: DevKit.WebApi.GuidValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the instance. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the business process flow. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Unique identifier of active stage in the business process flow instance. */
		ProcessStageId: DevKit.WebApi.GuidValue;
		/** Shows whether the business process flow instance is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Business process flow instance's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the business process flow instance. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BusinessProcessFlowInstance {
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
			Finished,
			/** 3 */
			Aborted
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}