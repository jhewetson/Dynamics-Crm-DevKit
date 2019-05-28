﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ApplicationFileApi {
		/**
		* PL.DynamicsCrm.DevKit ApplicationFileApi
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
		/** Body of application file */
		Body: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the application file. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the application file was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the applicationfile. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for application file instances */
		FileId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who last modified the application file. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the application file was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the applicationfile. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** File name */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ApplicationFile {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}