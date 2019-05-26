///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class DuplicateRecordApi {
		/**
		* PL.DynamicsCrm.DevKit DuplicateRecordApi
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
		/** Unique identifier of the system job that created this record. */
		AsyncOperationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		channelaccessprofile_duplicatebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_sharepointdocumentlocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_sharepointsite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_socialprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_transactioncurrency: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the duplicate record. */
		DuplicateId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		channelaccessprofile_duplicatematchingrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_sharepointdocumentlocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_sharepointsite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_socialprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_transactioncurrency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the duplicate rule against which this duplicate was found. */
		DuplicateRuleId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the duplicate record. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the duplicate record. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DuplicateRecord {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}