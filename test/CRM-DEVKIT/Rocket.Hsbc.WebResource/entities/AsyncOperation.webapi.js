'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.AsyncOperationApi = function (e) {
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
		var asyncoperation = {
			AsyncOperationId: { a: 'asyncoperationid' },
			CompletedOn_UtcDateAndTime: { a: 'completedon', r: true },
			CorrelationId: { a: 'correlationid' },
			CorrelationUpdatedTime_UtcDateAndTime: { a: 'correlationupdatedtime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Data: { a: 'data' },
			DependencyToken: { a: 'dependencytoken' },
			Depth: { a: 'depth' },
			ErrorCode: { a: 'errorcode', r: true },
			ExecutionTimeSpan: { a: 'executiontimespan', r: true },
			FriendlyMessage: { a: 'friendlymessage' },
			HostId: { a: 'hostid' },
			IsWaitingForEvent: { a: 'iswaitingforevent', r: true },
			Message: { a: 'message', r: true },
			MessageName: { a: 'messagename' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OperationType: { a: 'operationtype' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningExtensionId: { b: 'owningextensionid', a: '_owningextensionid_value', c: 'sdkmessageprocessingsteps', d: 'sdkmessageprocessingstep' },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentPluginExecutionId: { a: 'parentpluginexecutionid' },
			PostponeUntil_UtcDateAndTime: { a: 'postponeuntil' },
			RecurrencePattern: { a: 'recurrencepattern' },
			RecurrenceStartTime_UtcDateOnly: { a: 'recurrencestarttime' },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_accountleads: { b: 'regardingobjectid_accountleads', a: '_regardingobjectid_value', c: '', d: 'accountleads' },
			regardingobjectid_activitymimeattachment: { b: 'regardingobjectid_activitymimeattachment', a: '_regardingobjectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			regardingobjectid_activitypointer: { b: 'regardingobjectid_activitypointer', a: '_regardingobjectid_value', c: 'activitypointers', d: 'activitypointer' },
			regardingobjectid_adminsettingsentity: { b: 'regardingobjectid_adminsettingsentity', a: '_regardingobjectid_value', c: 'adminsettingsentities', d: 'adminsettingsentity' },
			regardingobjectid_annotation: { b: 'regardingobjectid_annotation', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_annualfiscalcalendar: { b: 'regardingobjectid_annualfiscalcalendar', a: '_regardingobjectid_value', c: 'annualfiscalcalendars', d: 'annualfiscalcalendar' },
			regardingobjectid_appointment: { b: 'regardingobjectid_appointment', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_attributemap: { b: 'regardingobjectid_attributemap', a: '_regardingobjectid_value', c: 'attributemaps', d: 'attributemap' },
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
			regardingobjectid_businessunit: { b: 'regardingobjectid_businessunit', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_businessunitnewsarticle: { b: 'regardingobjectid_businessunitnewsarticle', a: '_regardingobjectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle' },
			regardingobjectid_calendar: { b: 'regardingobjectid_calendar', a: '_regardingobjectid_value', c: 'calendars', d: 'calendar' },
			regardingobjectid_campaign: { b: 'regardingobjectid_campaign', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity: { b: 'regardingobjectid_campaignactivity', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_campaignactivityitem: { b: 'regardingobjectid_campaignactivityitem', a: '_regardingobjectid_value', c: '', d: 'campaignactivityitem' },
			regardingobjectid_campaignitem: { b: 'regardingobjectid_campaignitem', a: '_regardingobjectid_value', c: '', d: 'campaignitem' },
			regardingobjectid_campaignresponse: { b: 'regardingobjectid_campaignresponse', a: '_regardingobjectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			channelaccessprofile_asyncoperations: { b: 'channelaccessprofile_asyncoperations', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_characteristic: { b: 'regardingobjectid_characteristic', a: '_regardingobjectid_value', c: 'characteristics', d: 'characteristic' },
			regardingobjectid_childincidentcount: { b: 'regardingobjectid_childincidentcount', a: '_regardingobjectid_value', c: 'childincidentcounts', d: 'childincidentcount' },
			regardingobjectid_commitment: { b: 'regardingobjectid_commitment', a: '_regardingobjectid_value', c: 'commitments', d: 'commitment' },
			regardingobjectid_competitor: { b: 'regardingobjectid_competitor', a: '_regardingobjectid_value', c: 'competitors', d: 'competitor' },
			regardingobjectid_competitoraddress: { b: 'regardingobjectid_competitoraddress', a: '_regardingobjectid_value', c: 'competitoraddresses', d: 'competitoraddress' },
			regardingobjectid_competitorproduct: { b: 'regardingobjectid_competitorproduct', a: '_regardingobjectid_value', c: '', d: 'competitorproduct' },
			regardingobjectid_competitorsalesliterature: { b: 'regardingobjectid_competitorsalesliterature', a: '_regardingobjectid_value', c: '', d: 'competitorsalesliterature' },
			regardingobjectid_connection: { b: 'regardingobjectid_connection', a: '_regardingobjectid_value', c: 'connections', d: 'connection' },
			regardingobjectid_connectionrole: { b: 'regardingobjectid_connectionrole', a: '_regardingobjectid_value', c: 'connectionroles', d: 'connectionrole' },
			regardingobjectid_constraintbasedgroup: { b: 'regardingobjectid_constraintbasedgroup', a: '_regardingobjectid_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contactinvoices: { b: 'regardingobjectid_contactinvoices', a: '_regardingobjectid_value', c: '', d: 'contactinvoices' },
			regardingobjectid_contactleads: { b: 'regardingobjectid_contactleads', a: '_regardingobjectid_value', c: '', d: 'contactleads' },
			regardingobjectid_contactorders: { b: 'regardingobjectid_contactorders', a: '_regardingobjectid_value', c: '', d: 'contactorders' },
			regardingobjectid_contactquotes: { b: 'regardingobjectid_contactquotes', a: '_regardingobjectid_value', c: '', d: 'contactquotes' },
			regardingobjectid_contract: { b: 'regardingobjectid_contract', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_contractdetail: { b: 'regardingobjectid_contractdetail', a: '_regardingobjectid_value', c: 'contractdetails', d: 'contractdetail' },
			regardingobjectid_contracttemplate: { b: 'regardingobjectid_contracttemplate', a: '_regardingobjectid_value', c: 'contracttemplates', d: 'contracttemplate' },
			regardingobjectid_convertrule: { b: 'regardingobjectid_convertrule', a: '_regardingobjectid_value', c: 'convertrules', d: 'convertrule' },
			regardingobjectid_customeraddress: { b: 'regardingobjectid_customeraddress', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
			regardingobjectid_customeropportunityrole: { b: 'regardingobjectid_customeropportunityrole', a: '_regardingobjectid_value', c: 'customeropportunityroles', d: 'customeropportunityrole' },
			regardingobjectid_customerrelationship: { b: 'regardingobjectid_customerrelationship', a: '_regardingobjectid_value', c: 'customerrelationships', d: 'customerrelationship' },
			regardingobjectid_discount: { b: 'regardingobjectid_discount', a: '_regardingobjectid_value', c: 'discounts', d: 'discount' },
			regardingobjectid_discounttype: { b: 'regardingobjectid_discounttype', a: '_regardingobjectid_value', c: 'discounttypes', d: 'discounttype' },
			regardingobjectid_displaystring: { b: 'regardingobjectid_displaystring', a: '_regardingobjectid_value', c: 'displaystrings', d: 'displaystring' },
			regardingobjectid_dynamicproperty: { b: 'regardingobjectid_dynamicproperty', a: '_regardingobjectid_value', c: 'dynamicproperties', d: 'dynamicproperty' },
			regardingobjectid_dynamicpropertyassociation: { b: 'regardingobjectid_dynamicpropertyassociation', a: '_regardingobjectid_value', c: 'dynamicpropertyassociations', d: 'dynamicpropertyassociation' },
			regardingobjectid_dynamicpropertyinstance: { b: 'regardingobjectid_dynamicpropertyinstance', a: '_regardingobjectid_value', c: 'dynamicpropertyinstances', d: 'dynamicpropertyinstance' },
			regardingobjectid_dynamicpropertyoptionsetitem: { b: 'regardingobjectid_dynamicpropertyoptionsetitem', a: '_regardingobjectid_value', c: 'dynamicpropertyoptionsetitems', d: 'dynamicpropertyoptionsetitem' },
			regardingobjectid_email: { b: 'regardingobjectid_email', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_emailserverprofile: { b: 'regardingobjectid_emailserverprofile', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			regardingobjectid_entitlement: { b: 'regardingobjectid_entitlement', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementchannel: { b: 'regardingobjectid_entitlementchannel', a: '_regardingobjectid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			regardingobjectid_entitlementcontacts: { b: 'regardingobjectid_entitlementcontacts', a: '_regardingobjectid_value', c: '', d: 'entitlementcontacts' },
			regardingobjectid_entitlemententityallocationtypemapping: { b: 'regardingobjectid_entitlemententityallocationtypemapping', a: '_regardingobjectid_value', c: 'entitlemententityallocationtypemappings', d: 'entitlemententityallocationtypemapping' },
			regardingobjectid_entitlementproducts: { b: 'regardingobjectid_entitlementproducts', a: '_regardingobjectid_value', c: '', d: 'entitlementproducts' },
			regardingobjectid_entitlementtemplate: { b: 'regardingobjectid_entitlementtemplate', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_entitlementtemplatechannel: { b: 'regardingobjectid_entitlementtemplatechannel', a: '_regardingobjectid_value', c: 'entitlementtemplatechannels', d: 'entitlementtemplatechannel' },
			regardingobjectid_entitlementtemplateproducts: { b: 'regardingobjectid_entitlementtemplateproducts', a: '_regardingobjectid_value', c: '', d: 'entitlementtemplateproducts' },
			regardingobjectid_entitymap: { b: 'regardingobjectid_entitymap', a: '_regardingobjectid_value', c: 'entitymaps', d: 'entitymap' },
			regardingobjectid_equipment: { b: 'regardingobjectid_equipment', a: '_regardingobjectid_value', c: 'equipments', d: 'equipment' },
			externalparty_asyncoperations: { b: 'externalparty_asyncoperations', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			externalpartyitem_asyncoperations: { b: 'externalpartyitem_asyncoperations', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fax: { b: 'regardingobjectid_fax', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_fixedmonthlyfiscalcalendar: { b: 'regardingobjectid_fixedmonthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'fixedmonthlyfiscalcalendars', d: 'fixedmonthlyfiscalcalendar' },
			regardingobjectid_goal: { b: 'regardingobjectid_goal', a: '_regardingobjectid_value', c: 'goals', d: 'goal' },
			regardingobjectid_goalrollupquery: { b: 'regardingobjectid_goalrollupquery', a: '_regardingobjectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_import: { b: 'regardingobjectid_import', a: '_regardingobjectid_value', c: 'imports', d: 'import' },
			regardingobjectid_importdata: { b: 'regardingobjectid_importdata', a: '_regardingobjectid_value', c: 'importdatas', d: 'importdata' },
			regardingobjectid_importfile: { b: 'regardingobjectid_importfile', a: '_regardingobjectid_value', c: 'importfiles', d: 'importfile' },
			regardingobjectid_importlog: { b: 'regardingobjectid_importlog', a: '_regardingobjectid_value', c: 'importlogs', d: 'importlog' },
			regardingobjectid_importmap: { b: 'regardingobjectid_importmap', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap' },
			regardingobjectid_incident: { b: 'regardingobjectid_incident', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_incidentknowledgebaserecord: { b: 'regardingobjectid_incidentknowledgebaserecord', a: '_regardingobjectid_value', c: '', d: 'incidentknowledgebaserecord' },
			regardingobjectid_incidentresolution: { b: 'regardingobjectid_incidentresolution', a: '_regardingobjectid_value', c: 'incidentresolutions', d: 'incidentresolution' },
			regardingobjectid_new_interactionforemail: { b: 'regardingobjectid_new_interactionforemail', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_invoice: { b: 'regardingobjectid_invoice', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_invoicedetail: { b: 'regardingobjectid_invoicedetail', a: '_regardingobjectid_value', c: 'invoicedetails', d: 'invoicedetail' },
			regardingobjectid_isvconfig: { b: 'regardingobjectid_isvconfig', a: '_regardingobjectid_value', c: 'isvconfigs', d: 'isvconfig' },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_kbarticlecomment: { b: 'regardingobjectid_kbarticlecomment', a: '_regardingobjectid_value', c: 'kbarticlecomments', d: 'kbarticlecomment' },
			regardingobjectid_kbarticletemplate: { b: 'regardingobjectid_kbarticletemplate', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgearticleincident: { b: 'regardingobjectid_knowledgearticleincident', a: '_regardingobjectid_value', c: 'knowledgearticleincidents', d: 'knowledgearticleincident' },
			regardingobjectid_knowledgebaserecord: { b: 'regardingobjectid_knowledgebaserecord', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead: { b: 'regardingobjectid_lead', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_leadaddress: { b: 'regardingobjectid_leadaddress', a: '_regardingobjectid_value', c: 'leadaddresses', d: 'leadaddress' },
			regardingobjectid_leadcompetitors: { b: 'regardingobjectid_leadcompetitors', a: '_regardingobjectid_value', c: '', d: 'leadcompetitors' },
			regardingobjectid_leadproduct: { b: 'regardingobjectid_leadproduct', a: '_regardingobjectid_value', c: '', d: 'leadproduct' },
			regardingobjectid_leadtoopportunitysalesprocess: { b: 'regardingobjectid_leadtoopportunitysalesprocess', a: '_regardingobjectid_value', c: 'leadtoopportunitysalesprocesses', d: 'leadtoopportunitysalesprocess' },
			regardingobjectid_letter: { b: 'regardingobjectid_letter', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_list: { b: 'regardingobjectid_list', a: '_regardingobjectid_value', c: 'lists', d: 'list' },
			regardingobjectid_listmember: { b: 'regardingobjectid_listmember', a: '_regardingobjectid_value', c: '', d: 'listmember' },
			regardingobjectid_mailbox: { b: 'regardingobjectid_mailbox', a: '_regardingobjectid_value', c: 'mailboxes', d: 'mailbox' },
			regardingobjectid_mailmergetemplate: { b: 'regardingobjectid_mailmergetemplate', a: '_regardingobjectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			regardingobjectid_metric: { b: 'regardingobjectid_metric', a: '_regardingobjectid_value', c: 'metrics', d: 'metric' },
			regardingobjectid_monthlyfiscalcalendar: { b: 'regardingobjectid_monthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'monthlyfiscalcalendars', d: 'monthlyfiscalcalendar' },
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
			regardingobjectid_organization: { b: 'regardingobjectid_organization', a: '_regardingobjectid_value', c: 'organizations', d: 'organization' },
			regardingobjectid_phonecall: { b: 'regardingobjectid_phonecall', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_phonetocaseprocess: { b: 'regardingobjectid_phonetocaseprocess', a: '_regardingobjectid_value', c: 'phonetocaseprocesses', d: 'phonetocaseprocess' },
			regardingobjectid_position: { b: 'regardingobjectid_position', a: '_regardingobjectid_value', c: 'positions', d: 'position' },
			regardingobjectid_post: { b: 'regardingobjectid_post', a: '_regardingobjectid_value', c: 'posts', d: 'post' },
			regardingobjectid_postfollow: { b: 'regardingobjectid_postfollow', a: '_regardingobjectid_value', c: 'postfollows', d: 'postfollow' },
			regardingobjectid_pricelevel: { b: 'regardingobjectid_pricelevel', a: '_regardingobjectid_value', c: 'pricelevels', d: 'pricelevel' },
			regardingobjectid_privilege: { b: 'regardingobjectid_privilege', a: '_regardingobjectid_value', c: 'privileges', d: 'privilege' },
			regardingobjectid_product: { b: 'regardingobjectid_product', a: '_regardingobjectid_value', c: 'products', d: 'product' },
			regardingobjectid_productassociation: { b: 'regardingobjectid_productassociation', a: '_regardingobjectid_value', c: 'productassociations', d: 'productassociation' },
			regardingobjectid_productpricelevel: { b: 'regardingobjectid_productpricelevel', a: '_regardingobjectid_value', c: 'productpricelevels', d: 'productpricelevel' },
			regardingobjectid_productsalesliterature: { b: 'regardingobjectid_productsalesliterature', a: '_regardingobjectid_value', c: '', d: 'productsalesliterature' },
			regardingobjectid_productsubstitute: { b: 'regardingobjectid_productsubstitute', a: '_regardingobjectid_value', c: 'productsubstitutes', d: 'productsubstitute' },
			regardingobjectid_quarterlyfiscalcalendar: { b: 'regardingobjectid_quarterlyfiscalcalendar', a: '_regardingobjectid_value', c: 'quarterlyfiscalcalendars', d: 'quarterlyfiscalcalendar' },
			regardingobjectid_queue: { b: 'regardingobjectid_queue', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem: { b: 'regardingobjectid_queueitem', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_quote: { b: 'regardingobjectid_quote', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_quoteclose: { b: 'regardingobjectid_quoteclose', a: '_regardingobjectid_value', c: 'quotecloses', d: 'quoteclose' },
			regardingobjectid_quotedetail: { b: 'regardingobjectid_quotedetail', a: '_regardingobjectid_value', c: 'quotedetails', d: 'quotedetail' },
			regardingobjectid_ratingmodel: { b: 'regardingobjectid_ratingmodel', a: '_regardingobjectid_value', c: 'ratingmodels', d: 'ratingmodel' },
			regardingobjectid_ratingvalue: { b: 'regardingobjectid_ratingvalue', a: '_regardingobjectid_value', c: 'ratingvalues', d: 'ratingvalue' },
			regardingobjectid_recurringappointmentmaster: { b: 'regardingobjectid_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_relationshiprole: { b: 'regardingobjectid_relationshiprole', a: '_regardingobjectid_value', c: 'relationshiproles', d: 'relationshiprole' },
			regardingobjectid_relationshiprolemap: { b: 'regardingobjectid_relationshiprolemap', a: '_regardingobjectid_value', c: 'relationshiprolemaps', d: 'relationshiprolemap' },
			regardingobjectid_report: { b: 'regardingobjectid_report', a: '_regardingobjectid_value', c: 'reports', d: 'report' },
			regardingobjectid_resource: { b: 'regardingobjectid_resource', a: '_regardingobjectid_value', c: 'resources', d: 'resource' },
			regardingobjectid_resourcegroup: { b: 'regardingobjectid_resourcegroup', a: '_regardingobjectid_value', c: 'resourcegroups', d: 'resourcegroup' },
			regardingobjectid_resourcegroupexpansion: { b: 'regardingobjectid_resourcegroupexpansion', a: '_regardingobjectid_value', c: 'resourcegroupexpansions', d: 'resourcegroupexpansion' },
			regardingobjectid_resourcespec: { b: 'regardingobjectid_resourcespec', a: '_regardingobjectid_value', c: 'resourcespecs', d: 'resourcespec' },
			regardingobjectid_role: { b: 'regardingobjectid_role', a: '_regardingobjectid_value', c: 'roles', d: 'role' },
			regardingobjectid_rollupfield: { b: 'regardingobjectid_rollupfield', a: '_regardingobjectid_value', c: 'rollupfields', d: 'rollupfield' },
			regardingobjectid_routingrule: { b: 'regardingobjectid_routingrule', a: '_regardingobjectid_value', c: 'routingrules', d: 'routingrule' },
			regardingobjectid_routingruleitem: { b: 'regardingobjectid_routingruleitem', a: '_regardingobjectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			regardingobjectid_salesliterature: { b: 'regardingobjectid_salesliterature', a: '_regardingobjectid_value', c: 'salesliteratures', d: 'salesliterature' },
			regardingobjectid_salesliteratureitem: { b: 'regardingobjectid_salesliteratureitem', a: '_regardingobjectid_value', c: 'salesliteratureitems', d: 'salesliteratureitem' },
			regardingobjectid_salesorder: { b: 'regardingobjectid_salesorder', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_salesorderdetail: { b: 'regardingobjectid_salesorderdetail', a: '_regardingobjectid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			regardingobjectid_salesprocessinstance: { b: 'regardingobjectid_salesprocessinstance', a: '_regardingobjectid_value', c: 'salesprocessinstances', d: 'salesprocessinstance' },
			regardingobjectid_savedquery: { b: 'regardingobjectid_savedquery', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery' },
			regardingobjectid_semiannualfiscalcalendar: { b: 'regardingobjectid_semiannualfiscalcalendar', a: '_regardingobjectid_value', c: 'semiannualfiscalcalendars', d: 'semiannualfiscalcalendar' },
			regardingobjectid_service: { b: 'regardingobjectid_service', a: '_regardingobjectid_value', c: 'services', d: 'service' },
			regardingobjectid_serviceappointment: { b: 'regardingobjectid_serviceappointment', a: '_regardingobjectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			regardingobjectid_servicecontractcontacts: { b: 'regardingobjectid_servicecontractcontacts', a: '_regardingobjectid_value', c: '', d: 'servicecontractcontacts' },
			regardingobjectid_sharepointdocumentlocation: { b: 'regardingobjectid_sharepointdocumentlocation', a: '_regardingobjectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			regardingobjectid_sharepointsite: { b: 'regardingobjectid_sharepointsite', a: '_regardingobjectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			regardingobjectid_similarityrule: { b: 'regardingobjectid_similarityrule', a: '_regardingobjectid_value', c: 'similarityrules', d: 'similarityrule' },
			regardingobjectid_site: { b: 'regardingobjectid_site', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_sla: { b: 'regardingobjectid_sla', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_socialactivity: { b: 'regardingobjectid_socialactivity', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_socialprofile: { b: 'regardingobjectid_socialprofile', a: '_regardingobjectid_value', c: 'socialprofiles', d: 'socialprofile' },
			regardingobjectid_subject: { b: 'regardingobjectid_subject', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_systemform: { b: 'regardingobjectid_systemform', a: '_regardingobjectid_value', c: 'systemforms', d: 'systemform' },
			regardingobjectid_systemuser: { b: 'regardingobjectid_systemuser', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_task: { b: 'regardingobjectid_task', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			regardingobjectid_team: { b: 'regardingobjectid_team', a: '_regardingobjectid_value', c: 'teams', d: 'team' },
			regardingobjectid_template: { b: 'regardingobjectid_template', a: '_regardingobjectid_value', c: 'templates', d: 'template' },
			regardingobjectid_territory: { b: 'regardingobjectid_territory', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_theme: { b: 'regardingobjectid_theme', a: '_regardingobjectid_value', c: 'themes', d: 'theme' },
			regardingobjectid_topic: { b: 'regardingobjectid_topic', a: '_regardingobjectid_value', c: 'topics', d: 'topic' },
			regardingobjectid_topichistory: { b: 'regardingobjectid_topichistory', a: '_regardingobjectid_value', c: 'topichistories', d: 'topichistory' },
			regardingobjectid_topicmodel: { b: 'regardingobjectid_topicmodel', a: '_regardingobjectid_value', c: 'topicmodels', d: 'topicmodel' },
			regardingobjectid_topicmodelconfiguration: { b: 'regardingobjectid_topicmodelconfiguration', a: '_regardingobjectid_value', c: 'topicmodelconfigurations', d: 'topicmodelconfiguration' },
			regardingobjectid_topicmodelexecutionhistory: { b: 'regardingobjectid_topicmodelexecutionhistory', a: '_regardingobjectid_value', c: 'topicmodelexecutionhistories', d: 'topicmodelexecutionhistory' },
			regardingobjectid_transactioncurrency: { b: 'regardingobjectid_transactioncurrency', a: '_regardingobjectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			regardingobjectid_uom: { b: 'regardingobjectid_uom', a: '_regardingobjectid_value', c: 'uoms', d: 'uom' },
			regardingobjectid_uomschedule: { b: 'regardingobjectid_uomschedule', a: '_regardingobjectid_value', c: 'uomschedules', d: 'uomschedule' },
			regardingobjectid_userform: { b: 'regardingobjectid_userform', a: '_regardingobjectid_value', c: 'userforms', d: 'userform' },
			regardingobjectid_usermapping: { b: 'regardingobjectid_usermapping', a: '_regardingobjectid_value', c: 'usermappings', d: 'usermapping' },
			regardingobjectid_userquery: { b: 'regardingobjectid_userquery', a: '_regardingobjectid_value', c: 'userqueries', d: 'userquery' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			RequestId: { a: 'requestid' },
			RetryCount: { a: 'retrycount', r: true },
			RootExecutionContext: { a: 'rootexecutioncontext' },
			Sequence: { a: 'sequence', r: true },
			StartedOn_UtcDateAndTime: { a: 'startedon', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subtype: { a: 'subtype', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			WorkflowActivationId: { b: 'workflowactivationid', a: '_workflowactivationid_value', c: 'workflows', d: 'workflow' },
			WorkflowIsBlocked: { a: 'workflowisblocked', r: true },
			WorkflowStageName: { a: 'workflowstagename', r: true },
			WorkflowState: { a: 'workflowstate', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in asyncoperation) {
			var a = asyncoperation[field].a;
			var b = asyncoperation[field].b;
			var c = asyncoperation[field].c;
			var d = asyncoperation[field].d;
			var g = asyncoperation[field].g;
			var r = asyncoperation[field].r;
			asyncoperation[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		asyncoperation.Entity = u;
		asyncoperation.EntityName = 'asyncoperation';
		asyncoperation.EntityCollectionName = 'asyncoperations';
		asyncoperation['@odata.etag'] = e['@odata.etag'];
		var optionSet = {
			RollupState: {
				NotCalculated: 0,
				Calculated: 1,
				OverflowError: 2,
				OtherError: 3,
				RetryLimitExceeded: 4,
				HierarchicalRecursionLimitReached: 5,
				LoopDetected: 6
			},
			OperationType: {
				System_Event: 1,
				Bulk_Email: 2,
				Import_File_Parse: 3,
				Transform_Parse_Data: 4,
				Import: 5,
				Activity_Propagation: 6,
				Duplicate_Detection_Rule_Publish: 7,
				Bulk_Duplicate_Detection: 8,
				SQM_Data_Collection: 9,
				Workflow: 10,
				Quick_Campaign: 11,
				Matchcode_Update: 12,
				Bulk_Delete: 13,
				Deletion_Service: 14,
				Index_Management: 15,
				Collect_Organization_Statistics: 16,
				Import_Subprocess: 17,
				Calculate_Organization_Storage_Size: 18,
				Collect_Organization_Database_Statistics: 19,
				Collection_Organization_Size_Statistics: 20,
				Database_Tuning: 21,
				Calculate_Organization_Maximum_Storage_Size: 22,
				Bulk_Delete_Subprocess: 23,
				Update_Statistic_Intervals: 24,
				Organization_Full_Text_Catalog_Index: 25,
				Database_log_backup: 26,
				Update_Contract_States: 27,
				DBCC_SHRINKDATABASE_maintenance_job: 28,
				DBCC_SHRINKFILE_maintenance_job: 29,
				Reindex_all_indices_maintenance_job: 30,
				Storage_Limit_Notification: 31,
				Cleanup_inactive_workflow_assemblies: 32,
				Recurring_Series_Expansion: 35,
				Import_Sample_Data: 38,
				Goal_Roll_Up: 40,
				Audit_Partition_Creation: 41,
				Check_For_Language_Pack_Updates: 42,
				Provision_Language_Pack: 43,
				Update_Organization_Database: 44,
				Update_Solution: 45,
				Regenerate_Entity_Row_Count_Snapshot_Data: 46,
				Regenerate_Read_Share_Snapshot_Data: 47,
				Outgoing_Activity: 50,
				Incoming_Email_Processing: 51,
				Mailbox_Test_Access: 52,
				Encryption_Health_Check: 53,
				Execute_Async_Request: 54,
				Post_to_Yammer: 49,
				Update_Entitlement_States: 56,
				Calculate_Rollup_Field: 57,
				Mass_Calculate_Rollup_Field: 58,
				Import_Translation: 59,
				Convert_Date_And_Time_Behavior: 62,
				EntityKey_Index_Creation: 63,
				Update_Knowledge_Article_States: 65,
				Resource_Booking_Sync: 68,
				Relationship_Assistant_Cards: 69,
				Cleanup_Solution_Components: 71,
				App_Module_Metadata_Operation: 72,
				ALM_Anomaly_Detection_Operation: 73,
				Flow_Notification: 75,
				Ribbon_Client_Metadata_Operation: 76,
				CallbackRegistration_Expander_Operation: 79,
				CascadeAssign: 90,
				CascadeDelete: 91,
				Event_Expander_Operation: 92,
				Import_Solution_Metadata: 93
			},
			StateCode: {
				Ready: 0,
				Suspended: 1,
				Locked: 2,
				Completed: 3
			},
			StatusCode: {
				Waiting_For_Resources: 0,
				Waiting: 10,
				In_Progress: 20,
				Pausing: 21,
				Canceling: 22,
				Succeeded: 30,
				Failed: 31,
				Canceled: 32
			}
		};
		asyncoperation.OptionSet = optionSet;
		asyncoperation.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		asyncoperation.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return asyncoperation;
	};
})(Hsbc || (Hsbc = {}));