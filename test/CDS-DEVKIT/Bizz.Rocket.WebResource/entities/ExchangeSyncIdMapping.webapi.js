﻿'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.ExchangeSyncIdMappingApi = function (e) {
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
		var exchangesyncidmapping = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ExchangeEntryId: { a: 'exchangeentryid' },
			ExchangeSyncIdmappingId: { a: 'exchangesyncidmappingid' },
			FromCrmChangeType: { a: 'fromcrmchangetype' },
			IsDeletedInExchange: { a: 'isdeletedinexchange' },
			IsUnlinkedInCRM: { a: 'isunlinkedincrm' },
			ItemSubject: { a: 'itemsubject' },
			LastSyncError: { a: 'lastsyncerror' },
			LastSyncErrorCode: { a: 'lastsyncerrorcode' },
			LastSyncErrorOccurredOn_UtcDateAndTime: { a: 'lastsyncerroroccurredon' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ObjectId: { a: 'objectid' },
			ObjectTypeCode: { a: 'objecttypecode' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Retries: { a: 'retries' },
			ToCrmChangeType: { a: 'tocrmchangetype' },
			UserDecision: { a: 'userdecision' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in exchangesyncidmapping) {
			var a = exchangesyncidmapping[field].a;
			var b = exchangesyncidmapping[field].b;
			var c = exchangesyncidmapping[field].c;
			var d = exchangesyncidmapping[field].d;
			var g = exchangesyncidmapping[field].g;
			var r = exchangesyncidmapping[field].r;
			exchangesyncidmapping[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		exchangesyncidmapping.Entity = u;
		exchangesyncidmapping.EntityName = 'exchangesyncidmapping';
		exchangesyncidmapping.EntityCollectionName = 'exchangesyncidmappings';
		exchangesyncidmapping['@odata.etag'] = e['@odata.etag'];
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
		exchangesyncidmapping.OptionSet = optionSet;
		exchangesyncidmapping.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		exchangesyncidmapping.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return exchangesyncidmapping;
	};
})(Rocket || (Rocket = {}));