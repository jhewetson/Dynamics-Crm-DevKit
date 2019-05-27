﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.AnnotationApi = function (e) {
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
		var annotation = {
			AnnotationId: { a: 'annotationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DocumentBody: { a: 'documentbody' },
			FileName: { a: 'filename' },
			FilePointer: { a: 'filepointer', r: true },
			FileSize: { a: 'filesize', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsDocument: { a: 'isdocument' },
			IsPrivate: { a: 'isprivate', r: true },
			LangId: { a: 'langid' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NoteText: { a: 'notetext' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_bookableresource: { b: 'objectid_bookableresource', a: '_objectid_value', c: 'bookableresources', d: 'bookableresource' },
			objectid_bookableresourcebooking: { b: 'objectid_bookableresourcebooking', a: '_objectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			objectid_bookableresourcebookingheader: { b: 'objectid_bookableresourcebookingheader', a: '_objectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			objectid_bookableresourcecategoryassn: { b: 'objectid_bookableresourcecategoryassn', a: '_objectid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			objectid_bookableresourcecharacteristic: { b: 'objectid_bookableresourcecharacteristic', a: '_objectid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			objectid_bookableresourcegroup: { b: 'objectid_bookableresourcegroup', a: '_objectid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			objectid_bulkoperation: { b: 'objectid_bulkoperation', a: '_objectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			objectid_calendar: { b: 'objectid_calendar', a: '_objectid_value', c: 'calendars', d: 'calendar' },
			objectid_campaign: { b: 'objectid_campaign', a: '_objectid_value', c: 'campaigns', d: 'campaign' },
			objectid_campaignactivity: { b: 'objectid_campaignactivity', a: '_objectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			objectid_campaignresponse: { b: 'objectid_campaignresponse', a: '_objectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			channelaccessprofile_annotations: { b: 'channelaccessprofile_annotations', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_objectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			objectid_profileruleitem: { b: 'objectid_profileruleitem', a: '_objectid_value', c: 'channelaccessprofileruleitems', d: 'channelaccessprofileruleitem' },
			objectid_commitment: { b: 'objectid_commitment', a: '_objectid_value', c: 'commitments', d: 'commitment' },
			objectid_competitor: { b: 'objectid_competitor', a: '_objectid_value', c: 'competitors', d: 'competitor' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_contract: { b: 'objectid_contract', a: '_objectid_value', c: 'contracts', d: 'contract' },
			objectid_contractdetail: { b: 'objectid_contractdetail', a: '_objectid_value', c: 'contractdetails', d: 'contractdetail' },
			objectid_convertrule: { b: 'objectid_convertrule', a: '_objectid_value', c: 'convertrules', d: 'convertrule' },
			objectid_duplicaterule: { b: 'objectid_duplicaterule', a: '_objectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_emailserverprofile: { b: 'objectid_emailserverprofile', a: '_objectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			objectid_entitlement: { b: 'objectid_entitlement', a: '_objectid_value', c: 'entitlements', d: 'entitlement' },
			objectid_entitlementchannel: { b: 'objectid_entitlementchannel', a: '_objectid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			objectid_entitlementtemplate: { b: 'objectid_entitlementtemplate', a: '_objectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			objectid_equipment: { b: 'objectid_equipment', a: '_objectid_value', c: 'equipments', d: 'equipment' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_incident: { b: 'objectid_incident', a: '_objectid_value', c: 'incidents', d: 'incident' },
			objectid_incidentresolution: { b: 'objectid_incidentresolution', a: '_objectid_value', c: 'incidentresolutions', d: 'incidentresolution' },
			objectid_invoice: { b: 'objectid_invoice', a: '_objectid_value', c: 'invoices', d: 'invoice' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_lead: { b: 'objectid_lead', a: '_objectid_value', c: 'leads', d: 'lead' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_list: { b: 'objectid_list', a: '_objectid_value', c: 'lists', d: 'list' },
			objectid_mailbox: { b: 'objectid_mailbox', a: '_objectid_value', c: 'mailboxes', d: 'mailbox' },
			objectid_msdyn_playbookinstance: { b: 'objectid_msdyn_playbookinstance', a: '_objectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			objectid_msdyn_playbooktemplate: { b: 'objectid_msdyn_playbooktemplate', a: '_objectid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			objectid_msdyn_postalbum: { b: 'objectid_msdyn_postalbum', a: '_objectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			objectid_msdyn_solutioncomponentdatasource: { b: 'objectid_msdyn_solutioncomponentdatasource', a: '_objectid_value', c: 'msdyn_solutioncomponentdatasources', d: 'msdyn_solutioncomponentdatasource' },
			objectid_msdyn_solutionhistorydatasource: { b: 'objectid_msdyn_solutionhistorydatasource', a: '_objectid_value', c: 'msdyn_solutionhistorydatasources', d: 'msdyn_solutionhistorydatasource' },
			objectid_msfp_surveyinvite: { b: 'objectid_msfp_surveyinvite', a: '_objectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			objectid_msfp_surveyresponse: { b: 'objectid_msfp_surveyresponse', a: '_objectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			objectid_opportunity: { b: 'objectid_opportunity', a: '_objectid_value', c: 'opportunities', d: 'opportunity' },
			objectid_opportunityclose: { b: 'objectid_opportunityclose', a: '_objectid_value', c: 'opportunitycloses', d: 'opportunityclose' },
			objectid_orderclose: { b: 'objectid_orderclose', a: '_objectid_value', c: 'ordercloses', d: 'orderclose' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_product: { b: 'objectid_product', a: '_objectid_value', c: 'products', d: 'product' },
			objectid_quote: { b: 'objectid_quote', a: '_objectid_value', c: 'quotes', d: 'quote' },
			objectid_quoteclose: { b: 'objectid_quoteclose', a: '_objectid_value', c: 'quotecloses', d: 'quoteclose' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_resourcespec: { b: 'objectid_resourcespec', a: '_objectid_value', c: 'resourcespecs', d: 'resourcespec' },
			objectid_routingrule: { b: 'objectid_routingrule', a: '_objectid_value', c: 'routingrules', d: 'routingrule' },
			objectid_routingruleitem: { b: 'objectid_routingruleitem', a: '_objectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			objectid_salesorder: { b: 'objectid_salesorder', a: '_objectid_value', c: 'salesorders', d: 'salesorder' },
			objectid_service: { b: 'objectid_service', a: '_objectid_value', c: 'services', d: 'service' },
			objectid_serviceappointment: { b: 'objectid_serviceappointment', a: '_objectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			objectid_sharepointdocument: { b: 'objectid_sharepointdocument', a: '_objectid_value', c: 'sharepointdocuments', d: 'sharepointdocument' },
			objectid_sla: { b: 'objectid_sla', a: '_objectid_value', c: 'slas', d: 'sla' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_workflow: { b: 'objectid_workflow', a: '_objectid_value', c: 'workflows', d: 'workflow' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Prefix: { a: 'prefix', r: true },
			StepId: { a: 'stepid' },
			StoragePointer: { a: 'storagepointer', r: true },
			Subject: { a: 'subject' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in annotation) {
			var a = annotation[field].a;
			var b = annotation[field].b;
			var c = annotation[field].c;
			var d = annotation[field].d;
			var g = annotation[field].g;
			var r = annotation[field].r;
			annotation[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		annotation.Entity = u;
		annotation.EntityName = 'annotation';
		annotation.EntityCollectionName = 'annotations';
		annotation['@odata.etag'] = e['@odata.etag'];
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
		annotation.OptionSet = optionSet;
		annotation.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		annotation.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return annotation;
	};
})(Hsbc || (Hsbc = {}));