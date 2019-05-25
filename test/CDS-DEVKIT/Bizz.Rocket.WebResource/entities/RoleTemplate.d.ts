﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class RoleTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit RoleTemplateApi
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
		/** Name of the role template. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the role template. */
		RoleTemplateId: DevKit.WebApi.GuidValue;
		Upgrading: DevKit.WebApi.BooleanValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RoleTemplate {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}