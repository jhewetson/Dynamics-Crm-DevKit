///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class FeedbackApi {
		/**
		* PL.DynamicsCrm.DevKit FeedbackApi
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
		/** Shows who closed the record. */
		ClosedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ClosedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Type the feedback comments. */
		Comments: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the contact who created the record. */
		CreatedByContact: DevKit.WebApi.LookupValue;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the contact who created the record on behalf of another user. */
		CreatedOnBehalfByContact: DevKit.WebApi.LookupValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** FeedbackId */
		FeedbackId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Enter the maximum rating value. */
		MaxRating: DevKit.WebApi.IntegerValue;
		/** Enter the minimum rating value. */
		MinRating: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
		NormalizedRating: DevKit.WebApi.DecimalValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the knowledge article views. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the feedback. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this feedback. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Specifies how helpful the related record was. */
		Rating: DevKit.WebApi.IntegerValue;
		/** Shows the record that the feedback is associated with. */
		ContactId: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		_FeedbackId: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		KnowledgeArticleId: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Shows where the feedback was submitted from. */
		Source: DevKit.WebApi.OptionSetValue;
		/** Shows whether the feedback is open, rejected or closed. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the feedback's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a title for the feedback. */
		Title: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the feedback. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Feedback {
		enum Source {
			/** 0 */
			Internal,
			/** 1 */
			Portal
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Closed
		}
		enum StatusCode {
			/** 1 */
			Proposed,
			/** 2 */
			Accepted,
			/** 3 */
			Closed,
			/** 4 */
			Rejected
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}