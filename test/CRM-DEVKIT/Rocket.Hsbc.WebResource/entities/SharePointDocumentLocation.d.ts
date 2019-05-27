﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SharePointDocumentLocationApi {
		/**
		* PL.DynamicsCrm.DevKit SharePointDocumentLocationApi
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
		/** Absolute URL of the SharePoint document location. */
		AbsoluteURL: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the SharePoint document location record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint document location record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the SharePoint document location record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the SharePoint document location record. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate between the currency associated with the SharePoint document location record and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created the SharePoint document location record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Location type of the SharePoint document location. */
		LocationType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the SharePoint document location record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint document location record was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the SharePoint document location record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the SharePoint document location record. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the SharePoint document location record. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the SharePoint document location record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the SharePoint document location record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the parent site or location. */
		parentsiteorlocation_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the parent site or location. */
		parentsiteorlocation_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the SharePoint document location record is associated. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Relative URL of the SharePoint document location. */
		RelativeUrl: DevKit.WebApi.StringValue;
		/** Shows the service type of the SharePoint site. */
		ServiceType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the SharePoint document location record. */
		SharePointDocumentLocationId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SiteCollectionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the SharePoint document location record. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the SharePoint document location record. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the SharePoint document location record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Choose the user who owns the SharePoint document location. */
		UserId: DevKit.WebApi.GuidValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SharePointDocumentLocation {
		enum LocationType {
			/** 0 */
			General,
			/** 1 */
			Dedicated_for_OneNote_Integration
		}
		enum ServiceType {
			/** 0 */
			SharePoint,
			/** 1 */
			OneDrive,
			/** 2 */
			Shared_with_me,
			/** 3 */
			MS_Teams
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