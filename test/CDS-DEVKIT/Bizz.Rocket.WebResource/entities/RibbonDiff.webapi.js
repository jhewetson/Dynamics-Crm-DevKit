﻿'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.RibbonDiffApi = function (e) {
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
		var ribbondiff = {
			ComponentState: { a: 'componentstate', r: true },
			ContextGroupId: { a: 'contextgroupid' },
			DiffId: { a: 'diffid' },
			DiffType: { a: 'difftype', r: true },
			Entity: { a: 'entity' },
			IsAppAware: { a: 'isappaware', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RDX: { a: 'rdx' },
			RibbonCustomizationId: { b: 'ribboncustomizationid', a: '_ribboncustomizationid_value', c: 'ribboncustomizations', d: 'ribboncustomization' },
			RibbonDiffId: { a: 'ribbondiffid' },
			RibbonDiffUniqueId: { a: 'ribbondiffuniqueid', r: true },
			Sequence: { a: 'sequence' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TabId: { a: 'tabid' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in ribbondiff) {
			var a = ribbondiff[field].a;
			var b = ribbondiff[field].b;
			var c = ribbondiff[field].c;
			var d = ribbondiff[field].d;
			var g = ribbondiff[field].g;
			var r = ribbondiff[field].r;
			ribbondiff[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		ribbondiff.Entity = u;
		ribbondiff.EntityName = 'ribbondiff';
		ribbondiff.EntityCollectionName = 'ribbondiffs';
		ribbondiff['@odata.etag'] = e['@odata.etag'];
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
			DiffType: {
				Standard: 0,
				Tab: 1,
				Layout_Template: 2,
				Localized_Label: 3
			}
		};
		ribbondiff.OptionSet = optionSet;
		ribbondiff.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		ribbondiff.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return ribbondiff;
	};
})(Rocket || (Rocket = {}));