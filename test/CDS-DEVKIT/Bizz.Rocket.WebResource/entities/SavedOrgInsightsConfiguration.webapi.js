﻿'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.SavedOrgInsightsConfigurationApi = function (e) {
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
		var savedorginsightsconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			IsDefault: { a: 'isdefault' },
			IsDrilldown: { a: 'isdrilldown' },
			JsonData: { a: 'jsondata', r: true },
			JsonDataEndTime_UtcDateAndTime: { a: 'jsondataendtime', r: true },
			JsonDataStartTime_UtcDateAndTime: { a: 'jsondatastarttime', r: true },
			Lookback: { a: 'lookback' },
			MetricType: { a: 'metrictype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			Parameters: { a: 'parameters' },
			PlotOption: { a: 'plotoption' },
			SavedOrgInsightsConfigurationId: { a: 'savedorginsightsconfigurationid' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in savedorginsightsconfiguration) {
			var a = savedorginsightsconfiguration[field].a;
			var b = savedorginsightsconfiguration[field].b;
			var c = savedorginsightsconfiguration[field].c;
			var d = savedorginsightsconfiguration[field].d;
			var g = savedorginsightsconfiguration[field].g;
			var r = savedorginsightsconfiguration[field].r;
			savedorginsightsconfiguration[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		savedorginsightsconfiguration.Entity = u;
		savedorginsightsconfiguration.EntityName = 'savedorginsightsconfiguration';
		savedorginsightsconfiguration.EntityCollectionName = 'savedorginsightsconfigurations';
		savedorginsightsconfiguration['@odata.etag'] = e['@odata.etag'];
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
			Lookback: {
				_2H: 1,
				_48H: 2,
				_7D: 3,
				_30D: 4
			},
			MetricType: {
				Time_Series: 1,
				Category: 2
			},
			PlotOption: {
				Line: 1,
				Column: 2,
				Area: 3,
				Pie: 4,
				Bar: 5,
				Donut: 6,
				Infocard: 7,
				List: 8,
				DoubleDonut: 9,
				LinearGauge: 10,
				Bubble: 11
			}
		};
		savedorginsightsconfiguration.OptionSet = optionSet;
		savedorginsightsconfiguration.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		savedorginsightsconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return savedorginsightsconfiguration;
	};
})(Rocket || (Rocket = {}));