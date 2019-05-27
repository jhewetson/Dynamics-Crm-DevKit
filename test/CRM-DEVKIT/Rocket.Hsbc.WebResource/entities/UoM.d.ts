///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormUoMInformation {
		interface tab_general_Sections {
			unitofmeasureinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Form.Controls.ControlLookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unit quantity for the product. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
		}
	}
	class FormUoMInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form UoMInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UoMInformation */
		Body: Hsbc.FormUoMInformation.Body;
	}
	namespace FormUnitofMeasureQuickCreate {
		interface tab_general_Sections {
			unitofmeasureinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Form.Controls.ControlLookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unit quantity for the product. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Choose the ID of the unit group that the unit is associated with. */
			UoMScheduleId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormUnitofMeasureQuickCreate extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form UnitofMeasureQuickCreate
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UnitofMeasureQuickCreate */
		Body: Hsbc.FormUnitofMeasureQuickCreate.Body;
	}
	class UoMApi {
		/**
		* PL.DynamicsCrm.DevKit UoMApi
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
		/** Choose the base or primary unit on which the unit is based. */
		BaseUoM: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the unit. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the unit was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the uom. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Tells whether the unit is the base unit for the associated unit group. */
		IsScheduleBaseUoM: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the unit. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the unit was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the uom. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive title or name for the unit of measure. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the unit of measure. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unit quantity for the product. */
		Quantity: DevKit.WebApi.DecimalValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the unit. */
		UoMId: DevKit.WebApi.GuidValue;
		/** Choose the ID of the unit group that the unit is associated with. */
		UoMScheduleId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UoM {
	}
}
//{'JsForm':['Information','Unit of Measure Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}