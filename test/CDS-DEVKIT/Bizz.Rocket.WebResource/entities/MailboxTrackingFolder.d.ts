///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class MailboxTrackingFolderApi {
		/**
		* PL.DynamicsCrm.DevKit MailboxTrackingFolderApi
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
		/** Date and time when the entry was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Folder Id for a folder in Exchange */
		ExchangeFolderId: DevKit.WebApi.StringValue;
		/** Exchange Folder Name */
		ExchangeFolderName: DevKit.WebApi.StringValue;
		/** Information to indicate whether the folder has been on boarded for auto tracking */
		FolderOnboardingStatus: DevKit.WebApi.IntegerValue;
		/** Mailbox id associated with this record. */
		MailboxId: DevKit.WebApi.LookupValue;
		MailboxTrackingFolderId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the entry was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the folder mapping. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the folder mapping. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_devkit_processwebapi1: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_connector: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** Version number of the mailbox tracking folder. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingFolder {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}