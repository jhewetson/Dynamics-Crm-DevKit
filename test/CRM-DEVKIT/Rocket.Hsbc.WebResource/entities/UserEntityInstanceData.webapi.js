'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.UserEntityInstanceDataApi = function (e) {
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
		var userentityinstancedata = {
			CommonEnd_UtcDateAndTime: { a: 'commonend' },
			CommonStart_UtcDateAndTime: { a: 'commonstart' },
			DueDate_UtcDateAndTime: { a: 'duedate' },
			FlagDueBy_UtcDateAndTime: { a: 'flagdueby' },
			FlagRequest: { a: 'flagrequest' },
			FlagStatus: { a: 'flagstatus' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_accountleads: { b: 'objectid_accountleads', a: '_objectid_value', c: '', d: 'accountleads' },
			objectid_activitymimeattachment: { b: 'objectid_activitymimeattachment', a: '_objectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			objectid_activityparty: { b: 'objectid_activityparty', a: '_objectid_value', c: 'activityparties', d: 'activityparty' },
			objectid_adminsettingsentity: { b: 'objectid_adminsettingsentity', a: '_objectid_value', c: 'adminsettingsentities', d: 'adminsettingsentity' },
			objectid_annotation: { b: 'objectid_annotation', a: '_objectid_value', c: 'annotations', d: 'annotation' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_asyncoperation: { b: 'objectid_asyncoperation', a: '_objectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			objectid_attachment: { b: 'objectid_attachment', a: '_objectid_value', c: 'attachments', d: 'attachment' },
			objectid_attributemap: { b: 'objectid_attributemap', a: '_objectid_value', c: 'attributemaps', d: 'attributemap' },
			objectid_audit: { b: 'objectid_audit', a: '_objectid_value', c: 'audits', d: 'audit' },
			objectid_bookableresource: { b: 'objectid_bookableresource', a: '_objectid_value', c: 'bookableresources', d: 'bookableresource' },
			objectid_bookableresourcebooking: { b: 'objectid_bookableresourcebooking', a: '_objectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			objectid_bookableresourcebookingexchangesyncidmapping: { b: 'objectid_bookableresourcebookingexchangesyncidmapping', a: '_objectid_value', c: 'bookableresourcebookingexchangesyncidmappings', d: 'bookableresourcebookingexchangesyncidmapping' },
			objectid_bookableresourcebookingheader: { b: 'objectid_bookableresourcebookingheader', a: '_objectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			objectid_bookableresourcecategory: { b: 'objectid_bookableresourcecategory', a: '_objectid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			objectid_bookableresourcecategoryassn: { b: 'objectid_bookableresourcecategoryassn', a: '_objectid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			objectid_bookableresourcecharacteristic: { b: 'objectid_bookableresourcecharacteristic', a: '_objectid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			objectid_bookableresourcegroup: { b: 'objectid_bookableresourcegroup', a: '_objectid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			objectid_bookingstatus: { b: 'objectid_bookingstatus', a: '_objectid_value', c: 'bookingstatuses', d: 'bookingstatus' },
			objectid_bulkdeletefailure: { b: 'objectid_bulkdeletefailure', a: '_objectid_value', c: 'bulkdeletefailures', d: 'bulkdeletefailure' },
			objectid_bulkdeleteoperation: { b: 'objectid_bulkdeleteoperation', a: '_objectid_value', c: 'bulkdeleteoperations', d: 'bulkdeleteoperation' },
			objectid_bulkoperation: { b: 'objectid_bulkoperation', a: '_objectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			objectid_bulkoperationlog: { b: 'objectid_bulkoperationlog', a: '_objectid_value', c: 'bulkoperationlogs', d: 'bulkoperationlog' },
			objectid_businessunitmap: { b: 'objectid_businessunitmap', a: '_objectid_value', c: 'businessunitmaps', d: 'businessunitmap' },
			objectid_businessunitnewsarticle: { b: 'objectid_businessunitnewsarticle', a: '_objectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle' },
			objectid_calendar: { b: 'objectid_calendar', a: '_objectid_value', c: 'calendars', d: 'calendar' },
			objectid_calendarrule: { b: 'objectid_calendarrule', a: '_objectid_value', c: 'calendarrules', d: 'calendarrule' },
			objectid_campaign: { b: 'objectid_campaign', a: '_objectid_value', c: 'campaigns', d: 'campaign' },
			objectid_campaignactivity: { b: 'objectid_campaignactivity', a: '_objectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			objectid_campaignactivityitem: { b: 'objectid_campaignactivityitem', a: '_objectid_value', c: '', d: 'campaignactivityitem' },
			objectid_campaignitem: { b: 'objectid_campaignitem', a: '_objectid_value', c: '', d: 'campaignitem' },
			objectid_campaignresponse: { b: 'objectid_campaignresponse', a: '_objectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			channelaccessprofile_userentityinstancedatas: { b: 'channelaccessprofile_userentityinstancedatas', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_objectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			objectid_characteristic: { b: 'objectid_characteristic', a: '_objectid_value', c: 'characteristics', d: 'characteristic' },
			objectid_childincidentcount: { b: 'objectid_childincidentcount', a: '_objectid_value', c: 'childincidentcounts', d: 'childincidentcount' },
			objectid_clientupdate: { b: 'objectid_clientupdate', a: '_objectid_value', c: 'clientupdates', d: 'clientupdate' },
			objectid_columnmapping: { b: 'objectid_columnmapping', a: '_objectid_value', c: 'columnmappings', d: 'columnmapping' },
			objectid_commitment: { b: 'objectid_commitment', a: '_objectid_value', c: 'commitments', d: 'commitment' },
			objectid_competitor: { b: 'objectid_competitor', a: '_objectid_value', c: 'competitors', d: 'competitor' },
			objectid_competitoraddress: { b: 'objectid_competitoraddress', a: '_objectid_value', c: 'competitoraddresses', d: 'competitoraddress' },
			objectid_competitorproduct: { b: 'objectid_competitorproduct', a: '_objectid_value', c: '', d: 'competitorproduct' },
			objectid_competitorsalesliterature: { b: 'objectid_competitorsalesliterature', a: '_objectid_value', c: '', d: 'competitorsalesliterature' },
			objectid_connection: { b: 'objectid_connection', a: '_objectid_value', c: 'connections', d: 'connection' },
			objectid_connectionrole: { b: 'objectid_connectionrole', a: '_objectid_value', c: 'connectionroles', d: 'connectionrole' },
			objectid_connectionroleassociation: { b: 'objectid_connectionroleassociation', a: '_objectid_value', c: '', d: 'connectionroleassociation' },
			objectid_connectionroleobjecttypecode: { b: 'objectid_connectionroleobjecttypecode', a: '_objectid_value', c: 'connectionroleobjecttypecodes', d: 'connectionroleobjecttypecode' },
			objectid_constraintbasedgroup: { b: 'objectid_constraintbasedgroup', a: '_objectid_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_contactinvoices: { b: 'objectid_contactinvoices', a: '_objectid_value', c: '', d: 'contactinvoices' },
			objectid_contactleads: { b: 'objectid_contactleads', a: '_objectid_value', c: '', d: 'contactleads' },
			objectid_contactorders: { b: 'objectid_contactorders', a: '_objectid_value', c: '', d: 'contactorders' },
			objectid_contactquotes: { b: 'objectid_contactquotes', a: '_objectid_value', c: '', d: 'contactquotes' },
			objectid_contract: { b: 'objectid_contract', a: '_objectid_value', c: 'contracts', d: 'contract' },
			objectid_contractdetail: { b: 'objectid_contractdetail', a: '_objectid_value', c: 'contractdetails', d: 'contractdetail' },
			objectid_contracttemplate: { b: 'objectid_contracttemplate', a: '_objectid_value', c: 'contracttemplates', d: 'contracttemplate' },
			objectid_convertrule: { b: 'objectid_convertrule', a: '_objectid_value', c: 'convertrules', d: 'convertrule' },
			objectid_customeraddress: { b: 'objectid_customeraddress', a: '_objectid_value', c: 'customeraddresses', d: 'customeraddress' },
			objectid_customeropportunityrole: { b: 'objectid_customeropportunityrole', a: '_objectid_value', c: 'customeropportunityroles', d: 'customeropportunityrole' },
			objectid_customerrelationship: { b: 'objectid_customerrelationship', a: '_objectid_value', c: 'customerrelationships', d: 'customerrelationship' },
			objectid_dependency: { b: 'objectid_dependency', a: '_objectid_value', c: 'dependencies', d: 'dependency' },
			objectid_dependencynode: { b: 'objectid_dependencynode', a: '_objectid_value', c: 'dependencynodes', d: 'dependencynode' },
			objectid_discount: { b: 'objectid_discount', a: '_objectid_value', c: 'discounts', d: 'discount' },
			objectid_discounttype: { b: 'objectid_discounttype', a: '_objectid_value', c: 'discounttypes', d: 'discounttype' },
			objectid_displaystring: { b: 'objectid_displaystring', a: '_objectid_value', c: 'displaystrings', d: 'displaystring' },
			objectid_displaystringmap: { b: 'objectid_displaystringmap', a: '_objectid_value', c: 'displaystringmaps', d: 'displaystringmap' },
			objectid_documentindex: { b: 'objectid_documentindex', a: '_objectid_value', c: 'documentindexes', d: 'documentindex' },
			objectid_duplicaterecord: { b: 'objectid_duplicaterecord', a: '_objectid_value', c: 'duplicaterecords', d: 'duplicaterecord' },
			objectid_duplicaterule: { b: 'objectid_duplicaterule', a: '_objectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			objectid_duplicaterulecondition: { b: 'objectid_duplicaterulecondition', a: '_objectid_value', c: 'duplicateruleconditions', d: 'duplicaterulecondition' },
			objectid_dynamicproperty: { b: 'objectid_dynamicproperty', a: '_objectid_value', c: 'dynamicproperties', d: 'dynamicproperty' },
			objectid_dynamicpropertyassociation: { b: 'objectid_dynamicpropertyassociation', a: '_objectid_value', c: 'dynamicpropertyassociations', d: 'dynamicpropertyassociation' },
			objectid_dynamicpropertyinstance: { b: 'objectid_dynamicpropertyinstance', a: '_objectid_value', c: 'dynamicpropertyinstances', d: 'dynamicpropertyinstance' },
			objectid_dynamicpropertyoptionsetitem: { b: 'objectid_dynamicpropertyoptionsetitem', a: '_objectid_value', c: 'dynamicpropertyoptionsetitems', d: 'dynamicpropertyoptionsetitem' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_emailhash: { b: 'objectid_emailhash', a: '_objectid_value', c: 'emailhashs', d: 'emailhash' },
			objectid_emailsearch: { b: 'objectid_emailsearch', a: '_objectid_value', c: 'emailsearches', d: 'emailsearch' },
			objectid_entitlement: { b: 'objectid_entitlement', a: '_objectid_value', c: 'entitlements', d: 'entitlement' },
			objectid_entitlementchannel: { b: 'objectid_entitlementchannel', a: '_objectid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			objectid_entitlementcontacts: { b: 'objectid_entitlementcontacts', a: '_objectid_value', c: '', d: 'entitlementcontacts' },
			objectid_entitlemententityallocationtypemapping: { b: 'objectid_entitlemententityallocationtypemapping', a: '_objectid_value', c: 'entitlemententityallocationtypemappings', d: 'entitlemententityallocationtypemapping' },
			objectid_entitlementproducts: { b: 'objectid_entitlementproducts', a: '_objectid_value', c: '', d: 'entitlementproducts' },
			objectid_entitlementtemplate: { b: 'objectid_entitlementtemplate', a: '_objectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			objectid_entitlementtemplatechannel: { b: 'objectid_entitlementtemplatechannel', a: '_objectid_value', c: 'entitlementtemplatechannels', d: 'entitlementtemplatechannel' },
			objectid_entitlementtemplateproducts: { b: 'objectid_entitlementtemplateproducts', a: '_objectid_value', c: '', d: 'entitlementtemplateproducts' },
			objectid_entitymap: { b: 'objectid_entitymap', a: '_objectid_value', c: 'entitymaps', d: 'entitymap' },
			objectid_equipment: { b: 'objectid_equipment', a: '_objectid_value', c: 'equipments', d: 'equipment' },
			externalparty_userentityinstancedatas: { b: 'externalparty_userentityinstancedatas', a: '_objectid_value', c: 'externalparties', d: 'externalparty' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_fieldpermission: { b: 'objectid_fieldpermission', a: '_objectid_value', c: 'fieldpermissions', d: 'fieldpermission' },
			objectid_fieldsecurityprofile: { b: 'objectid_fieldsecurityprofile', a: '_objectid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			objectid_fileattachment: { b: 'objectid_fileattachment', a: '_objectid_value', c: 'fileattachments', d: 'fileattachment' },
			objectid_filtertemplate: { b: 'objectid_filtertemplate', a: '_objectid_value', c: 'filtertemplates', d: 'filtertemplate' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_goalrollupquery: { b: 'objectid_goalrollupquery', a: '_objectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			objectid_holidaywrapper: { b: 'objectid_holidaywrapper', a: '_objectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			objectid_import: { b: 'objectid_import', a: '_objectid_value', c: 'imports', d: 'import' },
			objectid_importdata: { b: 'objectid_importdata', a: '_objectid_value', c: 'importdatas', d: 'importdata' },
			objectid_importentitymapping: { b: 'objectid_importentitymapping', a: '_objectid_value', c: 'importentitymappings', d: 'importentitymapping' },
			objectid_importfile: { b: 'objectid_importfile', a: '_objectid_value', c: 'importfiles', d: 'importfile' },
			objectid_importjob: { b: 'objectid_importjob', a: '_objectid_value', c: 'importjobs', d: 'importjob' },
			objectid_importlog: { b: 'objectid_importlog', a: '_objectid_value', c: 'importlogs', d: 'importlog' },
			objectid_importmap: { b: 'objectid_importmap', a: '_objectid_value', c: 'importmaps', d: 'importmap' },
			objectid_incident: { b: 'objectid_incident', a: '_objectid_value', c: 'incidents', d: 'incident' },
			objectid_incidentknowledgebaserecord: { b: 'objectid_incidentknowledgebaserecord', a: '_objectid_value', c: '', d: 'incidentknowledgebaserecord' },
			objectid_incidentresolution: { b: 'objectid_incidentresolution', a: '_objectid_value', c: 'incidentresolutions', d: 'incidentresolution' },
			objectid_internaladdress: { b: 'objectid_internaladdress', a: '_objectid_value', c: 'internaladdresses', d: 'internaladdress' },
			objectid_invaliddependency: { b: 'objectid_invaliddependency', a: '_objectid_value', c: 'invaliddependencies', d: 'invaliddependency' },
			objectid_invoice: { b: 'objectid_invoice', a: '_objectid_value', c: 'invoices', d: 'invoice' },
			objectid_invoicedetail: { b: 'objectid_invoicedetail', a: '_objectid_value', c: 'invoicedetails', d: 'invoicedetail' },
			objectid_isvconfig: { b: 'objectid_isvconfig', a: '_objectid_value', c: 'isvconfigs', d: 'isvconfig' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_kbarticlecomment: { b: 'objectid_kbarticlecomment', a: '_objectid_value', c: 'kbarticlecomments', d: 'kbarticlecomment' },
			objectid_kbarticletemplate: { b: 'objectid_kbarticletemplate', a: '_objectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgearticleincident: { b: 'objectid_knowledgearticleincident', a: '_objectid_value', c: 'knowledgearticleincidents', d: 'knowledgearticleincident' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_lead: { b: 'objectid_lead', a: '_objectid_value', c: 'leads', d: 'lead' },
			objectid_leadaddress: { b: 'objectid_leadaddress', a: '_objectid_value', c: 'leadaddresses', d: 'leadaddress' },
			objectid_leadcompetitors: { b: 'objectid_leadcompetitors', a: '_objectid_value', c: '', d: 'leadcompetitors' },
			objectid_leadproduct: { b: 'objectid_leadproduct', a: '_objectid_value', c: '', d: 'leadproduct' },
			objectid_leadtoopportunitysalesprocess: { b: 'objectid_leadtoopportunitysalesprocess', a: '_objectid_value', c: 'leadtoopportunitysalesprocesses', d: 'leadtoopportunitysalesprocess' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_license: { b: 'objectid_license', a: '_objectid_value', c: 'licenses', d: 'license' },
			objectid_list: { b: 'objectid_list', a: '_objectid_value', c: 'lists', d: 'list' },
			objectid_listmember: { b: 'objectid_listmember', a: '_objectid_value', c: '', d: 'listmember' },
			objectid_lookupmapping: { b: 'objectid_lookupmapping', a: '_objectid_value', c: 'lookupmappings', d: 'lookupmapping' },
			objectid_mailbox: { b: 'objectid_mailbox', a: '_objectid_value', c: 'mailboxes', d: 'mailbox' },
			objectid_mailmergetemplate: { b: 'objectid_mailmergetemplate', a: '_objectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			objectid_metric: { b: 'objectid_metric', a: '_objectid_value', c: 'metrics', d: 'metric' },
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
			objectid_notification: { b: 'objectid_notification', a: '_objectid_value', c: 'notifications', d: 'notification' },
			objectid_opportunity: { b: 'objectid_opportunity', a: '_objectid_value', c: 'opportunities', d: 'opportunity' },
			objectid_opportunityclose: { b: 'objectid_opportunityclose', a: '_objectid_value', c: 'opportunitycloses', d: 'opportunityclose' },
			objectid_opportunitycompetitors: { b: 'objectid_opportunitycompetitors', a: '_objectid_value', c: '', d: 'opportunitycompetitors' },
			objectid_opportunityproduct: { b: 'objectid_opportunityproduct', a: '_objectid_value', c: 'opportunityproducts', d: 'opportunityproduct' },
			objectid_opportunitysalesprocess: { b: 'objectid_opportunitysalesprocess', a: '_objectid_value', c: 'opportunitysalesprocesses', d: 'opportunitysalesprocess' },
			objectid_orderclose: { b: 'objectid_orderclose', a: '_objectid_value', c: 'ordercloses', d: 'orderclose' },
			objectid_organization: { b: 'objectid_organization', a: '_objectid_value', c: 'organizations', d: 'organization' },
			objectid_organizationstatistic: { b: 'objectid_organizationstatistic', a: '_objectid_value', c: 'organizationstatistics', d: 'organizationstatistic' },
			objectid_ownermapping: { b: 'objectid_ownermapping', a: '_objectid_value', c: 'ownermappings', d: 'ownermapping' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_phonetocaseprocess: { b: 'objectid_phonetocaseprocess', a: '_objectid_value', c: 'phonetocaseprocesses', d: 'phonetocaseprocess' },
			objectid_picklistmapping: { b: 'objectid_picklistmapping', a: '_objectid_value', c: 'picklistmappings', d: 'picklistmapping' },
			objectid_pluginassembly: { b: 'objectid_pluginassembly', a: '_objectid_value', c: 'pluginassemblies', d: 'pluginassembly' },
			objectid_plugintype: { b: 'objectid_plugintype', a: '_objectid_value', c: 'plugintypes', d: 'plugintype' },
			objectid_plugintypestatistic: { b: 'objectid_plugintypestatistic', a: '_objectid_value', c: 'plugintypestatistics', d: 'plugintypestatistic' },
			objectid_pricelevel: { b: 'objectid_pricelevel', a: '_objectid_value', c: 'pricelevels', d: 'pricelevel' },
			objectid_principalattributeaccessmap: { b: 'objectid_principalattributeaccessmap', a: '_objectid_value', c: 'principalattributeaccessmaps', d: 'principalattributeaccessmap' },
			objectid_principalentitymap: { b: 'objectid_principalentitymap', a: '_objectid_value', c: '', d: 'principalentitymap' },
			objectid_principalobjectaccess: { b: 'objectid_principalobjectaccess', a: '_objectid_value', c: '', d: 'principalobjectaccess' },
			objectid_principalobjectattributeaccess: { b: 'objectid_principalobjectattributeaccess', a: '_objectid_value', c: 'principalobjectattributeaccesses', d: 'principalobjectattributeaccess' },
			objectid_privilege: { b: 'objectid_privilege', a: '_objectid_value', c: 'privileges', d: 'privilege' },
			objectid_processsession: { b: 'objectid_processsession', a: '_objectid_value', c: 'processsessions', d: 'processsession' },
			objectid_product: { b: 'objectid_product', a: '_objectid_value', c: 'products', d: 'product' },
			objectid_productassociation: { b: 'objectid_productassociation', a: '_objectid_value', c: 'productassociations', d: 'productassociation' },
			objectid_productpricelevel: { b: 'objectid_productpricelevel', a: '_objectid_value', c: 'productpricelevels', d: 'productpricelevel' },
			objectid_productsalesliterature: { b: 'objectid_productsalesliterature', a: '_objectid_value', c: '', d: 'productsalesliterature' },
			objectid_productsubstitute: { b: 'objectid_productsubstitute', a: '_objectid_value', c: 'productsubstitutes', d: 'productsubstitute' },
			objectid_publisher: { b: 'objectid_publisher', a: '_objectid_value', c: 'publishers', d: 'publisher' },
			objectid_publisheraddress: { b: 'objectid_publisheraddress', a: '_objectid_value', c: 'publisheraddresses', d: 'publisheraddress' },
			objectid_queue: { b: 'objectid_queue', a: '_objectid_value', c: 'queues', d: 'queue' },
			objectid_queueitem: { b: 'objectid_queueitem', a: '_objectid_value', c: 'queueitems', d: 'queueitem' },
			objectid_quote: { b: 'objectid_quote', a: '_objectid_value', c: 'quotes', d: 'quote' },
			objectid_quoteclose: { b: 'objectid_quoteclose', a: '_objectid_value', c: 'quotecloses', d: 'quoteclose' },
			objectid_quotedetail: { b: 'objectid_quotedetail', a: '_objectid_value', c: 'quotedetails', d: 'quotedetail' },
			objectid_ratingmodel: { b: 'objectid_ratingmodel', a: '_objectid_value', c: 'ratingmodels', d: 'ratingmodel' },
			objectid_ratingvalue: { b: 'objectid_ratingvalue', a: '_objectid_value', c: 'ratingvalues', d: 'ratingvalue' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_relationshiprole: { b: 'objectid_relationshiprole', a: '_objectid_value', c: 'relationshiproles', d: 'relationshiprole' },
			objectid_relationshiprolemap: { b: 'objectid_relationshiprolemap', a: '_objectid_value', c: 'relationshiprolemaps', d: 'relationshiprolemap' },
			objectid_report: { b: 'objectid_report', a: '_objectid_value', c: 'reports', d: 'report' },
			objectid_reportcategory: { b: 'objectid_reportcategory', a: '_objectid_value', c: 'reportcategories', d: 'reportcategory' },
			objectid_reportentity: { b: 'objectid_reportentity', a: '_objectid_value', c: 'reportentities', d: 'reportentity' },
			objectid_reportlink: { b: 'objectid_reportlink', a: '_objectid_value', c: 'reportlinks', d: 'reportlink' },
			objectid_reportvisibility: { b: 'objectid_reportvisibility', a: '_objectid_value', c: 'reportvisibilities', d: 'reportvisibility' },
			objectid_resource: { b: 'objectid_resource', a: '_objectid_value', c: 'resources', d: 'resource' },
			objectid_resourcegroup: { b: 'objectid_resourcegroup', a: '_objectid_value', c: 'resourcegroups', d: 'resourcegroup' },
			objectid_resourcegroupexpansion: { b: 'objectid_resourcegroupexpansion', a: '_objectid_value', c: 'resourcegroupexpansions', d: 'resourcegroupexpansion' },
			objectid_resourcespec: { b: 'objectid_resourcespec', a: '_objectid_value', c: 'resourcespecs', d: 'resourcespec' },
			objectid_ribboncommand: { b: 'objectid_ribboncommand', a: '_objectid_value', c: 'ribboncommands', d: 'ribboncommand' },
			objectid_ribboncontextgroup: { b: 'objectid_ribboncontextgroup', a: '_objectid_value', c: 'ribboncontextgroups', d: 'ribboncontextgroup' },
			objectid_ribboncustomization: { b: 'objectid_ribboncustomization', a: '_objectid_value', c: 'ribboncustomizations', d: 'ribboncustomization' },
			objectid_ribbondiff: { b: 'objectid_ribbondiff', a: '_objectid_value', c: 'ribbondiffs', d: 'ribbondiff' },
			objectid_ribbonrule: { b: 'objectid_ribbonrule', a: '_objectid_value', c: 'ribbonrules', d: 'ribbonrule' },
			objectid_ribbontabtocommandmap: { b: 'objectid_ribbontabtocommandmap', a: '_objectid_value', c: 'ribbontabtocommandmaps', d: 'ribbontabtocommandmap' },
			objectid_role: { b: 'objectid_role', a: '_objectid_value', c: 'roles', d: 'role' },
			objectid_roletemplate: { b: 'objectid_roletemplate', a: '_objectid_value', c: 'roletemplates', d: 'roletemplate' },
			objectid_rollupfield: { b: 'objectid_rollupfield', a: '_objectid_value', c: 'rollupfields', d: 'rollupfield' },
			objectid_routingrule: { b: 'objectid_routingrule', a: '_objectid_value', c: 'routingrules', d: 'routingrule' },
			objectid_routingruleitem: { b: 'objectid_routingruleitem', a: '_objectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			objectid_salesliterature: { b: 'objectid_salesliterature', a: '_objectid_value', c: 'salesliteratures', d: 'salesliterature' },
			objectid_salesliteratureitem: { b: 'objectid_salesliteratureitem', a: '_objectid_value', c: 'salesliteratureitems', d: 'salesliteratureitem' },
			objectid_salesorder: { b: 'objectid_salesorder', a: '_objectid_value', c: 'salesorders', d: 'salesorder' },
			objectid_salesorderdetail: { b: 'objectid_salesorderdetail', a: '_objectid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			objectid_salesprocessinstance: { b: 'objectid_salesprocessinstance', a: '_objectid_value', c: 'salesprocessinstances', d: 'salesprocessinstance' },
			objectid_savedquery: { b: 'objectid_savedquery', a: '_objectid_value', c: 'savedqueries', d: 'savedquery' },
			objectid_savedqueryvisualization: { b: 'objectid_savedqueryvisualization', a: '_objectid_value', c: 'savedqueryvisualizations', d: 'savedqueryvisualization' },
			objectid_sdkmessage: { b: 'objectid_sdkmessage', a: '_objectid_value', c: 'sdkmessages', d: 'sdkmessage' },
			objectid_sdkmessagefilter: { b: 'objectid_sdkmessagefilter', a: '_objectid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			objectid_sdkmessagepair: { b: 'objectid_sdkmessagepair', a: '_objectid_value', c: 'sdkmessagepairs', d: 'sdkmessagepair' },
			objectid_sdkmessageprocessingstep: { b: 'objectid_sdkmessageprocessingstep', a: '_objectid_value', c: 'sdkmessageprocessingsteps', d: 'sdkmessageprocessingstep' },
			objectid_sdkmessageprocessingstepimage: { b: 'objectid_sdkmessageprocessingstepimage', a: '_objectid_value', c: 'sdkmessageprocessingstepimages', d: 'sdkmessageprocessingstepimage' },
			objectid_sdkmessageprocessingstepsecureconfig: { b: 'objectid_sdkmessageprocessingstepsecureconfig', a: '_objectid_value', c: 'sdkmessageprocessingstepsecureconfigs', d: 'sdkmessageprocessingstepsecureconfig' },
			objectid_sdkmessagerequest: { b: 'objectid_sdkmessagerequest', a: '_objectid_value', c: 'sdkmessagerequests', d: 'sdkmessagerequest' },
			objectid_sdkmessagerequestfield: { b: 'objectid_sdkmessagerequestfield', a: '_objectid_value', c: 'sdkmessagerequestfields', d: 'sdkmessagerequestfield' },
			objectid_sdkmessageresponse: { b: 'objectid_sdkmessageresponse', a: '_objectid_value', c: 'sdkmessageresponses', d: 'sdkmessageresponse' },
			objectid_sdkmessageresponsefield: { b: 'objectid_sdkmessageresponsefield', a: '_objectid_value', c: 'sdkmessageresponsefields', d: 'sdkmessageresponsefield' },
			objectid_service: { b: 'objectid_service', a: '_objectid_value', c: 'services', d: 'service' },
			objectid_serviceappointment: { b: 'objectid_serviceappointment', a: '_objectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			objectid_servicecontractcontacts: { b: 'objectid_servicecontractcontacts', a: '_objectid_value', c: '', d: 'servicecontractcontacts' },
			objectid_serviceendpoint: { b: 'objectid_serviceendpoint', a: '_objectid_value', c: 'serviceendpoints', d: 'serviceendpoint' },
			objectid_sharepointdocumentlocation: { b: 'objectid_sharepointdocumentlocation', a: '_objectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			objectid_sharepointsite: { b: 'objectid_sharepointsite', a: '_objectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			objectid_site: { b: 'objectid_site', a: '_objectid_value', c: 'sites', d: 'site' },
			objectid_sitemap: { b: 'objectid_sitemap', a: '_objectid_value', c: 'sitemaps', d: 'sitemap' },
			objectid_sla: { b: 'objectid_sla', a: '_objectid_value', c: 'slas', d: 'sla' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_solution: { b: 'objectid_solution', a: '_objectid_value', c: 'solutions', d: 'solution' },
			objectid_solutioncomponent: { b: 'objectid_solutioncomponent', a: '_objectid_value', c: 'solutioncomponentss', d: 'solutioncomponent' },
			objectid_statusmap: { b: 'objectid_statusmap', a: '_objectid_value', c: 'statusmaps', d: 'statusmap' },
			objectid_stringmap: { b: 'objectid_stringmap', a: '_objectid_value', c: 'stringmaps', d: 'stringmap' },
			objectid_subject: { b: 'objectid_subject', a: '_objectid_value', c: 'subjects', d: 'subject' },
			objectid_subscription: { b: 'objectid_subscription', a: '_objectid_value', c: 'subscriptions', d: 'subscription' },
			objectid_subscriptionmanuallytrackedobject: { b: 'objectid_subscriptionmanuallytrackedobject', a: '_objectid_value', c: 'subscriptionmanuallytrackedobjects', d: 'subscriptionmanuallytrackedobject' },
			objectid_subscriptionsyncinfo: { b: 'objectid_subscriptionsyncinfo', a: '_objectid_value', c: 'subscriptionsyncinfos', d: 'subscriptionsyncinfo' },
			objectid_systemuser: { b: 'objectid_systemuser', a: '_objectid_value', c: 'systemusers', d: 'systemuser' },
			objectid_systemuserbusinessunitentitymap: { b: 'objectid_systemuserbusinessunitentitymap', a: '_objectid_value', c: '', d: 'systemuserbusinessunitentitymap' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_team: { b: 'objectid_team', a: '_objectid_value', c: 'teams', d: 'team' },
			objectid_teammembership: { b: 'objectid_teammembership', a: '_objectid_value', c: '', d: 'teammembership' },
			objectid_template: { b: 'objectid_template', a: '_objectid_value', c: 'templates', d: 'template' },
			objectid_territory: { b: 'objectid_territory', a: '_objectid_value', c: 'territories', d: 'territory' },
			objectid_theme: { b: 'objectid_theme', a: '_objectid_value', c: 'themes', d: 'theme' },
			objectid_timezonedefinition: { b: 'objectid_timezonedefinition', a: '_objectid_value', c: 'timezonedefinitions', d: 'timezonedefinition' },
			objectid_timezonelocalizedname: { b: 'objectid_timezonelocalizedname', a: '_objectid_value', c: 'timezonelocalizednames', d: 'timezonelocalizedname' },
			objectid_timezonerule: { b: 'objectid_timezonerule', a: '_objectid_value', c: 'timezonerules', d: 'timezonerule' },
			objectid_topic: { b: 'objectid_topic', a: '_objectid_value', c: 'topics', d: 'topic' },
			objectid_topichistory: { b: 'objectid_topichistory', a: '_objectid_value', c: 'topichistories', d: 'topichistory' },
			objectid_topicmodel: { b: 'objectid_topicmodel', a: '_objectid_value', c: 'topicmodels', d: 'topicmodel' },
			objectid_topicmodelconfiguration: { b: 'objectid_topicmodelconfiguration', a: '_objectid_value', c: 'topicmodelconfigurations', d: 'topicmodelconfiguration' },
			objectid_topicmodelexecutionhistory: { b: 'objectid_topicmodelexecutionhistory', a: '_objectid_value', c: 'topicmodelexecutionhistories', d: 'topicmodelexecutionhistory' },
			objectid_transactioncurrency: { b: 'objectid_transactioncurrency', a: '_objectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			objectid_transformationmapping: { b: 'objectid_transformationmapping', a: '_objectid_value', c: 'transformationmappings', d: 'transformationmapping' },
			objectid_transformationparametermapping: { b: 'objectid_transformationparametermapping', a: '_objectid_value', c: 'transformationparametermappings', d: 'transformationparametermapping' },
			objectid_unresolvedaddress: { b: 'objectid_unresolvedaddress', a: '_objectid_value', c: 'unresolvedaddresses', d: 'unresolvedaddress' },
			objectid_uom: { b: 'objectid_uom', a: '_objectid_value', c: 'uoms', d: 'uom' },
			objectid_uomschedule: { b: 'objectid_uomschedule', a: '_objectid_value', c: 'uomschedules', d: 'uomschedule' },
			objectid_userentityuisettings: { b: 'objectid_userentityuisettings', a: '_objectid_value', c: 'userentityuisettingses', d: 'userentityuisettings' },
			objectid_userfiscalcalendar: { b: 'objectid_userfiscalcalendar', a: '_objectid_value', c: 'userfiscalcalendars', d: 'userfiscalcalendar' },
			objectid_userform: { b: 'objectid_userform', a: '_objectid_value', c: 'userforms', d: 'userform' },
			objectid_usermapping: { b: 'objectid_usermapping', a: '_objectid_value', c: 'usermappings', d: 'usermapping' },
			objectid_userquery: { b: 'objectid_userquery', a: '_objectid_value', c: 'userqueries', d: 'userquery' },
			objectid_userqueryvisualization: { b: 'objectid_userqueryvisualization', a: '_objectid_value', c: 'userqueryvisualizations', d: 'userqueryvisualization' },
			objectid_webresource: { b: 'objectid_webresource', a: '_objectid_value', c: 'webresources', d: 'webresource' },
			objectid_webwizard: { b: 'objectid_webwizard', a: '_objectid_value', c: 'webwizards', d: 'webwizard' },
			objectid_wizardaccessprivilege: { b: 'objectid_wizardaccessprivilege', a: '_objectid_value', c: 'wizardaccessprivileges', d: 'wizardaccessprivilege' },
			objectid_wizardpage: { b: 'objectid_wizardpage', a: '_objectid_value', c: 'wizardpages', d: 'wizardpage' },
			objectid_workflow: { b: 'objectid_workflow', a: '_objectid_value', c: 'workflows', d: 'workflow' },
			objectid_workflowdependency: { b: 'objectid_workflowdependency', a: '_objectid_value', c: 'workflowdependencies', d: 'workflowdependency' },
			objectid_workflowlog: { b: 'objectid_workflowlog', a: '_objectid_value', c: 'workflowlogs', d: 'workflowlog' },
			objectid_workflowwaitsubscription: { b: 'objectid_workflowwaitsubscription', a: '_objectid_value', c: 'workflowwaitsubscriptions', d: 'workflowwaitsubscription' },
			ObjectTypeCode: { a: 'objecttypecode' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PersonalCategories: { a: 'personalcategories' },
			ReminderSet: { a: 'reminderset' },
			ReminderTime_UtcDateAndTime: { a: 'remindertime' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
			ToDoItemFlags: { a: 'todoitemflags' },
			ToDoOrdinalDate_UtcDateAndTime: { a: 'todoordinaldate' },
			ToDoSubOrdinal: { a: 'todosubordinal' },
			ToDoTitle: { a: 'todotitle' },
			UserEntityInstanceDataId: { a: 'userentityinstancedataid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in userentityinstancedata) {
			var a = userentityinstancedata[field].a;
			var b = userentityinstancedata[field].b;
			var c = userentityinstancedata[field].c;
			var d = userentityinstancedata[field].d;
			var g = userentityinstancedata[field].g;
			var r = userentityinstancedata[field].r;
			userentityinstancedata[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		userentityinstancedata.Entity = u;
		userentityinstancedata.EntityName = 'userentityinstancedata';
		userentityinstancedata.EntityCollectionName = 'userentityinstancedatas';
		userentityinstancedata['@odata.etag'] = e['@odata.etag'];
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
		userentityinstancedata.OptionSet = optionSet;
		userentityinstancedata.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		userentityinstancedata.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return userentityinstancedata;
	};
})(Hsbc || (Hsbc = {}));