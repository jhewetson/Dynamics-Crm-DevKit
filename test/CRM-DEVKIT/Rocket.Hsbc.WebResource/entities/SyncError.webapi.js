'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.SyncErrorApi = function (e) {
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
		var syncerror = {
			Action: { a: 'action' },
			ActionData: { a: 'actiondata' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ErrorCode: { a: 'errorcode' },
			ErrorDetail: { a: 'errordetail' },
			ErrorMessage: { a: 'errormessage' },
			ErrorTime_UtcDateAndTime: { a: 'errortime' },
			ErrorType: { a: 'errortype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			regardingobjectid_account_syncerror: { b: 'regardingobjectid_account_syncerror', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_activitymimeattachment_syncerror: { b: 'regardingobjectid_activitymimeattachment_syncerror', a: '_regardingobjectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			regardingobjectid_activityparty_syncerror: { b: 'regardingobjectid_activityparty_syncerror', a: '_regardingobjectid_value', c: 'activityparties', d: 'activityparty' },
			regardingobjectid_adminsettingsentity: { b: 'regardingobjectid_adminsettingsentity', a: '_regardingobjectid_value', c: 'adminsettingsentities', d: 'adminsettingsentity' },
			regardingobjectid_annotation_syncerror: { b: 'regardingobjectid_annotation_syncerror', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_appointment_syncerror: { b: 'regardingobjectid_appointment_syncerror', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_attachment_syncerror: { b: 'regardingobjectid_attachment_syncerror', a: '_regardingobjectid_value', c: 'attachments', d: 'attachment' },
			regardingobjectid_bookableresource_syncerror: { b: 'regardingobjectid_bookableresource_syncerror', a: '_regardingobjectid_value', c: 'bookableresources', d: 'bookableresource' },
			regardingobjectid_bookableresourcebooking_syncerror: { b: 'regardingobjectid_bookableresourcebooking_syncerror', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingexchangesyncidmapping: { b: 'regardingobjectid_bookableresourcebookingexchangesyncidmapping', a: '_regardingobjectid_value', c: 'bookableresourcebookingexchangesyncidmappings', d: 'bookableresourcebookingexchangesyncidmapping' },
			regardingobjectid_bookableresourcebookingheader_syncerror: { b: 'regardingobjectid_bookableresourcebookingheader_syncerror', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bookableresourcecategory_syncerror: { b: 'regardingobjectid_bookableresourcecategory_syncerror', a: '_regardingobjectid_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			regardingobjectid_bookableresourcecategoryassn_syncerror: { b: 'regardingobjectid_bookableresourcecategoryassn_syncerror', a: '_regardingobjectid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			regardingobjectid_bookableresourcecharacteristic_syncerror: { b: 'regardingobjectid_bookableresourcecharacteristic_syncerror', a: '_regardingobjectid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			regardingobjectid_bookableresourcegroup_syncerror: { b: 'regardingobjectid_bookableresourcegroup_syncerror', a: '_regardingobjectid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			regardingobjectid_bookingstatus_syncerror: { b: 'regardingobjectid_bookingstatus_syncerror', a: '_regardingobjectid_value', c: 'bookingstatuses', d: 'bookingstatus' },
			regardingobjectid_bulkoperation_syncerror: { b: 'regardingobjectid_bulkoperation_syncerror', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_bulkoperationlog: { b: 'regardingobjectid_bulkoperationlog', a: '_regardingobjectid_value', c: 'bulkoperationlogs', d: 'bulkoperationlog' },
			regardingobjectid_businessdatalocalizedlabel_syncerror: { b: 'regardingobjectid_businessdatalocalizedlabel_syncerror', a: '_regardingobjectid_value', c: 'businessdatalocalizedlabels', d: 'businessdatalocalizedlabel' },
			regardingobjectid_businessunit_syncerror: { b: 'regardingobjectid_businessunit_syncerror', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_campaign_syncerror: { b: 'regardingobjectid_campaign_syncerror', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_syncerror: { b: 'regardingobjectid_campaignactivity_syncerror', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_campaignresponse_syncerror: { b: 'regardingobjectid_campaignresponse_syncerror', a: '_regardingobjectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			regardingobjectid_category_syncerror: { b: 'regardingobjectid_category_syncerror', a: '_regardingobjectid_value', c: 'categories ', d: 'category' },
			regardingobjectid_channelaccessprofile_syncerror: { b: 'regardingobjectid_channelaccessprofile_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			regardingobjectid_channelaccessprofilerule_syncerror: { b: 'regardingobjectid_channelaccessprofilerule_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_channelaccessprofileruleitem_syncerror: { b: 'regardingobjectid_channelaccessprofileruleitem_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofileruleitems', d: 'channelaccessprofileruleitem' },
			regardingobjectid_characteristic_syncerror: { b: 'regardingobjectid_characteristic_syncerror', a: '_regardingobjectid_value', c: 'characteristics', d: 'characteristic' },
			regardingobjectid_childincidentcount: { b: 'regardingobjectid_childincidentcount', a: '_regardingobjectid_value', c: 'childincidentcounts', d: 'childincidentcount' },
			regardingobjectid_commitment: { b: 'regardingobjectid_commitment', a: '_regardingobjectid_value', c: 'commitments', d: 'commitment' },
			regardingobjectid_competitor_syncerror: { b: 'regardingobjectid_competitor_syncerror', a: '_regardingobjectid_value', c: 'competitors', d: 'competitor' },
			regardingobjectid_competitoraddress_syncerror: { b: 'regardingobjectid_competitoraddress_syncerror', a: '_regardingobjectid_value', c: 'competitoraddresses', d: 'competitoraddress' },
			regardingobjectid_connection_syncerror: { b: 'regardingobjectid_connection_syncerror', a: '_regardingobjectid_value', c: 'connections', d: 'connection' },
			regardingobjectid_connectionrole_syncerror: { b: 'regardingobjectid_connectionrole_syncerror', a: '_regardingobjectid_value', c: 'connectionroles', d: 'connectionrole' },
			regardingobjectid_constraintbasedgroup: { b: 'regardingobjectid_constraintbasedgroup', a: '_regardingobjectid_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			regardingobjectid_contact_syncerror: { b: 'regardingobjectid_contact_syncerror', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_syncerror: { b: 'regardingobjectid_contract_syncerror', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_contractdetail_syncerror: { b: 'regardingobjectid_contractdetail_syncerror', a: '_regardingobjectid_value', c: 'contractdetails', d: 'contractdetail' },
			regardingobjectid_contracttemplate_syncerror: { b: 'regardingobjectid_contracttemplate_syncerror', a: '_regardingobjectid_value', c: 'contracttemplates', d: 'contracttemplate' },
			regardingobjectid_customeraddress_syncerror: { b: 'regardingobjectid_customeraddress_syncerror', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
			regardingobjectid_customeropportunityrole_syncerror: { b: 'regardingobjectid_customeropportunityrole_syncerror', a: '_regardingobjectid_value', c: 'customeropportunityroles', d: 'customeropportunityrole' },
			regardingobjectid_discount_syncerror: { b: 'regardingobjectid_discount_syncerror', a: '_regardingobjectid_value', c: 'discounts', d: 'discount' },
			regardingobjectid_discounttype_syncerror: { b: 'regardingobjectid_discounttype_syncerror', a: '_regardingobjectid_value', c: 'discounttypes', d: 'discounttype' },
			regardingobjectid_duplicaterule_syncerror: { b: 'regardingobjectid_duplicaterule_syncerror', a: '_regardingobjectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			regardingobjectid_duplicaterulecondition_syncerror: { b: 'regardingobjectid_duplicaterulecondition_syncerror', a: '_regardingobjectid_value', c: 'duplicateruleconditions', d: 'duplicaterulecondition' },
			regardingobjectid_dynamicproperty: { b: 'regardingobjectid_dynamicproperty', a: '_regardingobjectid_value', c: 'dynamicproperties', d: 'dynamicproperty' },
			regardingobjectid_dynamicpropertyassociation: { b: 'regardingobjectid_dynamicpropertyassociation', a: '_regardingobjectid_value', c: 'dynamicpropertyassociations', d: 'dynamicpropertyassociation' },
			regardingobjectid_dynamicpropertyinstance: { b: 'regardingobjectid_dynamicpropertyinstance', a: '_regardingobjectid_value', c: 'dynamicpropertyinstances', d: 'dynamicpropertyinstance' },
			regardingobjectid_dynamicpropertyoptionsetitem: { b: 'regardingobjectid_dynamicpropertyoptionsetitem', a: '_regardingobjectid_value', c: 'dynamicpropertyoptionsetitems', d: 'dynamicpropertyoptionsetitem' },
			regardingobjectid_email_syncerror: { b: 'regardingobjectid_email_syncerror', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_emailserverprofile_syncerror: { b: 'regardingobjectid_emailserverprofile_syncerror', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			regardingobjectid_entitlement_syncerror: { b: 'regardingobjectid_entitlement_syncerror', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementchannel: { b: 'regardingobjectid_entitlementchannel', a: '_regardingobjectid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			regardingobjectid_entitlemententityallocationtypemapping: { b: 'regardingobjectid_entitlemententityallocationtypemapping', a: '_regardingobjectid_value', c: 'entitlemententityallocationtypemappings', d: 'entitlemententityallocationtypemapping' },
			regardingobjectid_entitlementtemplate_syncerror: { b: 'regardingobjectid_entitlementtemplate_syncerror', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_entitlementtemplatechannel: { b: 'regardingobjectid_entitlementtemplatechannel', a: '_regardingobjectid_value', c: 'entitlementtemplatechannels', d: 'entitlementtemplatechannel' },
			regardingobjectid_equipment_syncerror: { b: 'regardingobjectid_equipment_syncerror', a: '_regardingobjectid_value', c: 'equipments', d: 'equipment' },
			regardingobjectid_ExpiredProcess_syncerror: { b: 'regardingobjectid_ExpiredProcess_syncerror', a: '_regardingobjectid_value', c: 'expiredprocesses', d: 'expiredprocess' },
			regardingobjectid_externalparty_syncerror: { b: 'regardingobjectid_externalparty_syncerror', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			regardingobjectid_externalpartyitem_syncerror: { b: 'regardingobjectid_externalpartyitem_syncerror', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fax_syncerror: { b: 'regardingobjectid_fax_syncerror', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_feedback_syncerror: { b: 'regardingobjectid_feedback_syncerror', a: '_regardingobjectid_value', c: 'feedback', d: 'feedback' },
			regardingobjectid_fieldpermission_syncerror: { b: 'regardingobjectid_fieldpermission_syncerror', a: '_regardingobjectid_value', c: 'fieldpermissions', d: 'fieldpermission' },
			regardingobjectid_fieldsecurityprofile_syncerror: { b: 'regardingobjectid_fieldsecurityprofile_syncerror', a: '_regardingobjectid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			regardingobjectid_fileattachment_syncerror: { b: 'regardingobjectid_fileattachment_syncerror', a: '_regardingobjectid_value', c: 'fileattachments', d: 'fileattachment' },
			regardingobjectid_goal_syncerror: { b: 'regardingobjectid_goal_syncerror', a: '_regardingobjectid_value', c: 'goals', d: 'goal' },
			regardingobjectid_goalrollupquery_syncerror: { b: 'regardingobjectid_goalrollupquery_syncerror', a: '_regardingobjectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_importmap_syncerror: { b: 'regardingobjectid_importmap_syncerror', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap' },
			regardingobjectid_incident_syncerror: { b: 'regardingobjectid_incident_syncerror', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_incidentresolution_syncerror: { b: 'regardingobjectid_incidentresolution_syncerror', a: '_regardingobjectid_value', c: 'incidentresolutions', d: 'incidentresolution' },
			regardingobjectid_internaladdress_syncerror: { b: 'regardingobjectid_internaladdress_syncerror', a: '_regardingobjectid_value', c: 'internaladdresses', d: 'internaladdress' },
			regardingobjectid_invoice_syncerror: { b: 'regardingobjectid_invoice_syncerror', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_invoicedetail_syncerror: { b: 'regardingobjectid_invoicedetail_syncerror', a: '_regardingobjectid_value', c: 'invoicedetails', d: 'invoicedetail' },
			regardingobjectid_kbarticle_syncerror: { b: 'regardingobjectid_kbarticle_syncerror', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_kbarticletemplate_syncerror: { b: 'regardingobjectid_kbarticletemplate_syncerror', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			regardingobjectid_knowledgearticle_syncerror: { b: 'regardingobjectid_knowledgearticle_syncerror', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgearticleincident_syncerror: { b: 'regardingobjectid_knowledgearticleincident_syncerror', a: '_regardingobjectid_value', c: 'knowledgearticleincidents', d: 'knowledgearticleincident' },
			regardingobjectid_knowledgearticleviews_syncerror: { b: 'regardingobjectid_knowledgearticleviews_syncerror', a: '_regardingobjectid_value', c: 'knowledgearticleviews', d: 'knowledgearticleviews' },
			regardingobjectid_knowledgebaserecord_syncerror: { b: 'regardingobjectid_knowledgebaserecord_syncerror', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_syncerror: { b: 'regardingobjectid_lead_syncerror', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_leadaddress_syncerror: { b: 'regardingobjectid_leadaddress_syncerror', a: '_regardingobjectid_value', c: 'leadaddresses', d: 'leadaddress' },
			regardingobjectid_LeadToOpportunitySalesProcess_syncerror: { b: 'regardingobjectid_LeadToOpportunitySalesProcess_syncerror', a: '_regardingobjectid_value', c: 'leadtoopportunitysalesprocesses', d: 'leadtoopportunitysalesprocess' },
			regardingobjectid_letter_syncerror: { b: 'regardingobjectid_letter_syncerror', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_list_syncerror: { b: 'regardingobjectid_list_syncerror', a: '_regardingobjectid_value', c: 'lists', d: 'list' },
			regardingobjectid_mailbox_syncerror: { b: 'regardingobjectid_mailbox_syncerror', a: '_regardingobjectid_value', c: 'mailboxes', d: 'mailbox' },
			regardingobjectid_mailmergetemplate_syncerror: { b: 'regardingobjectid_mailmergetemplate_syncerror', a: '_regardingobjectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			regardingobjectid_metric_syncerror: { b: 'regardingobjectid_metric_syncerror', a: '_regardingobjectid_value', c: 'metrics', d: 'metric' },
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
			regardingobjectid_NewProcess_syncerror: { b: 'regardingobjectid_NewProcess_syncerror', a: '_regardingobjectid_value', c: 'newprocesses', d: 'newprocess' },
			regardingobjectid_offlinecommanddefinition_syncerror: { b: 'regardingobjectid_offlinecommanddefinition_syncerror', a: '_regardingobjectid_value', c: 'offlinecommanddefinitions', d: 'offlinecommanddefinition' },
			regardingobjectid_opportunity_syncerror: { b: 'regardingobjectid_opportunity_syncerror', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_opportunityclose_syncerror: { b: 'regardingobjectid_opportunityclose_syncerror', a: '_regardingobjectid_value', c: 'opportunitycloses', d: 'opportunityclose' },
			regardingobjectid_opportunityproduct_syncerror: { b: 'regardingobjectid_opportunityproduct_syncerror', a: '_regardingobjectid_value', c: 'opportunityproducts', d: 'opportunityproduct' },
			regardingobjectid_OpportunitySalesProcess_syncerror: { b: 'regardingobjectid_OpportunitySalesProcess_syncerror', a: '_regardingobjectid_value', c: 'opportunitysalesprocesses', d: 'opportunitysalesprocess' },
			regardingobjectid_orderclose_syncerror: { b: 'regardingobjectid_orderclose_syncerror', a: '_regardingobjectid_value', c: 'ordercloses', d: 'orderclose' },
			regardingobjectid_organization_syncerror: { b: 'regardingobjectid_organization_syncerror', a: '_regardingobjectid_value', c: 'organizations', d: 'organization' },
			regardingobjectid_phonecall_syncerror: { b: 'regardingobjectid_phonecall_syncerror', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_PhoneToCaseProcess_syncerror: { b: 'regardingobjectid_PhoneToCaseProcess_syncerror', a: '_regardingobjectid_value', c: 'phonetocaseprocesses', d: 'phonetocaseprocess' },
			regardingobjectid_position_syncerror: { b: 'regardingobjectid_position_syncerror', a: '_regardingobjectid_value', c: 'positions', d: 'position' },
			regardingobjectid_postfollow_syncerror: { b: 'regardingobjectid_postfollow_syncerror', a: '_regardingobjectid_value', c: 'postfollows', d: 'postfollow' },
			regardingobjectid_pricelevel_syncerror: { b: 'regardingobjectid_pricelevel_syncerror', a: '_regardingobjectid_value', c: 'pricelevels', d: 'pricelevel' },
			regardingobjectid_processsession_syncerror: { b: 'regardingobjectid_processsession_syncerror', a: '_regardingobjectid_value', c: 'processsessions', d: 'processsession' },
			regardingobjectid_processstage_syncerror: { b: 'regardingobjectid_processstage_syncerror', a: '_regardingobjectid_value', c: 'processstages', d: 'processstage' },
			regardingobjectid_processtrigger_syncerror: { b: 'regardingobjectid_processtrigger_syncerror', a: '_regardingobjectid_value', c: 'processtriggers', d: 'processtrigger' },
			regardingobjectid_product_syncerror: { b: 'regardingobjectid_product_syncerror', a: '_regardingobjectid_value', c: 'products', d: 'product' },
			regardingobjectid_productassociation_syncerror: { b: 'regardingobjectid_productassociation_syncerror', a: '_regardingobjectid_value', c: 'productassociations', d: 'productassociation' },
			regardingobjectid_productpricelevel_syncerror: { b: 'regardingobjectid_productpricelevel_syncerror', a: '_regardingobjectid_value', c: 'productpricelevels', d: 'productpricelevel' },
			regardingobjectid_productsubstitute_syncerror: { b: 'regardingobjectid_productsubstitute_syncerror', a: '_regardingobjectid_value', c: 'productsubstitutes', d: 'productsubstitute' },
			regardingobjectid_publisher_syncerror: { b: 'regardingobjectid_publisher_syncerror', a: '_regardingobjectid_value', c: 'publishers', d: 'publisher' },
			regardingobjectid_queue_syncerror: { b: 'regardingobjectid_queue_syncerror', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem_syncerror: { b: 'regardingobjectid_queueitem_syncerror', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_quote_syncerror: { b: 'regardingobjectid_quote_syncerror', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_quoteclose_syncerror: { b: 'regardingobjectid_quoteclose_syncerror', a: '_regardingobjectid_value', c: 'quotecloses', d: 'quoteclose' },
			regardingobjectid_quotedetail_syncerror: { b: 'regardingobjectid_quotedetail_syncerror', a: '_regardingobjectid_value', c: 'quotedetails', d: 'quotedetail' },
			regardingobjectid_ratingmodel_syncerror: { b: 'regardingobjectid_ratingmodel_syncerror', a: '_regardingobjectid_value', c: 'ratingmodels', d: 'ratingmodel' },
			regardingobjectid_ratingvalue_syncerror: { b: 'regardingobjectid_ratingvalue_syncerror', a: '_regardingobjectid_value', c: 'ratingvalues', d: 'ratingvalue' },
			regardingobjectid_recurringappointmentmaster_syncerror: { b: 'regardingobjectid_recurringappointmentmaster_syncerror', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_report_syncerror: { b: 'regardingobjectid_report_syncerror', a: '_regardingobjectid_value', c: 'reports', d: 'report' },
			regardingobjectid_reportcategory_syncerror: { b: 'regardingobjectid_reportcategory_syncerror', a: '_regardingobjectid_value', c: 'reportcategories', d: 'reportcategory' },
			regardingobjectid_resource_syncerror: { b: 'regardingobjectid_resource_syncerror', a: '_regardingobjectid_value', c: 'resources', d: 'resource' },
			regardingobjectid_resourcegroup_syncerror: { b: 'regardingobjectid_resourcegroup_syncerror', a: '_regardingobjectid_value', c: 'resourcegroups', d: 'resourcegroup' },
			regardingobjectid_resourcegroupexpansion_syncerror: { b: 'regardingobjectid_resourcegroupexpansion_syncerror', a: '_regardingobjectid_value', c: 'resourcegroupexpansions', d: 'resourcegroupexpansion' },
			regardingobjectid_resourcespec: { b: 'regardingobjectid_resourcespec', a: '_regardingobjectid_value', c: 'resourcespecs', d: 'resourcespec' },
			regardingobjectid_role_syncerror: { b: 'regardingobjectid_role_syncerror', a: '_regardingobjectid_value', c: 'roles', d: 'role' },
			regardingobjectid_rollupfield_syncerror: { b: 'regardingobjectid_rollupfield_syncerror', a: '_regardingobjectid_value', c: 'rollupfields', d: 'rollupfield' },
			regardingobjectid_salesliterature_syncerror: { b: 'regardingobjectid_salesliterature_syncerror', a: '_regardingobjectid_value', c: 'salesliteratures', d: 'salesliterature' },
			regardingobjectid_salesliteratureitem: { b: 'regardingobjectid_salesliteratureitem', a: '_regardingobjectid_value', c: 'salesliteratureitems', d: 'salesliteratureitem' },
			regardingobjectid_salesorder_syncerror: { b: 'regardingobjectid_salesorder_syncerror', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_salesorderdetail_syncerror: { b: 'regardingobjectid_salesorderdetail_syncerror', a: '_regardingobjectid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			regardingobjectid_salesprocessinstance: { b: 'regardingobjectid_salesprocessinstance', a: '_regardingobjectid_value', c: 'salesprocessinstances', d: 'salesprocessinstance' },
			regardingobjectid_savedquery_syncerror: { b: 'regardingobjectid_savedquery_syncerror', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery' },
			regardingobjectid_savedqueryvisualization_syncerror: { b: 'regardingobjectid_savedqueryvisualization_syncerror', a: '_regardingobjectid_value', c: 'savedqueryvisualizations', d: 'savedqueryvisualization' },
			regardingobjectid_service_syncerror: { b: 'regardingobjectid_service_syncerror', a: '_regardingobjectid_value', c: 'services', d: 'service' },
			regardingobjectid_serviceappointment_syncerror: { b: 'regardingobjectid_serviceappointment_syncerror', a: '_regardingobjectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			regardingobjectid_sharepointdocumentlocation_syncerror: { b: 'regardingobjectid_sharepointdocumentlocation_syncerror', a: '_regardingobjectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			regardingobjectid_sharepointsite_syncerror: { b: 'regardingobjectid_sharepointsite_syncerror', a: '_regardingobjectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			regardingobjectid_site_syncerror: { b: 'regardingobjectid_site_syncerror', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_sla_syncerror: { b: 'regardingobjectid_sla_syncerror', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_slaitem_syncerror: { b: 'regardingobjectid_slaitem_syncerror', a: '_regardingobjectid_value', c: 'slaitems', d: 'slaitem' },
			regardingobjectid_slakpiinstance_syncerror: { b: 'regardingobjectid_slakpiinstance_syncerror', a: '_regardingobjectid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
			regardingobjectid_socialactivity_syncerror: { b: 'regardingobjectid_socialactivity_syncerror', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_socialprofile_syncerror: { b: 'regardingobjectid_socialprofile_syncerror', a: '_regardingobjectid_value', c: 'socialprofiles', d: 'socialprofile' },
			regardingobjectid_solution_syncerror: { b: 'regardingobjectid_solution_syncerror', a: '_regardingobjectid_value', c: 'solutions', d: 'solution' },
			regardingobjectid_subject_syncerror: { b: 'regardingobjectid_subject_syncerror', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_syncerror_syncerror: { b: 'regardingobjectid_syncerror_syncerror', a: '_regardingobjectid_value', c: 'syncerrors', d: 'syncerror' },
			regardingobjectid_systemuser_syncerror: { b: 'regardingobjectid_systemuser_syncerror', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_task_syncerror: { b: 'regardingobjectid_task_syncerror', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			regardingobjectid_team_syncerror: { b: 'regardingobjectid_team_syncerror', a: '_regardingobjectid_value', c: 'teams', d: 'team' },
			regardingobjectid_teamtemplate_syncerror: { b: 'regardingobjectid_teamtemplate_syncerror', a: '_regardingobjectid_value', c: 'teamtemplates', d: 'teamtemplate' },
			regardingobjectid_template_syncerror: { b: 'regardingobjectid_template_syncerror', a: '_regardingobjectid_value', c: 'templates', d: 'template' },
			regardingobjectid_territory_syncerror: { b: 'regardingobjectid_territory_syncerror', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_topic: { b: 'regardingobjectid_topic', a: '_regardingobjectid_value', c: 'topics', d: 'topic' },
			regardingobjectid_topichistory: { b: 'regardingobjectid_topichistory', a: '_regardingobjectid_value', c: 'topichistories', d: 'topichistory' },
			regardingobjectid_topicmodel: { b: 'regardingobjectid_topicmodel', a: '_regardingobjectid_value', c: 'topicmodels', d: 'topicmodel' },
			regardingobjectid_topicmodelconfiguration: { b: 'regardingobjectid_topicmodelconfiguration', a: '_regardingobjectid_value', c: 'topicmodelconfigurations', d: 'topicmodelconfiguration' },
			regardingobjectid_topicmodelexecutionhistory: { b: 'regardingobjectid_topicmodelexecutionhistory', a: '_regardingobjectid_value', c: 'topicmodelexecutionhistories', d: 'topicmodelexecutionhistory' },
			regardingobjectid_transactioncurrency_syncerror: { b: 'regardingobjectid_transactioncurrency_syncerror', a: '_regardingobjectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			regardingobjectid_TranslationProcess_syncerror: { b: 'regardingobjectid_TranslationProcess_syncerror', a: '_regardingobjectid_value', c: 'translationprocesses', d: 'translationprocess' },
			regardingobjectid_uom_syncerror: { b: 'regardingobjectid_uom_syncerror', a: '_regardingobjectid_value', c: 'uoms', d: 'uom' },
			regardingobjectid_uomschedule_syncerror: { b: 'regardingobjectid_uomschedule_syncerror', a: '_regardingobjectid_value', c: 'uomschedules', d: 'uomschedule' },
			regardingobjectid_userquery_syncerror: { b: 'regardingobjectid_userquery_syncerror', a: '_regardingobjectid_value', c: 'userqueries', d: 'userquery' },
			regardingobjectid_userqueryvisualization_syncerror: { b: 'regardingobjectid_userqueryvisualization_syncerror', a: '_regardingobjectid_value', c: 'userqueryvisualizations', d: 'userqueryvisualization' },
			regardingobjectid_workflow_syncerror: { b: 'regardingobjectid_workflow_syncerror', a: '_regardingobjectid_value', c: 'workflows', d: 'workflow' },
			RequestData: { a: 'requestdata' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SyncErrorId: { a: 'syncerrorid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in syncerror) {
			var a = syncerror[field].a;
			var b = syncerror[field].b;
			var c = syncerror[field].c;
			var d = syncerror[field].d;
			var g = syncerror[field].g;
			var r = syncerror[field].r;
			syncerror[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		syncerror.Entity = u;
		syncerror.EntityName = 'syncerror';
		syncerror.EntityCollectionName = 'syncerrors';
		syncerror['@odata.etag'] = e['@odata.etag'];
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
			ErrorType: {
				Conflict: 0,
				Record_not_found: 1,
				Record_already_exists: 2,
				Others: 3
			},
			StateCode: {
				Active: 0,
				Resolved: 1
			},
			StatusCode: {
				Active: 0,
				Fixed: 1
			}
		};
		syncerror.OptionSet = optionSet;
		syncerror.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		syncerror.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return syncerror;
	};
})(Hsbc || (Hsbc = {}));