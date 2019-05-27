﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormGoalRollupQueryInformation {
		interface tab_rule_Sections {
			section1: DevKit.Form.Controls.ControlSection;
			criteria: DevKit.Form.Controls.ControlSection;
			RuleConditions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_rule extends DevKit.Form.Controls.IControlTab {
			Section: tab_rule_Sections;
		}
		interface Tabs {
			rule: tab_rule;
		}
		interface Body {
			Tab: Tabs;
			ruleconditioncontrol: DevKit.Form.Controls.ControlIFrame;
			queryeditor_uc: DevKit.Form.Controls.ControlActionCards;
			/** Type a descriptive name for the goal rollup query. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name for the goal rollup query. */
			Name_1: DevKit.Form.Controls.ControlString;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the record type of the rollup query. */
			QueryEntityType: DevKit.Form.Controls.ControlString;
			queryentitytype_uc: DevKit.Form.Controls.ControlActionCards;
		}
	}
	class FormGoalRollupQueryInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form GoalRollupQueryInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form GoalRollupQueryInformation */
		Body: Rocket.FormGoalRollupQueryInformation.Body;
	}
	class GoalRollupQueryApi {
		/**
		* PL.DynamicsCrm.DevKit GoalRollupQueryApi
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
		/** String that specifies the condition criteria in FetchXML. */
		FetchXml: DevKit.WebApi.StringValue;
		/** Unique identifier of the rollup query. */
		GoalRollupQueryId: DevKit.WebApi.GuidValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the goal rollup query. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the record. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the goal rollup query is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the goal rollup query's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the goal rollup query. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace GoalRollupQuery {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 0 */
			Open,
			/** 1 */
			Closed
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}