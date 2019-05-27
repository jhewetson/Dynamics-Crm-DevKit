﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.TaskApi = function (e) {
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
		var task = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CrmTaskAssignedUniqueId: { a: 'crmtaskassigneduniqueid' },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsBilled: { a: 'isbilled' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PercentComplete: { a: 'percentcomplete' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_task: { b: 'regardingobjectid_account_task', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_task: { b: 'regardingobjectid_bookableresourcebooking_task', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_task: { b: 'regardingobjectid_bookableresourcebookingheader_task', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_task: { b: 'regardingobjectid_bulkoperation_task', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_task: { b: 'regardingobjectid_campaign_task', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_task: { b: 'regardingobjectid_campaignactivity_task', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_task: { b: 'regardingobjectid_contact_task', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_task: { b: 'regardingobjectid_contract_task', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_task: { b: 'regardingobjectid_entitlement_task', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_task: { b: 'regardingobjectid_entitlementtemplate_task', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_task: { b: 'regardingobjectid_incident_task', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_task: { b: 'regardingobjectid_invoice_task', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_task: { b: 'regardingobjectid_knowledgearticle_task', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_task: { b: 'regardingobjectid_knowledgebaserecord_task', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_task: { b: 'regardingobjectid_lead_task', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_playbookinstance_task: { b: 'regardingobjectid_msdyn_playbookinstance_task', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_task: { b: 'regardingobjectid_msdyn_postalbum_task', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_opportunity_task: { b: 'regardingobjectid_opportunity_task', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_task: { b: 'regardingobjectid_quote_task', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_task: { b: 'regardingobjectid_salesorder_task', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_task: { b: 'regardingobjectid_site_task', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SLAName: { a: 'slaname', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubscriptionId: { a: 'subscriptionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in task) {
			var a = task[field].a;
			var b = task[field].b;
			var c = task[field].c;
			var d = task[field].d;
			var g = task[field].g;
			var r = task[field].r;
			task[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		task.Entity = u;
		task.EntityName = 'task';
		task.EntityCollectionName = 'tasks';
		task['@odata.etag'] = e['@odata.etag'];
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
			PriorityCode: {
				Low: 0,
				Normal: 1,
				High: 2
			},
			StateCode: {
				Open: 0,
				Completed: 1,
				Canceled: 2
			},
			StatusCode: {
				Not_Started: 2,
				In_Progress: 3,
				Waiting_on_someone_else: 4,
				Completed: 5,
				Canceled: 6,
				Deferred: 7
			}
		};
		task.OptionSet = optionSet;
		task.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		task.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return task;
	};
})(Hsbc || (Hsbc = {}));