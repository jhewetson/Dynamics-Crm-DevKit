'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.BulkDeleteFailureApi = function (e) {
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
		var bulkdeletefailure = {
			AsyncOperationId: { b: 'asyncoperationid', a: '_asyncoperationid_value', c: 'asyncoperations', d: 'asyncoperation', r: true },
			BulkDeleteFailureId: { a: 'bulkdeletefailureid', r: true },
			BulkDeleteOperationId: { b: 'bulkdeleteoperationid', a: '_bulkdeleteoperationid_value', c: 'bulkdeleteoperations', d: 'bulkdeleteoperation', r: true },
			ErrorDescription: { a: 'errordescription', r: true },
			ErrorNumber: { a: 'errornumber', r: true },
			OrderedQueryIndex: { a: 'orderedqueryindex', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_activitymimeattachment: { b: 'regardingobjectid_activitymimeattachment', a: '_regardingobjectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			regardingobjectid_activitypointer: { b: 'regardingobjectid_activitypointer', a: '_regardingobjectid_value', c: 'activitypointers', d: 'activitypointer' },
			regardingobjectid_annotation: { b: 'regardingobjectid_annotation', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_annualfiscalcalendar: { b: 'regardingobjectid_annualfiscalcalendar', a: '_regardingobjectid_value', c: 'annualfiscalcalendars', d: 'annualfiscalcalendar' },
			regardingobjectid_appointment: { b: 'regardingobjectid_appointment', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_attributemap: { b: 'regardingobjectid_attributemap', a: '_regardingobjectid_value', c: 'attributemaps', d: 'attributemap' },
			regardingobjectid_businessunit: { b: 'regardingobjectid_businessunit', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_businessunitnewsarticle: { b: 'regardingobjectid_businessunitnewsarticle', a: '_regardingobjectid_value', c: 'businessunitnewsarticles', d: 'businessunitnewsarticle' },
			regardingobjectid_calendar: { b: 'regardingobjectid_calendar', a: '_regardingobjectid_value', c: 'calendars', d: 'calendar' },
			channelaccessprofile_bulkdeletefailures: { b: 'channelaccessprofile_bulkdeletefailures', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_customeraddress: { b: 'regardingobjectid_customeraddress', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
			regardingobjectid_customerrelationship: { b: 'regardingobjectid_customerrelationship', a: '_regardingobjectid_value', c: 'customerrelationships', d: 'customerrelationship' },
			regardingobjectid_devkit_customactivity: { b: 'regardingobjectid_devkit_customactivity', a: '_regardingobjectid_value', c: 'devkit_customactivities', d: 'devkit_customactivity' },
			regardingobjectid_devkit_processwebapi1: { b: 'regardingobjectid_devkit_processwebapi1', a: '_regardingobjectid_value', c: 'devkit_processwebapi1s', d: 'devkit_processwebapi1' },
			regardingobjectid_devkit_webapi: { b: 'regardingobjectid_devkit_webapi', a: '_regardingobjectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			regardingobjectid_displaystring: { b: 'regardingobjectid_displaystring', a: '_regardingobjectid_value', c: 'displaystrings', d: 'displaystring' },
			regardingobjectid_email: { b: 'regardingobjectid_email', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_emailserverprofile: { b: 'regardingobjectid_emailserverprofile', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			regardingobjectid_entitymap: { b: 'regardingobjectid_entitymap', a: '_regardingobjectid_value', c: 'entitymaps', d: 'entitymap' },
			externalparty_bulkdeletefailures: { b: 'externalparty_bulkdeletefailures', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			externalpartyitem_bulkdeletefailures: { b: 'externalpartyitem_bulkdeletefailures', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fax: { b: 'regardingobjectid_fax', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_fixedmonthlyfiscalcalendar: { b: 'regardingobjectid_fixedmonthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'fixedmonthlyfiscalcalendars', d: 'fixedmonthlyfiscalcalendar' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_import: { b: 'regardingobjectid_import', a: '_regardingobjectid_value', c: 'imports', d: 'import' },
			regardingobjectid_importdata: { b: 'regardingobjectid_importdata', a: '_regardingobjectid_value', c: 'importdatas', d: 'importdata' },
			regardingobjectid_importfile: { b: 'regardingobjectid_importfile', a: '_regardingobjectid_value', c: 'importfiles', d: 'importfile' },
			regardingobjectid_importlog: { b: 'regardingobjectid_importlog', a: '_regardingobjectid_value', c: 'importlogs', d: 'importlog' },
			regardingobjectid_importmap: { b: 'regardingobjectid_importmap', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap' },
			regardingobjectid_isvconfig: { b: 'regardingobjectid_isvconfig', a: '_regardingobjectid_value', c: 'isvconfigs', d: 'isvconfig' },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_kbarticlecomment: { b: 'regardingobjectid_kbarticlecomment', a: '_regardingobjectid_value', c: 'kbarticlecomments', d: 'kbarticlecomment' },
			regardingobjectid_kbarticletemplate: { b: 'regardingobjectid_kbarticletemplate', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord: { b: 'regardingobjectid_knowledgebaserecord', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_letter: { b: 'regardingobjectid_letter', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_monthlyfiscalcalendar: { b: 'regardingobjectid_monthlyfiscalcalendar', a: '_regardingobjectid_value', c: 'monthlyfiscalcalendars', d: 'monthlyfiscalcalendar' },
			regardingobjectid_msdyn_connector: { b: 'regardingobjectid_msdyn_connector', a: '_regardingobjectid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			regardingobjectid_organization: { b: 'regardingobjectid_organization', a: '_regardingobjectid_value', c: 'organizations', d: 'organization' },
			regardingobjectid_phonecall: { b: 'regardingobjectid_phonecall', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_post: { b: 'regardingobjectid_post', a: '_regardingobjectid_value', c: 'posts', d: 'post' },
			regardingobjectid_privilege: { b: 'regardingobjectid_privilege', a: '_regardingobjectid_value', c: 'privileges', d: 'privilege' },
			regardingobjectid_quarterlyfiscalcalendar: { b: 'regardingobjectid_quarterlyfiscalcalendar', a: '_regardingobjectid_value', c: 'quarterlyfiscalcalendars', d: 'quarterlyfiscalcalendar' },
			regardingobjectid_queue: { b: 'regardingobjectid_queue', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem: { b: 'regardingobjectid_queueitem', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_recurringappointmentmaster: { b: 'regardingobjectid_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_relationshiprole: { b: 'regardingobjectid_relationshiprole', a: '_regardingobjectid_value', c: 'relationshiproles', d: 'relationshiprole' },
			regardingobjectid_relationshiprolemap: { b: 'regardingobjectid_relationshiprolemap', a: '_regardingobjectid_value', c: 'relationshiprolemaps', d: 'relationshiprolemap' },
			regardingobjectid_role: { b: 'regardingobjectid_role', a: '_regardingobjectid_value', c: 'roles', d: 'role' },
			regardingobjectid_routingrule: { b: 'regardingobjectid_routingrule', a: '_regardingobjectid_value', c: 'routingrules', d: 'routingrule' },
			regardingobjectid_routingruleitem: { b: 'regardingobjectid_routingruleitem', a: '_regardingobjectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			regardingobjectid_savedquery: { b: 'regardingobjectid_savedquery', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery' },
			regardingobjectid_semiannualfiscalcalendar: { b: 'regardingobjectid_semiannualfiscalcalendar', a: '_regardingobjectid_value', c: 'semiannualfiscalcalendars', d: 'semiannualfiscalcalendar' },
			regardingobjectid_sla: { b: 'regardingobjectid_sla', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_socialactivity: { b: 'regardingobjectid_socialactivity', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_subject: { b: 'regardingobjectid_subject', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_systemform: { b: 'regardingobjectid_systemform', a: '_regardingobjectid_value', c: 'systemforms', d: 'systemform' },
			regardingobjectid_systemuser: { b: 'regardingobjectid_systemuser', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_task: { b: 'regardingobjectid_task', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			regardingobjectid_team: { b: 'regardingobjectid_team', a: '_regardingobjectid_value', c: 'teams', d: 'team' },
			regardingobjectid_template: { b: 'regardingobjectid_template', a: '_regardingobjectid_value', c: 'templates', d: 'template' },
			regardingobjectid_territory: { b: 'regardingobjectid_territory', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_theme: { b: 'regardingobjectid_theme', a: '_regardingobjectid_value', c: 'themes', d: 'theme' },
			regardingobjectid_userform: { b: 'regardingobjectid_userform', a: '_regardingobjectid_value', c: 'userforms', d: 'userform' },
			regardingobjectid_usermapping: { b: 'regardingobjectid_usermapping', a: '_regardingobjectid_value', c: 'usermappings', d: 'usermapping' },
			regardingobjectid_userquery: { b: 'regardingobjectid_userquery', a: '_regardingobjectid_value', c: 'userqueries', d: 'userquery', r: true },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in bulkdeletefailure) {
			var a = bulkdeletefailure[field].a;
			var b = bulkdeletefailure[field].b;
			var c = bulkdeletefailure[field].c;
			var d = bulkdeletefailure[field].d;
			var g = bulkdeletefailure[field].g;
			var r = bulkdeletefailure[field].r;
			bulkdeletefailure[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		bulkdeletefailure.Entity = u;
		bulkdeletefailure.EntityName = 'bulkdeletefailure';
		bulkdeletefailure.EntityCollectionName = 'bulkdeletefailures';
		bulkdeletefailure['@odata.etag'] = e['@odata.etag'];
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
		bulkdeletefailure.OptionSet = optionSet;
		bulkdeletefailure.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		bulkdeletefailure.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return bulkdeletefailure;
	};
})(Rocket || (Rocket = {}));