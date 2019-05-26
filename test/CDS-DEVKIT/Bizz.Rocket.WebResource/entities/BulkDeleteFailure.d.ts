﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class BulkDeleteFailureApi {
		/**
		* PL.DynamicsCrm.DevKit BulkDeleteFailureApi
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
		/** Unique identifier of the bulk deletion failure record. */
		BulkDeleteFailureId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the bulk operation job which created this record */
		BulkDeleteOperationId: DevKit.WebApi.LookupValueReadonly;
		/** Description of the error. */
		ErrorDescription: DevKit.WebApi.StringValueReadonly;
		/** Error code for the failed bulk deletion. */
		ErrorNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Index of the ordered query expression that retrieved this record. */
		OrderedQueryIndex: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the bulk deletion failure. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the bulk deletion failure record.
 */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitymimeattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitypointer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_attributemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_calendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofile_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_devkit_customactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_devkit_processwebapi1: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_devkit_webapi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_displaystring: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitymap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		externalparty_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		externalpartyitem_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_fixedmonthlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_import: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importlog: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importmap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_isvconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_monthlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_organization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_post: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_privilege: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quarterlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprolemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_role: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_savedquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_semiannualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_sla: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_subject: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_systemform: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_template: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_territory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_theme: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_userform: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_userquery: DevKit.WebApi.LookupValueReadonly;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace BulkDeleteFailure {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}