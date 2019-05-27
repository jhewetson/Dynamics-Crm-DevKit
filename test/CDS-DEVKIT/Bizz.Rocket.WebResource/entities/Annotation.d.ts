///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class AnnotationApi {
		/**
		* PL.DynamicsCrm.DevKit AnnotationApi
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
		/** Unique identifier of the note. */
		AnnotationId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the note. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the note was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the annotation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Contents of the note's attachment. */
		DocumentBody: DevKit.WebApi.StringValue;
		/** File name of the note. */
		FileName: DevKit.WebApi.StringValue;
		/** File pointer of the attachment. */
		FilePointer: DevKit.WebApi.StringValueReadonly;
		/** File size of the note. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Specifies whether the note is an attachment. */
		IsDocument: DevKit.WebApi.BooleanValue;
		IsPrivate: DevKit.WebApi.BooleanValueReadonly;
		/** Language identifier for the note. */
		LangId: DevKit.WebApi.StringValue;
		/** MIME type of the note's attachment. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the note. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the note was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the annotation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Text of the note. */
		NoteText: DevKit.WebApi.StringValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_calendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofile_annotations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_profileruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_duplicaterule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_solutioncomponentdatasource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_solutionhistorydatasource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sharepointdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_workflow: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the note. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the note. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the note. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Prefix of the file pointer in blob storage. */
		Prefix: DevKit.WebApi.StringValueReadonly;
		/** workflow step id associated with the note. */
		StepId: DevKit.WebApi.StringValue;
		/** Storage pointer. */
		StoragePointer: DevKit.WebApi.StringValueReadonly;
		/** Subject associated with the note. */
		Subject: DevKit.WebApi.StringValue;
		/** Version number of the note. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Annotation {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}