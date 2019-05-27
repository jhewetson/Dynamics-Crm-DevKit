///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormProduct {
		interface Header {
			/** Status of the product. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_product_details_Sections {
			productinformation: DevKit.Form.Controls.ControlSection;
			costs: DevKit.Form.Controls.ControlSection;
		}
		interface tab_productassocaition_items_Sections {
			productassocaition_items_section: DevKit.Form.Controls.ControlSection;
			DynamicProperties: DevKit.Form.Controls.ControlSection;
		}
		interface tab_product_dynamic_properties_Sections {
			product_dynamic_properties_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_price_list_items_Sections {
			price_list_items_section: DevKit.Form.Controls.ControlSection;
			productsubstitute_items_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_product_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_product_details_Sections;
		}
		interface tab_productassocaition_items extends DevKit.Form.Controls.IControlTab {
			Section: tab_productassocaition_items_Sections;
		}
		interface tab_product_dynamic_properties extends DevKit.Form.Controls.IControlTab {
			Section: tab_product_dynamic_properties_Sections;
		}
		interface tab_price_list_items extends DevKit.Form.Controls.IControlTab {
			Section: tab_price_list_items_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			product_details: tab_product_details;
			productassocaition_items: tab_productassocaition_items;
			product_dynamic_properties: tab_product_dynamic_properties;
			price_list_items: tab_price_list_items;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			productassocaition_items: DevKit.Form.Controls.ControlGrid;
			product_dynamic_properties: DevKit.Form.Controls.ControlGrid;
			Price_List_Items: DevKit.Form.Controls.ControlGrid;
			productsubstitute_items: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Form.Controls.ControlLookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Form.Controls.ControlLookup;
			/** Description of the product. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the product. */
			Name: DevKit.Form.Controls.ControlString;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Form.Controls.ControlLookup;
			/** Specifies the parent product family hierarchy. */
			ParentProductId_1: DevKit.Form.Controls.ControlLookup;
			/** Select the default price list for the product. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Form.Controls.ControlString;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Form.Controls.ControlInteger;
			/** Select a category for the product. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Form.Controls.ControlDate;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Form.Controls.ControlDate;
		}
		interface Navigation {
			navPrices: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormProduct extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Product */
		Body: Hsbc.FormProduct.Body;
		/** The Header section of form Product */
		Header: Hsbc.FormProduct.Header;
		/** The Navigation of form Product */
		Navigation: Hsbc.FormProduct.Navigation;
	}
	namespace FormProductfamilyQuickCreate {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Form.Controls.ControlLookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Form.Controls.ControlLookup;
			/** Name of the product. */
			Name: DevKit.Form.Controls.ControlString;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Form.Controls.ControlLookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Form.Controls.ControlString;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Form.Controls.ControlInteger;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Form.Controls.ControlDate;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormProductfamilyQuickCreate extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ProductfamilyQuickCreate
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ProductfamilyQuickCreate */
		Body: Hsbc.FormProductfamilyQuickCreate.Body;
	}
	namespace FormProductQuickCreate {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Form.Controls.ControlLookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Form.Controls.ControlLookup;
			/** Description of the product. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the product. */
			Name: DevKit.Form.Controls.ControlString;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Form.Controls.ControlLookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Form.Controls.ControlString;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Form.Controls.ControlInteger;
			/** Select a category for the product. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Form.Controls.ControlDate;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormProductQuickCreate extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ProductQuickCreate
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ProductQuickCreate */
		Body: Hsbc.FormProductQuickCreate.Body;
	}
	class ProductApi {
		/**
		* PL.DynamicsCrm.DevKit ProductApi
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
		/** Unique identifier of the user who created the product. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the product. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Current cost for the product item. Used in price calculations. */
		CurrentCost: DevKit.WebApi.MoneyValue;
		/** Value of the Current Cost in base currency. */
		CurrentCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Default unit for the product. */
		DefaultUoMId: DevKit.WebApi.LookupValue;
		/** Default unit group for the product. */
		DefaultUoMScheduleId: DevKit.WebApi.LookupValue;
		/** Description of the product. */
		Description: DevKit.WebApi.StringValue;
		/** Internal Use Only */
		DMTImportState: DevKit.WebApi.IntegerValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange rate for the currency associated with the product with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Hierarchy path of the product. */
		HierarchyPath: DevKit.WebApi.StringValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information that specifies whether the product is a kit. */
		IsKit: DevKit.WebApi.BooleanValue;
		IsReparented: DevKit.WebApi.BooleanValue;
		/** Information about whether the product is a stock item. */
		IsStockItem: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the product. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the product. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the product. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Specifies the parent product family hierarchy. */
		ParentProductId: DevKit.WebApi.LookupValue;
		/** List price of the product. */
		Price: DevKit.WebApi.MoneyValue;
		/** Value of the List Price in base currency. */
		Price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the default price list for the product. */
		PriceLevelId: DevKit.WebApi.LookupValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the product. */
		ProductId: DevKit.WebApi.GuidValue;
		/** User-defined product ID. */
		ProductNumber: DevKit.WebApi.StringValue;
		/** Product Structure. */
		ProductStructure: DevKit.WebApi.OptionSetValue;
		/** Type of product. */
		ProductTypeCode: DevKit.WebApi.OptionSetValue;
		/** URL for the Website associated with the product. */
		ProductUrl: DevKit.WebApi.StringValue;
		/** Number of decimal places that can be used in monetary amounts for the product. */
		QuantityDecimal: DevKit.WebApi.IntegerValue;
		/** Quantity of the product in stock. */
		QuantityOnHand: DevKit.WebApi.DecimalValue;
		/** Product size. */
		Size: DevKit.WebApi.StringValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Standard cost of the product. */
		StandardCost: DevKit.WebApi.MoneyValue;
		/** Value of the Standard Cost in base currency. */
		StandardCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Status of the product. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the product. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Stock volume of the product. */
		StockVolume: DevKit.WebApi.DecimalValue;
		/** Stock weight of the product. */
		StockWeight: DevKit.WebApi.DecimalValue;
		/** Select a category for the product. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** Name of the product's supplier. */
		SupplierName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the product. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Date from which this product is valid. */
		ValidFromDate_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Date to which this product is valid. */
		ValidToDate_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Unique identifier of vendor supplying the product. */
		VendorID: DevKit.WebApi.StringValue;
		/** Name of the product vendor. */
		VendorName: DevKit.WebApi.StringValue;
		/** Unique part identifier in vendor catalog of this product. */
		VendorPartNumber: DevKit.WebApi.StringValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Product {
		enum ProductStructure {
			/** 1 */
			Product,
			/** 2 */
			Product_Family,
			/** 3 */
			Product_Bundle
		}
		enum ProductTypeCode {
			/** 1 */
			Sales_Inventory,
			/** 2 */
			Miscellaneous_Charges,
			/** 3 */
			Services,
			/** 4 */
			Flat_Fees
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Retired,
			/** 2 */
			Draft,
			/** 3 */
			Under_Revision
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Retired,
			/** 0 */
			Draft,
			/** 3 */
			Under_Revision
		}
	}
}
//{'JsForm':['Product','Product family Quick Create','Product Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}