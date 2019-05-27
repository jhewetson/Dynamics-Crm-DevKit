'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.SocialActivityApi = function (e) {
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
		var socialactivity = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateAndTime: { a: 'actualend' },
			ActualStart_UtcDateAndTime: { a: 'actualstart' },
			Community: { a: 'community' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DirectionCode: { a: 'directioncode' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InResponseTo: { a: 'inresponseto' },
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
			postauthor_account: { b: 'postauthor_account', a: '_postauthor_value', c: 'accounts', d: 'account' },
			postauthor_contact: { b: 'postauthor_contact', a: '_postauthor_value', c: 'contacts', d: 'contact' },
			postauthoraccount_account: { b: 'postauthoraccount_account', a: '_postauthoraccount_value', c: 'accounts', d: 'account' },
			postauthoraccount_contact: { b: 'postauthoraccount_contact', a: '_postauthoraccount_value', c: 'contacts', d: 'contact' },
			PostedOn_UtcDateAndTime: { a: 'postedon' },
			PostFromProfileId: { b: 'postfromprofileid', a: '_postfromprofileid_value', c: 'socialprofiles', d: 'socialprofile' },
			PostFromProfileIdName: { a: 'postedbyname', r: true },
			PostId: { a: 'postid' },
			PostMessageType: { a: 'postmessagetype' },
			PostToProfileId: { a: 'posttoprofileid' },
			PostURL: { a: 'posturl' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_socialactivity: { b: 'regardingobjectid_account_socialactivity', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_asyncoperation: { b: 'regardingobjectid_asyncoperation', a: '_regardingobjectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			regardingobjectid_bookableresourcebooking_socialactivity: { b: 'regardingobjectid_bookableresourcebooking_socialactivity', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_socialactivity: { b: 'regardingobjectid_bookableresourcebookingheader_socialactivity', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_socialactivity: { b: 'regardingobjectid_bulkoperation_socialactivity', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_socialactivity: { b: 'regardingobjectid_campaign_socialactivity', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_socialactivity: { b: 'regardingobjectid_campaignactivity_socialactivity', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_socialactivity: { b: 'regardingobjectid_contact_socialactivity', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_socialactivity: { b: 'regardingobjectid_contract_socialactivity', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_socialactivity: { b: 'regardingobjectid_entitlement_socialactivity', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_socialactivity: { b: 'regardingobjectid_entitlementtemplate_socialactivity', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_socialactivity: { b: 'regardingobjectid_incident_socialactivity', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_socialactivity: { b: 'regardingobjectid_invoice_socialactivity', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_socialactivity: { b: 'regardingobjectid_knowledgearticle_socialactivity', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_socialactivity: { b: 'regardingobjectid_knowledgebaserecord_socialactivity', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_socialactivity: { b: 'regardingobjectid_lead_socialactivity', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_playbookinstance_socialactivity: { b: 'regardingobjectid_msdyn_playbookinstance_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_socialactivity: { b: 'regardingobjectid_msdyn_postalbum_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_opportunity_socialactivity: { b: 'regardingobjectid_opportunity_socialactivity', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_socialactivity: { b: 'regardingobjectid_quote_socialactivity', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_socialactivity: { b: 'regardingobjectid_salesorder_socialactivity', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_socialactivity: { b: 'regardingobjectid_site_socialactivity', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			SentimentValue: { a: 'sentimentvalue' },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SLAName: { a: 'slaname', r: true },
			SocialAdditionalParams: { a: 'socialadditionalparams' },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subject: { a: 'subject' },
			ThreadId: { a: 'threadid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in socialactivity) {
			var a = socialactivity[field].a;
			var b = socialactivity[field].b;
			var c = socialactivity[field].c;
			var d = socialactivity[field].d;
			var g = socialactivity[field].g;
			var r = socialactivity[field].r;
			socialactivity[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(socialactivity, 'ActivityParties', {
			get: function () { return e['socialactivity_activity_parties']; },
			set: function (value) {
				e['socialactivity_activity_parties'] = value;
				u['socialactivity_activity_parties'] = value;
			}
		});
		socialactivity.Entity = u;
		socialactivity.EntityName = 'socialactivity';
		socialactivity.EntityCollectionName = 'socialactivities';
		socialactivity['@odata.etag'] = e['@odata.etag'];
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
			Community: {
				Facebook: 1,
				Twitter: 2,
				Other: 0
			},
			PostMessageType: {
				Public_Message: 0,
				Private_Message: 1
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
				Completed: 1,
				Failed: 2,
				Processing: 3,
				Open: 4,
				Canceled: 5
			}
		};
		socialactivity.OptionSet = optionSet;
		socialactivity.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		socialactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return socialactivity;
	};
})(Hsbc || (Hsbc = {}));