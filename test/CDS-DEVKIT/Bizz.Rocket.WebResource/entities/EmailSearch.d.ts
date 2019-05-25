///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class EmailSearchApi {
		/**
		* PL.DynamicsCrm.DevKit EmailSearchApi
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
		/** The email address */
		EmailAddress: DevKit.WebApi.StringValue;
		EmailColumnNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the email search entry. */
		EmailSearchId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the parent object with which the email address is associated. */
		ParentObjectId: DevKit.WebApi.LookupValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace EmailSearch {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}