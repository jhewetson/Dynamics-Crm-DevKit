﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormPartnerApplicationMainForm {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Indicates the application role. */
			ApplicationRole: DevKit.Form.Controls.ControlOptionSet;
			/** Name of Partner Application. */
			Name: DevKit.Form.Controls.ControlString;
			/** Principal ID of the partner application. */
			PrincipalId: DevKit.Form.Controls.ControlString;
			/** Select whether the partner application uses an authorization server. */
			UseAuthorizationServer: DevKit.Form.Controls.ControlBoolean;
		}
		interface Footer {
			/** Shows the status of the partner application. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormPartnerApplicationMainForm extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form PartnerApplicationMainForm
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form PartnerApplicationMainForm */
		Body: Rocket.FormPartnerApplicationMainForm.Body;
		/** The Footer section of form PartnerApplicationMainForm */
		Footer: Rocket.FormPartnerApplicationMainForm.Footer;
	}
	class PartnerApplicationApi {
		/**
		* PL.DynamicsCrm.DevKit PartnerApplicationApi
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
		/** Indicates the application role. */
		ApplicationRole: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Contains the metadata URL. */
		MetadataUrl: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of Partner Application. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the partner application. */
		PartnerApplicationId: DevKit.WebApi.GuidValue;
		/** Principal ID of the partner application. */
		PrincipalId: DevKit.WebApi.StringValue;
		/** Indicates the realm. */
		Realm: DevKit.WebApi.StringValue;
		/** Shows the status of the partner application. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select the partner application's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Shows the tenant ID. */
		TenantId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Select whether the partner application uses an authorization server. */
		UseAuthorizationServer: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the partner application. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PartnerApplication {
		enum ApplicationRole {
			/** 0 */
			Client,
			/** 1 */
			Server
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Enabled,
			/** 2 */
			Disabled
		}
	}
}
//{'JsForm':['Partner Application Main Form'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}