﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ActionCardApi {
		/**
		* PL.DynamicsCrm.DevKit ActionCardApi
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
		/** Unique identifier of the action card. */
		ActionCardId: DevKit.WebApi.GuidValue;
		/** The CardType ENUM value. */
		CardType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the card type. */
		CardTypeId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the action card. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when action card was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the action card. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Json formatted string for generic purpose. */
		Data: DevKit.WebApi.StringValue;
		/** Card Description */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the action card with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the Expiry Date */
		ExpiryDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the action card. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when action card was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified action card. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_actioncardregardingid: DevKit.WebApi.StringValue;
		msdyn_regardingobjectid: DevKit.WebApi.StringValue;
		msdyn_regardingobjectlogicalname: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the action card. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the action card. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the action card. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** ParentRegardingObjectId of the ActionCard */
		ParentRegardingObjectId: DevKit.WebApi.LookupValue;
		/** Priority of the ActionCard */
		Priority: DevKit.WebApi.IntegerValue;
		/** Shows the record ID. */
		RecordId: DevKit.WebApi.LookupValue;
		/** RecordIdObjectTypeCode2 of the ActionCard */
		RecordIdObjectTypeCode2: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		ReferenceTokens: DevKit.WebApi.StringValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_account_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_appointment_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_contact_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_email_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_fax_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_incident_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_lead_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_letter_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_opportunity_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_phonecall_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_recurringappointmentmaster_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_serviceappointment_actioncard: DevKit.WebApi.LookupValue;
		/** Choose the record that the card relates to. */
		regardingobjectid_task_actioncard: DevKit.WebApi.LookupValue;
		/** Source for the Action Card */
		Source: DevKit.WebApi.OptionSetValue;
		/** Shows the Start Date */
		StartDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** State of the Action Card */
		State: DevKit.WebApi.OptionSetValue;
		/** Title of the ActionCard */
		Title: DevKit.WebApi.StringValue;
		/** Unique identifier of the currency associated with the action card. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the action card. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Select whether the visibility should be set to public/private. */
		Visibility: DevKit.WebApi.BooleanValue;
	}
}
declare namespace OptionSet {
	namespace ActionCard {
		enum Source {
			/** 1 */
			CRM,
			/** 2 */
			Exchange
		}
		enum State {
			/** 0 */
			Active,
			/** 1 */
			Dismissed,
			/** 2 */
			Completed
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}