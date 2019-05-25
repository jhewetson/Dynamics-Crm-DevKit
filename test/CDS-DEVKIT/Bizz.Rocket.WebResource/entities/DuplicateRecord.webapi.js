'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.DuplicateRecordApi = function (e) {
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
		var duplicaterecord = {
			AsyncOperationId: { b: 'asyncoperationid', a: '_asyncoperationid_value', c: 'asyncoperations', d: 'asyncoperation', r: true },
			baserecordid_account: { b: 'baserecordid_account', a: '_baserecordid_value', c: 'accounts', d: 'account' },
			baserecordid_appointment: { b: 'baserecordid_appointment', a: '_baserecordid_value', c: 'appointments', d: 'appointment' },
			channelaccessprofile_duplicatebaserecord: { b: 'channelaccessprofile_duplicatebaserecord', a: '_baserecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			baserecordid_contact: { b: 'baserecordid_contact', a: '_baserecordid_value', c: 'contacts', d: 'contact' },
			baserecordid_email: { b: 'baserecordid_email', a: '_baserecordid_value', c: 'emails', d: 'email' },
			baserecordid_emailserverprofile: { b: 'baserecordid_emailserverprofile', a: '_baserecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			baserecordid_fax: { b: 'baserecordid_fax', a: '_baserecordid_value', c: 'faxes', d: 'fax' },
			baserecordid_feedback: { b: 'baserecordid_feedback', a: '_baserecordid_value', c: 'feedback', d: 'feedback' },
			baserecordid_goal: { b: 'baserecordid_goal', a: '_baserecordid_value', c: 'goals', d: 'goal' },
			baserecordid_goalrollupquery: { b: 'baserecordid_goalrollupquery', a: '_baserecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			baserecordid_kbarticle: { b: 'baserecordid_kbarticle', a: '_baserecordid_value', c: 'kbarticles', d: 'kbarticle' },
			baserecordid_knowledgearticle: { b: 'baserecordid_knowledgearticle', a: '_baserecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			baserecordid_knowledgebaserecord: { b: 'baserecordid_knowledgebaserecord', a: '_baserecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			baserecordid_letter: { b: 'baserecordid_letter', a: '_baserecordid_value', c: 'letters', d: 'letter' },
			baserecordid_msdyn_connector: { b: 'baserecordid_msdyn_connector', a: '_baserecordid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			baserecordid_phonecall: { b: 'baserecordid_phonecall', a: '_baserecordid_value', c: 'phonecalls', d: 'phonecall' },
			baserecordid_publisher: { b: 'baserecordid_publisher', a: '_baserecordid_value', c: 'publishers', d: 'publisher' },
			baserecordid_queue: { b: 'baserecordid_queue', a: '_baserecordid_value', c: 'queues', d: 'queue' },
			baserecordid_recurringappointmentmaster: { b: 'baserecordid_recurringappointmentmaster', a: '_baserecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			baserecordid_sharepointdocumentlocation: { b: 'baserecordid_sharepointdocumentlocation', a: '_baserecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			baserecordid_sharepointsite: { b: 'baserecordid_sharepointsite', a: '_baserecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			baserecordid_socialactivity: { b: 'baserecordid_socialactivity', a: '_baserecordid_value', c: 'socialactivities', d: 'socialactivity' },
			baserecordid_socialprofile: { b: 'baserecordid_socialprofile', a: '_baserecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			baserecordid_systemuser: { b: 'baserecordid_systemuser', a: '_baserecordid_value', c: 'systemusers', d: 'systemuser' },
			baserecordid_task: { b: 'baserecordid_task', a: '_baserecordid_value', c: 'tasks', d: 'task' },
			baserecordid_team: { b: 'baserecordid_team', a: '_baserecordid_value', c: 'teams', d: 'team' },
			baserecordid_transactioncurrency: { b: 'baserecordid_transactioncurrency', a: '_baserecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			DuplicateId: { a: 'duplicateid' },
			duplicaterecordid_account: { b: 'duplicaterecordid_account', a: '_duplicaterecordid_value', c: 'accounts', d: 'account' },
			duplicaterecordid_appointment: { b: 'duplicaterecordid_appointment', a: '_duplicaterecordid_value', c: 'appointments', d: 'appointment' },
			channelaccessprofile_duplicatematchingrecord: { b: 'channelaccessprofile_duplicatematchingrecord', a: '_duplicaterecordid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			duplicaterecordid_contact: { b: 'duplicaterecordid_contact', a: '_duplicaterecordid_value', c: 'contacts', d: 'contact' },
			duplicaterecordid_email: { b: 'duplicaterecordid_email', a: '_duplicaterecordid_value', c: 'emails', d: 'email' },
			duplicaterecordid_emailserverprofile: { b: 'duplicaterecordid_emailserverprofile', a: '_duplicaterecordid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			duplicaterecordid_fax: { b: 'duplicaterecordid_fax', a: '_duplicaterecordid_value', c: 'faxes', d: 'fax' },
			duplicaterecordid_feedback: { b: 'duplicaterecordid_feedback', a: '_duplicaterecordid_value', c: 'feedback', d: 'feedback' },
			duplicaterecordid_goal: { b: 'duplicaterecordid_goal', a: '_duplicaterecordid_value', c: 'goals', d: 'goal' },
			duplicaterecordid_goalrollupquery: { b: 'duplicaterecordid_goalrollupquery', a: '_duplicaterecordid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			duplicaterecordid_kbarticle: { b: 'duplicaterecordid_kbarticle', a: '_duplicaterecordid_value', c: 'kbarticles', d: 'kbarticle' },
			duplicaterecordid_knowledgearticle: { b: 'duplicaterecordid_knowledgearticle', a: '_duplicaterecordid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			duplicaterecordid_knowledgebaserecord: { b: 'duplicaterecordid_knowledgebaserecord', a: '_duplicaterecordid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			duplicaterecordid_letter: { b: 'duplicaterecordid_letter', a: '_duplicaterecordid_value', c: 'letters', d: 'letter' },
			duplicaterecordid_msdyn_connector: { b: 'duplicaterecordid_msdyn_connector', a: '_duplicaterecordid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			duplicaterecordid_phonecall: { b: 'duplicaterecordid_phonecall', a: '_duplicaterecordid_value', c: 'phonecalls', d: 'phonecall' },
			duplicaterecordid_publisher: { b: 'duplicaterecordid_publisher', a: '_duplicaterecordid_value', c: 'publishers', d: 'publisher' },
			duplicaterecordid_queue: { b: 'duplicaterecordid_queue', a: '_duplicaterecordid_value', c: 'queues', d: 'queue' },
			duplicaterecordid_recurringappointmentmaster: { b: 'duplicaterecordid_recurringappointmentmaster', a: '_duplicaterecordid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			duplicaterecordid_sharepointdocumentlocation: { b: 'duplicaterecordid_sharepointdocumentlocation', a: '_duplicaterecordid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			duplicaterecordid_sharepointsite: { b: 'duplicaterecordid_sharepointsite', a: '_duplicaterecordid_value', c: 'sharepointsites', d: 'sharepointsite' },
			duplicaterecordid_socialactivity: { b: 'duplicaterecordid_socialactivity', a: '_duplicaterecordid_value', c: 'socialactivities', d: 'socialactivity' },
			duplicaterecordid_socialprofile: { b: 'duplicaterecordid_socialprofile', a: '_duplicaterecordid_value', c: 'socialprofiles', d: 'socialprofile' },
			duplicaterecordid_systemuser: { b: 'duplicaterecordid_systemuser', a: '_duplicaterecordid_value', c: 'systemusers', d: 'systemuser' },
			duplicaterecordid_task: { b: 'duplicaterecordid_task', a: '_duplicaterecordid_value', c: 'tasks', d: 'task' },
			duplicaterecordid_team: { b: 'duplicaterecordid_team', a: '_duplicaterecordid_value', c: 'teams', d: 'team' },
			duplicaterecordid_transactioncurrency: { b: 'duplicaterecordid_transactioncurrency', a: '_duplicaterecordid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			DuplicateRuleId: { b: 'duplicateruleid', a: '_duplicateruleid_value', c: 'duplicaterules', d: 'duplicaterule', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in duplicaterecord) {
			var a = duplicaterecord[field].a;
			var b = duplicaterecord[field].b;
			var c = duplicaterecord[field].c;
			var d = duplicaterecord[field].d;
			var g = duplicaterecord[field].g;
			var r = duplicaterecord[field].r;
			duplicaterecord[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		duplicaterecord.Entity = u;
		duplicaterecord.EntityName = 'duplicaterecord';
		duplicaterecord.EntityCollectionName = 'duplicaterecords';
		duplicaterecord['@odata.etag'] = e['@odata.etag'];
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
		duplicaterecord.OptionSet = optionSet;
		duplicaterecord.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		duplicaterecord.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return duplicaterecord;
	};
})(Rocket || (Rocket = {}));