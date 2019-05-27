///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class MailboxTrackingCategoryApi {
		/**
		* PL.DynamicsCrm.DevKit MailboxTrackingCategoryApi
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
		/** Information to indicate whether the category has been created in Exchange or not. */
		CategoryOnboardingStatus: DevKit.WebApi.IntegerValue;
		/** Date and time when the entry was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Color for category in Exchange. */
		ExchangeCategoryColor: DevKit.WebApi.IntegerValue;
		/** Category Id for a category in Exchange */
		ExchangeCategoryId: DevKit.WebApi.GuidValue;
		/** Exchange Category Name */
		ExchangeCategoryName: DevKit.WebApi.StringValue;
		/** Mailbox id associated with this record. */
		MailboxId: DevKit.WebApi.LookupValue;
		MailboxTrackingCategoryId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time when the entry was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the category. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the category. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingCategory {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}