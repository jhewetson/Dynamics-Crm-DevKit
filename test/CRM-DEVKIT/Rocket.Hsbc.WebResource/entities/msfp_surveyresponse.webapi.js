'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.msfp_surveyresponseApi = function (e) {
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
		var msfp_surveyresponse = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateAndTime: { a: 'actualend' },
			ActualStart_UtcDateAndTime: { a: 'actualstart' },
			Community: { a: 'community' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DeliveryLastAttemptedOn_UtcDateAndTime: { a: 'deliverylastattemptedon', r: true },
			DeliveryPriorityCode: { a: 'deliveryprioritycode' },
			Description: { a: 'description' },
			ExchangeItemId: { a: 'exchangeitemid' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExchangeWebLink: { a: 'exchangeweblink' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			IsBilled: { a: 'isbilled' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LeftVoiceMail: { a: 'leftvoicemail' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msfp_embedcontextparameters: { a: 'msfp_embedcontextparameters' },
			msfp_language: { a: 'msfp_language' },
			msfp_locale: { a: 'msfp_locale' },
			msfp_name: { a: 'msfp_name' },
			msfp_npsscore: { a: 'msfp_npsscore' },
			msfp_otherproperties: { a: 'msfp_otherproperties' },
			msfp_respondent: { a: 'msfp_respondent' },
			msfp_respondentemailaddress: { a: 'msfp_respondentemailaddress' },
			msfp_sentiment: { a: 'msfp_sentiment' },
			msfp_sourceresponseidentifier: { a: 'msfp_sourceresponseidentifier' },
			msfp_sourcesurveyidentifier: { a: 'msfp_sourcesurveyidentifier' },
			msfp_Startdate_UtcDateOnly: { a: 'msfp_startdate' },
			msfp_submitdate_UtcDateOnly: { a: 'msfp_submitdate' },
			msfp_surveyid: { b: 'msfp_surveyid', a: '_msfp_surveyid_value', c: 'msfp_surveies', d: 'msfp_survey' },
			msfp_surveyinviteid: { b: 'msfp_surveyinviteid', a: '_msfp_surveyinviteid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PostponeActivityProcessingUntil_UtcDateAndTime: { a: 'postponeactivityprocessinguntil', r: true },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_msfp_surveyresponse: { b: 'regardingobjectid_account_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_msfp_surveyresponse: { b: 'regardingobjectid_bookableresourcebooking_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_msfp_surveyresponse: { b: 'regardingobjectid_bookableresourcebookingheader_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_msfp_surveyresponse: { b: 'regardingobjectid_bulkoperation_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_msfp_surveyresponse: { b: 'regardingobjectid_campaign_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_msfp_surveyresponse: { b: 'regardingobjectid_campaignactivity_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_msfp_surveyresponse: { b: 'regardingobjectid_contact_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_msfp_surveyresponse: { b: 'regardingobjectid_contract_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_msfp_surveyresponse: { b: 'regardingobjectid_entitlement_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_msfp_surveyresponse: { b: 'regardingobjectid_entitlementtemplate_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_msfp_surveyresponse: { b: 'regardingobjectid_incident_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_new_interactionforemail_msfp_surveyresponse: { b: 'regardingobjectid_new_interactionforemail_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_invoice_msfp_surveyresponse: { b: 'regardingobjectid_invoice_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_msfp_surveyresponse: { b: 'regardingobjectid_knowledgearticle_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_msfp_surveyresponse: { b: 'regardingobjectid_knowledgebaserecord_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_msfp_surveyresponse: { b: 'regardingobjectid_lead_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_playbookinstance_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_playbookinstance_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_postalbum_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_opportunity_msfp_surveyresponse: { b: 'regardingobjectid_opportunity_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_msfp_surveyresponse: { b: 'regardingobjectid_quote_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_msfp_surveyresponse: { b: 'regardingobjectid_salesorder_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_msfp_surveyresponse: { b: 'regardingobjectid_site_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
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
			Subject: { a: 'subject' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msfp_surveyresponse) {
			var a = msfp_surveyresponse[field].a;
			var b = msfp_surveyresponse[field].b;
			var c = msfp_surveyresponse[field].c;
			var d = msfp_surveyresponse[field].d;
			var g = msfp_surveyresponse[field].g;
			var r = msfp_surveyresponse[field].r;
			msfp_surveyresponse[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(msfp_surveyresponse, 'ActivityParties', {
			get: function () { return e['msfp_surveyresponse_activity_parties']; },
			set: function (value) {
				e['msfp_surveyresponse_activity_parties'] = value;
				u['msfp_surveyresponse_activity_parties'] = value;
			}
		});
		msfp_surveyresponse.Entity = u;
		msfp_surveyresponse.EntityName = 'msfp_surveyresponse';
		msfp_surveyresponse.EntityCollectionName = 'msfp_surveyresponses';
		msfp_surveyresponse['@odata.etag'] = e['@odata.etag'];
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
			msfp_sentiment: {
				Positive: 647390000,
				Neutral: 647390001,
				Negative: 647390002
			},
			PriorityCode: {
				Low: 0,
				Normal: 1,
				High: 2
			},
			StateCode: {
				Open: 0,
				Completed: 1,
				Canceled: 2,
				Scheduled: 3
			},
			StatusCode: {
				Open: 1,
				Completed: 2,
				Canceled: 3,
				Scheduled: 4
			}
		};
		msfp_surveyresponse.OptionSet = optionSet;
		msfp_surveyresponse.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msfp_surveyresponse.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msfp_surveyresponse;
	};
})(Hsbc || (Hsbc = {}));