///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class UserEntityInstanceDataApi {
		/**
		* PL.DynamicsCrm.DevKit UserEntityInstanceDataApi
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
		/** Common end date */
		CommonEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Common start date */
		CommonStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Due Date */
		DueDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Flag due by */
		FlagDueBy_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Flag request */
		FlagRequest: DevKit.WebApi.StringValue;
		/** Flag status. */
		FlagStatus: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the source record. */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_accountleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_activitymimeattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_activityparty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_annotation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_attachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_attributemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_audit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bulkdeletefailure: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bulkdeleteoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_businessunitmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_businessunitnewsarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_calendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_calendarrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_campaignactivityitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_campaignitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		channelaccessprofile_userentityinstancedatas: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_characteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_clientupdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_columnmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_commitment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_competitoraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_competitorproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_competitorsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connectionrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connectionroleassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connectionroleobjecttypecode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contactinvoices: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contactleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contactorders: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contactquotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contractdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customerrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dependencynode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_discount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_discounttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_displaystring: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_displaystringmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_documentindex: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_duplicaterecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_duplicaterule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_duplicaterulecondition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_emailhash: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_emailsearch: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlementcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlementproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitlementtemplateproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		externalparty_userentityinstancedatas: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fieldpermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fieldsecurityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fileattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_filtertemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_goalrollupquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_import: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importentitymapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_internaladdress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_invaliddependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_isvconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_kbarticlecomment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_kbarticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_leadaddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_leadcompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_leadproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_license: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_listmember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_lookupmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_metric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msfp_question: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_notification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_opportunitycompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_orderclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_organization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_organizationstatistic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ownermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_picklistmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_pluginassembly: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_plugintype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_plugintypestatistic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalattributeaccessmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalentitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalobjectaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalobjectattributeaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_privilege: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_productassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_productsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_publisher: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_publisheraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_quoteclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_quotedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_relationshiprole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_relationshiprolemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_report: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportlink: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportvisibility: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_resource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_resourcegroupexpansion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_resourcespec: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribboncommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribboncontextgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribboncustomization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribbondiff: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribbonrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribbontabtocommandmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_role: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_roletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_rollupfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_salesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_savedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_savedqueryvisualization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagefilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagepair: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstepimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstepsecureconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagerequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagerequestfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageresponsefield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_service: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_servicecontractcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_serviceendpoint: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_site: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_solution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_solutioncomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_statusmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_stringmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subscription: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subscriptionmanuallytrackedobject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subscriptionsyncinfo: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_systemuserbusinessunitentitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_teammembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_template: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_theme: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_timezonedefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_timezonelocalizedname: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_timezonerule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_topic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_topichistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_topicmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_transactioncurrency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_transformationmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_transformationparametermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_unresolvedaddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_uom: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_uomschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userentityuisettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userform: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_usermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userqueryvisualization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_webresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_webwizard: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_wizardaccessprivilege: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_wizardpage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflowdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflowlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflowwaitsubscription: DevKit.WebApi.LookupValue;
		/** Object Type Code */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns this. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns this object. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this object. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Personal categories */
		PersonalCategories: DevKit.WebApi.StringValue;
		/** Indicates whether a reminder is set on this object. */
		ReminderSet: DevKit.WebApi.BooleanValue;
		/** Reminder time */
		ReminderTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Start Time */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** To Do item flags. */
		ToDoItemFlags: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		ToDoOrdinalDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ToDoSubOrdinal: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ToDoTitle: DevKit.WebApi.StringValue;
		/** Unique identifier user entity */
		UserEntityInstanceDataId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UserEntityInstanceData {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}