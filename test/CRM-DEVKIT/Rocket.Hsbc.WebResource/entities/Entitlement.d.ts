///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class EntitlementApi {
		/**
		* PL.DynamicsCrm.DevKit EntitlementApi
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
		/** Unique identifier for Account associated with Entitlement. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Select the type of entitlement terms. */
		AllocationTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for Contact associated with Entitlement. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the entitlement. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
		DecreaseRemainingOn: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the Entitlement */
		Description: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Enter the date when the entitlement ends. */
		EndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for entity instances */
		EntitlementId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Entitlement Template associated with Entitlement. */
		EntitlementTemplateId: DevKit.WebApi.LookupValue;
		/** Entity type for which the entitlement applies */
		entitytype: DevKit.WebApi.OptionSetValue;
		/** Exchange rate for the currency associated with the contact with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows whether this entitlement is the default one for the specified customer. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Select the access someone will have to the knowledge base on the portal. */
		KbAccessLevel: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a meaningful name for the entitlement. */
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
		/** Type the total number of entitlement terms that are left. */
		RemainingTerms: DevKit.WebApi.DecimalValue;
		/** Tells whether case creation is restricted based on entitlement terms. */
		RestrictCaseCreation: DevKit.WebApi.BooleanValue;
		/** Choose the service level agreement (SLA) associated with the entitlement. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Enter the date when the entitlement starts. */
		StartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the reason code that explains the status of the entitlement. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type the total number of entitlement terms. */
		TotalTerms: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the currency associated with the contact. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Entitlement {
		enum AllocationTypeCode {
			/** 0 */
			Number_of_cases,
			/** 1 */
			Number_of_hours
		}
		enum DecreaseRemainingOn {
			/** 0 */
			Case_Resolution,
			/** 1 */
			Case_Creation
		}
		enum entitytype {
			/** 0 */
			Case
		}
		enum KbAccessLevel {
			/** 0 */
			Standard,
			/** 1 */
			Premium,
			/** 2 */
			None
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 3 */
			Expired,
			/** 4 */
			Waiting
		}
		enum StatusCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 3 */
			Expired,
			/** 1200 */
			Waiting
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}