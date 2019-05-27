﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormSocialProfile {
		interface Header {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Form.Controls.ControlDouble;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Tabs {
		}
		interface Body {
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Form.Controls.ControlBoolean;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			related_sp: DevKit.Form.Controls.ControlQuickView;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Form.Controls.ControlString;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocialProfile extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form SocialProfile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SocialProfile */
		Body: Rocket.FormSocialProfile.Body;
		/** The Header section of form SocialProfile */
		Header: Rocket.FormSocialProfile.Header;
	}
	namespace FormSocialProfileforInteractiveexperience {
		interface Header {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Form.Controls.ControlDouble;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
			tab_2_section_3: DevKit.Form.Controls.ControlSection;
			tab_2_section_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Form.Controls.ControlBoolean;
			customer_qfc: DevKit.Form.Controls.ControlQuickView;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			related_sp: DevKit.Form.Controls.ControlQuickView;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Form.Controls.ControlString;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocialProfileforInteractiveexperience extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form SocialProfileforInteractiveexperience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SocialProfileforInteractiveexperience */
		Body: Rocket.FormSocialProfileforInteractiveexperience.Body;
		/** The Header section of form SocialProfileforInteractiveexperience */
		Header: Rocket.FormSocialProfileforInteractiveexperience.Header;
	}
	class SocialProfileApi {
		/**
		* PL.DynamicsCrm.DevKit SocialProfileApi
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
		/** Identifies if the social profile has been blocked. */
		Blocked: DevKit.WebApi.BooleanValue;
		/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows the score that determines the online social influence of the social profile. */
		InfluenceScore: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the contact. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the contact. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows the display name of the customer on this social profile. */
		ProfileFullName: DevKit.WebApi.StringValue;
		/** Shows the customer that this social profile belongs to. */
		ProfileLink: DevKit.WebApi.StringValue;
		/** Shows the name of the social profile on the corresponding social channel. */
		ProfileName: DevKit.WebApi.StringValue;
		/** Unique Identifier of the social profile name. */
		SocialProfileId: DevKit.WebApi.GuidValue;
		/** Status of the Social Profile */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Social Profile */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Unique ID of the Profile ID */
		UniqueProfileID: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the social profile. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SocialProfile {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
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
//{'JsForm':['Social Profile','Social Profile for Interactive experience'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}