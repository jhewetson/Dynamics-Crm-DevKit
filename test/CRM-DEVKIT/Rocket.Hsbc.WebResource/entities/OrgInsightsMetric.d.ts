///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class OrgInsightsMetricApi {
		/**
		* PL.DynamicsCrm.DevKit OrgInsightsMetricApi
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
		/** Date and time when the organization insights metric was created */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Name of the metric which is used for retrieving the data */
		InternalName: DevKit.WebApi.StringValue;
		/** Type of the metric */
		MetricType: DevKit.WebApi.OptionSetValue;
		/** Legend Name used while displaying the metric */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the record */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		OrgInsightsMetricId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace OrgInsightsMetric {
		enum MetricType {
			/** 1 */
			Time_Series,
			/** 2 */
			Category
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}