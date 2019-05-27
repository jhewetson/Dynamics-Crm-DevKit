///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class AsyncOperationApi {
		/**
		* PL.DynamicsCrm.DevKit AsyncOperationApi
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
		/** Unique identifier of the system job. */
		AsyncOperationId: DevKit.WebApi.GuidValue;
		/** Date and time when the system job was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier used to correlate between multiple SDK requests and system jobs. */
		CorrelationId: DevKit.WebApi.GuidValue;
		/** Last time the correlation depth was updated. */
		CorrelationUpdatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who created the system job. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system job was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the asyncoperation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unstructured data associated with the system job. */
		Data: DevKit.WebApi.StringValue;
		/** Execution of all operations with the same dependency token is serialized. */
		DependencyToken: DevKit.WebApi.StringValue;
		/** Number of SDK calls made since the first call. */
		Depth: DevKit.WebApi.IntegerValue;
		/** Error code returned from a canceled system job. */
		ErrorCode: DevKit.WebApi.IntegerValueReadonly;
		/** Time that the system job has taken to execute. */
		ExecutionTimeSpan: DevKit.WebApi.DoubleValueReadonly;
		/** Message provided by the system job. */
		FriendlyMessage: DevKit.WebApi.StringValue;
		/** Unique identifier of the host that owns this system job. */
		HostId: DevKit.WebApi.StringValue;
		/** Indicates that the system job is waiting for an event. */
		IsWaitingForEvent: DevKit.WebApi.BooleanValueReadonly;
		/** Message related to the system job. */
		Message: DevKit.WebApi.StringValueReadonly;
		/** Name of the message that started this system job. */
		MessageName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the system job. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system job was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the asyncoperation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the system job. */
		Name: DevKit.WebApi.StringValue;
		/** Type of the system job. */
		OperationType: DevKit.WebApi.OptionSetValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the system job. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the owning extension with which the system job is associated. */
		OwningExtensionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the team who owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		ParentPluginExecutionId: DevKit.WebApi.GuidValue;
		/** Indicates whether the system job should run only after the specified date and time. */
		PostponeUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Pattern of the system job's recurrence. */
		RecurrencePattern: DevKit.WebApi.StringValue;
		/** Starting time in UTC for the recurrence pattern. */
		RecurrenceStartTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_accountleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_activitymimeattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_annualfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_attributemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_calendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignactivityitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		channelaccessprofile_asyncoperations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_characteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_commitment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitoraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitorproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitorsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_connectionrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactinvoices: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactorders: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactquotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contractdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_discount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_discounttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_displaystring: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementtemplateproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		externalparty_asyncoperations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		externalpartyitem_asyncoperations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_fixedmonthlyfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_goalrollupquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_import: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_new_interactionforemail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_isvconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadaddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadcompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_listmember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_metric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_monthlyfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunitycompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_orderclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_organization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_post: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_postfollow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_privilege: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quarterlyfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quoteclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quotedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_relationshiprolemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_report: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resourcegroupexpansion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resourcespec: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_role: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_rollupfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_savedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_semiannualfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_service: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_servicecontractcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_similarityrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_site: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_subject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_systemform: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_template: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_theme: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topichistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topicmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_transactioncurrency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uom: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uomschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_userform: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_userquery: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Unique identifier of the request that generated the system job. */
		RequestId: DevKit.WebApi.GuidValue;
		/** Number of times to retry the system job. */
		RetryCount: DevKit.WebApi.IntegerValueReadonly;
		/** Root execution context of the job that trigerred async job. */
		RootExecutionContext: DevKit.WebApi.StringValue;
		/** Order in which operations were submitted. */
		Sequence: DevKit.WebApi.BigIntValueReadonly;
		/** Date and time when the system job was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Status of the system job. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the system job. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** The Subtype of the Async Job */
		Subtype: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the workflow activation related to the system job. */
		WorkflowActivationId: DevKit.WebApi.LookupValue;
		/** Indicates whether the workflow instance was blocked when it was persisted. */
		WorkflowIsBlocked: DevKit.WebApi.BooleanValueReadonly;
		/** Name of a workflow stage. */
		WorkflowStageName: DevKit.WebApi.StringValueReadonly;
		/** State of the workflow job. */
		WorkflowState: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AsyncOperation {
		enum OperationType {
			/** 1 */
			System_Event,
			/** 2 */
			Bulk_Email,
			/** 3 */
			Import_File_Parse,
			/** 4 */
			Transform_Parse_Data,
			/** 5 */
			Import,
			/** 6 */
			Activity_Propagation,
			/** 7 */
			Duplicate_Detection_Rule_Publish,
			/** 8 */
			Bulk_Duplicate_Detection,
			/** 9 */
			SQM_Data_Collection,
			/** 10 */
			Workflow,
			/** 11 */
			Quick_Campaign,
			/** 12 */
			Matchcode_Update,
			/** 13 */
			Bulk_Delete,
			/** 14 */
			Deletion_Service,
			/** 15 */
			Index_Management,
			/** 16 */
			Collect_Organization_Statistics,
			/** 17 */
			Import_Subprocess,
			/** 18 */
			Calculate_Organization_Storage_Size,
			/** 19 */
			Collect_Organization_Database_Statistics,
			/** 20 */
			Collection_Organization_Size_Statistics,
			/** 21 */
			Database_Tuning,
			/** 22 */
			Calculate_Organization_Maximum_Storage_Size,
			/** 23 */
			Bulk_Delete_Subprocess,
			/** 24 */
			Update_Statistic_Intervals,
			/** 25 */
			Organization_Full_Text_Catalog_Index,
			/** 26 */
			Database_log_backup,
			/** 27 */
			Update_Contract_States,
			/** 28 */
			DBCC_SHRINKDATABASE_maintenance_job,
			/** 29 */
			DBCC_SHRINKFILE_maintenance_job,
			/** 30 */
			Reindex_all_indices_maintenance_job,
			/** 31 */
			Storage_Limit_Notification,
			/** 32 */
			Cleanup_inactive_workflow_assemblies,
			/** 35 */
			Recurring_Series_Expansion,
			/** 38 */
			Import_Sample_Data,
			/** 40 */
			Goal_Roll_Up,
			/** 41 */
			Audit_Partition_Creation,
			/** 42 */
			Check_For_Language_Pack_Updates,
			/** 43 */
			Provision_Language_Pack,
			/** 44 */
			Update_Organization_Database,
			/** 45 */
			Update_Solution,
			/** 46 */
			Regenerate_Entity_Row_Count_Snapshot_Data,
			/** 47 */
			Regenerate_Read_Share_Snapshot_Data,
			/** 50 */
			Outgoing_Activity,
			/** 51 */
			Incoming_Email_Processing,
			/** 52 */
			Mailbox_Test_Access,
			/** 53 */
			Encryption_Health_Check,
			/** 54 */
			Execute_Async_Request,
			/** 49 */
			Post_to_Yammer,
			/** 56 */
			Update_Entitlement_States,
			/** 57 */
			Calculate_Rollup_Field,
			/** 58 */
			Mass_Calculate_Rollup_Field,
			/** 59 */
			Import_Translation,
			/** 62 */
			Convert_Date_And_Time_Behavior,
			/** 63 */
			EntityKey_Index_Creation,
			/** 65 */
			Update_Knowledge_Article_States,
			/** 68 */
			Resource_Booking_Sync,
			/** 69 */
			Relationship_Assistant_Cards,
			/** 71 */
			Cleanup_Solution_Components,
			/** 72 */
			App_Module_Metadata_Operation,
			/** 73 */
			ALM_Anomaly_Detection_Operation,
			/** 75 */
			Flow_Notification,
			/** 76 */
			Ribbon_Client_Metadata_Operation,
			/** 79 */
			CallbackRegistration_Expander_Operation,
			/** 90 */
			CascadeAssign,
			/** 91 */
			CascadeDelete,
			/** 92 */
			Event_Expander_Operation,
			/** 93 */
			Import_Solution_Metadata
		}
		enum StateCode {
			/** 0 */
			Ready,
			/** 1 */
			Suspended,
			/** 2 */
			Locked,
			/** 3 */
			Completed
		}
		enum StatusCode {
			/** 0 */
			Waiting_For_Resources,
			/** 10 */
			Waiting,
			/** 20 */
			In_Progress,
			/** 21 */
			Pausing,
			/** 22 */
			Canceling,
			/** 30 */
			Succeeded,
			/** 31 */
			Failed,
			/** 32 */
			Canceled
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}