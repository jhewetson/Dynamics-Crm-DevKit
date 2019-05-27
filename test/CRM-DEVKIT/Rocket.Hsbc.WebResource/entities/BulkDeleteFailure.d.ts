///<reference path='devkit.d.ts' />
declare namespace Hsbc {
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
		regardingobjectid_accountleads: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitymimeattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitypointer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_attributemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcebooking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcebookingheader: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookingstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bulkoperation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bulkoperationlog: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_calendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaign: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignactivityitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofile_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_characteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_childincidentcount: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_commitment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitoraddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitorproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitorsalesliterature: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactinvoices: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactleads: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactorders: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactquotes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contractdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contracttemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customeropportunityrole: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_discount: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_discounttype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_displaystring: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicproperty: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicpropertyassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicpropertyinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementcontacts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementproducts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementtemplatechannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementtemplateproducts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitymap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_equipment: DevKit.WebApi.LookupValueReadonly;
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
		regardingobjectid_incident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_incidentresolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_invoice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_invoicedetail: DevKit.WebApi.LookupValueReadonly;
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
		regardingobjectid_knowledgearticleincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_lead: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadaddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadcompetitors: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_list: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_listmember: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_monthlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunityclose: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunitycompetitors: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunityproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunitysalesprocess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_orderclose: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_organization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_phonetocaseprocess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_post: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_pricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_privilege: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_product: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productpricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productsalesliterature: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productsubstitute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quarterlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quoteclose: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quotedetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_ratingmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_ratingvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprolemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resourcegroupexpansion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resourcespec: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_role: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesorderdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesprocessinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_savedquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_semiannualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_service: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_serviceappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_servicecontractcontacts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_site: DevKit.WebApi.LookupValueReadonly;
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
		regardingobjectid_topic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topichistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topicmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topicmodelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uom: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uomschedule: DevKit.WebApi.LookupValueReadonly;
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