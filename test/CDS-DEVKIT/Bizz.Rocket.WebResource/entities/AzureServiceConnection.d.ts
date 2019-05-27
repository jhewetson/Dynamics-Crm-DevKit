﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormAzureServiceConnectionInformation {
		interface Header {
			/** Shows whether the Azure service connection is active or inactive. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			connectioninfo: DevKit.Form.Controls.ControlSection;
			connectiontestinfo: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type the Azure account key. */
			AccountKey: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user who created the Azure service connection. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Enter a description of the Azure service connection. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the status of the last connection to the Azure service. */
			LastConnectionStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** shows the time of the last connection to the Azure service. */
			LastConnectionTime: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who modified the Azure service connection. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the Azure service connection was last modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type a logical name for the connection. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type the service URL for the Azure service. */
			ServiceUri: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAzureServiceConnectionInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form AzureServiceConnectionInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form AzureServiceConnectionInformation */
		Body: Rocket.FormAzureServiceConnectionInformation.Body;
		/** The Header section of form AzureServiceConnectionInformation */
		Header: Rocket.FormAzureServiceConnectionInformation.Header;
	}
	class AzureServiceConnectionApi {
		/**
		* PL.DynamicsCrm.DevKit AzureServiceConnectionApi
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
		/** Type the Azure account key. */
		AccountKey: DevKit.WebApi.StringValue;
		/** Unique identifier of the Azure service connection. */
		AzureServiceConnectionId: DevKit.WebApi.GuidValue;
		/** Azure service connection type */
		ConnectionType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the Azure service connection. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Azure service connection was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the Azure service connection. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a description of the Azure service connection. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the status of the last connection to the Azure service. */
		LastConnectionStatusCode: DevKit.WebApi.OptionSetValue;
		/** shows the time of the last connection to the Azure service. */
		LastConnectionTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who modified the Azure service connection. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Azure service connection was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the Azure service connection. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a logical name for the connection. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the Azure service connection. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Type the service URL for the Azure service. */
		ServiceUri: DevKit.WebApi.StringValue;
		/** Shows whether the Azure service connection is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the Azure service connection's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace AzureServiceConnection {
		enum ConnectionType {
			/** 1 */
			Recommendation,
			/** 2 */
			Text_Analytics
		}
		enum LastConnectionStatusCode {
			/** 1 */
			Success,
			/** 2 */
			Failure
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':['AzureServiceConnection Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}