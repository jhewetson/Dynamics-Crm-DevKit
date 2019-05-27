﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace Formmsdyn_PostConfigInformation {
		interface tab_tab_notification_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_notification extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_notification_Sections;
		}
		interface Tabs {
			tab_notification: tab_tab_notification;
		}
		interface Body {
			Tab: Tabs;
			ActivityFeedsRules: DevKit.Form.Controls.ControlGrid;
			Views: DevKit.Form.Controls.ControlGrid;
			/** Enables or disables the wall on the entity form. */
			msdyn_ConfigureWall: DevKit.Form.Controls.ControlBoolean;
			/** Logical name of the entity configured by this object. */
			msdyn_EntityName: DevKit.Form.Controls.ControlString;
			/** Information about the success or failure of the configuration. */
			msdyn_Status: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the Post Configuration */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_postconfig_msdyn_postruleconfig: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_postconfig_wallsavedquery: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_PostConfigInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form msdyn_PostConfigInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_PostConfigInformation */
		Body: Hsbc.Formmsdyn_PostConfigInformation.Body;
		/** The Footer section of form msdyn_PostConfigInformation */
		Footer: Hsbc.Formmsdyn_PostConfigInformation.Footer;
		/** The Navigation of form msdyn_PostConfigInformation */
		Navigation: Hsbc.Formmsdyn_PostConfigInformation.Navigation;
	}
	class msdyn_PostConfigApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_PostConfigApi
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
		/** Enables or disables the wall on the entity form. */
		msdyn_ConfigureWall: DevKit.WebApi.BooleanValue;
		/** Display name of the entity configured by this object. */
		msdyn_EntityDisplayName: DevKit.WebApi.StringValue;
		/** Logical name of the entity configured by this object. */
		msdyn_EntityName: DevKit.WebApi.StringValue;
		/** Identifier for the view of records that a user follows. */
		msdyn_FollowingViewId: DevKit.WebApi.StringValue;
		/** Identifier for the view of records that a user follows. */
		msdyn_FollowingViewId2: DevKit.WebApi.StringValue;
		/** Object Type Code of the entity */
		msdyn_Otc: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the post configuration for this rule. */
		msdyn_PostConfigId: DevKit.WebApi.GuidValue;
		/** Information about the success or failure of the configuration. */
		msdyn_Status: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Post Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Post Configuration */
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
	namespace msdyn_PostConfig {
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