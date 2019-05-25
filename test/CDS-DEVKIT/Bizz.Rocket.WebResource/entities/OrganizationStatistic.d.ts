///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class OrganizationStatisticApi {
		/**
		* PL.DynamicsCrm.DevKit OrganizationStatisticApi
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
		/** Hour that the statistic measurement was taken. */
		Hour: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the record. */
		OrganizationStatisticId: DevKit.WebApi.GuidValueReadonly;
		/** Server that owns this record. */
		ServerName: DevKit.WebApi.StringValueReadonly;
		/** Statistic type that is being measured. */
		StatisticType: DevKit.WebApi.IntegerValueReadonly;
		/** Value of the statistic. */
		StatisticValue: DevKit.WebApi.IntegerValueReadonly;
	}
}
declare namespace OptionSet {
	namespace OrganizationStatistic {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}