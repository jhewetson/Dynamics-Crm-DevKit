﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormResourceSpecInformation {
		interface tab_general_Sections {
			section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the business unit with which the resource specification is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormResourceSpecInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ResourceSpecInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ResourceSpecInformation */
		Body: Hsbc.FormResourceSpecInformation.Body;
	}
	class ResourceSpecApi {
		/**
		* PL.DynamicsCrm.DevKit ResourceSpecApi
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
		/** Unique identifier of the business unit with which the resource specification is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Additional constraints, specified as expressions, which are used to filter a set of valid resources. */
		Constraints: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the resource specification. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the resource specification was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the resourcespec. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Selection rule that allows the scheduling engine to select a number of resources from a pool of resources. The rules can be associated with a service. */
		Description: DevKit.WebApi.StringValue;
		/** Number that specifies the minimal effort required from resources. */
		EffortRequired: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the scheduling group with which the resource specification is associated. */
		GroupObjectId: DevKit.WebApi.GuidValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the resource specification. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the resource specification was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the resourcespec. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the resource specification. */
		Name: DevKit.WebApi.StringValue;
		/** Search strategy to use for the resource specification. */
		ObjectiveExpression: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the resource specification is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Required number of resources that must be available. Use -1 to indicate all resources. */
		RequiredCount: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the resource specification. */
		ResourceSpecId: DevKit.WebApi.GuidValue;
		/** Value that specifies that all valid and available resources must be in the same site. */
		SameSite: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ResourceSpec {
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}