///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace Formmsdyn_componentlayerInformation {
		interface Tabs {
		}
		interface Body {
			/** The name of the component. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_componentlayerInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form msdyn_componentlayerInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_componentlayerInformation */
		Body: Hsbc.Formmsdyn_componentlayerInformation.Body;
	}
	class msdyn_componentlayerApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_componentlayerApi
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
		msdyn_changes: DevKit.WebApi.StringValue;
		msdyn_componentid: DevKit.WebApi.StringValue;
		msdyn_componentjson: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_componentlayerId: DevKit.WebApi.GuidValue;
		msdyn_endtime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The name of the component. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_order: DevKit.WebApi.IntegerValue;
		msdyn_publishername: DevKit.WebApi.StringValue;
		msdyn_solutioncomponentname: DevKit.WebApi.StringValue;
		msdyn_solutionname: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace msdyn_componentlayer {
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}