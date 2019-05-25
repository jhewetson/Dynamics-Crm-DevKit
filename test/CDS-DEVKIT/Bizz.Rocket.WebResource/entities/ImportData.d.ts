///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ImportDataApi {
		/**
		* PL.DynamicsCrm.DevKit ImportDataApi
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
		/** Unique identifier of the user who created the import data. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the import data was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the importdata. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Data row of the import file. */
		Data: DevKit.WebApi.StringValue;
		/** Type of the import error. */
		ErrorType: DevKit.WebApi.OptionSetValue;
		/** Information about whether this import data has an error. */
		HasError: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the import data. */
		ImportDataId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the import file for this import data. */
		ImportFileId: DevKit.WebApi.LookupValue;
		/** Original line number of the data present in the file. */
		LineNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the import data. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the import data was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the importdata. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Business unit that owns the import data. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the import data. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the import data. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record. */
		RecordId: DevKit.WebApi.GuidValue;
		/** Status of the import data. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the import data. */
		StatusCode: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace ImportData {
		enum ErrorType {
			/** 0 */
			Create,
			/** 1 */
			Update
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