﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.msdyn_solutioncomponentdatasourceApi = function (e) {
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
		var msdyn_solutioncomponentdatasource = {
			msdyn_name: { a: 'msdyn_name' },
			msdyn_solutioncomponentdatasourceId: { a: 'msdyn_solutioncomponentdatasourceid' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_solutioncomponentdatasource) {
			var a = msdyn_solutioncomponentdatasource[field].a;
			var b = msdyn_solutioncomponentdatasource[field].b;
			var c = msdyn_solutioncomponentdatasource[field].c;
			var d = msdyn_solutioncomponentdatasource[field].d;
			var g = msdyn_solutioncomponentdatasource[field].g;
			var r = msdyn_solutioncomponentdatasource[field].r;
			msdyn_solutioncomponentdatasource[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_solutioncomponentdatasource.Entity = u;
		msdyn_solutioncomponentdatasource.EntityName = 'msdyn_solutioncomponentdatasource';
		msdyn_solutioncomponentdatasource.EntityCollectionName = 'msdyn_solutioncomponentdatasources';
		msdyn_solutioncomponentdatasource['@odata.etag'] = e['@odata.etag'];
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
		msdyn_solutioncomponentdatasource.OptionSet = optionSet;
		msdyn_solutioncomponentdatasource.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_solutioncomponentdatasource.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_solutioncomponentdatasource;
	};
})(Hsbc || (Hsbc = {}));