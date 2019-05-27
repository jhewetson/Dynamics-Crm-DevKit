﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormCustomerOpportunityRoleInformation {
		interface tab_general_Sections {
			OpportunityRelationshipInformation: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the account or contact associated to the opportunity, such as a strategic partner, third-party vendor, or key decision maker. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the opportunity relationship, such as the length or quality of the relationship. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose the opportunity that the specified account or contact is related to. The opportunity relationship will be displayed in the Relationships view on the selected opportunity. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Choose the role or nature of the relationship that the customer has with the opportunity. The field is read-only until a customer has been selected. Administrators can configure role values under Business Management in the Settings area. */
			OpportunityRoleId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormCustomerOpportunityRoleInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form CustomerOpportunityRoleInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form CustomerOpportunityRoleInformation */
		Body: Hsbc.FormCustomerOpportunityRoleInformation.Body;
	}
	class CustomerOpportunityRoleApi {
		/**
		* PL.DynamicsCrm.DevKit CustomerOpportunityRoleApi
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
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the opportunity relationship. */
		CustomerOpportunityRoleId: DevKit.WebApi.GuidValue;
		/** Type additional information to describe the opportunity relationship, such as the length or quality of the relationship. */
		Description: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the opportunity that the specified account or contact is related to. The opportunity relationship will be displayed in the Relationships view on the selected opportunity. */
		OpportunityId: DevKit.WebApi.LookupValue;
		/** Choose the role or nature of the relationship that the customer has with the opportunity. The field is read-only until a customer has been selected. Administrators can configure role values under Business Management in the Settings area. */
		OpportunityRoleId: DevKit.WebApi.LookupValue;
		/** Status of the opportunity. */
		OpportunityStateCode: DevKit.WebApi.IntegerValueReadonly;
		/** Reason for the status of the opportunity. */
		OpportunityStatusCode: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		UniqueDscId: DevKit.WebApi.GuidValueReadonly;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CustomerOpportunityRole {
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}