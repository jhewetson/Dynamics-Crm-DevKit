﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class TimeStampDateMappingApi {
		/**
		* PL.DynamicsCrm.DevKit TimeStampDateMappingApi
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
		Date_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		TimeStamp: DevKit.WebApi.BigIntValueReadonly;
		TimeStampDateMappingId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace TimeStampDateMapping {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}