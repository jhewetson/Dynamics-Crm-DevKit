﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormConnectionRoleInformation {
		interface tab_general_Sections {
			step1: DevKit.Form.Controls.ControlSection;
			step2: DevKit.Form.Controls.ControlSection;
			_B0A70B0D_568C_10D3_1A3D_01C997A061C1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_reciprocalroles_Sections {
			roleGrid: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_reciprocalroles extends DevKit.Form.Controls.IControlTab {
			Section: tab_reciprocalroles_Sections;
		}
		interface Tabs {
			general: tab_general;
			reciprocalroles: tab_reciprocalroles;
		}
		interface Body {
			Tab: Tabs;
			reciprocalRoleGrid: DevKit.Form.Controls.ControlGrid;
			/** Categories for connection roles. */
			Category: DevKit.Form.Controls.ControlOptionSet;
			/** Description of the connection role. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the connection role. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormConnectionRoleInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ConnectionRoleInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ConnectionRoleInformation */
		Body: Rocket.FormConnectionRoleInformation.Body;
	}
	class ConnectionRoleApi {
		/**
		* PL.DynamicsCrm.DevKit ConnectionRoleApi
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
		/** Categories for connection roles. */
		Category: DevKit.WebApi.OptionSetValue;
		/** State of the component. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the connection role. */
		ConnectionRoleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the published or unpublished connection role record. */
		ConnectionRoleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who created the relationship role. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the connection role was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the relationship role. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the connection role. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the connection role. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the connection role was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the relationship role. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the connection role. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization that this connection role belongs to. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was last overwritten. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the connection role. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the connection role. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the connection role. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ConnectionRole {
		enum Category {
			/** 1 */
			Business,
			/** 2 */
			Family,
			/** 3 */
			Social,
			/** 4 */
			Sales,
			/** 5 */
			Other,
			/** 1000 */
			Stakeholder,
			/** 1001 */
			Sales_Team,
			/** 1002 */
			Service
		}
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