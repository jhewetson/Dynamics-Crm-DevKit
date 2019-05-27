///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SalesLiteratureApi {
		/**
		* PL.DynamicsCrm.DevKit SalesLiteratureApi
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
		/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
		Description: DevKit.WebApi.StringValue;
		/** Choose the user who is responsible for maintaining or updating the sales literature. */
		EmployeeContactId: DevKit.WebApi.LookupValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the expiration date or last day the sales literature can be distributed. */
		ExpirationDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Tells whether the sales literature has one or more attachments. */
		HasAttachments: DevKit.WebApi.BooleanValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select whether the sales literature can be distributed to prospects and customers or is for internal use only. */
		IsCustomerViewable: DevKit.WebApi.BooleanValue;
		/** Type one or more topics or keywords that can be used to search for the sales literature. */
		KeyWords: DevKit.WebApi.StringValue;
		/** Select a category or type to help others identify the intended use of the sales literature. */
		LiteratureTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive title for the sales literature. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the sales literature. */
		SalesLiteratureId: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
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
	namespace SalesLiterature {
		enum LiteratureTypeCode {
			/** 0 */
			Presentation,
			/** 1 */
			Product_Sheet,
			/** 2 */
			Policies_And_Procedures,
			/** 3 */
			Sales_Literature,
			/** 4 */
			Spreadsheets,
			/** 5 */
			News,
			/** 6 */
			Bulletins,
			/** 7 */
			Price_Sheets,
			/** 8 */
			Manuals,
			/** 9 */
			Company_Background,
			/** 100001 */
			Marketing_Collateral
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}