///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SyncErrorApi {
		/**
		* PL.DynamicsCrm.DevKit SyncErrorApi
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
		/** Action Name for which sync error has occurred */
		Action: DevKit.WebApi.StringValue;
		/** Show the action data */
		ActionData: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the sync error. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the sync Error was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sync error. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a short description of the sync error. */
		Description: DevKit.WebApi.StringValue;
		/** Displays the error code. */
		ErrorCode: DevKit.WebApi.StringValue;
		/** Error description from the exception */
		ErrorDetail: DevKit.WebApi.StringValue;
		/** Error Message of the exception */
		ErrorMessage: DevKit.WebApi.StringValue;
		/** Date and time when the upsync request was executed on CRM server */
		ErrorTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select the preferred error type. */
		ErrorType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the sync error. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the sync error was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sync error. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Entity name of the record for which sync error has occurred */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Business unit that owns the sync error. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the sync error. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the sync error. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Request data for the entity that had the sync error. */
		RequestData: DevKit.WebApi.StringValue;
		/** Shows whether the sync error is active or resolved. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the sync error status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the sync error. */
		SyncErrorId: DevKit.WebApi.GuidValue;
		/** Shows the version number of the sync error. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SyncError {
		enum ErrorType {
			/** 0 */
			Conflict,
			/** 1 */
			Record_not_found,
			/** 2 */
			Record_already_exists,
			/** 3 */
			Others
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Resolved
		}
		enum StatusCode {
			/** 0 */
			Active,
			/** 1 */
			Fixed
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}