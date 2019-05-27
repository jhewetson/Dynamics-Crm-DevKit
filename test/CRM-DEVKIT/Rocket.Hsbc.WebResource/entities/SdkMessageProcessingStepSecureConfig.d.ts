﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SdkMessageProcessingStepSecureConfigApi {
		/**
		* PL.DynamicsCrm.DevKit SdkMessageProcessingStepSecureConfigApi
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
		/** Unique identifier of the user who created the SDK message processing step. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstepsecureconfig. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message processing step secure configuration. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstepsecureconfig. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the SDK message processing step secure configuration. */
		SdkMessageProcessingStepSecureConfigId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the SDK message processing step. */
		SdkMessageProcessingStepSecureConfigIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Secure step-specific configuration for the plug-in type that is passed to the plug-in's constructor at run time. */
		SecureConfig: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStepSecureConfig {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}