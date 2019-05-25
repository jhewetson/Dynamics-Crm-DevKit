﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class InteractionForEmailApi {
		/**
		* PL.DynamicsCrm.DevKit InteractionForEmailApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Email Activity Id. */
		EmailActivityId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Email Activity Id. */
		EmailInteractionReplyId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the Interaction date and time of the an email. */
		EmailInteractionTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		InteractedComponentText: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		InteractionForEmailId: DevKit.WebApi.GuidValue;
		/** Shows the location for an Interaction */
		InteractionLocation: DevKit.WebApi.StringValue;
		/** For internal use only. */
		InteractionPartyId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only */
		InteractionPartyTypecode: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the Name who replied to email if interaction is reply */
		InteractionRepliedBy: DevKit.WebApi.StringValue;
		/** InteractionReplyId */
		InteractionReplyId: DevKit.WebApi.StringValue;
		/** Shows the type of Interaction. */
		InteractionType: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows the User Agent for an Interaction if available */
		InteractionUserAgent: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the custom entity. */
		name: DevKit.WebApi.StringValue;
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
		/** Status of the Interaction for Email */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Interaction for Email */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace InteractionForEmail {
		enum InteractionType {
			/** 0 */
			EmailOpen,
			/** 1 */
			LinkOpen,
			/** 2 */
			AttachmentOpen,
			/** 3 */
			EmailReply
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}