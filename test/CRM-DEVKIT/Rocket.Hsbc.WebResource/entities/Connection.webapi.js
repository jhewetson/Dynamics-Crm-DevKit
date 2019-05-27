'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.ConnectionApi = function (e) {
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
		var connection = {
			ConnectionId: { a: 'connectionid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			EffectiveEnd_UtcDateOnly: { a: 'effectiveend' },
			EffectiveStart_UtcDateOnly: { a: 'effectivestart' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsMaster: { a: 'ismaster', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			record1id_account: { b: 'record1id_account', a: '_record1id_value', c: 'accounts', d: 'account' },
			record1id_activitypointer: { b: 'record1id_activitypointer', a: '_record1id_value', c: 'activitypointers', d: 'activitypointer' },
			record1id_appointment: { b: 'record1id_appointment', a: '_record1id_value', c: 'appointments', d: 'appointment' },
			record1id_campaign: { b: 'record1id_campaign', a: '_record1id_value', c: 'campaigns', d: 'campaign' },
			record1id_campaignactivity: { b: 'record1id_campaignactivity', a: '_record1id_value', c: 'campaignactivities', d: 'campaignactivity' },
			profileruleid1: { b: 'profileruleid1', a: '_record1id_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			record1id_competitor: { b: 'record1id_competitor', a: '_record1id_value', c: 'competitors', d: 'competitor' },
			record1id_constraintbasedgroup: { b: 'record1id_constraintbasedgroup', a: '_record1id_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			record1id_contact: { b: 'record1id_contact', a: '_record1id_value', c: 'contacts', d: 'contact' },
			record1id_contract: { b: 'record1id_contract', a: '_record1id_value', c: 'contracts', d: 'contract' },
			record1id_email: { b: 'record1id_email', a: '_record1id_value', c: 'emails', d: 'email' },
			record1id_entitlement: { b: 'record1id_entitlement', a: '_record1id_value', c: 'entitlements', d: 'entitlement' },
			record1id_entitlementchannel: { b: 'record1id_entitlementchannel', a: '_record1id_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			record1id_entitlementtemplatechannel: { b: 'record1id_entitlementtemplatechannel', a: '_record1id_value', c: 'entitlementtemplatechannels', d: 'entitlementtemplatechannel' },
			record1id_equipment: { b: 'record1id_equipment', a: '_record1id_value', c: 'equipments', d: 'equipment' },
			record1id_fax: { b: 'record1id_fax', a: '_record1id_value', c: 'faxes', d: 'fax' },
			record1id_goal: { b: 'record1id_goal', a: '_record1id_value', c: 'goals', d: 'goal' },
			record1id_incident: { b: 'record1id_incident', a: '_record1id_value', c: 'incidents', d: 'incident' },
			record1id_invoice: { b: 'record1id_invoice', a: '_record1id_value', c: 'invoices', d: 'invoice' },
			record1id_knowledgearticle: { b: 'record1id_knowledgearticle', a: '_record1id_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			record1id_knowledgebaserecord: { b: 'record1id_knowledgebaserecord', a: '_record1id_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			record1id_lead: { b: 'record1id_lead', a: '_record1id_value', c: 'leads', d: 'lead' },
			record1id_letter: { b: 'record1id_letter', a: '_record1id_value', c: 'letters', d: 'letter' },
			record1id_list: { b: 'record1id_list', a: '_record1id_value', c: 'lists', d: 'list' },
			record1id_msdyn_postalbum: { b: 'record1id_msdyn_postalbum', a: '_record1id_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			record1id_msfp_surveyinvite: { b: 'record1id_msfp_surveyinvite', a: '_record1id_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			record1id_msfp_surveyresponse: { b: 'record1id_msfp_surveyresponse', a: '_record1id_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			record1id_opportunity: { b: 'record1id_opportunity', a: '_record1id_value', c: 'opportunities', d: 'opportunity' },
			record1id_phonecall: { b: 'record1id_phonecall', a: '_record1id_value', c: 'phonecalls', d: 'phonecall' },
			record1id_position: { b: 'record1id_position', a: '_record1id_value', c: 'positions', d: 'position' },
			record1id_pricelevel: { b: 'record1id_pricelevel', a: '_record1id_value', c: 'pricelevels', d: 'pricelevel' },
			record1id_processsession: { b: 'record1id_processsession', a: '_record1id_value', c: 'processsessions', d: 'processsession' },
			record1id_product: { b: 'record1id_product', a: '_record1id_value', c: 'products', d: 'product' },
			record1id_quote: { b: 'record1id_quote', a: '_record1id_value', c: 'quotes', d: 'quote' },
			record1id_recurringappointmentmaster: { b: 'record1id_recurringappointmentmaster', a: '_record1id_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			record1id_resourcegroup: { b: 'record1id_resourcegroup', a: '_record1id_value', c: 'resourcegroups', d: 'resourcegroup' },
			record1id_salesorder: { b: 'record1id_salesorder', a: '_record1id_value', c: 'salesorders', d: 'salesorder' },
			record1id_serviceappointment: { b: 'record1id_serviceappointment', a: '_record1id_value', c: 'serviceappointments', d: 'serviceappointment' },
			record1id_socialactivity: { b: 'record1id_socialactivity', a: '_record1id_value', c: 'socialactivities', d: 'socialactivity' },
			record1id_socialprofile: { b: 'record1id_socialprofile', a: '_record1id_value', c: 'socialprofiles', d: 'socialprofile' },
			record1id_systemuser: { b: 'record1id_systemuser', a: '_record1id_value', c: 'systemusers', d: 'systemuser' },
			record1id_task: { b: 'record1id_task', a: '_record1id_value', c: 'tasks', d: 'task' },
			record1id_team: { b: 'record1id_team', a: '_record1id_value', c: 'teams', d: 'team' },
			record1id_territory: { b: 'record1id_territory', a: '_record1id_value', c: 'territories', d: 'territory' },
			Record1ObjectTypeCode: { a: 'record1objecttypecode', r: true },
			Record1RoleId: { b: 'record1roleid', a: '_record1roleid_value', c: 'connectionroles', d: 'connectionrole' },
			record2id_account: { b: 'record2id_account', a: '_record2id_value', c: 'accounts', d: 'account' },
			record2id_activitypointer: { b: 'record2id_activitypointer', a: '_record2id_value', c: 'activitypointers', d: 'activitypointer' },
			record2id_appointment: { b: 'record2id_appointment', a: '_record2id_value', c: 'appointments', d: 'appointment' },
			record2id_campaign: { b: 'record2id_campaign', a: '_record2id_value', c: 'campaigns', d: 'campaign' },
			record2id_campaignactivity: { b: 'record2id_campaignactivity', a: '_record2id_value', c: 'campaignactivities', d: 'campaignactivity' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_record2id_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			record2id_competitor: { b: 'record2id_competitor', a: '_record2id_value', c: 'competitors', d: 'competitor' },
			record2id_constraintbasedgroup: { b: 'record2id_constraintbasedgroup', a: '_record2id_value', c: 'constraintbasedgroups', d: 'constraintbasedgroup' },
			record2id_contact: { b: 'record2id_contact', a: '_record2id_value', c: 'contacts', d: 'contact' },
			record2id_contract: { b: 'record2id_contract', a: '_record2id_value', c: 'contracts', d: 'contract' },
			record2id_email: { b: 'record2id_email', a: '_record2id_value', c: 'emails', d: 'email' },
			record2id_entitlement: { b: 'record2id_entitlement', a: '_record2id_value', c: 'entitlements', d: 'entitlement' },
			record2id_entitlementchannel: { b: 'record2id_entitlementchannel', a: '_record2id_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			record2id_entitlementtemplatechannel: { b: 'record2id_entitlementtemplatechannel', a: '_record2id_value', c: 'entitlementtemplatechannels', d: 'entitlementtemplatechannel' },
			record2id_equipment: { b: 'record2id_equipment', a: '_record2id_value', c: 'equipments', d: 'equipment' },
			record2id_fax: { b: 'record2id_fax', a: '_record2id_value', c: 'faxes', d: 'fax' },
			record2id_goal: { b: 'record2id_goal', a: '_record2id_value', c: 'goals', d: 'goal' },
			record2id_incident: { b: 'record2id_incident', a: '_record2id_value', c: 'incidents', d: 'incident' },
			record2id_invoice: { b: 'record2id_invoice', a: '_record2id_value', c: 'invoices', d: 'invoice' },
			record2id_knowledgearticle: { b: 'record2id_knowledgearticle', a: '_record2id_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			record2id_knowledgebaserecord: { b: 'record2id_knowledgebaserecord', a: '_record2id_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			record2id_lead: { b: 'record2id_lead', a: '_record2id_value', c: 'leads', d: 'lead' },
			record2id_letter: { b: 'record2id_letter', a: '_record2id_value', c: 'letters', d: 'letter' },
			record2id_list: { b: 'record2id_list', a: '_record2id_value', c: 'lists', d: 'list' },
			record2id_msdyn_postalbum: { b: 'record2id_msdyn_postalbum', a: '_record2id_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			record2id_msfp_surveyinvite: { b: 'record2id_msfp_surveyinvite', a: '_record2id_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			record2id_msfp_surveyresponse: { b: 'record2id_msfp_surveyresponse', a: '_record2id_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			record2id_opportunity: { b: 'record2id_opportunity', a: '_record2id_value', c: 'opportunities', d: 'opportunity' },
			record2id_phonecall: { b: 'record2id_phonecall', a: '_record2id_value', c: 'phonecalls', d: 'phonecall' },
			record2id_position: { b: 'record2id_position', a: '_record2id_value', c: 'positions', d: 'position' },
			record2id_pricelevel: { b: 'record2id_pricelevel', a: '_record2id_value', c: 'pricelevels', d: 'pricelevel' },
			record2id_processsession: { b: 'record2id_processsession', a: '_record2id_value', c: 'processsessions', d: 'processsession' },
			record2id_product: { b: 'record2id_product', a: '_record2id_value', c: 'products', d: 'product' },
			record2id_quote: { b: 'record2id_quote', a: '_record2id_value', c: 'quotes', d: 'quote' },
			record2id_recurringappointmentmaster: { b: 'record2id_recurringappointmentmaster', a: '_record2id_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			record2id_resourcegroup: { b: 'record2id_resourcegroup', a: '_record2id_value', c: 'resourcegroups', d: 'resourcegroup' },
			record2id_salesorder: { b: 'record2id_salesorder', a: '_record2id_value', c: 'salesorders', d: 'salesorder' },
			record2id_serviceappointment: { b: 'record2id_serviceappointment', a: '_record2id_value', c: 'serviceappointments', d: 'serviceappointment' },
			record2id_socialactivity: { b: 'record2id_socialactivity', a: '_record2id_value', c: 'socialactivities', d: 'socialactivity' },
			record2id_socialprofile: { b: 'record2id_socialprofile', a: '_record2id_value', c: 'socialprofiles', d: 'socialprofile' },
			record2id_systemuser: { b: 'record2id_systemuser', a: '_record2id_value', c: 'systemusers', d: 'systemuser' },
			record2id_task: { b: 'record2id_task', a: '_record2id_value', c: 'tasks', d: 'task' },
			record2id_team: { b: 'record2id_team', a: '_record2id_value', c: 'teams', d: 'team' },
			record2id_territory: { b: 'record2id_territory', a: '_record2id_value', c: 'territories', d: 'territory' },
			Record2ObjectTypeCode: { a: 'record2objecttypecode', r: true },
			Record2RoleId: { b: 'record2roleid', a: '_record2roleid_value', c: 'connectionroles', d: 'connectionrole' },
			RelatedConnectionId: { b: 'relatedconnectionid', a: '_relatedconnectionid_value', c: 'connections', d: 'connection', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in connection) {
			var a = connection[field].a;
			var b = connection[field].b;
			var c = connection[field].c;
			var d = connection[field].d;
			var g = connection[field].g;
			var r = connection[field].r;
			connection[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		connection.Entity = u;
		connection.EntityName = 'connection';
		connection.EntityCollectionName = 'connections';
		connection['@odata.etag'] = e['@odata.etag'];
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
			Record1ObjectTypeCode: {
				Product: 1024,
				Campaign: 4400,
				Order: 1088,
				Entitlement_Template_Channel: 9703,
				Recurring_Appointment: 4251,
				Entitlement: 9700,
				Campaign_Activity: 4402,
				Territory: 2013,
				Fax: 4204,
				Service_Activity: 4214,
				Survey_response: 10042,
				Process_Session: 4710,
				Contract: 1010,
				Price_List: 1022,
				Case: 112,
				Opportunity: 3,
				Marketing_List: 4300,
				Social_Profile: 99,
				Task: 4212,
				Phone_Call: 4210,
				Channel_Access_Profile_Rule: 9400,
				Team: 9,
				Goal: 9600,
				Activity: 4200,
				Scheduling_Group: 4005,
				User: 8,
				Lead: 4,
				Competitor: 123,
				FacilityEquipment: 4000,
				Quote: 1084,
				Knowledge_Article: 9953,
				Letter: 4207,
				Resource_Group: 4007,
				Appointment: 4201,
				Entitlement_Channel: 9701,
				Email: 4202,
				Contact: 2,
				Invoice: 1090,
				Position: 50,
				Account: 1,
				Profile_Album: 10032,
				Social_Activity: 4216,
				Survey_invite: 10041,
				Knowledge_Base_Record: 9930
			},
			Record2ObjectTypeCode: {
				Contact: 2,
				Phone_Call: 4210,
				Team: 9,
				Competitor: 123,
				Service_Activity: 4214,
				Recurring_Appointment: 4251,
				Invoice: 1090,
				Process_Session: 4710,
				Channel_Access_Profile_Rule: 9400,
				Fax: 4204,
				Position: 50,
				Profile_Album: 10032,
				Social_Activity: 4216,
				Quote: 1084,
				Survey_invite: 10041,
				Campaign_Activity: 4402,
				Price_List: 1022,
				Letter: 4207,
				Entitlement_Template_Channel: 9703,
				Email: 4202,
				Knowledge_Article: 9953,
				User: 8,
				Appointment: 4201,
				Resource_Group: 4007,
				Order: 1088,
				Entitlement_Channel: 9701,
				Case: 112,
				Entitlement: 9700,
				Goal: 9600,
				Social_Profile: 99,
				Activity: 4200,
				Campaign: 4400,
				Opportunity: 3,
				Scheduling_Group: 4005,
				Knowledge_Base_Record: 9930,
				Task: 4212,
				Product: 1024,
				Territory: 2013,
				Contract: 1010,
				Marketing_List: 4300,
				Survey_response: 10042,
				FacilityEquipment: 4000,
				Lead: 4,
				Account: 1
			},
			StateCode: {
				Active: 0,
				Inactive: 1
			},
			StatusCode: {
				Active: 1,
				Inactive: 2
			}
		};
		connection.OptionSet = optionSet;
		connection.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		connection.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return connection;
	};
})(Hsbc || (Hsbc = {}));