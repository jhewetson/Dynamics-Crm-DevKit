'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.PrincipalObjectAttributeAccessApi = function (e) {
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
		var principalobjectattributeaccess = {
			AttributeId: { a: 'attributeid' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_accountleads: { b: 'objectid_accountleads', a: '_objectid_value', c: '', d: 'accountleads' },
			objectid_adminsettingsentity: { b: 'objectid_adminsettingsentity', a: '_objectid_value', c: 'adminsettingsentities', d: 'adminsettingsentity' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_bookableresource: { b: 'objectid_bookableresource', a: '_objectid_value', c: 'bookableresources', d: 'bookableresource' },
			objectid_bookableresourcebooking: { b: 'objectid_bookableresourcebooking', a: '_objectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			objectid_bookableresourcebookingexchangesyncidmapping: { b: 'objectid_bookableresourcebookingexchangesyncidmapping', a: '_objectid_value', c: 'bookableresourcebookingexchangesyncidmappings', d: 'bookableresourcebookingexchangesyncidmapping' },
			objectid_bookableresourcebookingheader: { b: 'objectid_bookableresourcebookingheader', a: '_objectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			objectid_bookableresourcecategory: { b: 'objectid_bookableresourcecategory', a: '_objectid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			objectid_bookableresourcecategoryassn: { b: 'objectid_bookableresourcecategoryassn', a: '_objectid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			objectid_bookableresourcecharacteristic: { b: 'objectid_bookableresourcecharacteristic', a: '_objectid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			objectid_bookableresourcegroup: { b: 'objectid_bookableresourcegroup', a: '_objectid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			objectid_bookingstatus: { b: 'objectid_bookingstatus', a: '_objectid_value', c: 'bookingstatuses', d: 'bookingstatus' },
			objectid_bulkoperation: { b: 'objectid_bulkoperation', a: '_objectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			objectid_bulkoperationlog: { b: 'objectid_bulkoperationlog', a: '_objectid_value', c: 'bulkoperationlogs', d: 'bulkoperationlog' },
			objectid_businessunit: { b: 'objectid_businessunit', a: '_objectid_value', c: 'businessunits', d: 'businessunit' },
			objectid_campaign: { b: 'objectid_campaign', a: '_objectid_value', c: 'campaigns', d: 'campaign' },
			objectid_campaignactivity: { b: 'objectid_campaignactivity', a: '_objectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			objectid_campaignactivityitem: { b: 'objectid_campaignactivityitem', a: '_objectid_value', c: '', d: 'campaignactivityitem' },
			objectid_campaignitem: { b: 'objectid_campaignitem', a: '_objectid_value', c: '', d: 'campaignitem' },
			objectid_campaignresponse: { b: 'objectid_campaignresponse', a: '_objectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			channelaccessprofile_principalobjectattributeaccess: { b: 'channelaccessprofile_principalobjectattributeaccess', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			objectid_characteristic: { b: 'objectid_characteristic', a: '_objectid_value', c: 'characteristics', d: 'characteristic' },
			objectid_childincidentcount: { b: 'objectid_childincidentcount', a: '_objectid_value', c: 'childincidentcounts', d: 'childincidentcount' },
			objectid_commitment: { b: 'objectid_commitment', a: '_objectid_value', c: 'commitments', d: 'commitment' },
			objectid_competitor: { b: 'objectid_competitor', a: '_objectid_value', c: 'competitors', d: 'competitor' },
			objectid_competitoraddress: { b: 'objectid_competitoraddress', a: '_objectid_value', c: 'competitoraddresses', d: 'competitoraddress' },
			objectid_competitorproduct: { b: 'objectid_competitorproduct', a: '_objectid_value', c: '', d: 'competitorproduct' },
			objectid_competitorsalesliterature: { b: 'objectid_competitorsalesliterature', a: '_objectid_value', c: '', d: 'competitorsalesliterature' },
			objectid_connection: { b: 'objectid_connection', a: '_objectid_value', c: 'connections', d: 'connection' },
			objectid_constraintbasedgroup: { b: 'objectid_constraintbasedgroup', a: '_objectid_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_contactinvoices: { b: 'objectid_contactinvoices', a: '_objectid_value', c: '', d: 'contactinvoices' },
			objectid_contactleads: { b: 'objectid_contactleads', a: '_objectid_value', c: '', d: 'contactleads' },
			objectid_contactorders: { b: 'objectid_contactorders', a: '_objectid_value', c: '', d: 'contactorders' },
			objectid_contactquotes: { b: 'objectid_contactquotes', a: '_objectid_value', c: '', d: 'contactquotes' },
			objectid_contract: { b: 'objectid_contract', a: '_objectid_value', c: 'contracts', d: 'contract' },
			objectid_contractdetail: { b: 'objectid_contractdetail', a: '_objectid_value', c: 'contractdetails', d: 'contractdetail' },
			objectid_contracttemplate: { b: 'objectid_contracttemplate', a: '_objectid_value', c: 'contracttemplates', d: 'contracttemplate' },
			objectid_customeraddress: { b: 'objectid_customeraddress', a: '_objectid_value', c: 'customeraddresses', d: 'customeraddress' },
			objectid_customeropportunityrole: { b: 'objectid_customeropportunityrole', a: '_objectid_value', c: 'customeropportunityroles', d: 'customeropportunityrole' },
			objectid_discount: { b: 'objectid_discount', a: '_objectid_value', c: 'discounts', d: 'discount' },
			objectid_discounttype: { b: 'objectid_discounttype', a: '_objectid_value', c: 'discounttypes', d: 'discounttype' },
			objectid_dynamicproperty: { b: 'objectid_dynamicproperty', a: '_objectid_value', c: 'dynamicproperties', d: 'dynamicproperty' },
			objectid_dynamicpropertyassociation: { b: 'objectid_dynamicpropertyassociation', a: '_objectid_value', c: 'dynamicpropertyassociations', d: 'dynamicpropertyassociation' },
			objectid_dynamicpropertyinstance: { b: 'objectid_dynamicpropertyinstance', a: '_objectid_value', c: 'dynamicpropertyinstances', d: 'dynamicpropertyinstance' },
			objectid_dynamicpropertyoptionsetitem: { b: 'objectid_dynamicpropertyoptionsetitem', a: '_objectid_value', c: 'dynamicpropertyoptionsetitems', d: 'dynamicpropertyoptionsetitem' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_entitlement: { b: 'objectid_entitlement', a: '_objectid_value', c: 'entitlements', d: 'entitlement' },
			objectid_entitlementchannel: { b: 'objectid_entitlementchannel', a: '_objectid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			objectid_entitlementcontacts: { b: 'objectid_entitlementcontacts', a: '_objectid_value', c: '', d: 'entitlementcontacts' },
			objectid_entitlemententityallocationtypemapping: { b: 'objectid_entitlemententityallocationtypemapping', a: '_objectid_value', c: 'entitlemententityallocationtypemappings', d: 'entitlemententityallocationtypemapping' },
			objectid_entitlementproducts: { b: 'objectid_entitlementproducts', a: '_objectid_value', c: '', d: 'entitlementproducts' },
			objectid_entitlementtemplate: { b: 'objectid_entitlementtemplate', a: '_objectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			objectid_entitlementtemplatechannel: { b: 'objectid_entitlementtemplatechannel', a: '_objectid_value', c: 'entitlementtemplatechannels', d: 'entitlementtemplatechannel' },
			objectid_entitlementtemplateproducts: { b: 'objectid_entitlementtemplateproducts', a: '_objectid_value', c: '', d: 'entitlementtemplateproducts' },
			objectid_equipment: { b: 'objectid_equipment', a: '_objectid_value', c: 'equipments', d: 'equipment' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_feedback: { b: 'objectid_feedback', a: '_objectid_value', c: 'feedback', d: 'feedback' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_holidaywrapper: { b: 'objectid_holidaywrapper', a: '_objectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			objectid_incident: { b: 'objectid_incident', a: '_objectid_value', c: 'incidents', d: 'incident' },
			objectid_incidentknowledgebaserecord: { b: 'objectid_incidentknowledgebaserecord', a: '_objectid_value', c: '', d: 'incidentknowledgebaserecord' },
			objectid_incidentresolution: { b: 'objectid_incidentresolution', a: '_objectid_value', c: 'incidentresolutions', d: 'incidentresolution' },
			objectid_invoice: { b: 'objectid_invoice', a: '_objectid_value', c: 'invoices', d: 'invoice' },
			objectid_invoicedetail: { b: 'objectid_invoicedetail', a: '_objectid_value', c: 'invoicedetails', d: 'invoicedetail' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgearticleincident: { b: 'objectid_knowledgearticleincident', a: '_objectid_value', c: 'knowledgearticleincidents', d: 'knowledgearticleincident' },
			objectid_knowledgearticleviews: { b: 'objectid_knowledgearticleviews', a: '_objectid_value', c: 'knowledgearticleviews', d: 'knowledgearticleviews' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_lead: { b: 'objectid_lead', a: '_objectid_value', c: 'leads', d: 'lead' },
			objectid_leadaddress: { b: 'objectid_leadaddress', a: '_objectid_value', c: 'leadaddresses', d: 'leadaddress' },
			objectid_leadcompetitors: { b: 'objectid_leadcompetitors', a: '_objectid_value', c: '', d: 'leadcompetitors' },
			objectid_leadproduct: { b: 'objectid_leadproduct', a: '_objectid_value', c: '', d: 'leadproduct' },
			objectid_leadtoopportunitysalesprocess: { b: 'objectid_leadtoopportunitysalesprocess', a: '_objectid_value', c: 'leadtoopportunitysalesprocesses', d: 'leadtoopportunitysalesprocess' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_list: { b: 'objectid_list', a: '_objectid_value', c: 'lists', d: 'list' },
			objectid_listmember: { b: 'objectid_listmember', a: '_objectid_value', c: '', d: 'listmember' },
			objectid_mailmergetemplate: { b: 'objectid_mailmergetemplate', a: '_objectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			objectid_msdyn_actioncardregarding: { b: 'objectid_msdyn_actioncardregarding', a: '_objectid_value', c: 'msdyn_actioncardregardings', d: 'msdyn_actioncardregarding' },
			objectid_msdyn_actioncardrolesetting: { b: 'objectid_msdyn_actioncardrolesetting', a: '_objectid_value', c: 'msdyn_actioncardrolesettings', d: 'msdyn_actioncardrolesetting' },
			objectid_msdyn_callablecontext: { b: 'objectid_msdyn_callablecontext', a: '_objectid_value', c: 'msdyn_callablecontexts', d: 'msdyn_callablecontext' },
			objectid_msdyn_connector: { b: 'objectid_msdyn_connector', a: '_objectid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			objectid_msdyn_databaseversion: { b: 'objectid_msdyn_databaseversion', a: '_objectid_value', c: 'msdyn_databaseversions', d: 'msdyn_databaseversion' },
			objectid_msdyn_entityrankingrule: { b: 'objectid_msdyn_entityrankingrule', a: '_objectid_value', c: 'msdyn_entityrankingrules', d: 'msdyn_entityrankingrule' },
			objectid_msdyn_flowcardtype: { b: 'objectid_msdyn_flowcardtype', a: '_objectid_value', c: 'msdyn_flowcardtypes', d: 'msdyn_flowcardtype' },
			objectid_msdyn_forecastdefinition: { b: 'objectid_msdyn_forecastdefinition', a: '_objectid_value', c: 'msdyn_forecastdefinitions', d: 'msdyn_forecastdefinition' },
			objectid_msdyn_forecastinstance: { b: 'objectid_msdyn_forecastinstance', a: '_objectid_value', c: 'msdyn_forecastinstances', d: 'msdyn_forecastinstance' },
			objectid_msdyn_forecastrecurrence: { b: 'objectid_msdyn_forecastrecurrence', a: '_objectid_value', c: 'msdyn_forecastrecurrences', d: 'msdyn_forecastrecurrence' },
			objectid_msdyn_icebreakersconfig: { b: 'objectid_msdyn_icebreakersconfig', a: '_objectid_value', c: 'msdyn_icebreakersconfigs', d: 'msdyn_icebreakersconfig' },
			objectid_msdyn_notesanalysisconfig: { b: 'objectid_msdyn_notesanalysisconfig', a: '_objectid_value', c: 'msdyn_notesanalysisconfigs', d: 'msdyn_notesanalysisconfig' },
			objectid_msdyn_playbookactivity: { b: 'objectid_msdyn_playbookactivity', a: '_objectid_value', c: 'msdyn_playbookactivities', d: 'msdyn_playbookactivity' },
			objectid_msdyn_playbookactivityattribute: { b: 'objectid_msdyn_playbookactivityattribute', a: '_objectid_value', c: 'msdyn_playbookactivityattributes', d: 'msdyn_playbookactivityattribute' },
			objectid_msdyn_playbookcategory: { b: 'objectid_msdyn_playbookcategory', a: '_objectid_value', c: 'msdyn_playbookcategories', d: 'msdyn_playbookcategory' },
			objectid_msdyn_playbookinstance: { b: 'objectid_msdyn_playbookinstance', a: '_objectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			objectid_msdyn_playbooktemplate: { b: 'objectid_msdyn_playbooktemplate', a: '_objectid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			objectid_msdyn_postalbum: { b: 'objectid_msdyn_postalbum', a: '_objectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			objectid_msdyn_postconfig: { b: 'objectid_msdyn_postconfig', a: '_objectid_value', c: 'msdyn_postconfigs', d: 'msdyn_postconfig' },
			objectid_msdyn_postruleconfig: { b: 'objectid_msdyn_postruleconfig', a: '_objectid_value', c: 'msdyn_postruleconfigs', d: 'msdyn_postruleconfig' },
			objectid_msdyn_relationshipinsightsunifiedconfig: { b: 'objectid_msdyn_relationshipinsightsunifiedconfig', a: '_objectid_value', c: 'msdyn_relationshipinsightsunifiedconfigs', d: 'msdyn_relationshipinsightsunifiedconfig' },
			objectid_msdyn_salesinsightssettings: { b: 'objectid_msdyn_salesinsightssettings', a: '_objectid_value', c: 'msdyn_salesinsightssettingses', d: 'msdyn_salesinsightssettings' },
			objectid_msdyn_siconfig: { b: 'objectid_msdyn_siconfig', a: '_objectid_value', c: 'msdyn_siconfigs', d: 'msdyn_siconfig' },
			objectid_msdyn_teamscollaboration: { b: 'objectid_msdyn_teamscollaboration', a: '_objectid_value', c: 'msdyn_teamscollaborations', d: 'msdyn_teamscollaboration' },
			objectid_msdyn_untrackedappointment: { b: 'objectid_msdyn_untrackedappointment', a: '_objectid_value', c: 'msdyn_untrackedappointments', d: 'msdyn_untrackedappointment' },
			objectid_msdyn_upgraderun: { b: 'objectid_msdyn_upgraderun', a: '_objectid_value', c: 'msdyn_upgraderuns', d: 'msdyn_upgraderun' },
			objectid_msdyn_upgradestep: { b: 'objectid_msdyn_upgradestep', a: '_objectid_value', c: 'msdyn_upgradesteps', d: 'msdyn_upgradestep' },
			objectid_msdyn_upgradeversion: { b: 'objectid_msdyn_upgradeversion', a: '_objectid_value', c: 'msdyn_upgradeversions', d: 'msdyn_upgradeversion' },
			objectid_msdyn_wallsavedquery: { b: 'objectid_msdyn_wallsavedquery', a: '_objectid_value', c: 'msdyn_wallsavedqueries', d: 'msdyn_wallsavedquery' },
			objectid_msdyn_wallsavedqueryusersettings: { b: 'objectid_msdyn_wallsavedqueryusersettings', a: '_objectid_value', c: 'msdyn_wallsavedqueryusersettingses', d: 'msdyn_wallsavedqueryusersettings' },
			objectid_msfp_emailtemplate: { b: 'objectid_msfp_emailtemplate', a: '_objectid_value', c: 'msfp_emailtemplates', d: 'msfp_emailtemplate' },
			objectid_msfp_question: { b: 'objectid_msfp_question', a: '_objectid_value', c: 'msfp_questions', d: 'msfp_question' },
			objectid_msfp_questionresponse: { b: 'objectid_msfp_questionresponse', a: '_objectid_value', c: 'msfp_questionresponses', d: 'msfp_questionresponse' },
			objectid_msfp_survey: { b: 'objectid_msfp_survey', a: '_objectid_value', c: 'msfp_surveies', d: 'msfp_survey' },
			objectid_msfp_surveyinvite: { b: 'objectid_msfp_surveyinvite', a: '_objectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			objectid_msfp_surveyresponse: { b: 'objectid_msfp_surveyresponse', a: '_objectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			objectid_msfp_unsubscribedrecipient: { b: 'objectid_msfp_unsubscribedrecipient', a: '_objectid_value', c: 'msfp_unsubscribedrecipients', d: 'msfp_unsubscribedrecipient' },
			objectid_opportunity: { b: 'objectid_opportunity', a: '_objectid_value', c: 'opportunities', d: 'opportunity' },
			objectid_opportunityclose: { b: 'objectid_opportunityclose', a: '_objectid_value', c: 'opportunitycloses', d: 'opportunityclose' },
			objectid_opportunitycompetitors: { b: 'objectid_opportunitycompetitors', a: '_objectid_value', c: '', d: 'opportunitycompetitors' },
			objectid_opportunityproduct: { b: 'objectid_opportunityproduct', a: '_objectid_value', c: 'opportunityproducts', d: 'opportunityproduct' },
			objectid_opportunitysalesprocess: { b: 'objectid_opportunitysalesprocess', a: '_objectid_value', c: 'opportunitysalesprocesses', d: 'opportunitysalesprocess' },
			objectid_orderclose: { b: 'objectid_orderclose', a: '_objectid_value', c: 'ordercloses', d: 'orderclose' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_phonetocaseprocess: { b: 'objectid_phonetocaseprocess', a: '_objectid_value', c: 'phonetocaseprocesses', d: 'phonetocaseprocess' },
			objectid_position: { b: 'objectid_position', a: '_objectid_value', c: 'positions', d: 'position' },
			objectid_pricelevel: { b: 'objectid_pricelevel', a: '_objectid_value', c: 'pricelevels', d: 'pricelevel' },
			objectid_product: { b: 'objectid_product', a: '_objectid_value', c: 'products', d: 'product' },
			objectid_productassociation: { b: 'objectid_productassociation', a: '_objectid_value', c: 'productassociations', d: 'productassociation' },
			objectid_productpricelevel: { b: 'objectid_productpricelevel', a: '_objectid_value', c: 'productpricelevels', d: 'productpricelevel' },
			objectid_productsalesliterature: { b: 'objectid_productsalesliterature', a: '_objectid_value', c: '', d: 'productsalesliterature' },
			objectid_productsubstitute: { b: 'objectid_productsubstitute', a: '_objectid_value', c: 'productsubstitutes', d: 'productsubstitute' },
			objectid_queue: { b: 'objectid_queue', a: '_objectid_value', c: 'queues', d: 'queue' },
			objectid_queueitem: { b: 'objectid_queueitem', a: '_objectid_value', c: 'queueitems', d: 'queueitem' },
			objectid_quote: { b: 'objectid_quote', a: '_objectid_value', c: 'quotes', d: 'quote' },
			objectid_quoteclose: { b: 'objectid_quoteclose', a: '_objectid_value', c: 'quotecloses', d: 'quoteclose' },
			objectid_quotedetail: { b: 'objectid_quotedetail', a: '_objectid_value', c: 'quotedetails', d: 'quotedetail' },
			objectid_ratingmodel: { b: 'objectid_ratingmodel', a: '_objectid_value', c: 'ratingmodels', d: 'ratingmodel' },
			objectid_ratingvalue: { b: 'objectid_ratingvalue', a: '_objectid_value', c: 'ratingvalues', d: 'ratingvalue' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_reportcategory: { b: 'objectid_reportcategory', a: '_objectid_value', c: 'reportcategories', d: 'reportcategory' },
			objectid_resource: { b: 'objectid_resource', a: '_objectid_value', c: 'resources', d: 'resource' },
			objectid_resourcegroup: { b: 'objectid_resourcegroup', a: '_objectid_value', c: 'resourcegroups', d: 'resourcegroup' },
			objectid_resourcegroupexpansion: { b: 'objectid_resourcegroupexpansion', a: '_objectid_value', c: 'resourcegroupexpansions', d: 'resourcegroupexpansion' },
			objectid_resourcespec: { b: 'objectid_resourcespec', a: '_objectid_value', c: 'resourcespecs', d: 'resourcespec' },
			objectid_salesliterature: { b: 'objectid_salesliterature', a: '_objectid_value', c: 'salesliteratures', d: 'salesliterature' },
			objectid_salesliteratureitem: { b: 'objectid_salesliteratureitem', a: '_objectid_value', c: 'salesliteratureitems', d: 'salesliteratureitem' },
			objectid_salesorder: { b: 'objectid_salesorder', a: '_objectid_value', c: 'salesorders', d: 'salesorder' },
			objectid_salesorderdetail: { b: 'objectid_salesorderdetail', a: '_objectid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			objectid_salesprocessinstance: { b: 'objectid_salesprocessinstance', a: '_objectid_value', c: 'salesprocessinstances', d: 'salesprocessinstance' },
			objectid_service: { b: 'objectid_service', a: '_objectid_value', c: 'services', d: 'service' },
			objectid_serviceappointment: { b: 'objectid_serviceappointment', a: '_objectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			objectid_servicecontractcontacts: { b: 'objectid_servicecontractcontacts', a: '_objectid_value', c: '', d: 'servicecontractcontacts' },
			objectid_sharepointdocumentlocation: { b: 'objectid_sharepointdocumentlocation', a: '_objectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			objectid_sharepointsite: { b: 'objectid_sharepointsite', a: '_objectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			objectid_site: { b: 'objectid_site', a: '_objectid_value', c: 'sites', d: 'site' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_socialprofile: { b: 'objectid_socialprofile', a: '_objectid_value', c: 'socialprofiles', d: 'socialprofile' },
			objectid_systemuser: { b: 'objectid_systemuser', a: '_objectid_value', c: 'systemusers', d: 'systemuser' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_team: { b: 'objectid_team', a: '_objectid_value', c: 'teams', d: 'team' },
			objectid_territory: { b: 'objectid_territory', a: '_objectid_value', c: 'territories', d: 'territory' },
			objectid_topic: { b: 'objectid_topic', a: '_objectid_value', c: 'topics', d: 'topic' },
			objectid_topichistory: { b: 'objectid_topichistory', a: '_objectid_value', c: 'topichistories', d: 'topichistory' },
			objectid_topicmodel: { b: 'objectid_topicmodel', a: '_objectid_value', c: 'topicmodels', d: 'topicmodel' },
			objectid_topicmodelconfiguration: { b: 'objectid_topicmodelconfiguration', a: '_objectid_value', c: 'topicmodelconfigurations', d: 'topicmodelconfiguration' },
			objectid_topicmodelexecutionhistory: { b: 'objectid_topicmodelexecutionhistory', a: '_objectid_value', c: 'topicmodelexecutionhistories', d: 'topicmodelexecutionhistory' },
			objectid_uom: { b: 'objectid_uom', a: '_objectid_value', c: 'uoms', d: 'uom' },
			objectid_uomschedule: { b: 'objectid_uomschedule', a: '_objectid_value', c: 'uomschedules', d: 'uomschedule' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			principalid_systemuser: { b: 'principalid_systemuser', a: '_principalid_value', c: 'systemusers', d: 'systemuser' },
			principalid_team: { b: 'principalid_team', a: '_principalid_value', c: 'teams', d: 'team' },
			PrincipalObjectAttributeAccessId: { a: 'principalobjectattributeaccessid' },
			ReadAccess: { a: 'readaccess' },
			UpdateAccess: { a: 'updateaccess' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in principalobjectattributeaccess) {
			var a = principalobjectattributeaccess[field].a;
			var b = principalobjectattributeaccess[field].b;
			var c = principalobjectattributeaccess[field].c;
			var d = principalobjectattributeaccess[field].d;
			var g = principalobjectattributeaccess[field].g;
			var r = principalobjectattributeaccess[field].r;
			principalobjectattributeaccess[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		principalobjectattributeaccess.Entity = u;
		principalobjectattributeaccess.EntityName = 'principalobjectattributeaccess';
		principalobjectattributeaccess.EntityCollectionName = 'principalobjectattributeaccesses';
		principalobjectattributeaccess['@odata.etag'] = e['@odata.etag'];
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
		principalobjectattributeaccess.OptionSet = optionSet;
		principalobjectattributeaccess.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		principalobjectattributeaccess.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return principalobjectattributeaccess;
	};
})(Hsbc || (Hsbc = {}));