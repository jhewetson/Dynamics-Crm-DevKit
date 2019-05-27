﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SdkMessageRequestFieldApi {
		/**
		* PL.DynamicsCrm.DevKit SdkMessageRequestFieldApi
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
		/** Common language runtime (CLR)-based parser for the SDK message request field. */
		ClrParser: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the SDK message request field. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message request field was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessagerequestfield. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message request field. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Indicates how field contents are used during message processing. 1 - Primary entity, 2- Secondary entity */
		FieldMask: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the SDK message request field. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message request field was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessagerequestfield. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the SDK message request field. */
		Name: DevKit.WebApi.StringValue;
		/** Information about whether SDK message request field is optional. */
		Optional: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the organization with which the SDK message request field is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		ParameterBindingInformation: DevKit.WebApi.StringValue;
		/** Parser for the SDK message request field. */
		Parser: DevKit.WebApi.StringValue;
		/** Position of the Sdk message request field */
		Position: DevKit.WebApi.IntegerValueReadonly;
		/** Public name of the SDK message request field. */
		PublicName: DevKit.WebApi.StringValue;
		/** Unique identifier of the SDK message request field entity. */
		SdkMessageRequestFieldId: DevKit.WebApi.GuidValue;
		/** Entity identifier of the SDK message request field. */
		SdkMessageRequestFieldIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the message request with which the SDK message request field is associated. */
		SdkMessageRequestId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SdkMessageRequestField {
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