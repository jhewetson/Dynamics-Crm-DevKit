///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class BusinessUnitNewsArticleApi {
		/**
		* PL.DynamicsCrm.DevKit BusinessUnitNewsArticleApi
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
		/** Date and time for the announcement to become active. */
		ActiveOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Date and time of the last day the announcement is active. */
		ActiveUntil_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Title of the announcement. */
		ArticleTitle: DevKit.WebApi.StringValue;
		/** Type of announcement. */
		ArticleTypeCode: DevKit.WebApi.OptionSetValue;
		/** URL for the Website on which the announcement is located. */
		ArticleUrl: DevKit.WebApi.StringValue;
		/** Unique identifier of the announcement. */
		BusinessUnitNewsArticleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the announcement. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the announcement was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the businessunitnewsarticle. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the announcement. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the announcement was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the businessunitnewsarticle. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Text for the announcement. */
		NewsArticle: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the announcement. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Information about whether to show the announcement on the Website home page. */
		ShowOnHomepage: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BusinessUnitNewsArticle {
		enum ArticleTypeCode {
			/** 1 */
			All_Users,
			/** 2 */
			Sales_Users,
			/** 3 */
			Service_Users
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}