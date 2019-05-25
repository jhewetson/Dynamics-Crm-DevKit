﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SdkMessageFilterApi {
		/**
		* PL.DynamicsCrm.DevKit SdkMessageFilterApi
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
		/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
		Availability: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the SDK message filter. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message filter was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessagefilter. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message filter. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Indicates whether a custom SDK message processing step is allowed. */
		IsCustomProcessingStepAllowed: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the filter should be visible. */
		IsVisible: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the SDK message filter. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message filter was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessagefilter. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization with which the SDK message filter is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		RestrictionLevel: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the SDK message filter entity. */
		SdkMessageFilterId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the SDK message filter. */
		SdkMessageFilterIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the related SDK message. */
		SdkMessageId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Whether or not the SDK message can be called from a workflow. */
		WorkflowSdkStepEnabled: DevKit.WebApi.BooleanValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SdkMessageFilter {
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