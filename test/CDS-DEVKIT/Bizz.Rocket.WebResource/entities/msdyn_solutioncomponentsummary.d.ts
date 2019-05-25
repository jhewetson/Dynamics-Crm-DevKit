///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class msdyn_solutioncomponentsummaryApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_solutioncomponentsummaryApi
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
		msdyn_componenttype: DevKit.WebApi.DecimalValue;
		msdyn_componenttypename: DevKit.WebApi.StringValue;
		msdyn_createdon: DevKit.WebApi.StringValue;
		msdyn_culture: DevKit.WebApi.StringValue;
		msdyn_deployment: DevKit.WebApi.StringValue;
		msdyn_description: DevKit.WebApi.StringValue;
		msdyn_displayname: DevKit.WebApi.StringValue;
		msdyn_eventhandler: DevKit.WebApi.StringValue;
		msdyn_executionorder: DevKit.WebApi.StringValue;
		msdyn_executionstage: DevKit.WebApi.StringValue;
		msdyn_fieldsecurity: DevKit.WebApi.StringValue;
		msdyn_fieldtype: DevKit.WebApi.StringValue;
		msdyn_isappaware: DevKit.WebApi.StringValue;
		msdyn_isappawarename: DevKit.WebApi.StringValue;
		msdyn_isauditenabled: DevKit.WebApi.StringValue;
		msdyn_isauditenabledname: DevKit.WebApi.StringValue;
		msdyn_iscustom: DevKit.WebApi.StringValue;
		msdyn_iscustomizable: DevKit.WebApi.StringValue;
		msdyn_iscustomizablename: DevKit.WebApi.StringValue;
		msdyn_iscustomname: DevKit.WebApi.StringValue;
		msdyn_isdefault: DevKit.WebApi.StringValue;
		msdyn_isdefaultname: DevKit.WebApi.StringValue;
		msdyn_ismanaged: DevKit.WebApi.StringValue;
		msdyn_ismanagedname: DevKit.WebApi.StringValue;
		msdyn_isolationmode: DevKit.WebApi.StringValue;
		msdyn_istableenabled: DevKit.WebApi.StringValue;
		msdyn_logicalcollectionname: DevKit.WebApi.StringValue;
		msdyn_modifiedon: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_objectid: DevKit.WebApi.StringValue;
		msdyn_objecttypecode: DevKit.WebApi.StringValue;
		msdyn_owner: DevKit.WebApi.StringValue;
		msdyn_owningbusinessunit: DevKit.WebApi.StringValue;
		msdyn_primaryentityname: DevKit.WebApi.StringValue;
		msdyn_publickeytoken: DevKit.WebApi.StringValue;
		msdyn_relatedentity: DevKit.WebApi.StringValue;
		msdyn_relatedentityattribute: DevKit.WebApi.StringValue;
		msdyn_schemaname: DevKit.WebApi.StringValue;
		msdyn_sdkmessagename: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_solutioncomponentsummaryId: DevKit.WebApi.GuidValue;
		msdyn_solutionid: DevKit.WebApi.StringValue;
		msdyn_status: DevKit.WebApi.StringValue;
		msdyn_statusname: DevKit.WebApi.StringValue;
		msdyn_subtype: DevKit.WebApi.StringValue;
		msdyn_synctoexternalsearchindex: DevKit.WebApi.StringValue;
		msdyn_total: DevKit.WebApi.DecimalValue;
		msdyn_typename: DevKit.WebApi.StringValue;
		msdyn_uniquename: DevKit.WebApi.StringValue;
		msdyn_version: DevKit.WebApi.StringValue;
		msdyn_workflowcategory: DevKit.WebApi.StringValue;
		msdyn_workflowcategoryname: DevKit.WebApi.StringValue;
		msdyn_workflowidunique: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace msdyn_solutioncomponentsummary {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}