﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ImportLogApi {
		/**
		* PL.DynamicsCrm.DevKit ImportLogApi
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
		/** Additional information related to the error. */
		AdditionalInfo: DevKit.WebApi.StringValue;
		/** Value in the column. */
		ColumnValue: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the import log. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the import log was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the importlog. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of an error. */
		ErrorDescription: DevKit.WebApi.StringValue;
		/** Error code of an error. */
		ErrorNumber: DevKit.WebApi.IntegerValue;
		/** Name of the column heading. */
		HeaderColumn: DevKit.WebApi.StringValue;
		/** Unique identifier of the import data for this import log. */
		ImportDataId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the import file for this import log. */
		ImportFileId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the import log. */
		ImportLogId: DevKit.WebApi.GuidValue;
		/** Original line number of the data used in this log. */
		LineNumber: DevKit.WebApi.IntegerValue;
		/** Phase for which the log is recorded. */
		LogPhaseCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the import log. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the import log was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the importlog. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Business unit that owns the import log. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the import log. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the import log. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the error in this log. */
		SequenceNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Status of the import log. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the import log. */
		StatusCode: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace ImportLog {
		enum LogPhaseCode {
			/** 0 */
			Parse,
			/** 1 */
			Transform,
			/** 2 */
			Import_Create,
			/** 3 */
			Import_Update
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Active
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}