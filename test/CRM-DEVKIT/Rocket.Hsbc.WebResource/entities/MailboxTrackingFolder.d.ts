///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class MailboxTrackingFolderApi {
		/**
		* PL.DynamicsCrm.DevKit MailboxTrackingFolderApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the entry was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Folder Id for a folder in Exchange */
		ExchangeFolderId: DevKit.WebApi.StringValue;
		/** Exchange Folder Name */
		ExchangeFolderName: DevKit.WebApi.StringValue;
		/** Information to indicate whether the folder has been on boarded for auto tracking */
		FolderOnboardingStatus: DevKit.WebApi.IntegerValue;
		/** Mailbox id associated with this record. */
		MailboxId: DevKit.WebApi.LookupValue;
		MailboxTrackingFolderId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the entry was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the folder mapping. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the folder mapping. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_accountleads: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresource: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaign: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignactivityitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_characteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_commitment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitor: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitoraddress: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitorproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitorsalesliterature: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactinvoices: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactleads: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactorders: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactquotes: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contract: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contractdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_discount: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_discounttype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementcontacts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementproducts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplateproducts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_equipment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_invoice: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadaddress: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadcompetitors: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_list: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_listmember: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_connector: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunitycompetitors: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_orderclose: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pricelevel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_product: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productassociation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productsalesliterature: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quote: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quoteclose: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quotedetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resource: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroupexpansion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcespec: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesorder: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_service: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_servicecontractcontacts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_site: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topichistory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uom: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uomschedule: DevKit.WebApi.LookupValue;
		/** Version number of the mailbox tracking folder. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingFolder {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}