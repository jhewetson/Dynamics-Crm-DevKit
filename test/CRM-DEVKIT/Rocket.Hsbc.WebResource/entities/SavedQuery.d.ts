﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormSavedQueryInformation {
		interface tab_general_Sections {
			accountinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type additional information to describe the view, such as the filter criteria or intended results set. */
			Description: DevKit.Form.Controls.ControlString;
			/** Tells whether the component can be customized. */
			IsCustomizable: DevKit.Form.Controls.ControlString;
			/** Tells whether the view is the default view for the specified record type (entity). */
			IsDefault: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
			IsQuickFindQuery: DevKit.Form.Controls.ControlBoolean;
			/** Tells whether the view was created by a user. */
			IsUserDefined: DevKit.Form.Controls.ControlBoolean;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSavedQueryInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form SavedQueryInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SavedQueryInformation */
		Body: Hsbc.FormSavedQueryInformation.Body;
	}
	class SavedQueryApi {
		/**
		* PL.DynamicsCrm.DevKit SavedQueryApi
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
		/** Type the column name that will be used to group the results from the data collected across multiple records from a system view. */
		AdvancedGroupBy: DevKit.WebApi.StringValue;
		/** Tells whether the view can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** Contains the columns and sorting criteria for the view, stored in XML format. */
		ColumnSetXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Type information about how the items in the system view are formatted. */
		ConditionalFormatting: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the view, such as the filter criteria or intended results set. */
		Description: DevKit.WebApi.StringValue;
		/** String specifying the query in Fetch XML language. */
		FetchXml: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Tells whether a user created the view. */
		IsCustom: DevKit.WebApi.BooleanValueReadonly;
		/** Tells whether the component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Tells whether the view is the default view for the specified record type (entity). */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Tells whether the record is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
		IsQuickFindQuery: DevKit.WebApi.BooleanValue;
		/** Tells whether the view was created by a user. */
		IsUserDefined: DevKit.WebApi.BooleanValueReadonly;
		/** Layout data in JSON format. */
		LayoutJson: DevKit.WebApi.StringValue;
		/** For internal use only. */
		LayoutXml: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
		Name: DevKit.WebApi.StringValue;
		/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
		OfflineSqlQuery: DevKit.WebApi.StringValue;
		/** Choose the ID of the organization that the record is associated with. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For the organization, type the tab order to determine how users navigate through the screen using only the Tab key. */
		OrganizationTabOrder: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		QueryAPI: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		QueryAppUsage: DevKit.WebApi.IntegerValue;
		/** Shows the type of the query. */
		QueryType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the view. */
		SavedQueryId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SavedQueryIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the status of the view. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Shows the reason code that explains the status of the record. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the view. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SavedQuery {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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