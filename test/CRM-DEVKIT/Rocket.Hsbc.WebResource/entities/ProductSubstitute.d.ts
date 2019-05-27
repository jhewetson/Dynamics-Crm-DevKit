///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormProductSubstitute {
		interface Tabs {
		}
		interface Body {
			/** Select whether the relationship is unidirectional or bidirectional. */
			Direction: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the product that the relationship is defined for. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Select the type of the product relationship. */
			SalesRelationshipType: DevKit.Form.Controls.ControlOptionSet;
			/** Select the related product that the relationship needs to be defined for. */
			SubstitutedProductId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormProductSubstitute extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ProductSubstitute
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ProductSubstitute */
		Body: Hsbc.FormProductSubstitute.Body;
	}
	namespace FormProductSubstituteQuickCreate {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the relationship is unidirectional or bidirectional. */
			Direction: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the product that the relationship is defined for. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Select the type of the product relationship. */
			SalesRelationshipType: DevKit.Form.Controls.ControlOptionSet;
			/** Select the related product that the relationship needs to be defined for. */
			SubstitutedProductId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormProductSubstituteQuickCreate extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ProductSubstituteQuickCreate
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ProductSubstituteQuickCreate */
		Body: Hsbc.FormProductSubstituteQuickCreate.Body;
	}
	class ProductSubstituteApi {
		/**
		* PL.DynamicsCrm.DevKit ProductSubstituteApi
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
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select whether the relationship is unidirectional or bidirectional. */
		Direction: DevKit.WebApi.OptionSetValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** name */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the product that the relationship is defined for. */
		ProductId: DevKit.WebApi.LookupValue;
		/** Shows the unique identifier of the product relationship. */
		ProductSubstituteId: DevKit.WebApi.GuidValue;
		/** Select the type of the product relationship. */
		SalesRelationshipType: DevKit.WebApi.OptionSetValue;
		/** Select the product relationship's status. */
		statecode: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows whether the product relationship is active or inactive. */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** Select the related product that the relationship needs to be defined for. */
		SubstitutedProductId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ProductSubstitute {
		enum Direction {
			/** 0 */
			Uni_Directional,
			/** 1 */
			Bi_Directional
		}
		enum SalesRelationshipType {
			/** 0 */
			Up_sell,
			/** 1 */
			Cross_sell,
			/** 2 */
			Accessory,
			/** 3 */
			Substitute
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':['ProductSubstitute','ProductSubstitute Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}