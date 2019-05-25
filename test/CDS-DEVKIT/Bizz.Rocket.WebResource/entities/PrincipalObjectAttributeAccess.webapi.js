'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.PrincipalObjectAttributeAccessApi = function (e) {
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
		var principalobjectattributeaccess = {
			AttributeId: { a: 'attributeid' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_businessunit: { b: 'objectid_businessunit', a: '_objectid_value', c: 'businessunits', d: 'businessunit' },
			channelaccessprofile_principalobjectattributeaccess: { b: 'channelaccessprofile_principalobjectattributeaccess', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			objectid_connection: { b: 'objectid_connection', a: '_objectid_value', c: 'connections', d: 'connection' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_customeraddress: { b: 'objectid_customeraddress', a: '_objectid_value', c: 'customeraddresses', d: 'customeraddress' },
			objectid_devkit_customactivity: { b: 'objectid_devkit_customactivity', a: '_objectid_value', c: 'devkit_customactivities', d: 'devkit_customactivity' },
			objectid_devkit_processwebapi1: { b: 'objectid_devkit_processwebapi1', a: '_objectid_value', c: 'devkit_processwebapi1s', d: 'devkit_processwebapi1' },
			objectid_devkit_webapi: { b: 'objectid_devkit_webapi', a: '_objectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_feedback: { b: 'objectid_feedback', a: '_objectid_value', c: 'feedback', d: 'feedback' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_holidaywrapper: { b: 'objectid_holidaywrapper', a: '_objectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgearticleviews: { b: 'objectid_knowledgearticleviews', a: '_objectid_value', c: 'knowledgearticleviews', d: 'knowledgearticleviews' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_mailmergetemplate: { b: 'objectid_mailmergetemplate', a: '_objectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			objectid_msdyn_connector: { b: 'objectid_msdyn_connector', a: '_objectid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_position: { b: 'objectid_position', a: '_objectid_value', c: 'positions', d: 'position' },
			objectid_queue: { b: 'objectid_queue', a: '_objectid_value', c: 'queues', d: 'queue' },
			objectid_queueitem: { b: 'objectid_queueitem', a: '_objectid_value', c: 'queueitems', d: 'queueitem' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_reportcategory: { b: 'objectid_reportcategory', a: '_objectid_value', c: 'reportcategories', d: 'reportcategory' },
			objectid_sharepointdocumentlocation: { b: 'objectid_sharepointdocumentlocation', a: '_objectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			objectid_sharepointsite: { b: 'objectid_sharepointsite', a: '_objectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_socialprofile: { b: 'objectid_socialprofile', a: '_objectid_value', c: 'socialprofiles', d: 'socialprofile' },
			objectid_systemuser: { b: 'objectid_systemuser', a: '_objectid_value', c: 'systemusers', d: 'systemuser' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_team: { b: 'objectid_team', a: '_objectid_value', c: 'teams', d: 'team' },
			objectid_territory: { b: 'objectid_territory', a: '_objectid_value', c: 'territories', d: 'territory' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			principalid_systemuser: { b: 'principalid_systemuser', a: '_principalid_value', c: 'systemusers', d: 'systemuser' },
			principalid_team: { b: 'principalid_team', a: '_principalid_value', c: 'teams', d: 'team' },
			PrincipalObjectAttributeAccessId: { a: 'principalobjectattributeaccessid' },
			ReadAccess: { a: 'readaccess' },
			UpdateAccess: { a: 'updateaccess' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in principalobjectattributeaccess) {
			var a = principalobjectattributeaccess[field].a;
			var b = principalobjectattributeaccess[field].b;
			var c = principalobjectattributeaccess[field].c;
			var d = principalobjectattributeaccess[field].d;
			var g = principalobjectattributeaccess[field].g;
			var r = principalobjectattributeaccess[field].r;
			principalobjectattributeaccess[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		principalobjectattributeaccess.Entity = u;
		principalobjectattributeaccess.EntityName = 'principalobjectattributeaccess';
		principalobjectattributeaccess.EntityCollectionName = 'principalobjectattributeaccesses';
		principalobjectattributeaccess['@odata.etag'] = e['@odata.etag'];
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
		principalobjectattributeaccess.OptionSet = optionSet;
		principalobjectattributeaccess.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		principalobjectattributeaccess.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return principalobjectattributeaccess;
	};
})(Rocket || (Rocket = {}));