﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class LocalConfigStoreApi {
		/**
		* PL.DynamicsCrm.DevKit LocalConfigStoreApi
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
		/** Assembly Name */
		AssemblyName: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of LocalConfigStore entry. */
		Id: DevKit.WebApi.GuidValue;
		IsValueSet: DevKit.WebApi.BooleanValueReadonly;
		/** Key Name */
		KeyName: DevKit.WebApi.StringValueReadonly;
		/** Assembly Public Token */
		PublicToken: DevKit.WebApi.StringValueReadonly;
		/** Value */
		Value: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace LocalConfigStore {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}