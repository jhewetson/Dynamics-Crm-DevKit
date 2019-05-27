///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormBookableResourceInformation {
		interface tab__E37F4524_4A66_42DC_974C_078756AEF3FB_Sections {
			_9E7DEC57_2C62_4D5D_8B21_75D076C5D1A1: DevKit.Form.Controls.ControlSection;
			_E37F4524_4A66_42DC_974C_078756AEF3FB_SECTION_6: DevKit.Form.Controls.ControlSection;
		}
		interface tab__E37F4524_4A66_42DC_974C_078756AEF3FB extends DevKit.Form.Controls.IControlTab {
			Section: tab__E37F4524_4A66_42DC_974C_078756AEF3FB_Sections;
		}
		interface Tabs {
			_E37F4524_4A66_42DC_974C_078756AEF3FB: tab__E37F4524_4A66_42DC_974C_078756AEF3FB;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ResourceCharacteristics: DevKit.Form.Controls.ControlGrid;
			ResourceCategory: DevKit.Form.Controls.ControlGrid;
			/** Select the account that represents this resource. */
			AccountId: DevKit.Form.Controls.ControlLookup;
			/** Select the contact that represents this resource. */
			ContactId: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the resource. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select whether the resource is a user, equipment, contact, account, generic resource or a group of resources. */
			ResourceType: DevKit.Form.Controls.ControlOptionSet;
			/** Specifies the timezone for the resource's working hours. */
			TimeZone: DevKit.Form.Controls.ControlInteger;
			/** Select the user who represents this resource. */
			UserId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navParentGroups: DevKit.Form.Controls.ControlNavigationItem,
			navChildGroups: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBookableResourceInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form BookableResourceInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceInformation */
		Body: Hsbc.FormBookableResourceInformation.Body;
		/** The Navigation of form BookableResourceInformation */
		Navigation: Hsbc.FormBookableResourceInformation.Navigation;
	}
	class BookableResourceApi {
		/**
		* PL.DynamicsCrm.DevKit BookableResourceApi
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
		/** Select the account that represents this resource. */
		AccountId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the resource. */
		BookableResourceId: DevKit.WebApi.GuidValue;
		/** Specifies the working days and hours of the resource. */
		CalendarId: DevKit.WebApi.LookupValue;
		/** Select the contact that represents this resource. */
		ContactId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the bookableresource with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the name of the resource. */
		Name: DevKit.WebApi.StringValue;
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
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Select whether the resource is a user, equipment, contact, account, generic resource or a group of resources. */
		ResourceType: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Status of the Bookable Resource */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Bookable Resource */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Specifies the timezone for the resource's working hours. */
		TimeZone: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the BookableResource with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Select the user who represents this resource. */
		UserId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BookableResource {
		enum ResourceType {
			/** 1 */
			Generic,
			/** 2 */
			Contact,
			/** 3 */
			User,
			/** 4 */
			Equipment,
			/** 5 */
			Account,
			/** 6 */
			Crew,
			/** 7 */
			Facility,
			/** 8 */
			Pool
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