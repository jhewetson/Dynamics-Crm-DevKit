///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class DataPerformanceApi {
		/**
		* PL.DynamicsCrm.DevKit DataPerformanceApi
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
		/** An internal state which indicates whether at least one optimization is applied. */
		AnyOptimizationApplied: DevKit.WebApi.BooleanValueReadonly;
		/** An internal state which indicates whether at least one optimization is available for this record. */
		AnyOptimizationAvailable: DevKit.WebApi.BooleanValueReadonly;
		/** Name of the component */
		Component: DevKit.WebApi.StringValueReadonly;
		/** Number of times a queries were executed (Aggregated) */
		Count: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the performance suggestion. */
		DataPerformanceId: DevKit.WebApi.GuidValue;
		/** Primary entity */
		_Entity: DevKit.WebApi.StringValueReadonly;
		/** The expected average cost benefit of an optimization. */
		EstimatedOptimizationImpact: DevKit.WebApi.DecimalValueReadonly;
		/** The execution period for which the performance metrics are calculated. */
		ExecutionPeriod: DevKit.WebApi.StringValueReadonly;
		/** An internal state which shows the result of the last action that was taken on this record. */
		LastActionResult: DevKit.WebApi.StringValueReadonly;
		/** Last time an optimization was applied. */
		LastOptimizationDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Maximum execution time in seconds. (Aggregated) */
		MaxTime: DevKit.WebApi.DecimalValueReadonly;
		/** Average execution time in seconds. (Aggregated) */
		MedianTime: DevKit.WebApi.DecimalValueReadonly;
		/** Minimum execution time in seconds. (Aggregated) */
		MinTime: DevKit.WebApi.DecimalValueReadonly;
		/** Data operation that triggered the query (Retrieve Multiple, etc.) */
		Operation: DevKit.WebApi.StringValueReadonly;
		/** Current optimization status of the record, showed to the customer. */
		OptimizationStatus: DevKit.WebApi.StringValueReadonly;
		/** Storage consumed by the optimization. (MB) */
		OptimizationStorage: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the organization associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Actual performance change after taking an optimization action on the record. */
		RealizedOptimizationImpact: DevKit.WebApi.StringValueReadonly;
		/** Name of the solution that owns the component */
		Solution: DevKit.WebApi.StringValueReadonly;
		/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
		Weight: DevKit.WebApi.DecimalValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DataPerformance {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}