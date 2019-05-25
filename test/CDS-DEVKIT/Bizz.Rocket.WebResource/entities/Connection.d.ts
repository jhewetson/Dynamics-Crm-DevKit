///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ConnectionApi {
		/**
		* PL.DynamicsCrm.DevKit ConnectionApi
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
		/** Unique identifier of the connection. */
		ConnectionId: DevKit.WebApi.GuidValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the connection, such as the length or quality of the relationship. */
		Description: DevKit.WebApi.StringValue;
		/** Enter the end date of the connection. */
		EffectiveEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the start date of the connection. */
		EffectiveStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Indicates that this is the master record. */
		IsMaster: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the connection. */
		Name: DevKit.WebApi.StringValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the connection. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the connection. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Choose the primary account, contact, or other record involved in the connection. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Shows the record type of the source record. */
		Record1ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Choose the primary party's role or relationship with the second party. */
		Record1RoleId: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Select the secondary account, contact, or other record involved in the connection. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Shows the record type of the target record. */
		Record2ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Choose the secondary party's role or relationship with the primary party. */
		Record2RoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the reciprocal connection record. */
		RelatedConnectionId: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the connection. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the connection. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Connection {
		enum Record1ObjectTypeCode {
			/** 2013 */
			Territory,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 50 */
			Position,
			/** 4202 */
			Email,
			/** 9 */
			Team,
			/** 99 */
			Social_Profile,
			/** 4216 */
			Social_Activity,
			/** 10007 */
			WebApi,
			/** 4200 */
			Activity,
			/** 9930 */
			Knowledge_Base_Record,
			/** 4251 */
			Recurring_Appointment,
			/** 4210 */
			Phone_Call,
			/** 9953 */
			Knowledge_Article,
			/** 4710 */
			Process_Session,
			/** 4207 */
			Letter,
			/** 10015 */
			Custom_Activity,
			/** 9600 */
			Goal,
			/** 8 */
			User,
			/** 4204 */
			Fax,
			/** 2 */
			Contact,
			/** 4212 */
			Task,
			/** 4201 */
			Appointment,
			/** 1 */
			Account
		}
		enum Record2ObjectTypeCode {
			/** 9 */
			Team,
			/** 4204 */
			Fax,
			/** 4251 */
			Recurring_Appointment,
			/** 1 */
			Account,
			/** 4207 */
			Letter,
			/** 4216 */
			Social_Activity,
			/** 4201 */
			Appointment,
			/** 10015 */
			Custom_Activity,
			/** 4200 */
			Activity,
			/** 2 */
			Contact,
			/** 2013 */
			Territory,
			/** 4212 */
			Task,
			/** 9953 */
			Knowledge_Article,
			/** 4710 */
			Process_Session,
			/** 4202 */
			Email,
			/** 9600 */
			Goal,
			/** 8 */
			User,
			/** 10007 */
			WebApi,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 4210 */
			Phone_Call,
			/** 9930 */
			Knowledge_Base_Record,
			/** 50 */
			Position,
			/** 99 */
			Social_Profile
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}