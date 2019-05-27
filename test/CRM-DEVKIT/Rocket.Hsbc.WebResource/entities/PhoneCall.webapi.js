﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.PhoneCallApi = function (e) {
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
		var phonecall = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DirectionCode: { a: 'directioncode' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsBilled: { a: 'isbilled' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LeftVoiceMail: { a: 'leftvoicemail' },
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
			PhoneNumber: { a: 'phonenumber' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_phonecall: { b: 'regardingobjectid_account_phonecall', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_phonecall: { b: 'regardingobjectid_bookableresourcebooking_phonecall', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_phonecall: { b: 'regardingobjectid_bookableresourcebookingheader_phonecall', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_phonecall: { b: 'regardingobjectid_bulkoperation_phonecall', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_phonecall: { b: 'regardingobjectid_campaign_phonecall', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_phonecall: { b: 'regardingobjectid_campaignactivity_phonecall', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_phonecall: { b: 'regardingobjectid_contact_phonecall', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_phonecall: { b: 'regardingobjectid_contract_phonecall', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_phonecall: { b: 'regardingobjectid_entitlement_phonecall', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_phonecall: { b: 'regardingobjectid_entitlementtemplate_phonecall', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_phonecall: { b: 'regardingobjectid_incident_phonecall', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_phonecall: { b: 'regardingobjectid_invoice_phonecall', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_phonecall: { b: 'regardingobjectid_knowledgearticle_phonecall', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_phonecall: { b: 'regardingobjectid_knowledgebaserecord_phonecall', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_phonecall: { b: 'regardingobjectid_lead_phonecall', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_playbookinstance_phonecall: { b: 'regardingobjectid_msdyn_playbookinstance_phonecall', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_phonecall: { b: 'regardingobjectid_msdyn_postalbum_phonecall', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_opportunity_phonecall: { b: 'regardingobjectid_opportunity_phonecall', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_phonecall: { b: 'regardingobjectid_quote_phonecall', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_phonecall: { b: 'regardingobjectid_salesorder_phonecall', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_phonecall: { b: 'regardingobjectid_site_phonecall', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
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
		for (var field in phonecall) {
			var a = phonecall[field].a;
			var b = phonecall[field].b;
			var c = phonecall[field].c;
			var d = phonecall[field].d;
			var g = phonecall[field].g;
			var r = phonecall[field].r;
			phonecall[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(phonecall, 'ActivityParties', {
			get: function () { return e['phonecall_activity_parties']; },
			set: function (value) {
				e['phonecall_activity_parties'] = value;
				u['phonecall_activity_parties'] = value;
			}
		});
		phonecall.Entity = u;
		phonecall.EntityName = 'phonecall';
		phonecall.EntityCollectionName = 'phonecalls';
		phonecall['@odata.etag'] = e['@odata.etag'];
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
				Open: 1,
				Made: 2,
				Canceled: 3,
				Received: 4
			}
		};
		phonecall.OptionSet = optionSet;
		phonecall.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		phonecall.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return phonecall;
	};
})(Hsbc || (Hsbc = {}));