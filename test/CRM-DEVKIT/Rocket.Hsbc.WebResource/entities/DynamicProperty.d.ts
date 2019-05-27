﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormProperty {
		interface tab_dynamic_property_summary_Sections {
			dynamic_property_properties_1: DevKit.Form.Controls.ControlSection;
			dynamic_property_properties_31: DevKit.Form.Controls.ControlSection;
		}
		interface tab_dynamic_property_properties_Sections {
			dynamic_property_properties_2: DevKit.Form.Controls.ControlSection;
			dynamic_property_properties_3: DevKit.Form.Controls.ControlSection;
			dynamic_property_properties_41: DevKit.Form.Controls.ControlSection;
		}
		interface tab_dynamic_property_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_dynamic_property_summary_Sections;
		}
		interface tab_dynamic_property_properties extends DevKit.Form.Controls.IControlTab {
			Section: tab_dynamic_property_properties_Sections;
		}
		interface Tabs {
			dynamic_property_summary: tab_dynamic_property_summary;
			dynamic_property_properties: tab_dynamic_property_properties;
		}
		interface Body {
			Tab: Tabs;
			grid_DynamicPropertyOptionSetItem: DevKit.Form.Controls.ControlGrid;
			/** Select the data type of the property. */
			DataType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the default value of the property for a decimal data type. */
			DefaultValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the default value of the property for a double data type. */
			DefaultValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the default value of the property for a whole number data type. */
			DefaultValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the default value of the property. */
			DefaultValueOptionSet: DevKit.Form.Controls.ControlLookup;
			/** Shows the default value of the property for a string data type. */
			DefaultValueString: DevKit.Form.Controls.ControlString;
			/** Type a description for the property. */
			Description: DevKit.Form.Controls.ControlString;
			/** Defines whether the attribute is hidden or shown. */
			IsHidden: DevKit.Form.Controls.ControlBoolean;
			/** Defines whether the attribute is read-only or if it can be edited. */
			IsReadOnly: DevKit.Form.Controls.ControlBoolean;
			/** Defines whether the attribute is mandatory. */
			IsRequired: DevKit.Form.Controls.ControlBoolean;
			/** Shows the maximum allowed length of the property for a string data type. */
			MaxLengthString: DevKit.Form.Controls.ControlInteger;
			/** Shows the maximum allowed value of the property for a decimal data type. */
			MaxValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the maximum allowed value of the property for a double data type. */
			MaxValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the maximum allowed value of the property for a whole number data type. */
			MaxValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the minimum allowed value of the property for a decimal data type. */
			MinValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the minimum allowed value of the property for a double data type. */
			MinValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the minimum allowed value of the property for a whole number data type. */
			MinValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Type the name of the property. */
			Name: DevKit.Form.Controls.ControlString;
			/** Shows the allowed precision of the property for a whole number data type. */
			Precision: DevKit.Form.Controls.ControlInteger;
			/** Choose the product that the property is associated with. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormProperty extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form Property
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Property */
		Body: Hsbc.FormProperty.Body;
	}
	namespace FormPropertyQuickCreate {
		interface tab_dynamic_property_summary_Sections {
			dynamic_property_properties_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_dynamic_property_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_dynamic_property_summary_Sections;
		}
		interface Tabs {
			dynamic_property_summary: tab_dynamic_property_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Select the data type of the property. */
			DataType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the default value of the property for a decimal data type. */
			DefaultValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the default value of the property for a double data type. */
			DefaultValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the default value of the property for a whole number data type. */
			DefaultValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the default value of the property. */
			DefaultValueOptionSet: DevKit.Form.Controls.ControlLookup;
			/** Shows the default value of the property for a string data type. */
			DefaultValueString: DevKit.Form.Controls.ControlString;
			/** Type a description for the property. */
			Description: DevKit.Form.Controls.ControlString;
			/** Defines whether the attribute is hidden or shown. */
			IsHidden: DevKit.Form.Controls.ControlBoolean;
			/** Defines whether the attribute is read-only or if it can be edited. */
			IsReadOnly: DevKit.Form.Controls.ControlBoolean;
			/** Defines whether the attribute is mandatory. */
			IsRequired: DevKit.Form.Controls.ControlBoolean;
			/** Shows the maximum allowed length of the property for a string data type. */
			MaxLengthString: DevKit.Form.Controls.ControlInteger;
			/** Shows the maximum allowed value of the property for a decimal data type. */
			MaxValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the maximum allowed value of the property for a double data type. */
			MaxValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the maximum allowed value of the property for a whole number data type. */
			MaxValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the minimum allowed value of the property for a decimal data type. */
			MinValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the minimum allowed value of the property for a double data type. */
			MinValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the minimum allowed value of the property for a whole number data type. */
			MinValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Type the name of the property. */
			Name: DevKit.Form.Controls.ControlString;
			/** Shows the allowed precision of the property for a whole number data type. */
			Precision: DevKit.Form.Controls.ControlInteger;
			/** Choose the product that the property is associated with. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPropertyQuickCreate extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form PropertyQuickCreate
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form PropertyQuickCreate */
		Body: Hsbc.FormPropertyQuickCreate.Body;
	}
	class DynamicPropertyApi {
		/**
		* PL.DynamicsCrm.DevKit DynamicPropertyApi
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
		/** Shows the property in the product family that this property is being inherited from. */
		BaseDynamicPropertyId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the data type of the property. */
		DataType: DevKit.WebApi.OptionSetValue;
		/** Shows the default value of the property for a decimal data type. */
		DefaultValueDecimal: DevKit.WebApi.DecimalValue;
		/** Shows the default value of the property for a double data type. */
		DefaultValueDouble: DevKit.WebApi.DoubleValue;
		/** Shows the default value of the property for a whole number data type. */
		DefaultValueInteger: DevKit.WebApi.IntegerValue;
		/** Shows the default value of the property. */
		DefaultValueOptionSet: DevKit.WebApi.LookupValue;
		/** Shows the default value of the property for a string data type. */
		DefaultValueString: DevKit.WebApi.StringValue;
		/** Type a description for the property. */
		Description: DevKit.WebApi.StringValue;
		/** Internal Use Only */
		DMTImportState: DevKit.WebApi.IntegerValue;
		/** Shows the unique identifier of the property. */
		DynamicPropertyId: DevKit.WebApi.GuidValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Defines whether the attribute is hidden or shown. */
		IsHidden: DevKit.WebApi.BooleanValue;
		/** Defines whether the attribute is read-only or if it can be edited. */
		IsReadOnly: DevKit.WebApi.BooleanValue;
		/** Defines whether the attribute is mandatory. */
		IsRequired: DevKit.WebApi.BooleanValue;
		/** Shows the maximum allowed length of the property for a string data type. */
		MaxLengthString: DevKit.WebApi.IntegerValue;
		/** Shows the maximum allowed value of the property for a decimal data type. */
		MaxValueDecimal: DevKit.WebApi.DecimalValue;
		/** Shows the maximum allowed value of the property for a double data type. */
		MaxValueDouble: DevKit.WebApi.DoubleValue;
		/** Shows the maximum allowed value of the property for a whole number data type. */
		MaxValueInteger: DevKit.WebApi.IntegerValue;
		/** Shows the minimum allowed value of the property for a decimal data type. */
		MinValueDecimal: DevKit.WebApi.DecimalValue;
		/** Shows the minimum allowed value of the property for a double data type. */
		MinValueDouble: DevKit.WebApi.DoubleValue;
		/** Shows the minimum allowed value of the property for a whole number data type. */
		MinValueInteger: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the name of the property. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the related overwritten property. */
		OverwrittenDynamicPropertyId: DevKit.WebApi.GuidValue;
		/** Shows the allowed precision of the property for a whole number data type. */
		Precision: DevKit.WebApi.IntegerValue;
		/** Choose the product that the property is associated with. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Shows the root property that this property is derived from. */
		RootDynamicPropertyId: DevKit.WebApi.GuidValue;
		/** Shows the state of the property. */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Shows whether the property is active or inactive. */
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
	namespace DynamicProperty {
		enum DataType {
			/** 0 */
			Option_Set,
			/** 1 */
			Decimal,
			/** 2 */
			Floating_Point_Number,
			/** 3 */
			Single_Line_Of_Text,
			/** 4 */
			Whole_Number
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Draft,
			/** 2 */
			Retired
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 0 */
			Draft,
			/** 2 */
			Retired
		}
	}
}
//{'JsForm':['Property','Property Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}