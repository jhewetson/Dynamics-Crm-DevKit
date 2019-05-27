///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class BulkOperationLogApi {
		/**
		* PL.DynamicsCrm.DevKit BulkOperationLogApi
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
		/** Shows the data value at which an error occurred during the quick campaign. */
		AdditionalInfo: DevKit.WebApi.StringValue;
		/** Shows the quick campaign record that the log applies to. This information is used to relate log data to the parent quick campaign. */
		BulkOperationId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the bulk operation log. */
		BulkOperationLogId: DevKit.WebApi.GuidValue;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_account: DevKit.WebApi.LookupValue;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_activitypointer: DevKit.WebApi.LookupValue;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_contact: DevKit.WebApi.LookupValue;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_lead: DevKit.WebApi.LookupValue;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** The error description formatted. */
		ErrorDescriptionFormatted: DevKit.WebApi.StringValue;
		/** Shows the error code that is used to troubleshoot issues in the bulk operation. */
		ErrorNumber: DevKit.WebApi.IntegerValueReadonly;
		/** The error number formatted. */
		ErrorNumberFormatted: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** name */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BulkOperationLog {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}