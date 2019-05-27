///<reference path='devkit.d.ts' />
declare namespace Hsbc {
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
		baserecordid_adminsettingsentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcebooking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcebookingheader: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcecategoryassn: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookingstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_campaign: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_campaignresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		channelaccessprofile_duplicatebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_characteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_competitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_contract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlementchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlementtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_equipment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_incident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_lead: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_list: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_actioncardregarding: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_callablecontext: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_flowcardtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_forecastdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_forecastinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbooktemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_postalbum: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_siconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_untrackedappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_emailtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_question: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_questionresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_survey: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_surveyinvite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_surveyresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_opportunity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_quote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_ratingmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_ratingvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_resourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_service: DevKit.WebApi.LookupValueReadonly;
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
		baserecordid_territory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_transactioncurrency: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the duplicate record. */
		DuplicateId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_adminsettingsentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcebooking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcebookingheader: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcecategoryassn: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookingstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_campaign: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_campaignresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		channelaccessprofile_duplicatematchingrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_characteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_competitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_contract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlementchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlementtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_equipment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_incident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_lead: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_list: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_actioncardregarding: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_callablecontext: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_flowcardtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_forecastdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_forecastinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbooktemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_postalbum: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_siconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_untrackedappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_emailtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_question: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_questionresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_survey: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_surveyinvite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_surveyresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_opportunity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_quote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_ratingmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_ratingvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_resourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_service: DevKit.WebApi.LookupValueReadonly;
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
		duplicaterecordid_territory: DevKit.WebApi.LookupValueReadonly;
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