///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class PluginTraceLogApi {
		/**
		* PL.DynamicsCrm.DevKit PluginTraceLogApi
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
		/** Unsecured configuration for the plug-in trace log. */
		Configuration: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier for tracking plug-in or custom workflow activity execution. */
		CorrelationId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Depth of execution of the plug-in or custom workflow activity. */
		Depth: DevKit.WebApi.IntegerValueReadonly;
		/** Details of the exception. */
		ExceptionDetails: DevKit.WebApi.StringValueReadonly;
		/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
		IsSystemCreated: DevKit.WebApi.BooleanValueReadonly;
		/** Trace text from the plug-in. */
		MessageBlock: DevKit.WebApi.StringValueReadonly;
		/** Name of the message that triggered this plug-in. */
		MessageName: DevKit.WebApi.StringValueReadonly;
		/** Type of execution. */
		Mode: DevKit.WebApi.OptionSetValueReadonly;
		/** Type of custom code. */
		OperationType: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier for the organization. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Time, in milliseconds, to construct. */
		PerformanceConstructorDuration: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time when constructed. */
		PerformanceConstructorStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Time, in milliseconds, to execute the request. */
		PerformanceExecutionDuration: DevKit.WebApi.IntegerValueReadonly;
		/** Time, in milliseconds, to execute the request. */
		PerformanceExecutionStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Asynchronous workflow persistence key. */
		PersistenceKey: DevKit.WebApi.GuidValueReadonly;
		/** ID of the plug-in registration step. */
		PluginStepId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for an entity instance. */
		PluginTraceLogId: DevKit.WebApi.GuidValueReadonly;
		/** Entity, if any, that the plug-in is executed against. */
		PrimaryEntity: DevKit.WebApi.StringValueReadonly;
		/** Plug-in profile formatted as serialized text. */
		Profile: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the message request. */
		RequestId: DevKit.WebApi.GuidValueReadonly;
		/** Secured configuration for the plug-in trace log. */
		SecureConfiguration: DevKit.WebApi.StringValueReadonly;
		/** Class name of the plug-in. */
		TypeName: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PluginTraceLog {
		enum Mode {
			/** 0 */
			Synchronous,
			/** 1 */
			Asynchronous
		}
		enum OperationType {
			/** 0 */
			Unknown,
			/** 1 */
			Plug_in,
			/** 2 */
			Workflow_Activity
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}