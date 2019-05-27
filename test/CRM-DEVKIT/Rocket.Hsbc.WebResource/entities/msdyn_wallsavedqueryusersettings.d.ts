﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_wallsavedqueryusersettingsApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_wallsavedqueryusersettingsApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** XML blob that stores personalization data for the user. */
		msdyn_data: DevKit.WebApi.StringValue;
		/** Indicates that view is selected by default if value is greater than 0. Also contains information which specific filter is applied. */
		msdyn_default: DevKit.WebApi.IntegerValue;
		/** Display name of the entity to which the corresponding views belong. */
		msdyn_entitydisplayname: DevKit.WebApi.StringValue;
		/** Name of the entity to which the corresponding views belong. */
		msdyn_entityname: DevKit.WebApi.StringValue;
		/** Indicates that wall should be included in response to avoid roundtrips to server */
		msdyn_includewallinresponse: DevKit.WebApi.BooleanValue;
		/** Indicates that corresponding view is following view */
		msdyn_isfollowing: DevKit.WebApi.BooleanValue;
		/** Indicates that the record is virtual */
		msdyn_IsVirtual: DevKit.WebApi.BooleanValue;
		/** Information that indicates whether the corresponding view should be displayed on the personal wall for this user. */
		msdyn_isvisible: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		msdyn_isvisiblebit: DevKit.WebApi.IntegerValue;
		/** Virtual column which contains entity type code for the entities returned by corresponding savedquery */
		msdyn_otc: DevKit.WebApi.IntegerValue;
		/** Name of the corresponding view. */
		msdyn_savedqueryname: DevKit.WebApi.StringValue;
		/** Sort order to be used when displaying the filter on the user’s personal wall. */
		msdyn_sortorder: DevKit.WebApi.IntegerValue;
		/** Reserved to support different view types. Currently not used. */
		msdyn_type: DevKit.WebApi.IntegerValue;
		/** Unique identifier for User associated with Wall View User Setting. */
		msdyn_userid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Wall View associated with Wall View User Setting. */
		msdyn_wallsavedqueryid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_wallsavedqueryusersettingsId: DevKit.WebApi.GuidValue;
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
		/** Status of the Wall View User Setting */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Wall View User Setting */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_wallsavedqueryusersettings {
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