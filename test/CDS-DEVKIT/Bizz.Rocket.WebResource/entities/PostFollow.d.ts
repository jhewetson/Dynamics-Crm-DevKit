﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class PostFollowApi {
		/**
		* PL.DynamicsCrm.DevKit PostFollowApi
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
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the follow. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user who owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows the ID of the post follow. */
		PostFollowId: DevKit.WebApi.GuidValue;
		/** Internal Use Only */
		PostToYammer: DevKit.WebApi.BooleanValueReadonly;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_processsession: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_queue: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Choose the parent record for the followed post to identify the customer, opportunity, case, or other record type that the post most closely relates to. */
		regardingobjectid_task: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of post follow. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Internal Use Only */
		YammerPostState: DevKit.WebApi.IntegerValueReadonly;
		/** Internal Use Only */
		YammerRetryCount: DevKit.WebApi.IntegerValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PostFollow {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}