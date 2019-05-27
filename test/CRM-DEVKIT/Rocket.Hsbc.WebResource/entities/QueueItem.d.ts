///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class QueueItemApi {
		/**
		* PL.DynamicsCrm.DevKit QueueItemApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date the record was assigned to the queue. */
		EnteredOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the queueitem. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_activitypointer: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_incident: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Choose the activity, case, or article assigned to the queue. */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Select the type of the queue item, such as activity, case, or appointment. */
		ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the organization with which the queue item is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the queue item. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the queue item. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the queue that the item is assigned to. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the queue item. */
		QueueItemId: DevKit.WebApi.GuidValue;
		/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the item's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue. */
		Title: DevKit.WebApi.StringValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the queue item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Shows who is working on the queue item. */
		workerid_systemuser: DevKit.WebApi.LookupValue;
		/** Shows who is working on the queue item. */
		workerid_team: DevKit.WebApi.LookupValue;
		/** Shows the date and time when the queue item was last assigned to a user. */
		WorkerIdModifiedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
	}
}
declare namespace OptionSet {
	namespace QueueItem {
		enum ObjectTypeCode {
			/** 4251 */
			Recurring_Appointment,
			/** 112 */
			Case,
			/** 4200 */
			Activity,
			/** 4402 */
			Campaign_Activity,
			/** 4202 */
			Email,
			/** 4214 */
			Service_Activity,
			/** 4210 */
			Phone_Call,
			/** 4212 */
			Task,
			/** 4207 */
			Letter,
			/** 4201 */
			Appointment,
			/** 10041 */
			Survey_invite,
			/** 4406 */
			Quick_Campaign,
			/** 4204 */
			Fax,
			/** 10042 */
			Survey_response,
			/** 9953 */
			Knowledge_Article,
			/** 4401 */
			Campaign_Response,
			/** 4216 */
			Social_Activity
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 2 */
			Inactive,
			/** 1 */
			Active
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}