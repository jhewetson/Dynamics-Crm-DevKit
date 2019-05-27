﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.MultiSelectAttributeOptionValuesApi = function (e) {
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
		var multiselectattributeoptionvalues = {
			MultiSelectFullTextIdKey: { a: 'multiselectfulltextidkey', r: true },
			ObjectColumnNumber: { a: 'objectcolumnnumber', r: true },
			ObjectId: { b: 'objectid', a: '_objectid_value', c: '', d: '' },
			ObjectIdTypeCode: { a: 'objectidtypecode' },
			SelectedOptionValues: { a: 'selectedoptionvalues' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in multiselectattributeoptionvalues) {
			var a = multiselectattributeoptionvalues[field].a;
			var b = multiselectattributeoptionvalues[field].b;
			var c = multiselectattributeoptionvalues[field].c;
			var d = multiselectattributeoptionvalues[field].d;
			var g = multiselectattributeoptionvalues[field].g;
			var r = multiselectattributeoptionvalues[field].r;
			multiselectattributeoptionvalues[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		multiselectattributeoptionvalues.Entity = u;
		multiselectattributeoptionvalues.EntityName = 'multiselectattributeoptionvalues';
		multiselectattributeoptionvalues.EntityCollectionName = 'multiselectattributeoptionvaluescollection';
		multiselectattributeoptionvalues['@odata.etag'] = e['@odata.etag'];
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
		multiselectattributeoptionvalues.OptionSet = optionSet;
		multiselectattributeoptionvalues.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		multiselectattributeoptionvalues.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return multiselectattributeoptionvalues;
	};
})(Hsbc || (Hsbc = {}));