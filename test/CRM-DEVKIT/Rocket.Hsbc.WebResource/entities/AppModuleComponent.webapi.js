﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.AppModuleComponentApi = function (e) {
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
		var appmodulecomponent = {
			AppModuleComponentId: { a: 'appmodulecomponentid' },
			AppModuleComponentIdUnique: { a: 'appmodulecomponentidunique' },
			AppModuleIdName: { a: 'appmoduleidname', r: true },
			AppModuleIdUnique: { b: 'appmoduleidunique', a: '_appmoduleidunique_value', c: 'appmodules', d: 'appmodule' },
			ComponentType: { a: 'componenttype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsDefault: { a: 'isdefault' },
			IsMetadata: { a: 'ismetadata' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ObjectId: { a: 'objectid' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RootAppModuleComponentId: { a: 'rootappmodulecomponentid' },
			RootComponentBehavior: { a: 'rootcomponentbehavior' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in appmodulecomponent) {
			var a = appmodulecomponent[field].a;
			var b = appmodulecomponent[field].b;
			var c = appmodulecomponent[field].c;
			var d = appmodulecomponent[field].d;
			var g = appmodulecomponent[field].g;
			var r = appmodulecomponent[field].r;
			appmodulecomponent[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		appmodulecomponent.Entity = u;
		appmodulecomponent.EntityName = 'appmodulecomponent';
		appmodulecomponent.EntityCollectionName = 'appmodulecomponents';
		appmodulecomponent['@odata.etag'] = e['@odata.etag'];
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
			ComponentType: {
				Entities: 1,
				Views: 26,
				Business_Process_Flows: 29,
				Command_Ribbon_for_Forms_Grids_sub_grids: 48,
				Charts: 59,
				Forms: 60,
				Sitemap: 62
			},
			RootComponentBehavior: {
				Include_Subcomponents: 0,
				Do_not_include_subcomponents: 1,
				Include_As_Shell_Only: 2
			}
		};
		appmodulecomponent.OptionSet = optionSet;
		appmodulecomponent.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appmodulecomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appmodulecomponent;
	};
})(Hsbc || (Hsbc = {}));