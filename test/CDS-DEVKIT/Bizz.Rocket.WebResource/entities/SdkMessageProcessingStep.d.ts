﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SdkMessageProcessingStepApi {
		/**
		* PL.DynamicsCrm.DevKit SdkMessageProcessingStepApi
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
		/** Indicates whether the asynchronous system job is automatically deleted on completion. */
		AsyncAutoDelete: DevKit.WebApi.BooleanValue;
		/** Identifies whether a SDK Message Processing Step type will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly  */
		CanUseReadOnlyConnection: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Step-specific configuration for the plug-in type. Passed to the plug-in constructor at run time. */
		Configuration: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the SDK message processing step. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstep. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message processing step. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Description of the SDK message processing step. */
		Description: DevKit.WebApi.StringValue;
		/** Configuration for sending pipeline events to the Event Expander service. */
		EventExpander: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated event handler. */
		eventhandler_plugintype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated event handler. */
		eventhandler_plugintype: DevKit.WebApi.LookupValue;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the plug-in should execute. */
		FilteringAttributes: DevKit.WebApi.StringValue;
		/** Unique identifier of the user to impersonate context when step is executed. */
		ImpersonatingUserId: DevKit.WebApi.LookupValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Run-time mode of execution, for example, synchronous or asynchronous. */
		Mode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstep. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of SdkMessage processing step. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Processing order within the stage. */
		Rank: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the SDK message filter. */
		SdkMessageFilterId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the SDK message. */
		SdkMessageId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the SDK message processing step entity. */
		SdkMessageProcessingStepId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the SDK message processing step. */
		SdkMessageProcessingStepIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the Sdk message processing step secure configuration. */
		SdkMessageProcessingStepSecureConfigId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Stage in the execution pipeline that the SDK message processing step is in. */
		Stage: DevKit.WebApi.OptionSetValue;
		/** Status of the SDK message processing step. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the SDK message processing step. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Deployment that the SDK message processing step should be executed on; server, client, or both. */
		SupportedDeployment: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Number that identifies a specific revision of the SDK message processing step.  */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStep {
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
		enum InvocationSource {
			/** -1 */
			Internal,
			/** 0 */
			Parent,
			/** 1 */
			Child
		}
		enum Mode {
			/** 0 */
			Synchronous,
			/** 1 */
			Asynchronous
		}
		enum Stage {
			/** 5 */
			Initial_Pre_operation_For_internal_use_only,
			/** 10 */
			Pre_validation,
			/** 15 */
			Internal_Pre_operation_Before_External_Plugins_For_internal_use_only,
			/** 20 */
			Pre_operation,
			/** 25 */
			Internal_Pre_operation_After_External_Plugins_For_internal_use_only,
			/** 30 */
			Main_Operation_For_internal_use_only,
			/** 35 */
			Internal_Post_operation_Before_External_Plugins_For_internal_use_only,
			/** 40 */
			Post_operation,
			/** 45 */
			Internal_Post_operation_After_External_Plugins_For_internal_use_only,
			/** 50 */
			Post_operation_Deprecated,
			/** 55 */
			Final_Post_operation_For_internal_use_only
		}
		enum StateCode {
			/** 0 */
			Enabled,
			/** 1 */
			Disabled
		}
		enum StatusCode {
			/** 1 */
			Enabled,
			/** 2 */
			Disabled
		}
		enum SupportedDeployment {
			/** 0 */
			Server_Only,
			/** 1 */
			Microsoft_Dynamics_365_Client_for_Outlook_Only,
			/** 2 */
			Both
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}