﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.CampaignResponseApi = function (e) {
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
		var campaignresponse = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			Category: { a: 'category' },
			ChannelTypeCode: { a: 'channeltypecode' },
			Community: { a: 'community' },
			CompanyName: { a: 'companyname' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DeliveryLastAttemptedOn_UtcDateAndTime: { a: 'deliverylastattemptedon', r: true },
			DeliveryPriorityCode: { a: 'deliveryprioritycode' },
			Description: { a: 'description' },
			EMailAddress: { a: 'emailaddress' },
			ExchangeItemId: { a: 'exchangeitemid' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExchangeWebLink: { a: 'exchangeweblink' },
			Fax: { a: 'fax' },
			FirstName: { a: 'firstname' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			IsBilled: { a: 'isbilled' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastName: { a: 'lastname' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LeftVoiceMail: { a: 'leftvoicemail' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OnHoldTime: { a: 'onholdtime', r: true },
			originatingactivityid_appointment: { b: 'originatingactivityid_appointment', a: '_originatingactivityid_value', c: 'appointments', d: 'appointment' },
			originatingactivityid_email: { b: 'originatingactivityid_email', a: '_originatingactivityid_value', c: 'emails', d: 'email' },
			originatingactivityid_fax: { b: 'originatingactivityid_fax', a: '_originatingactivityid_value', c: 'faxes', d: 'fax' },
			originatingactivityid_letter: { b: 'originatingactivityid_letter', a: '_originatingactivityid_value', c: 'letters', d: 'letter' },
			originatingactivityid_phonecall: { b: 'originatingactivityid_phonecall', a: '_originatingactivityid_value', c: 'phonecalls', d: 'phonecall' },
			OriginatingActivityName: { a: 'originatingactivityname', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PostponeActivityProcessingUntil_UtcDateAndTime: { a: 'postponeactivityprocessinguntil', r: true },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			PromotionCodeName: { a: 'promotioncodename' },
			ReceivedOn_UtcDateOnly: { a: 'receivedon' },
			regardingobjectid_bulkoperation_campaignresponse: { b: 'regardingobjectid_bulkoperation_campaignresponse', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_campaignresponse: { b: 'regardingobjectid_campaign_campaignresponse', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			ResponseCode: { a: 'responsecode' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true },
			ScheduledEnd_UtcDateOnly: { a: 'scheduledend' },
			ScheduledStart_UtcDateOnly: { a: 'scheduledstart' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			SeriesId: { a: 'seriesid', r: true },
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
			Telephone: { a: 'telephone' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			YomiCompanyName: { a: 'yomicompanyname' },
			YomiFirstName: { a: 'yomifirstname' },
			YomiLastName: { a: 'yomilastname' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in campaignresponse) {
			var a = campaignresponse[field].a;
			var b = campaignresponse[field].b;
			var c = campaignresponse[field].c;
			var d = campaignresponse[field].d;
			var g = campaignresponse[field].g;
			var r = campaignresponse[field].r;
			campaignresponse[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(campaignresponse, 'ActivityParties', {
			get: function () { return e['campaignresponse_activity_parties']; },
			set: function (value) {
				e['campaignresponse_activity_parties'] = value;
				u['campaignresponse_activity_parties'] = value;
			}
		});
		campaignresponse.Entity = u;
		campaignresponse.EntityName = 'campaignresponse';
		campaignresponse.EntityCollectionName = 'campaignresponses';
		campaignresponse['@odata.etag'] = e['@odata.etag'];
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
			ChannelTypeCode: {
				Email: 1,
				Phone: 2,
				Fax: 3,
				Letter: 4,
				Appointment: 5,
				Others: 6
			},
			Community: {
				Facebook: 1,
				Twitter: 2,
				Other: 0
			},
			DeliveryPriorityCode: {
				Low: 0,
				Normal: 1,
				High: 2
			},
			InstanceTypeCode: {
				Not_Recurring: 0,
				Recurring_Master: 1,
				Recurring_Instance: 2,
				Recurring_Exception: 3,
				Recurring_Future_Exception: 4
			},
			PriorityCode: {
				Low: 0,
				Normal: 1,
				High: 2
			},
			ResponseCode: {
				Interested: 1,
				Not_Interested: 2,
				Do_Not_Send_Marketing_Materials: 3,
				Error: 4
			},
			StateCode: {
				Open: 0,
				Closed: 1,
				Canceled: 2
			},
			StatusCode: {
				Open: 1,
				Closed: 2,
				Canceled: 3
			}
		};
		campaignresponse.OptionSet = optionSet;
		campaignresponse.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		campaignresponse.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return campaignresponse;
	};
})(Hsbc || (Hsbc = {}));