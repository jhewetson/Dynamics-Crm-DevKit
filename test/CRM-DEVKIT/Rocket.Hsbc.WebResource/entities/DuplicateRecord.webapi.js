'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.DuplicateRecordApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
                }
                return entity[logicalName + f];
            };
            var getValue = function () {
                if (entity[logicalName] === undefined || entity[logicalName] === null) {
                    return null;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName];
                    }
                    return null;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
                }
                return entity[logicalName];
            };
            var setValue = function (value) {
                if (isMultiOptionSet) value = value.join(',');
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var duplicaterecord = {
			AsyncOperationId: { b: 'asyncoperationid', a: '_asyncoperationid_value', c: 'asyncoperations', d: 'asyncoperation', r: true },
			baserecordid_account: { b: 'baserecordid_account', a: '_baserecordid_value', c: 'accounts', d: 'account' },
			baserecordid_adminsettingsentity: { b: 'baserecordid_adminsettingsentity', a: '_baserecordid_value', c: 'adminsettingsentities', d: 'adminsettingsentity' },
			baserecordid_appointment: { b: 'baserecordid_appointment', a: '_baserecordid_value', c: 'appointments', d: 'appointment' },
			baserecordid_bookableresource: { b: 'baserecordid_bookableresource', a: '_baserecordid_value', c: 'bookableresources', d: 'bookableresource' },
			baserecordid_bookableresourcebooking: { b: 'baserecordid_bookableresourcebooking', a: '_baserecordid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			baserecordid_bookableresourcebookingheader: { b: 'baserecordid_bookableresourcebookingheader', a: '_baserecordid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			baserecordid_bookableresourcecategory: { b: 'baserecordid_bookableresourcecategory', a: '_baserecordid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			baserecordid_bookableresourcecategoryassn: { b: 'baserecordid_bookableresourcecategoryassn', a: '_baserecordid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			baserecordid_bookableresourcecharacteristic: { b: 'baserecordid_bookableresourcecharacteristic', a: '_baserecordid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			baserecordid_bookableresourcegroup: { b: 'baserecordid_bookableresourcegroup', a: '_baserecordid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			baserecordid_bookingstatus: { b: 'baserecordid_bookingstatus', a: '_baserecordid_value', c: 'bookingstatuses', d: 'bookingstatus' },
			baserecordid_campaign: { b: 'baserecordid_campaign', a: '_baserecordid_value', c: 'campaigns', d: 'campaign' },
			baserecordid_campaignresponse: { b: 'baserecordid_campaignresponse', a: '_baserecordid_value', c: 'campaignresponses', d: 'campaignresponse' },
			channelaccessprofile_duplicatebaserecord: { b: 'channelaccessprofile_duplicatebaserecord', a: '_baserecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			baserecordid_characteristic: { b: 'baserecordid_characteristic', a: '_baserecordid_value', c: 'characteristics', d: 'characteristic' },
			baserecordid_competitor: { b: 'baserecordid_competitor', a: '_baserecordid_value', c: 'competitors', d: 'competitor' },
			baserecordid_contact: { b: 'baserecordid_contact', a: '_baserecordid_value', c: 'contacts', d: 'contact' },
			baserecordid_contract: { b: 'baserecordid_contract', a: '_baserecordid_value', c: 'contracts', d: 'contract' },
			baserecordid_email: { b: 'baserecordid_email', a: '_baserecordid_value', c: 'emails', d: 'email' },
			baserecordid_emailserverprofile: { b: 'baserecordid_emailserverprofile', a: '_baserecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			baserecordid_entitlement: { b: 'baserecordid_entitlement', a: '_baserecordid_value', c: 'entitlements', d: 'entitlement' },
			baserecordid_entitlementchannel: { b: 'baserecordid_entitlementchannel', a: '_baserecordid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			baserecordid_entitlemententityallocationtypemapping: { b: 'baserecordid_entitlemententityallocationtypemapping', a: '_baserecordid_value', c: 'entitlemententityallocationtypemappings', d: 'entitlemententityallocationtypemapping' },
			baserecordid_entitlementtemplate: { b: 'baserecordid_entitlementtemplate', a: '_baserecordid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			baserecordid_equipment: { b: 'baserecordid_equipment', a: '_baserecordid_value', c: 'equipments', d: 'equipment' },
			baserecordid_fax: { b: 'baserecordid_fax', a: '_baserecordid_value', c: 'faxes', d: 'fax' },
			baserecordid_feedback: { b: 'baserecordid_feedback', a: '_baserecordid_value', c: 'feedback', d: 'feedback' },
			baserecordid_goal: { b: 'baserecordid_goal', a: '_baserecordid_value', c: 'goals', d: 'goal' },
			baserecordid_goalrollupquery: { b: 'baserecordid_goalrollupquery', a: '_baserecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			baserecordid_incident: { b: 'baserecordid_incident', a: '_baserecordid_value', c: 'incidents', d: 'incident' },
			baserecordid_kbarticle: { b: 'baserecordid_kbarticle', a: '_baserecordid_value', c: 'kbarticles', d: 'kbarticle' },
			baserecordid_knowledgearticle: { b: 'baserecordid_knowledgearticle', a: '_baserecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			baserecordid_knowledgebaserecord: { b: 'baserecordid_knowledgebaserecord', a: '_baserecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			baserecordid_lead: { b: 'baserecordid_lead', a: '_baserecordid_value', c: 'leads', d: 'lead' },
			baserecordid_letter: { b: 'baserecordid_letter', a: '_baserecordid_value', c: 'letters', d: 'letter' },
			baserecordid_list: { b: 'baserecordid_list', a: '_baserecordid_value', c: 'lists', d: 'list' },
			baserecordid_msdyn_actioncardregarding: { b: 'baserecordid_msdyn_actioncardregarding', a: '_baserecordid_value', c: 'msdyn_actioncardregardings', d: 'msdyn_actioncardregarding' },
			baserecordid_msdyn_callablecontext: { b: 'baserecordid_msdyn_callablecontext', a: '_baserecordid_value', c: 'msdyn_callablecontexts', d: 'msdyn_callablecontext' },
			baserecordid_msdyn_connector: { b: 'baserecordid_msdyn_connector', a: '_baserecordid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			baserecordid_msdyn_flowcardtype: { b: 'baserecordid_msdyn_flowcardtype', a: '_baserecordid_value', c: 'msdyn_flowcardtypes', d: 'msdyn_flowcardtype' },
			baserecordid_msdyn_forecastdefinition: { b: 'baserecordid_msdyn_forecastdefinition', a: '_baserecordid_value', c: 'msdyn_forecastdefinitions', d: 'msdyn_forecastdefinition' },
			baserecordid_msdyn_forecastinstance: { b: 'baserecordid_msdyn_forecastinstance', a: '_baserecordid_value', c: 'msdyn_forecastinstances', d: 'msdyn_forecastinstance' },
			baserecordid_msdyn_forecastrecurrence: { b: 'baserecordid_msdyn_forecastrecurrence', a: '_baserecordid_value', c: 'msdyn_forecastrecurrences', d: 'msdyn_forecastrecurrence' },
			baserecordid_msdyn_icebreakersconfig: { b: 'baserecordid_msdyn_icebreakersconfig', a: '_baserecordid_value', c: 'msdyn_icebreakersconfigs', d: 'msdyn_icebreakersconfig' },
			baserecordid_msdyn_playbookactivity: { b: 'baserecordid_msdyn_playbookactivity', a: '_baserecordid_value', c: 'msdyn_playbookactivities', d: 'msdyn_playbookactivity' },
			baserecordid_msdyn_playbookactivityattribute: { b: 'baserecordid_msdyn_playbookactivityattribute', a: '_baserecordid_value', c: 'msdyn_playbookactivityattributes', d: 'msdyn_playbookactivityattribute' },
			baserecordid_msdyn_playbookcategory: { b: 'baserecordid_msdyn_playbookcategory', a: '_baserecordid_value', c: 'msdyn_playbookcategories', d: 'msdyn_playbookcategory' },
			baserecordid_msdyn_playbookinstance: { b: 'baserecordid_msdyn_playbookinstance', a: '_baserecordid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			baserecordid_msdyn_playbooktemplate: { b: 'baserecordid_msdyn_playbooktemplate', a: '_baserecordid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			baserecordid_msdyn_postalbum: { b: 'baserecordid_msdyn_postalbum', a: '_baserecordid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			baserecordid_msdyn_relationshipinsightsunifiedconfig: { b: 'baserecordid_msdyn_relationshipinsightsunifiedconfig', a: '_baserecordid_value', c: 'msdyn_relationshipinsightsunifiedconfigs', d: 'msdyn_relationshipinsightsunifiedconfig' },
			baserecordid_msdyn_salesinsightssettings: { b: 'baserecordid_msdyn_salesinsightssettings', a: '_baserecordid_value', c: 'msdyn_salesinsightssettingses', d: 'msdyn_salesinsightssettings' },
			baserecordid_msdyn_siconfig: { b: 'baserecordid_msdyn_siconfig', a: '_baserecordid_value', c: 'msdyn_siconfigs', d: 'msdyn_siconfig' },
			baserecordid_msdyn_untrackedappointment: { b: 'baserecordid_msdyn_untrackedappointment', a: '_baserecordid_value', c: 'msdyn_untrackedappointments', d: 'msdyn_untrackedappointment' },
			baserecordid_msfp_emailtemplate: { b: 'baserecordid_msfp_emailtemplate', a: '_baserecordid_value', c: 'msfp_emailtemplates', d: 'msfp_emailtemplate' },
			baserecordid_msfp_question: { b: 'baserecordid_msfp_question', a: '_baserecordid_value', c: 'msfp_questions', d: 'msfp_question' },
			baserecordid_msfp_questionresponse: { b: 'baserecordid_msfp_questionresponse', a: '_baserecordid_value', c: 'msfp_questionresponses', d: 'msfp_questionresponse' },
			baserecordid_msfp_survey: { b: 'baserecordid_msfp_survey', a: '_baserecordid_value', c: 'msfp_surveies', d: 'msfp_survey' },
			baserecordid_msfp_surveyinvite: { b: 'baserecordid_msfp_surveyinvite', a: '_baserecordid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			baserecordid_msfp_surveyresponse: { b: 'baserecordid_msfp_surveyresponse', a: '_baserecordid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			baserecordid_msfp_unsubscribedrecipient: { b: 'baserecordid_msfp_unsubscribedrecipient', a: '_baserecordid_value', c: 'msfp_unsubscribedrecipients', d: 'msfp_unsubscribedrecipient' },
			baserecordid_opportunity: { b: 'baserecordid_opportunity', a: '_baserecordid_value', c: 'opportunities', d: 'opportunity' },
			baserecordid_phonecall: { b: 'baserecordid_phonecall', a: '_baserecordid_value', c: 'phonecalls', d: 'phonecall' },
			baserecordid_publisher: { b: 'baserecordid_publisher', a: '_baserecordid_value', c: 'publishers', d: 'publisher' },
			baserecordid_queue: { b: 'baserecordid_queue', a: '_baserecordid_value', c: 'queues', d: 'queue' },
			baserecordid_quote: { b: 'baserecordid_quote', a: '_baserecordid_value', c: 'quotes', d: 'quote' },
			baserecordid_ratingmodel: { b: 'baserecordid_ratingmodel', a: '_baserecordid_value', c: 'ratingmodels', d: 'ratingmodel' },
			baserecordid_ratingvalue: { b: 'baserecordid_ratingvalue', a: '_baserecordid_value', c: 'ratingvalues', d: 'ratingvalue' },
			baserecordid_recurringappointmentmaster: { b: 'baserecordid_recurringappointmentmaster', a: '_baserecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			baserecordid_resourcegroup: { b: 'baserecordid_resourcegroup', a: '_baserecordid_value', c: 'resourcegroups', d: 'resourcegroup' },
			baserecordid_service: { b: 'baserecordid_service', a: '_baserecordid_value', c: 'services', d: 'service' },
			baserecordid_sharepointdocumentlocation: { b: 'baserecordid_sharepointdocumentlocation', a: '_baserecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			baserecordid_sharepointsite: { b: 'baserecordid_sharepointsite', a: '_baserecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			baserecordid_socialactivity: { b: 'baserecordid_socialactivity', a: '_baserecordid_value', c: 'socialactivities', d: 'socialactivity' },
			baserecordid_socialprofile: { b: 'baserecordid_socialprofile', a: '_baserecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			baserecordid_systemuser: { b: 'baserecordid_systemuser', a: '_baserecordid_value', c: 'systemusers', d: 'systemuser' },
			baserecordid_task: { b: 'baserecordid_task', a: '_baserecordid_value', c: 'tasks', d: 'task' },
			baserecordid_team: { b: 'baserecordid_team', a: '_baserecordid_value', c: 'teams', d: 'team' },
			baserecordid_territory: { b: 'baserecordid_territory', a: '_baserecordid_value', c: 'territories', d: 'territory' },
			baserecordid_transactioncurrency: { b: 'baserecordid_transactioncurrency', a: '_baserecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			DuplicateId: { a: 'duplicateid' },
			duplicaterecordid_account: { b: 'duplicaterecordid_account', a: '_duplicaterecordid_value', c: 'accounts', d: 'account' },
			duplicaterecordid_adminsettingsentity: { b: 'duplicaterecordid_adminsettingsentity', a: '_duplicaterecordid_value', c: 'adminsettingsentities', d: 'adminsettingsentity' },
			duplicaterecordid_appointment: { b: 'duplicaterecordid_appointment', a: '_duplicaterecordid_value', c: 'appointments', d: 'appointment' },
			duplicaterecordid_bookableresource: { b: 'duplicaterecordid_bookableresource', a: '_duplicaterecordid_value', c: 'bookableresources', d: 'bookableresource' },
			duplicaterecordid_bookableresourcebooking: { b: 'duplicaterecordid_bookableresourcebooking', a: '_duplicaterecordid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			duplicaterecordid_bookableresourcebookingheader: { b: 'duplicaterecordid_bookableresourcebookingheader', a: '_duplicaterecordid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			duplicaterecordid_bookableresourcecategory: { b: 'duplicaterecordid_bookableresourcecategory', a: '_duplicaterecordid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			duplicaterecordid_bookableresourcecategoryassn: { b: 'duplicaterecordid_bookableresourcecategoryassn', a: '_duplicaterecordid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			duplicaterecordid_bookableresourcecharacteristic: { b: 'duplicaterecordid_bookableresourcecharacteristic', a: '_duplicaterecordid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			duplicaterecordid_bookableresourcegroup: { b: 'duplicaterecordid_bookableresourcegroup', a: '_duplicaterecordid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			duplicaterecordid_bookingstatus: { b: 'duplicaterecordid_bookingstatus', a: '_duplicaterecordid_value', c: 'bookingstatuses', d: 'bookingstatus' },
			duplicaterecordid_campaign: { b: 'duplicaterecordid_campaign', a: '_duplicaterecordid_value', c: 'campaigns', d: 'campaign' },
			duplicaterecordid_campaignresponse: { b: 'duplicaterecordid_campaignresponse', a: '_duplicaterecordid_value', c: 'campaignresponses', d: 'campaignresponse' },
			channelaccessprofile_duplicatematchingrecord: { b: 'channelaccessprofile_duplicatematchingrecord', a: '_duplicaterecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			duplicaterecordid_characteristic: { b: 'duplicaterecordid_characteristic', a: '_duplicaterecordid_value', c: 'characteristics', d: 'characteristic' },
			duplicaterecordid_competitor: { b: 'duplicaterecordid_competitor', a: '_duplicaterecordid_value', c: 'competitors', d: 'competitor' },
			duplicaterecordid_contact: { b: 'duplicaterecordid_contact', a: '_duplicaterecordid_value', c: 'contacts', d: 'contact' },
			duplicaterecordid_contract: { b: 'duplicaterecordid_contract', a: '_duplicaterecordid_value', c: 'contracts', d: 'contract' },
			duplicaterecordid_email: { b: 'duplicaterecordid_email', a: '_duplicaterecordid_value', c: 'emails', d: 'email' },
			duplicaterecordid_emailserverprofile: { b: 'duplicaterecordid_emailserverprofile', a: '_duplicaterecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			duplicaterecordid_entitlement: { b: 'duplicaterecordid_entitlement', a: '_duplicaterecordid_value', c: 'entitlements', d: 'entitlement' },
			duplicaterecordid_entitlementchannel: { b: 'duplicaterecordid_entitlementchannel', a: '_duplicaterecordid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			duplicaterecordid_entitlemententityallocationtypemapping: { b: 'duplicaterecordid_entitlemententityallocationtypemapping', a: '_duplicaterecordid_value', c: 'entitlemententityallocationtypemappings', d: 'entitlemententityallocationtypemapping' },
			duplicaterecordid_entitlementtemplate: { b: 'duplicaterecordid_entitlementtemplate', a: '_duplicaterecordid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			duplicaterecordid_equipment: { b: 'duplicaterecordid_equipment', a: '_duplicaterecordid_value', c: 'equipments', d: 'equipment' },
			duplicaterecordid_fax: { b: 'duplicaterecordid_fax', a: '_duplicaterecordid_value', c: 'faxes', d: 'fax' },
			duplicaterecordid_feedback: { b: 'duplicaterecordid_feedback', a: '_duplicaterecordid_value', c: 'feedback', d: 'feedback' },
			duplicaterecordid_goal: { b: 'duplicaterecordid_goal', a: '_duplicaterecordid_value', c: 'goals', d: 'goal' },
			duplicaterecordid_goalrollupquery: { b: 'duplicaterecordid_goalrollupquery', a: '_duplicaterecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			duplicaterecordid_incident: { b: 'duplicaterecordid_incident', a: '_duplicaterecordid_value', c: 'incidents', d: 'incident' },
			duplicaterecordid_kbarticle: { b: 'duplicaterecordid_kbarticle', a: '_duplicaterecordid_value', c: 'kbarticles', d: 'kbarticle' },
			duplicaterecordid_knowledgearticle: { b: 'duplicaterecordid_knowledgearticle', a: '_duplicaterecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			duplicaterecordid_knowledgebaserecord: { b: 'duplicaterecordid_knowledgebaserecord', a: '_duplicaterecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			duplicaterecordid_lead: { b: 'duplicaterecordid_lead', a: '_duplicaterecordid_value', c: 'leads', d: 'lead' },
			duplicaterecordid_letter: { b: 'duplicaterecordid_letter', a: '_duplicaterecordid_value', c: 'letters', d: 'letter' },
			duplicaterecordid_list: { b: 'duplicaterecordid_list', a: '_duplicaterecordid_value', c: 'lists', d: 'list' },
			duplicaterecordid_msdyn_actioncardregarding: { b: 'duplicaterecordid_msdyn_actioncardregarding', a: '_duplicaterecordid_value', c: 'msdyn_actioncardregardings', d: 'msdyn_actioncardregarding' },
			duplicaterecordid_msdyn_callablecontext: { b: 'duplicaterecordid_msdyn_callablecontext', a: '_duplicaterecordid_value', c: 'msdyn_callablecontexts', d: 'msdyn_callablecontext' },
			duplicaterecordid_msdyn_connector: { b: 'duplicaterecordid_msdyn_connector', a: '_duplicaterecordid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			duplicaterecordid_msdyn_flowcardtype: { b: 'duplicaterecordid_msdyn_flowcardtype', a: '_duplicaterecordid_value', c: 'msdyn_flowcardtypes', d: 'msdyn_flowcardtype' },
			duplicaterecordid_msdyn_forecastdefinition: { b: 'duplicaterecordid_msdyn_forecastdefinition', a: '_duplicaterecordid_value', c: 'msdyn_forecastdefinitions', d: 'msdyn_forecastdefinition' },
			duplicaterecordid_msdyn_forecastinstance: { b: 'duplicaterecordid_msdyn_forecastinstance', a: '_duplicaterecordid_value', c: 'msdyn_forecastinstances', d: 'msdyn_forecastinstance' },
			duplicaterecordid_msdyn_forecastrecurrence: { b: 'duplicaterecordid_msdyn_forecastrecurrence', a: '_duplicaterecordid_value', c: 'msdyn_forecastrecurrences', d: 'msdyn_forecastrecurrence' },
			duplicaterecordid_msdyn_icebreakersconfig: { b: 'duplicaterecordid_msdyn_icebreakersconfig', a: '_duplicaterecordid_value', c: 'msdyn_icebreakersconfigs', d: 'msdyn_icebreakersconfig' },
			duplicaterecordid_msdyn_playbookactivity: { b: 'duplicaterecordid_msdyn_playbookactivity', a: '_duplicaterecordid_value', c: 'msdyn_playbookactivities', d: 'msdyn_playbookactivity' },
			duplicaterecordid_msdyn_playbookactivityattribute: { b: 'duplicaterecordid_msdyn_playbookactivityattribute', a: '_duplicaterecordid_value', c: 'msdyn_playbookactivityattributes', d: 'msdyn_playbookactivityattribute' },
			duplicaterecordid_msdyn_playbookcategory: { b: 'duplicaterecordid_msdyn_playbookcategory', a: '_duplicaterecordid_value', c: 'msdyn_playbookcategories', d: 'msdyn_playbookcategory' },
			duplicaterecordid_msdyn_playbookinstance: { b: 'duplicaterecordid_msdyn_playbookinstance', a: '_duplicaterecordid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			duplicaterecordid_msdyn_playbooktemplate: { b: 'duplicaterecordid_msdyn_playbooktemplate', a: '_duplicaterecordid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			duplicaterecordid_msdyn_postalbum: { b: 'duplicaterecordid_msdyn_postalbum', a: '_duplicaterecordid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			duplicaterecordid_msdyn_relationshipinsightsunifiedconfig: { b: 'duplicaterecordid_msdyn_relationshipinsightsunifiedconfig', a: '_duplicaterecordid_value', c: 'msdyn_relationshipinsightsunifiedconfigs', d: 'msdyn_relationshipinsightsunifiedconfig' },
			duplicaterecordid_msdyn_salesinsightssettings: { b: 'duplicaterecordid_msdyn_salesinsightssettings', a: '_duplicaterecordid_value', c: 'msdyn_salesinsightssettingses', d: 'msdyn_salesinsightssettings' },
			duplicaterecordid_msdyn_siconfig: { b: 'duplicaterecordid_msdyn_siconfig', a: '_duplicaterecordid_value', c: 'msdyn_siconfigs', d: 'msdyn_siconfig' },
			duplicaterecordid_msdyn_untrackedappointment: { b: 'duplicaterecordid_msdyn_untrackedappointment', a: '_duplicaterecordid_value', c: 'msdyn_untrackedappointments', d: 'msdyn_untrackedappointment' },
			duplicaterecordid_msfp_emailtemplate: { b: 'duplicaterecordid_msfp_emailtemplate', a: '_duplicaterecordid_value', c: 'msfp_emailtemplates', d: 'msfp_emailtemplate' },
			duplicaterecordid_msfp_question: { b: 'duplicaterecordid_msfp_question', a: '_duplicaterecordid_value', c: 'msfp_questions', d: 'msfp_question' },
			duplicaterecordid_msfp_questionresponse: { b: 'duplicaterecordid_msfp_questionresponse', a: '_duplicaterecordid_value', c: 'msfp_questionresponses', d: 'msfp_questionresponse' },
			duplicaterecordid_msfp_survey: { b: 'duplicaterecordid_msfp_survey', a: '_duplicaterecordid_value', c: 'msfp_surveies', d: 'msfp_survey' },
			duplicaterecordid_msfp_surveyinvite: { b: 'duplicaterecordid_msfp_surveyinvite', a: '_duplicaterecordid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			duplicaterecordid_msfp_surveyresponse: { b: 'duplicaterecordid_msfp_surveyresponse', a: '_duplicaterecordid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			duplicaterecordid_msfp_unsubscribedrecipient: { b: 'duplicaterecordid_msfp_unsubscribedrecipient', a: '_duplicaterecordid_value', c: 'msfp_unsubscribedrecipients', d: 'msfp_unsubscribedrecipient' },
			duplicaterecordid_opportunity: { b: 'duplicaterecordid_opportunity', a: '_duplicaterecordid_value', c: 'opportunities', d: 'opportunity' },
			duplicaterecordid_phonecall: { b: 'duplicaterecordid_phonecall', a: '_duplicaterecordid_value', c: 'phonecalls', d: 'phonecall' },
			duplicaterecordid_publisher: { b: 'duplicaterecordid_publisher', a: '_duplicaterecordid_value', c: 'publishers', d: 'publisher' },
			duplicaterecordid_queue: { b: 'duplicaterecordid_queue', a: '_duplicaterecordid_value', c: 'queues', d: 'queue' },
			duplicaterecordid_quote: { b: 'duplicaterecordid_quote', a: '_duplicaterecordid_value', c: 'quotes', d: 'quote' },
			duplicaterecordid_ratingmodel: { b: 'duplicaterecordid_ratingmodel', a: '_duplicaterecordid_value', c: 'ratingmodels', d: 'ratingmodel' },
			duplicaterecordid_ratingvalue: { b: 'duplicaterecordid_ratingvalue', a: '_duplicaterecordid_value', c: 'ratingvalues', d: 'ratingvalue' },
			duplicaterecordid_recurringappointmentmaster: { b: 'duplicaterecordid_recurringappointmentmaster', a: '_duplicaterecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			duplicaterecordid_resourcegroup: { b: 'duplicaterecordid_resourcegroup', a: '_duplicaterecordid_value', c: 'resourcegroups', d: 'resourcegroup' },
			duplicaterecordid_service: { b: 'duplicaterecordid_service', a: '_duplicaterecordid_value', c: 'services', d: 'service' },
			duplicaterecordid_sharepointdocumentlocation: { b: 'duplicaterecordid_sharepointdocumentlocation', a: '_duplicaterecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			duplicaterecordid_sharepointsite: { b: 'duplicaterecordid_sharepointsite', a: '_duplicaterecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			duplicaterecordid_socialactivity: { b: 'duplicaterecordid_socialactivity', a: '_duplicaterecordid_value', c: 'socialactivities', d: 'socialactivity' },
			duplicaterecordid_socialprofile: { b: 'duplicaterecordid_socialprofile', a: '_duplicaterecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			duplicaterecordid_systemuser: { b: 'duplicaterecordid_systemuser', a: '_duplicaterecordid_value', c: 'systemusers', d: 'systemuser' },
			duplicaterecordid_task: { b: 'duplicaterecordid_task', a: '_duplicaterecordid_value', c: 'tasks', d: 'task' },
			duplicaterecordid_team: { b: 'duplicaterecordid_team', a: '_duplicaterecordid_value', c: 'teams', d: 'team' },
			duplicaterecordid_territory: { b: 'duplicaterecordid_territory', a: '_duplicaterecordid_value', c: 'territories', d: 'territory' },
			duplicaterecordid_transactioncurrency: { b: 'duplicaterecordid_transactioncurrency', a: '_duplicaterecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			DuplicateRuleId: { b: 'duplicateruleid', a: '_duplicateruleid_value', c: 'duplicaterules', d: 'duplicaterule', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in duplicaterecord) {
			var a = duplicaterecord[field].a;
			var b = duplicaterecord[field].b;
			var c = duplicaterecord[field].c;
			var d = duplicaterecord[field].d;
			var g = duplicaterecord[field].g;
			var r = duplicaterecord[field].r;
			duplicaterecord[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		duplicaterecord.Entity = u;
		duplicaterecord.EntityName = 'duplicaterecord';
		duplicaterecord.EntityCollectionName = 'duplicaterecords';
		duplicaterecord['@odata.etag'] = e['@odata.etag'];
		var optionSet = {
			RollupState: {
				NotCalculated: 0,
				Calculated: 1,
				OverflowError: 2,
				OtherError: 3,
				RetryLimitExceeded: 4,
				HierarchicalRecursionLimitReached: 5,
				LoopDetected: 6
			}
		};
		duplicaterecord.OptionSet = optionSet;
		duplicaterecord.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		duplicaterecord.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return duplicaterecord;
	};
})(Hsbc || (Hsbc = {}));