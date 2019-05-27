///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class msdyn_odatav4dsApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_odatav4dsApi
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
		/** Type additional information to describe this OData v4 data source. What environment does this data source target and what is the purpose of this system ? */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Parameter10 Type */
		msdyn_isparameter10header: DevKit.WebApi.BooleanValue;
		/** Parameter1 Type */
		msdyn_isparameter1header: DevKit.WebApi.BooleanValue;
		/** Parameter2 Type */
		msdyn_isparameter2header: DevKit.WebApi.BooleanValue;
		/** Parameter3 Type */
		msdyn_isparameter3header: DevKit.WebApi.BooleanValue;
		/** Parameter4 Type */
		msdyn_isparameter4header: DevKit.WebApi.BooleanValue;
		/** Parameter5 Type */
		msdyn_isparameter5header: DevKit.WebApi.BooleanValue;
		/** Parameter6 Type */
		msdyn_isparameter6header: DevKit.WebApi.BooleanValue;
		/** Parameter7 Type */
		msdyn_isparameter7header: DevKit.WebApi.BooleanValue;
		/** Parameter8 Type */
		msdyn_isparameter8header: DevKit.WebApi.BooleanValue;
		/** Parameter9 Type */
		msdyn_isparameter9header: DevKit.WebApi.BooleanValue;
		/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_odatav4dsId: DevKit.WebApi.GuidValue;
		msdyn_paginationmode: DevKit.WebApi.BooleanValue;
		msdyn_paginationtype: DevKit.WebApi.OptionSetValue;
		msdyn_parameter10name: DevKit.WebApi.StringValue;
		msdyn_parameter10value: DevKit.WebApi.StringValue;
		msdyn_parameter1name: DevKit.WebApi.StringValue;
		msdyn_parameter1value: DevKit.WebApi.StringValue;
		msdyn_parameter2name: DevKit.WebApi.StringValue;
		msdyn_parameter2value: DevKit.WebApi.StringValue;
		msdyn_parameter3name: DevKit.WebApi.StringValue;
		msdyn_parameter3value: DevKit.WebApi.StringValue;
		msdyn_parameter4name: DevKit.WebApi.StringValue;
		msdyn_parameter4value: DevKit.WebApi.StringValue;
		msdyn_parameter5name: DevKit.WebApi.StringValue;
		msdyn_parameter5value: DevKit.WebApi.StringValue;
		msdyn_parameter6name: DevKit.WebApi.StringValue;
		msdyn_parameter6value: DevKit.WebApi.StringValue;
		msdyn_parameter7name: DevKit.WebApi.StringValue;
		msdyn_parameter7value: DevKit.WebApi.StringValue;
		msdyn_parameter8name: DevKit.WebApi.StringValue;
		msdyn_parameter8value: DevKit.WebApi.StringValue;
		msdyn_parameter9name: DevKit.WebApi.StringValue;
		msdyn_parameter9value: DevKit.WebApi.StringValue;
		msdyn_returninlinecount: DevKit.WebApi.BooleanValue;
		/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
		msdyn_timeout: DevKit.WebApi.IntegerValue;
		/** URL of the OData v4 web service endpoint this data source will target. */
		msdyn_uri: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace msdyn_odatav4ds {
		enum msdyn_paginationtype {
			/** 0 */
			Client_side_Paging,
			/** 1 */
			Server_side_Paging
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}