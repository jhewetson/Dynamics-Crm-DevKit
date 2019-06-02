﻿///<reference path='DevKit.d.ts' />
declare namespace Rocket {
	namespace FormSharePointDocumentLocationInformation {
		interface tab_general_Sections {
			_272EB814_0769_5EBE_3ED1_E95A0B16853E: DevKit.Form.Controls.ControlSection;
			urloption: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Absolute URL of the SharePoint document location. */
			AbsoluteURL: DevKit.Form.Controls.ControlString;
			/** Description of the SharePoint document location record. */
			Description: DevKit.Form.Controls.ControlString;
			/** Location type of the SharePoint document location. */
			LocationType: DevKit.Form.Controls.ControlOptionSet;
			/** Name of the SharePoint document location record. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the SharePoint document location record. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the parent site or location. */
			ParentSiteOrLocation: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the SharePoint document location record is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Relative URL of the SharePoint document location. */
			RelativeUrl: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the SharePoint document location record. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navSubDocumentLocations: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormSharePointDocumentLocationInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form SharePointDocumentLocationInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SharePointDocumentLocationInformation */
		Body: Rocket.FormSharePointDocumentLocationInformation.Body;
		/** The Footer section of form SharePointDocumentLocationInformation */
		Footer: Rocket.FormSharePointDocumentLocationInformation.Footer;
		/** The Navigation of form SharePointDocumentLocationInformation */
		Navigation: Rocket.FormSharePointDocumentLocationInformation.Navigation;
	}
	class SharePointDocumentLocationApi {
		/**
		* PL.DynamicsCrm.DevKit SharePointDocumentLocationApi
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
		/** Absolute URL of the SharePoint document location. */
		AbsoluteURL: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the SharePoint document location record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint document location record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the SharePoint document location record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the SharePoint document location record. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate between the currency associated with the SharePoint document location record and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created the SharePoint document location record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Location type of the SharePoint document location. */
		LocationType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the SharePoint document location record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint document location record was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the SharePoint document location record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the SharePoint document location record. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the SharePoint document location record. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the SharePoint document location record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the SharePoint document location record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the parent site or location. */
		parentsiteorlocation_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the parent site or location. */
		parentsiteorlocation_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Relative URL of the SharePoint document location. */
		RelativeUrl: DevKit.WebApi.StringValue;
		/** Shows the service type of the SharePoint site. */
		ServiceType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the SharePoint document location record. */
		SharePointDocumentLocationId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SiteCollectionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the SharePoint document location record. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the SharePoint document location record. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the SharePoint document location record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Choose the user who owns the SharePoint document location. */
		UserId: DevKit.WebApi.GuidValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SharePointDocumentLocation {
		enum LocationType {
			/** 0 */
			General,
			/** 1 */
			Dedicated_for_OneNote_Integration
		}
		enum ServiceType {
			/** 0 */
			SharePoint,
			/** 1 */
			OneDrive,
			/** 2 */
			Shared_with_me,
			/** 3 */
			MS_Teams
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}