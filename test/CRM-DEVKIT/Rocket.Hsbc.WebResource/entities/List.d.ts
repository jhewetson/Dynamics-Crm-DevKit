///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ListApi {
		/**
		* PL.DynamicsCrm.DevKit ListApi
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
		/** Type the cost of obtaining the marketing list. */
		Cost: DevKit.WebApi.MoneyValue;
		/** Value of the Cost in base currency. */
		Cost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the type of members that this marketing list will contain: accounts, contacts, or leads. Each list can have only one member type and this value can't be changed after the marketing list is created. */
		CreatedFromCode: DevKit.WebApi.OptionSetValue;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the marketing list, such as the intended use or date of the last update. */
		Description: DevKit.WebApi.StringValue;
		/** Select whether to override the opt-out settings on leads, contacts, and accounts for the members of the target marketing lists of the campaign activity. If No is selected, those who have chosen to opt out won't be excluded from the list. This means they will receive marketing materials. */
		DoNotSendOnOptOut: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Select whether inactive accounts, contacts, or leads should be excluded from the campaign activity distribution when the marketing list is included in a campaign. */
		IgnoreInactiveListMembers: DevKit.WebApi.BooleanValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows the date and time when the marketing list was last used in a campaign or in the creation of activities or opportunities. */
		LastUsedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the marketing list. */
		ListId: DevKit.WebApi.GuidValue;
		/** Type a name for the marketing list so that it is identified correctly in lists. */
		ListName: DevKit.WebApi.StringValue;
		/** Select whether the marketing list is locked. If Yes is selected, no additional members can be added to the marketing list. */
		LockStatus: DevKit.WebApi.BooleanValue;
		/** Shows the sum of all members in the marketing list. */
		MemberCount: DevKit.WebApi.IntegerValue;
		/** Type of the members that can be stored in the marketing list. */
		MemberType: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
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
		/** Type the intended use of the marketing list to identify its key segments, target offers, or business group. */
		Purpose: DevKit.WebApi.StringValue;
		/** Query used for retrieving members of marketing list. */
		Query: DevKit.WebApi.StringValue;
		/** Type the source of the marketing list, such as a third-party supplier or internal database. */
		Source: DevKit.WebApi.StringValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the marketing list is active or inactive. Inactive marketing lists are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the marketing list's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Select whether you want the marketing list to be static or dynamic. The members in a static marketing list are unchanging. A dynamic marketing list is based on a dynamic query that retrieves the updated list of members */
		Type: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace List {
		enum CreatedFromCode {
			/** 1 */
			Account,
			/** 2 */
			Contact,
			/** 4 */
			Lead
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}