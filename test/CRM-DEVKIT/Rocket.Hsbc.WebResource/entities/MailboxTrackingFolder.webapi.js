'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.MailboxTrackingFolderApi = function (e) {
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
		var mailboxtrackingfolder = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeFolderId: { a: 'exchangefolderid' },
			ExchangeFolderName: { a: 'exchangefoldername' },
			FolderOnboardingStatus: { a: 'folderonboardingstatus' },
			MailboxId: { b: 'mailboxid', a: '_mailboxid_value', c: 'mailboxes', d: 'mailbox' },
			MailboxTrackingFolderId: { a: 'mailboxtrackingfolderid', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: '', d: '', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_accountleads: { b: 'regardingobjectid_accountleads', a: '_regardingobjectid_value', c: '', d: 'accountleads' },
			regardingobjectid_adminsettingsentity: { b: 'regardingobjectid_adminsettingsentity', a: '_regardingobjectid_value', c: 'adminsettingsentities', d: 'adminsettingsentity' },
			regardingobjectid_asyncoperation: { b: 'regardingobjectid_asyncoperation', a: '_regardingobjectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			regardingobjectid_bookableresource: { b: 'regardingobjectid_bookableresource', a: '_regardingobjectid_value', c: 'bookableresources', d: 'bookableresource' },
			regardingobjectid_bookableresourcebooking: { b: 'regardingobjectid_bookableresourcebooking', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingexchangesyncidmapping: { b: 'regardingobjectid_bookableresourcebookingexchangesyncidmapping', a: '_regardingobjectid_value', c: 'bookableresourcebookingexchangesyncidmappings', d: 'bookableresourcebookingexchangesyncidmapping' },
			regardingobjectid_bookableresourcebookingheader: { b: 'regardingobjectid_bookableresourcebookingheader', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bookableresourcecategory: { b: 'regardingobjectid_bookableresourcecategory', a: '_regardingobjectid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			regardingobjectid_bookableresourcecategoryassn: { b: 'regardingobjectid_bookableresourcecategoryassn', a: '_regardingobjectid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			regardingobjectid_bookableresourcecharacteristic: { b: 'regardingobjectid_bookableresourcecharacteristic', a: '_regardingobjectid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			regardingobjectid_bookableresourcegroup: { b: 'regardingobjectid_bookableresourcegroup', a: '_regardingobjectid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			regardingobjectid_bookingstatus: { b: 'regardingobjectid_bookingstatus', a: '_regardingobjectid_value', c: 'bookingstatuses', d: 'bookingstatus' },
			regardingobjectid_bulkoperation: { b: 'regardingobjectid_bulkoperation', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_bulkoperationlog: { b: 'regardingobjectid_bulkoperationlog', a: '_regardingobjectid_value', c: 'bulkoperationlogs', d: 'bulkoperationlog' },
			regardingobjectid_campaign: { b: 'regardingobjectid_campaign', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity: { b: 'regardingobjectid_campaignactivity', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_campaignactivityitem: { b: 'regardingobjectid_campaignactivityitem', a: '_regardingobjectid_value', c: '', d: 'campaignactivityitem' },
			regardingobjectid_campaignitem: { b: 'regardingobjectid_campaignitem', a: '_regardingobjectid_value', c: '', d: 'campaignitem' },
			regardingobjectid_campaignresponse: { b: 'regardingobjectid_campaignresponse', a: '_regardingobjectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			regardingobjectid_characteristic: { b: 'regardingobjectid_characteristic', a: '_regardingobjectid_value', c: 'characteristics', d: 'characteristic' },
			regardingobjectid_childincidentcount: { b: 'regardingobjectid_childincidentcount', a: '_regardingobjectid_value', c: 'childincidentcounts', d: 'childincidentcount' },
			regardingobjectid_commitment: { b: 'regardingobjectid_commitment', a: '_regardingobjectid_value', c: 'commitments', d: 'commitment' },
			regardingobjectid_competitor: { b: 'regardingobjectid_competitor', a: '_regardingobjectid_value', c: 'competitors', d: 'competitor' },
			regardingobjectid_competitoraddress: { b: 'regardingobjectid_competitoraddress', a: '_regardingobjectid_value', c: 'competitoraddresses', d: 'competitoraddress' },
			regardingobjectid_competitorproduct: { b: 'regardingobjectid_competitorproduct', a: '_regardingobjectid_value', c: '', d: 'competitorproduct' },
			regardingobjectid_competitorsalesliterature: { b: 'regardingobjectid_competitorsalesliterature', a: '_regardingobjectid_value', c: '', d: 'competitorsalesliterature' },
			regardingobjectid_constraintbasedgroup: { b: 'regardingobjectid_constraintbasedgroup', a: '_regardingobjectid_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contactinvoices: { b: 'regardingobjectid_contactinvoices', a: '_regardingobjectid_value', c: '', d: 'contactinvoices' },
			regardingobjectid_contactleads: { b: 'regardingobjectid_contactleads', a: '_regardingobjectid_value', c: '', d: 'contactleads' },
			regardingobjectid_contactorders: { b: 'regardingobjectid_contactorders', a: '_regardingobjectid_value', c: '', d: 'contactorders' },
			regardingobjectid_contactquotes: { b: 'regardingobjectid_contactquotes', a: '_regardingobjectid_value', c: '', d: 'contactquotes' },
			regardingobjectid_contract: { b: 'regardingobjectid_contract', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_contractdetail: { b: 'regardingobjectid_contractdetail', a: '_regardingobjectid_value', c: 'contractdetails', d: 'contractdetail' },
			regardingobjectid_contracttemplate: { b: 'regardingobjectid_contracttemplate', a: '_regardingobjectid_value', c: 'contracttemplates', d: 'contracttemplate' },
			regardingobjectid_customeropportunityrole: { b: 'regardingobjectid_customeropportunityrole', a: '_regardingobjectid_value', c: 'customeropportunityroles', d: 'customeropportunityrole' },
			regardingobjectid_discount: { b: 'regardingobjectid_discount', a: '_regardingobjectid_value', c: 'discounts', d: 'discount' },
			regardingobjectid_discounttype: { b: 'regardingobjectid_discounttype', a: '_regardingobjectid_value', c: 'discounttypes', d: 'discounttype' },
			regardingobjectid_dynamicproperty: { b: 'regardingobjectid_dynamicproperty', a: '_regardingobjectid_value', c: 'dynamicproperties', d: 'dynamicproperty' },
			regardingobjectid_dynamicpropertyassociation: { b: 'regardingobjectid_dynamicpropertyassociation', a: '_regardingobjectid_value', c: 'dynamicpropertyassociations', d: 'dynamicpropertyassociation' },
			regardingobjectid_dynamicpropertyinstance: { b: 'regardingobjectid_dynamicpropertyinstance', a: '_regardingobjectid_value', c: 'dynamicpropertyinstances', d: 'dynamicpropertyinstance' },
			regardingobjectid_dynamicpropertyoptionsetitem: { b: 'regardingobjectid_dynamicpropertyoptionsetitem', a: '_regardingobjectid_value', c: 'dynamicpropertyoptionsetitems', d: 'dynamicpropertyoptionsetitem' },
			regardingobjectid_entitlement: { b: 'regardingobjectid_entitlement', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementchannel: { b: 'regardingobjectid_entitlementchannel', a: '_regardingobjectid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			regardingobjectid_entitlementcontacts: { b: 'regardingobjectid_entitlementcontacts', a: '_regardingobjectid_value', c: '', d: 'entitlementcontacts' },
			regardingobjectid_entitlemententityallocationtypemapping: { b: 'regardingobjectid_entitlemententityallocationtypemapping', a: '_regardingobjectid_value', c: 'entitlemententityallocationtypemappings', d: 'entitlemententityallocationtypemapping' },
			regardingobjectid_entitlementproducts: { b: 'regardingobjectid_entitlementproducts', a: '_regardingobjectid_value', c: '', d: 'entitlementproducts' },
			regardingobjectid_entitlementtemplate: { b: 'regardingobjectid_entitlementtemplate', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_entitlementtemplatechannel: { b: 'regardingobjectid_entitlementtemplatechannel', a: '_regardingobjectid_value', c: 'entitlementtemplatechannels', d: 'entitlementtemplatechannel' },
			regardingobjectid_entitlementtemplateproducts: { b: 'regardingobjectid_entitlementtemplateproducts', a: '_regardingobjectid_value', c: '', d: 'entitlementtemplateproducts' },
			regardingobjectid_equipment: { b: 'regardingobjectid_equipment', a: '_regardingobjectid_value', c: 'equipments', d: 'equipment' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_incident: { b: 'regardingobjectid_incident', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_incidentknowledgebaserecord: { b: 'regardingobjectid_incidentknowledgebaserecord', a: '_regardingobjectid_value', c: '', d: 'incidentknowledgebaserecord' },
			regardingobjectid_incidentresolution: { b: 'regardingobjectid_incidentresolution', a: '_regardingobjectid_value', c: 'incidentresolutions', d: 'incidentresolution' },
			regardingobjectid_invoice: { b: 'regardingobjectid_invoice', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_invoicedetail: { b: 'regardingobjectid_invoicedetail', a: '_regardingobjectid_value', c: 'invoicedetails', d: 'invoicedetail' },
			regardingobjectid_knowledgearticleincident: { b: 'regardingobjectid_knowledgearticleincident', a: '_regardingobjectid_value', c: 'knowledgearticleincidents', d: 'knowledgearticleincident' },
			regardingobjectid_lead: { b: 'regardingobjectid_lead', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_leadaddress: { b: 'regardingobjectid_leadaddress', a: '_regardingobjectid_value', c: 'leadaddresses', d: 'leadaddress' },
			regardingobjectid_leadcompetitors: { b: 'regardingobjectid_leadcompetitors', a: '_regardingobjectid_value', c: '', d: 'leadcompetitors' },
			regardingobjectid_leadproduct: { b: 'regardingobjectid_leadproduct', a: '_regardingobjectid_value', c: '', d: 'leadproduct' },
			regardingobjectid_leadtoopportunitysalesprocess: { b: 'regardingobjectid_leadtoopportunitysalesprocess', a: '_regardingobjectid_value', c: 'leadtoopportunitysalesprocesses', d: 'leadtoopportunitysalesprocess' },
			regardingobjectid_list: { b: 'regardingobjectid_list', a: '_regardingobjectid_value', c: 'lists', d: 'list' },
			regardingobjectid_listmember: { b: 'regardingobjectid_listmember', a: '_regardingobjectid_value', c: '', d: 'listmember' },
			regardingobjectid_msdyn_actioncardregarding: { b: 'regardingobjectid_msdyn_actioncardregarding', a: '_regardingobjectid_value', c: 'msdyn_actioncardregardings', d: 'msdyn_actioncardregarding' },
			regardingobjectid_msdyn_actioncardrolesetting: { b: 'regardingobjectid_msdyn_actioncardrolesetting', a: '_regardingobjectid_value', c: 'msdyn_actioncardrolesettings', d: 'msdyn_actioncardrolesetting' },
			regardingobjectid_msdyn_callablecontext: { b: 'regardingobjectid_msdyn_callablecontext', a: '_regardingobjectid_value', c: 'msdyn_callablecontexts', d: 'msdyn_callablecontext' },
			regardingobjectid_msdyn_connector: { b: 'regardingobjectid_msdyn_connector', a: '_regardingobjectid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			regardingobjectid_msdyn_databaseversion: { b: 'regardingobjectid_msdyn_databaseversion', a: '_regardingobjectid_value', c: 'msdyn_databaseversions', d: 'msdyn_databaseversion' },
			regardingobjectid_msdyn_entityrankingrule: { b: 'regardingobjectid_msdyn_entityrankingrule', a: '_regardingobjectid_value', c: 'msdyn_entityrankingrules', d: 'msdyn_entityrankingrule' },
			regardingobjectid_msdyn_flowcardtype: { b: 'regardingobjectid_msdyn_flowcardtype', a: '_regardingobjectid_value', c: 'msdyn_flowcardtypes', d: 'msdyn_flowcardtype' },
			regardingobjectid_msdyn_forecastdefinition: { b: 'regardingobjectid_msdyn_forecastdefinition', a: '_regardingobjectid_value', c: 'msdyn_forecastdefinitions', d: 'msdyn_forecastdefinition' },
			regardingobjectid_msdyn_forecastinstance: { b: 'regardingobjectid_msdyn_forecastinstance', a: '_regardingobjectid_value', c: 'msdyn_forecastinstances', d: 'msdyn_forecastinstance' },
			regardingobjectid_msdyn_forecastrecurrence: { b: 'regardingobjectid_msdyn_forecastrecurrence', a: '_regardingobjectid_value', c: 'msdyn_forecastrecurrences', d: 'msdyn_forecastrecurrence' },
			regardingobjectid_msdyn_icebreakersconfig: { b: 'regardingobjectid_msdyn_icebreakersconfig', a: '_regardingobjectid_value', c: 'msdyn_icebreakersconfigs', d: 'msdyn_icebreakersconfig' },
			regardingobjectid_msdyn_notesanalysisconfig: { b: 'regardingobjectid_msdyn_notesanalysisconfig', a: '_regardingobjectid_value', c: 'msdyn_notesanalysisconfigs', d: 'msdyn_notesanalysisconfig' },
			regardingobjectid_msdyn_playbookactivity: { b: 'regardingobjectid_msdyn_playbookactivity', a: '_regardingobjectid_value', c: 'msdyn_playbookactivities', d: 'msdyn_playbookactivity' },
			regardingobjectid_msdyn_playbookactivityattribute: { b: 'regardingobjectid_msdyn_playbookactivityattribute', a: '_regardingobjectid_value', c: 'msdyn_playbookactivityattributes', d: 'msdyn_playbookactivityattribute' },
			regardingobjectid_msdyn_playbookcategory: { b: 'regardingobjectid_msdyn_playbookcategory', a: '_regardingobjectid_value', c: 'msdyn_playbookcategories', d: 'msdyn_playbookcategory' },
			regardingobjectid_msdyn_playbookinstance: { b: 'regardingobjectid_msdyn_playbookinstance', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_playbooktemplate: { b: 'regardingobjectid_msdyn_playbooktemplate', a: '_regardingobjectid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			regardingobjectid_msdyn_postalbum: { b: 'regardingobjectid_msdyn_postalbum', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postconfig: { b: 'regardingobjectid_msdyn_postconfig', a: '_regardingobjectid_value', c: 'msdyn_postconfigs', d: 'msdyn_postconfig' },
			regardingobjectid_msdyn_postruleconfig: { b: 'regardingobjectid_msdyn_postruleconfig', a: '_regardingobjectid_value', c: 'msdyn_postruleconfigs', d: 'msdyn_postruleconfig' },
			regardingobjectid_msdyn_relationshipinsightsunifiedconfig: { b: 'regardingobjectid_msdyn_relationshipinsightsunifiedconfig', a: '_regardingobjectid_value', c: 'msdyn_relationshipinsightsunifiedconfigs', d: 'msdyn_relationshipinsightsunifiedconfig' },
			regardingobjectid_msdyn_salesinsightssettings: { b: 'regardingobjectid_msdyn_salesinsightssettings', a: '_regardingobjectid_value', c: 'msdyn_salesinsightssettingses', d: 'msdyn_salesinsightssettings' },
			regardingobjectid_msdyn_siconfig: { b: 'regardingobjectid_msdyn_siconfig', a: '_regardingobjectid_value', c: 'msdyn_siconfigs', d: 'msdyn_siconfig' },
			regardingobjectid_msdyn_teamscollaboration: { b: 'regardingobjectid_msdyn_teamscollaboration', a: '_regardingobjectid_value', c: 'msdyn_teamscollaborations', d: 'msdyn_teamscollaboration' },
			regardingobjectid_msdyn_untrackedappointment: { b: 'regardingobjectid_msdyn_untrackedappointment', a: '_regardingobjectid_value', c: 'msdyn_untrackedappointments', d: 'msdyn_untrackedappointment' },
			regardingobjectid_msdyn_upgraderun: { b: 'regardingobjectid_msdyn_upgraderun', a: '_regardingobjectid_value', c: 'msdyn_upgraderuns', d: 'msdyn_upgraderun' },
			regardingobjectid_msdyn_upgradestep: { b: 'regardingobjectid_msdyn_upgradestep', a: '_regardingobjectid_value', c: 'msdyn_upgradesteps', d: 'msdyn_upgradestep' },
			regardingobjectid_msdyn_upgradeversion: { b: 'regardingobjectid_msdyn_upgradeversion', a: '_regardingobjectid_value', c: 'msdyn_upgradeversions', d: 'msdyn_upgradeversion' },
			regardingobjectid_msdyn_wallsavedquery: { b: 'regardingobjectid_msdyn_wallsavedquery', a: '_regardingobjectid_value', c: 'msdyn_wallsavedqueries', d: 'msdyn_wallsavedquery' },
			regardingobjectid_msdyn_wallsavedqueryusersettings: { b: 'regardingobjectid_msdyn_wallsavedqueryusersettings', a: '_regardingobjectid_value', c: 'msdyn_wallsavedqueryusersettingses', d: 'msdyn_wallsavedqueryusersettings' },
			regardingobjectid_msfp_emailtemplate: { b: 'regardingobjectid_msfp_emailtemplate', a: '_regardingobjectid_value', c: 'msfp_emailtemplates', d: 'msfp_emailtemplate' },
			regardingobjectid_msfp_question: { b: 'regardingobjectid_msfp_question', a: '_regardingobjectid_value', c: 'msfp_questions', d: 'msfp_question' },
			regardingobjectid_msfp_questionresponse: { b: 'regardingobjectid_msfp_questionresponse', a: '_regardingobjectid_value', c: 'msfp_questionresponses', d: 'msfp_questionresponse' },
			regardingobjectid_msfp_survey: { b: 'regardingobjectid_msfp_survey', a: '_regardingobjectid_value', c: 'msfp_surveies', d: 'msfp_survey' },
			regardingobjectid_msfp_surveyinvite: { b: 'regardingobjectid_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			regardingobjectid_msfp_surveyresponse: { b: 'regardingobjectid_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			regardingobjectid_msfp_unsubscribedrecipient: { b: 'regardingobjectid_msfp_unsubscribedrecipient', a: '_regardingobjectid_value', c: 'msfp_unsubscribedrecipients', d: 'msfp_unsubscribedrecipient' },
			regardingobjectid_opportunity: { b: 'regardingobjectid_opportunity', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_opportunityclose: { b: 'regardingobjectid_opportunityclose', a: '_regardingobjectid_value', c: 'opportunitycloses', d: 'opportunityclose' },
			regardingobjectid_opportunitycompetitors: { b: 'regardingobjectid_opportunitycompetitors', a: '_regardingobjectid_value', c: '', d: 'opportunitycompetitors' },
			regardingobjectid_opportunityproduct: { b: 'regardingobjectid_opportunityproduct', a: '_regardingobjectid_value', c: 'opportunityproducts', d: 'opportunityproduct' },
			regardingobjectid_opportunitysalesprocess: { b: 'regardingobjectid_opportunitysalesprocess', a: '_regardingobjectid_value', c: 'opportunitysalesprocesses', d: 'opportunitysalesprocess' },
			regardingobjectid_orderclose: { b: 'regardingobjectid_orderclose', a: '_regardingobjectid_value', c: 'ordercloses', d: 'orderclose' },
			regardingobjectid_phonetocaseprocess: { b: 'regardingobjectid_phonetocaseprocess', a: '_regardingobjectid_value', c: 'phonetocaseprocesses', d: 'phonetocaseprocess' },
			regardingobjectid_pricelevel: { b: 'regardingobjectid_pricelevel', a: '_regardingobjectid_value', c: 'pricelevels', d: 'pricelevel' },
			regardingobjectid_product: { b: 'regardingobjectid_product', a: '_regardingobjectid_value', c: 'products', d: 'product' },
			regardingobjectid_productassociation: { b: 'regardingobjectid_productassociation', a: '_regardingobjectid_value', c: 'productassociations', d: 'productassociation' },
			regardingobjectid_productpricelevel: { b: 'regardingobjectid_productpricelevel', a: '_regardingobjectid_value', c: 'productpricelevels', d: 'productpricelevel' },
			regardingobjectid_productsalesliterature: { b: 'regardingobjectid_productsalesliterature', a: '_regardingobjectid_value', c: '', d: 'productsalesliterature' },
			regardingobjectid_productsubstitute: { b: 'regardingobjectid_productsubstitute', a: '_regardingobjectid_value', c: 'productsubstitutes', d: 'productsubstitute' },
			regardingobjectid_quote: { b: 'regardingobjectid_quote', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_quoteclose: { b: 'regardingobjectid_quoteclose', a: '_regardingobjectid_value', c: 'quotecloses', d: 'quoteclose' },
			regardingobjectid_quotedetail: { b: 'regardingobjectid_quotedetail', a: '_regardingobjectid_value', c: 'quotedetails', d: 'quotedetail' },
			regardingobjectid_ratingmodel: { b: 'regardingobjectid_ratingmodel', a: '_regardingobjectid_value', c: 'ratingmodels', d: 'ratingmodel' },
			regardingobjectid_ratingvalue: { b: 'regardingobjectid_ratingvalue', a: '_regardingobjectid_value', c: 'ratingvalues', d: 'ratingvalue' },
			regardingobjectid_resource: { b: 'regardingobjectid_resource', a: '_regardingobjectid_value', c: 'resources', d: 'resource' },
			regardingobjectid_resourcegroup: { b: 'regardingobjectid_resourcegroup', a: '_regardingobjectid_value', c: 'resourcegroups', d: 'resourcegroup' },
			regardingobjectid_resourcegroupexpansion: { b: 'regardingobjectid_resourcegroupexpansion', a: '_regardingobjectid_value', c: 'resourcegroupexpansions', d: 'resourcegroupexpansion' },
			regardingobjectid_resourcespec: { b: 'regardingobjectid_resourcespec', a: '_regardingobjectid_value', c: 'resourcespecs', d: 'resourcespec' },
			regardingobjectid_salesliterature: { b: 'regardingobjectid_salesliterature', a: '_regardingobjectid_value', c: 'salesliteratures', d: 'salesliterature' },
			regardingobjectid_salesliteratureitem: { b: 'regardingobjectid_salesliteratureitem', a: '_regardingobjectid_value', c: 'salesliteratureitems', d: 'salesliteratureitem' },
			regardingobjectid_salesorder: { b: 'regardingobjectid_salesorder', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_salesorderdetail: { b: 'regardingobjectid_salesorderdetail', a: '_regardingobjectid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			regardingobjectid_salesprocessinstance: { b: 'regardingobjectid_salesprocessinstance', a: '_regardingobjectid_value', c: 'salesprocessinstances', d: 'salesprocessinstance' },
			regardingobjectid_service: { b: 'regardingobjectid_service', a: '_regardingobjectid_value', c: 'services', d: 'service' },
			regardingobjectid_serviceappointment: { b: 'regardingobjectid_serviceappointment', a: '_regardingobjectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			regardingobjectid_servicecontractcontacts: { b: 'regardingobjectid_servicecontractcontacts', a: '_regardingobjectid_value', c: '', d: 'servicecontractcontacts' },
			regardingobjectid_site: { b: 'regardingobjectid_site', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_territory: { b: 'regardingobjectid_territory', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_topic: { b: 'regardingobjectid_topic', a: '_regardingobjectid_value', c: 'topics', d: 'topic' },
			regardingobjectid_topichistory: { b: 'regardingobjectid_topichistory', a: '_regardingobjectid_value', c: 'topichistories', d: 'topichistory' },
			regardingobjectid_topicmodel: { b: 'regardingobjectid_topicmodel', a: '_regardingobjectid_value', c: 'topicmodels', d: 'topicmodel' },
			regardingobjectid_topicmodelconfiguration: { b: 'regardingobjectid_topicmodelconfiguration', a: '_regardingobjectid_value', c: 'topicmodelconfigurations', d: 'topicmodelconfiguration' },
			regardingobjectid_topicmodelexecutionhistory: { b: 'regardingobjectid_topicmodelexecutionhistory', a: '_regardingobjectid_value', c: 'topicmodelexecutionhistories', d: 'topicmodelexecutionhistory' },
			regardingobjectid_uom: { b: 'regardingobjectid_uom', a: '_regardingobjectid_value', c: 'uoms', d: 'uom' },
			regardingobjectid_uomschedule: { b: 'regardingobjectid_uomschedule', a: '_regardingobjectid_value', c: 'uomschedules', d: 'uomschedule' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in mailboxtrackingfolder) {
			var a = mailboxtrackingfolder[field].a;
			var b = mailboxtrackingfolder[field].b;
			var c = mailboxtrackingfolder[field].c;
			var d = mailboxtrackingfolder[field].d;
			var g = mailboxtrackingfolder[field].g;
			var r = mailboxtrackingfolder[field].r;
			mailboxtrackingfolder[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		mailboxtrackingfolder.Entity = u;
		mailboxtrackingfolder.EntityName = 'mailboxtrackingfolder';
		mailboxtrackingfolder.EntityCollectionName = 'mailboxtrackingfolders';
		mailboxtrackingfolder['@odata.etag'] = e['@odata.etag'];
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
		mailboxtrackingfolder.OptionSet = optionSet;
		mailboxtrackingfolder.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mailboxtrackingfolder.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mailboxtrackingfolder;
	};
})(Hsbc || (Hsbc = {}));