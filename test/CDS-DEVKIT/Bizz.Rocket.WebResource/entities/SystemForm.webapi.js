﻿'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.SystemFormApi = function (e) {
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
		var systemform = {
			AncestorFormId: { b: 'ancestorformid', a: '_ancestorformid_value', c: 'systemforms', d: 'systemform' },
			CanBeDeleted: { a: ?????????? },
			ComponentState: { a: 'componentstate', r: true },
			Description: { a: 'description' },
			FormActivationState: { a: 'formactivationstate' },
			FormId: { a: 'formid' },
			FormIdUnique: { a: 'formidunique', r: true },
			FormJson: { a: 'formjson' },
			FormPresentation: { a: 'formpresentation' },
			FormXml: { a: 'formxml' },
			FormXmlManaged: { a: 'formxmlmanaged', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsAIRMerged: { a: 'isairmerged' },
			IsCustomizable: { a: ?????????? },
			IsDefault: { a: 'isdefault' },
			IsDesktopEnabled: { a: 'isdesktopenabled' },
			IsManaged: { a: 'ismanaged', r: true },
			IsTabletEnabled: { a: 'istabletenabled' },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			PublishedOn_UtcDateAndTime: { a: 'publishedon', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Type: { a: 'type' },
			UniqueName: { a: 'uniquename' },
			Version: { a: 'version' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in systemform) {
			var a = systemform[field].a;
			var b = systemform[field].b;
			var c = systemform[field].c;
			var d = systemform[field].d;
			var g = systemform[field].g;
			var r = systemform[field].r;
			systemform[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		systemform.Entity = u;
		systemform.EntityName = 'systemform';
		systemform.EntityCollectionName = 'systemforms';
		systemform['@odata.etag'] = e['@odata.etag'];
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
			ComponentState: {
				Published: 0,
				Unpublished: 1,
				Deleted: 2,
				Deleted_Unpublished: 3
			},
			FormActivationState: {
				Inactive: 0,
				Active: 1
			},
			FormPresentation: {
				ClassicForm: 0,
				AirForm: 1,
				ConvertedICForm: 2
			},
			Type: {
				Dashboard: 0,
				AppointmentBook: 1,
				Main: 2,
				MiniCampaignBO: 3,
				Preview: 4,
				Mobile_Express: 5,
				Quick_View_Form: 6,
				Quick_Create: 7,
				Dialog: 8,
				Task_Flow_Form: 9,
				InteractionCentricDashboard: 10,
				Card: 11,
				Main_Interactive_experience: 12,
				Other: 100,
				MainBackup: 101,
				AppointmentBookBackup: 102,
				Power_BI_Dashboard: 103
			}
		};
		systemform.OptionSet = optionSet;
		systemform.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		systemform.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return systemform;
	};
})(Rocket || (Rocket = {}));