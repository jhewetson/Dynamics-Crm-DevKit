///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class TraceRegardingApi {
		/**
		* PL.DynamicsCrm.DevKit TraceRegardingApi
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
		/** Unique identifier of the regarding object. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the regarding object. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the regarding object. */
		RegardingObjectOwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the trace-regarding record. */
		TraceRegardingId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace TraceRegarding {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}