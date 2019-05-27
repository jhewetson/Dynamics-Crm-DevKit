﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace Formmsdyn_PostRuleConfigInformation {
		interface Tabs {
		}
		interface Body {
			/** Name of the rule. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Entity that is enabled for Activity feeds. */
			msdyn_PostConfigId: DevKit.Form.Controls.ControlLookup;
			/** Determine whether to post this message to the Yammer Activity Stream. Please do not check this box if this message contains sensitive information requiring Microsoft Dynamics 365 access. */
			msdyn_PostToYammer: DevKit.Form.Controls.ControlBoolean;
		}
		interface Footer {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Status of the Post Rule Configuration */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_PostRuleConfigInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form msdyn_PostRuleConfigInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_PostRuleConfigInformation */
		Body: Hsbc.Formmsdyn_PostRuleConfigInformation.Body;
		/** The Footer section of form msdyn_PostRuleConfigInformation */
		Footer: Hsbc.Formmsdyn_PostRuleConfigInformation.Footer;
		/** The Navigation of form msdyn_PostRuleConfigInformation */
		Navigation: Hsbc.Formmsdyn_PostRuleConfigInformation.Navigation;
	}
	class msdyn_PostRuleConfigApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_PostRuleConfigApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Internal Use Only. */
		msdyn_FormatId: DevKit.WebApi.StringValue;
		/** Name of the rule. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Entity that is enabled for Activity feeds. */
		msdyn_PostConfigId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the post rule configuration. */
		msdyn_PostRuleConfigId: DevKit.WebApi.GuidValue;
		/** Determine whether to post this message to the Yammer Activity Stream. Please do not check this box if this message contains sensitive information requiring Microsoft Dynamics 365 access. */
		msdyn_PostToYammer: DevKit.WebApi.BooleanValue;
		/** Identifier in the format WebResourceName:SchemaName of the definition for this rule. */
		msdyn_RuleId: DevKit.WebApi.StringValue;
		/** Internal Use Only. */
		msdyn_RuleSource: DevKit.WebApi.StringValue;
		/** Unique identifier of the SDK message processing step for this rule. */
		msdyn_StepId: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Post Rule Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Post Rule Configuration */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_PostRuleConfig {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}