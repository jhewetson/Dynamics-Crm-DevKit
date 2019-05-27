///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class TraceAssociationApi {
		/**
		* PL.DynamicsCrm.DevKit TraceAssociationApi
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
		/** Unique identifier of the organization associated with the trace association. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the object the trace association is regarding. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the trace association. */
		TraceAssociationId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the trace. */
		TraceLogId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace TraceAssociation {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}