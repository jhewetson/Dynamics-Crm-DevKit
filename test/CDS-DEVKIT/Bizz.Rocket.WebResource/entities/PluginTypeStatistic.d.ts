///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class PluginTypeStatisticApi {
		/**
		* PL.DynamicsCrm.DevKit PluginTypeStatisticApi
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
		/** The average execution time (in milliseconds) for the plug-in type. */
		AverageExecuteTimeInMilliseconds: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to crashes. */
		CrashContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** Number of times the plug-in type has crashed. */
		CrashCount: DevKit.WebApi.IntegerValueReadonly;
		/** Percentage of crashes for the plug-in type. */
		CrashPercent: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who created the plug-in type statistic. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in type statistic was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the plug-in type statistic. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Number of times the plug-in type has been executed. */
		ExecuteCount: DevKit.WebApi.IntegerValueReadonly;
		/** Number of times the plug-in type has failed. */
		FailureCount: DevKit.WebApi.IntegerValueReadonly;
		/** Percentage of failures for the plug-in type. */
		FailurePercent: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who last modified the plug-in type statistic. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in type statistic was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the plug-in type statistic. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization with which the plug-in type statistic is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the plug-in type associated with this plug-in type statistic. */
		PluginTypeId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the plug-in type statistic. */
		PluginTypeStatisticId: DevKit.WebApi.GuidValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to excessive CPU usage. */
		TerminateCpuContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to excessive handle usage. */
		TerminateHandlesContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to excessive memory usage. */
		TerminateMemoryContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to unknown reasons. */
		TerminateOtherContributionPercent: DevKit.WebApi.IntegerValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PluginTypeStatistic {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}