///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class PrincipalObjectAttributeAccessApi {
		/**
		* PL.DynamicsCrm.DevKit PrincipalObjectAttributeAccessApi
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
		/** Unique identifier of the shared secured field */
		AttributeId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_accountleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignactivityitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		channelaccessprofile_principalobjectattributeaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_characteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_commitment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitoraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitorproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitorsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactinvoices: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactorders: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactquotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contractdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_discount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_discounttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplateproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_feedback: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleviews: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadaddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadcompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_listmember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_question: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunitycompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_orderclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quoteclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quotedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reportcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroupexpansion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcespec: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_service: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_servicecontractcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_site: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topichistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uom: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uomschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the shared secured field instance */
		PrincipalObjectAttributeAccessId: DevKit.WebApi.GuidValue;
		/** Read permission for secured field instance */
		ReadAccess: DevKit.WebApi.BooleanValue;
		/** Update permission for secured field instance */
		UpdateAccess: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAttributeAccess {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}