///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormServiceInformation {
		interface tab_requiredresources_Sections {
			resources: DevKit.Form.Controls.ControlSection;
		}
		interface tab_requiredresources extends DevKit.Form.Controls.IControlTab {
			Section: tab_requiredresources_Sections;
		}
		interface Tabs {
			requiredresources: tab_requiredresources;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_Scheduling: DevKit.Form.Controls.ControlIFrame;
			IFRAME_RuleTree: DevKit.Form.Controls.ControlIFrame;
			/** Used in conjunction with granularity to describes when services can be performed in relation to midnight on a given day. */
			AnchorOffset: DevKit.Form.Controls.ControlInteger;
			/** Description of activity that represents work done to satisfy a customer's need. */
			Description: DevKit.Form.Controls.ControlString;
			/** Duration of the service. */
			Duration: DevKit.Form.Controls.ControlInteger;
			/** Describes how often the service is performed. */
			Granularity: DevKit.Form.Controls.ControlString;
			/** Initial status reason for the service activity. */
			InitialStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Information about whether the service can be scheduled. */
			IsSchedulable: DevKit.Form.Controls.ControlBoolean;
			/** Name of the service. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the resource specification with which the service is associated. */
			ResourceSpecId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormServiceInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ServiceInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ServiceInformation */
		Body: Hsbc.FormServiceInformation.Body;
	}
	class ServiceApi {
		/**
		* PL.DynamicsCrm.DevKit ServiceApi
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
		/** Used in conjunction with granularity to describes when services can be performed in relation to midnight on a given day. */
		AnchorOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the calendar. */
		CalendarId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the service. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the service was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the service. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of activity that represents work done to satisfy a customer's need. */
		Description: DevKit.WebApi.StringValue;
		/** Duration of the service. */
		Duration: DevKit.WebApi.IntegerValue;
		/** Describes how often the service is performed. */
		Granularity: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Initial status reason for the service activity. */
		InitialStatusCode: DevKit.WebApi.OptionSetValue;
		/** Information about whether the service can be scheduled. */
		IsSchedulable: DevKit.WebApi.BooleanValue;
		/** Information about whether the service is visible to users. */
		IsVisible: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the service. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the service was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the service. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the service. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the resource specification with which the service is associated. */
		ResourceSpecId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated service. */
		ServiceId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ShowResources: DevKit.WebApi.BooleanValue;
		/** Value that is taken from PluginTypeId in the Plugin Type record for the scheduling strategy. This is the ID of the scheduling strategy plug-in associated with the service. */
		StrategyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Service {
		enum InitialStatusCode {
			/** 1 */
			Requested,
			/** 2 */
			Tentative,
			/** 3 */
			Pending,
			/** 4 */
			Reserved,
			/** 6 */
			In_Progress,
			/** 7 */
			Arrived,
			/** 8 */
			Completed,
			/** 9 */
			Canceled,
			/** 10 */
			No_Show
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}