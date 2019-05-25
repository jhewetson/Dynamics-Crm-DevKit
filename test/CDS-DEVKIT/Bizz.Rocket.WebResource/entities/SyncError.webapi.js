'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.SyncErrorApi = function (e) {
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
		var syncerror = {
			Action: { a: 'action' },
			ActionData: { a: 'actiondata' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ErrorCode: { a: 'errorcode' },
			ErrorDetail: { a: 'errordetail' },
			ErrorMessage: { a: 'errormessage' },
			ErrorTime_UtcDateAndTime: { a: 'errortime' },
			ErrorType: { a: 'errortype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			regardingobjectid_account_syncerror: { b: 'regardingobjectid_account_syncerror', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_activitymimeattachment_syncerror: { b: 'regardingobjectid_activitymimeattachment_syncerror', a: '_regardingobjectid_value', c: 'activitymimeattachments', d: 'activitymimeattachment' },
			regardingobjectid_activityparty_syncerror: { b: 'regardingobjectid_activityparty_syncerror', a: '_regardingobjectid_value', c: 'activityparties', d: 'activityparty' },
			regardingobjectid_annotation_syncerror: { b: 'regardingobjectid_annotation_syncerror', a: '_regardingobjectid_value', c: 'annotations', d: 'annotation' },
			regardingobjectid_appointment_syncerror: { b: 'regardingobjectid_appointment_syncerror', a: '_regardingobjectid_value', c: 'appointments', d: 'appointment' },
			regardingobjectid_attachment_syncerror: { b: 'regardingobjectid_attachment_syncerror', a: '_regardingobjectid_value', c: 'attachments', d: 'attachment' },
			regardingobjectid_businessdatalocalizedlabel_syncerror: { b: 'regardingobjectid_businessdatalocalizedlabel_syncerror', a: '_regardingobjectid_value', c: 'businessdatalocalizedlabels', d: 'businessdatalocalizedlabel' },
			regardingobjectid_businessunit_syncerror: { b: 'regardingobjectid_businessunit_syncerror', a: '_regardingobjectid_value', c: 'businessunits', d: 'businessunit' },
			regardingobjectid_category_syncerror: { b: 'regardingobjectid_category_syncerror', a: '_regardingobjectid_value', c: 'categories ', d: 'category' },
			regardingobjectid_channelaccessprofile_syncerror: { b: 'regardingobjectid_channelaccessprofile_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			regardingobjectid_channelaccessprofilerule_syncerror: { b: 'regardingobjectid_channelaccessprofilerule_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			regardingobjectid_channelaccessprofileruleitem_syncerror: { b: 'regardingobjectid_channelaccessprofileruleitem_syncerror', a: '_regardingobjectid_value', c: 'channelaccessprofileruleitems', d: 'channelaccessprofileruleitem' },
			regardingobjectid_connection_syncerror: { b: 'regardingobjectid_connection_syncerror', a: '_regardingobjectid_value', c: 'connections', d: 'connection' },
			regardingobjectid_connectionrole_syncerror: { b: 'regardingobjectid_connectionrole_syncerror', a: '_regardingobjectid_value', c: 'connectionroles', d: 'connectionrole' },
			regardingobjectid_contact_syncerror: { b: 'regardingobjectid_contact_syncerror', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_customeraddress_syncerror: { b: 'regardingobjectid_customeraddress_syncerror', a: '_regardingobjectid_value', c: 'customeraddresses', d: 'customeraddress' },
			regardingobjectid_devkit_customactivity: { b: 'regardingobjectid_devkit_customactivity', a: '_regardingobjectid_value', c: 'devkit_customactivities', d: 'devkit_customactivity' },
			regardingobjectid_devkit_processwebapi1: { b: 'regardingobjectid_devkit_processwebapi1', a: '_regardingobjectid_value', c: 'devkit_processwebapi1s', d: 'devkit_processwebapi1' },
			regardingobjectid_devkit_webapi: { b: 'regardingobjectid_devkit_webapi', a: '_regardingobjectid_value', c: 'devkit_webapis', d: 'devkit_webapi' },
			regardingobjectid_duplicaterule_syncerror: { b: 'regardingobjectid_duplicaterule_syncerror', a: '_regardingobjectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			regardingobjectid_duplicaterulecondition_syncerror: { b: 'regardingobjectid_duplicaterulecondition_syncerror', a: '_regardingobjectid_value', c: 'duplicateruleconditions', d: 'duplicaterulecondition' },
			regardingobjectid_email_syncerror: { b: 'regardingobjectid_email_syncerror', a: '_regardingobjectid_value', c: 'emails', d: 'email' },
			regardingobjectid_emailserverprofile_syncerror: { b: 'regardingobjectid_emailserverprofile_syncerror', a: '_regardingobjectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			regardingobjectid_ExpiredProcess_syncerror: { b: 'regardingobjectid_ExpiredProcess_syncerror', a: '_regardingobjectid_value', c: 'expiredprocesses', d: 'expiredprocess' },
			regardingobjectid_externalparty_syncerror: { b: 'regardingobjectid_externalparty_syncerror', a: '_regardingobjectid_value', c: 'externalparties', d: 'externalparty' },
			regardingobjectid_externalpartyitem_syncerror: { b: 'regardingobjectid_externalpartyitem_syncerror', a: '_regardingobjectid_value', c: 'externalpartyitems', d: 'externalpartyitem' },
			regardingobjectid_fax_syncerror: { b: 'regardingobjectid_fax_syncerror', a: '_regardingobjectid_value', c: 'faxes', d: 'fax' },
			regardingobjectid_feedback_syncerror: { b: 'regardingobjectid_feedback_syncerror', a: '_regardingobjectid_value', c: 'feedback', d: 'feedback' },
			regardingobjectid_fieldpermission_syncerror: { b: 'regardingobjectid_fieldpermission_syncerror', a: '_regardingobjectid_value', c: 'fieldpermissions', d: 'fieldpermission' },
			regardingobjectid_fieldsecurityprofile_syncerror: { b: 'regardingobjectid_fieldsecurityprofile_syncerror', a: '_regardingobjectid_value', c: 'fieldsecurityprofiles', d: 'fieldsecurityprofile' },
			regardingobjectid_fileattachment_syncerror: { b: 'regardingobjectid_fileattachment_syncerror', a: '_regardingobjectid_value', c: 'fileattachments', d: 'fileattachment' },
			regardingobjectid_goal_syncerror: { b: 'regardingobjectid_goal_syncerror', a: '_regardingobjectid_value', c: 'goals', d: 'goal' },
			regardingobjectid_goalrollupquery_syncerror: { b: 'regardingobjectid_goalrollupquery_syncerror', a: '_regardingobjectid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			regardingobjectid_holidaywrapper: { b: 'regardingobjectid_holidaywrapper', a: '_regardingobjectid_value', c: 'holidaywrappers', d: 'holidaywrapper' },
			regardingobjectid_importmap_syncerror: { b: 'regardingobjectid_importmap_syncerror', a: '_regardingobjectid_value', c: 'importmaps', d: 'importmap' },
			regardingobjectid_internaladdress_syncerror: { b: 'regardingobjectid_internaladdress_syncerror', a: '_regardingobjectid_value', c: 'internaladdresses', d: 'internaladdress' },
			regardingobjectid_kbarticle_syncerror: { b: 'regardingobjectid_kbarticle_syncerror', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_kbarticletemplate_syncerror: { b: 'regardingobjectid_kbarticletemplate_syncerror', a: '_regardingobjectid_value', c: 'kbarticletemplates', d: 'kbarticletemplate' },
			regardingobjectid_knowledgearticle_syncerror: { b: 'regardingobjectid_knowledgearticle_syncerror', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgearticleviews_syncerror: { b: 'regardingobjectid_knowledgearticleviews_syncerror', a: '_regardingobjectid_value', c: 'knowledgearticleviews', d: 'knowledgearticleviews' },
			regardingobjectid_knowledgebaserecord_syncerror: { b: 'regardingobjectid_knowledgebaserecord_syncerror', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_letter_syncerror: { b: 'regardingobjectid_letter_syncerror', a: '_regardingobjectid_value', c: 'letters', d: 'letter' },
			regardingobjectid_mailbox_syncerror: { b: 'regardingobjectid_mailbox_syncerror', a: '_regardingobjectid_value', c: 'mailboxes', d: 'mailbox' },
			regardingobjectid_mailmergetemplate_syncerror: { b: 'regardingobjectid_mailmergetemplate_syncerror', a: '_regardingobjectid_value', c: 'mailmergetemplates', d: 'mailmergetemplate' },
			regardingobjectid_metric_syncerror: { b: 'regardingobjectid_metric_syncerror', a: '_regardingobjectid_value', c: 'metrics', d: 'metric' },
			regardingobjectid_msdyn_connector: { b: 'regardingobjectid_msdyn_connector', a: '_regardingobjectid_value', c: 'msdyn_connectors', d: 'msdyn_connector' },
			regardingobjectid_NewProcess_syncerror: { b: 'regardingobjectid_NewProcess_syncerror', a: '_regardingobjectid_value', c: 'newprocesses', d: 'newprocess' },
			regardingobjectid_offlinecommanddefinition_syncerror: { b: 'regardingobjectid_offlinecommanddefinition_syncerror', a: '_regardingobjectid_value', c: 'offlinecommanddefinitions', d: 'offlinecommanddefinition' },
			regardingobjectid_organization_syncerror: { b: 'regardingobjectid_organization_syncerror', a: '_regardingobjectid_value', c: 'organizations', d: 'organization' },
			regardingobjectid_phonecall_syncerror: { b: 'regardingobjectid_phonecall_syncerror', a: '_regardingobjectid_value', c: 'phonecalls', d: 'phonecall' },
			regardingobjectid_position_syncerror: { b: 'regardingobjectid_position_syncerror', a: '_regardingobjectid_value', c: 'positions', d: 'position' },
			regardingobjectid_postfollow_syncerror: { b: 'regardingobjectid_postfollow_syncerror', a: '_regardingobjectid_value', c: 'postfollows', d: 'postfollow' },
			regardingobjectid_processsession_syncerror: { b: 'regardingobjectid_processsession_syncerror', a: '_regardingobjectid_value', c: 'processsessions', d: 'processsession' },
			regardingobjectid_processstage_syncerror: { b: 'regardingobjectid_processstage_syncerror', a: '_regardingobjectid_value', c: 'processstages', d: 'processstage' },
			regardingobjectid_processtrigger_syncerror: { b: 'regardingobjectid_processtrigger_syncerror', a: '_regardingobjectid_value', c: 'processtriggers', d: 'processtrigger' },
			regardingobjectid_publisher_syncerror: { b: 'regardingobjectid_publisher_syncerror', a: '_regardingobjectid_value', c: 'publishers', d: 'publisher' },
			regardingobjectid_queue_syncerror: { b: 'regardingobjectid_queue_syncerror', a: '_regardingobjectid_value', c: 'queues', d: 'queue' },
			regardingobjectid_queueitem_syncerror: { b: 'regardingobjectid_queueitem_syncerror', a: '_regardingobjectid_value', c: 'queueitems', d: 'queueitem' },
			regardingobjectid_recurringappointmentmaster_syncerror: { b: 'regardingobjectid_recurringappointmentmaster_syncerror', a: '_regardingobjectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			regardingobjectid_report_syncerror: { b: 'regardingobjectid_report_syncerror', a: '_regardingobjectid_value', c: 'reports', d: 'report' },
			regardingobjectid_reportcategory_syncerror: { b: 'regardingobjectid_reportcategory_syncerror', a: '_regardingobjectid_value', c: 'reportcategories', d: 'reportcategory' },
			regardingobjectid_role_syncerror: { b: 'regardingobjectid_role_syncerror', a: '_regardingobjectid_value', c: 'roles', d: 'role' },
			regardingobjectid_rollupfield_syncerror: { b: 'regardingobjectid_rollupfield_syncerror', a: '_regardingobjectid_value', c: 'rollupfields', d: 'rollupfield' },
			regardingobjectid_savedquery_syncerror: { b: 'regardingobjectid_savedquery_syncerror', a: '_regardingobjectid_value', c: 'savedqueries', d: 'savedquery' },
			regardingobjectid_savedqueryvisualization_syncerror: { b: 'regardingobjectid_savedqueryvisualization_syncerror', a: '_regardingobjectid_value', c: 'savedqueryvisualizations', d: 'savedqueryvisualization' },
			regardingobjectid_sharepointdocumentlocation_syncerror: { b: 'regardingobjectid_sharepointdocumentlocation_syncerror', a: '_regardingobjectid_value', c: 'sharePointdocumentlocations', d: 'sharepointdocumentlocation' },
			regardingobjectid_sharepointsite_syncerror: { b: 'regardingobjectid_sharepointsite_syncerror', a: '_regardingobjectid_value', c: 'sharepointsites', d: 'sharepointsite' },
			regardingobjectid_sla_syncerror: { b: 'regardingobjectid_sla_syncerror', a: '_regardingobjectid_value', c: 'slas', d: 'sla' },
			regardingobjectid_slaitem_syncerror: { b: 'regardingobjectid_slaitem_syncerror', a: '_regardingobjectid_value', c: 'slaitems', d: 'slaitem' },
			regardingobjectid_slakpiinstance_syncerror: { b: 'regardingobjectid_slakpiinstance_syncerror', a: '_regardingobjectid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
			regardingobjectid_socialactivity_syncerror: { b: 'regardingobjectid_socialactivity_syncerror', a: '_regardingobjectid_value', c: 'socialactivities', d: 'socialactivity' },
			regardingobjectid_socialprofile_syncerror: { b: 'regardingobjectid_socialprofile_syncerror', a: '_regardingobjectid_value', c: 'socialprofiles', d: 'socialprofile' },
			regardingobjectid_solution_syncerror: { b: 'regardingobjectid_solution_syncerror', a: '_regardingobjectid_value', c: 'solutions', d: 'solution' },
			regardingobjectid_subject_syncerror: { b: 'regardingobjectid_subject_syncerror', a: '_regardingobjectid_value', c: 'subjects', d: 'subject' },
			regardingobjectid_syncerror_syncerror: { b: 'regardingobjectid_syncerror_syncerror', a: '_regardingobjectid_value', c: 'syncerrors', d: 'syncerror' },
			regardingobjectid_systemuser_syncerror: { b: 'regardingobjectid_systemuser_syncerror', a: '_regardingobjectid_value', c: 'systemusers', d: 'systemuser' },
			regardingobjectid_task_syncerror: { b: 'regardingobjectid_task_syncerror', a: '_regardingobjectid_value', c: 'tasks', d: 'task' },
			regardingobjectid_team_syncerror: { b: 'regardingobjectid_team_syncerror', a: '_regardingobjectid_value', c: 'teams', d: 'team' },
			regardingobjectid_teamtemplate_syncerror: { b: 'regardingobjectid_teamtemplate_syncerror', a: '_regardingobjectid_value', c: 'teamtemplates', d: 'teamtemplate' },
			regardingobjectid_template_syncerror: { b: 'regardingobjectid_template_syncerror', a: '_regardingobjectid_value', c: 'templates', d: 'template' },
			regardingobjectid_territory_syncerror: { b: 'regardingobjectid_territory_syncerror', a: '_regardingobjectid_value', c: 'territories', d: 'territory' },
			regardingobjectid_transactioncurrency_syncerror: { b: 'regardingobjectid_transactioncurrency_syncerror', a: '_regardingobjectid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			regardingobjectid_TranslationProcess_syncerror: { b: 'regardingobjectid_TranslationProcess_syncerror', a: '_regardingobjectid_value', c: 'translationprocesses', d: 'translationprocess' },
			regardingobjectid_userquery_syncerror: { b: 'regardingobjectid_userquery_syncerror', a: '_regardingobjectid_value', c: 'userqueries', d: 'userquery' },
			regardingobjectid_userqueryvisualization_syncerror: { b: 'regardingobjectid_userqueryvisualization_syncerror', a: '_regardingobjectid_value', c: 'userqueryvisualizations', d: 'userqueryvisualization' },
			regardingobjectid_workflow_syncerror: { b: 'regardingobjectid_workflow_syncerror', a: '_regardingobjectid_value', c: 'workflows', d: 'workflow' },
			RequestData: { a: 'requestdata' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SyncErrorId: { a: 'syncerrorid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in syncerror) {
			var a = syncerror[field].a;
			var b = syncerror[field].b;
			var c = syncerror[field].c;
			var d = syncerror[field].d;
			var g = syncerror[field].g;
			var r = syncerror[field].r;
			syncerror[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		syncerror.Entity = u;
		syncerror.EntityName = 'syncerror';
		syncerror.EntityCollectionName = 'syncerrors';
		syncerror['@odata.etag'] = e['@odata.etag'];
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
			ErrorType: {
				Conflict: 0,
				Record_not_found: 1,
				Record_already_exists: 2,
				Others: 3
			},
			StateCode: {
				Active: 0,
				Resolved: 1
			},
			StatusCode: {
				Active: 0,
				Fixed: 1
			}
		};
		syncerror.OptionSet = optionSet;
		syncerror.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		syncerror.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return syncerror;
	};
})(Rocket || (Rocket = {}));