﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.msdyn_wallsavedqueryApi = function (e) {
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
		var msdyn_wallsavedquery = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_entitydisplayname: { a: 'msdyn_entitydisplayname' },
			msdyn_entityname: { a: 'msdyn_entityname' },
			msdyn_IsVirtual: { a: 'msdyn_isvirtual' },
			msdyn_IsVisible: { a: 'msdyn_isvisible' },
			msdyn_isvisiblebit: { a: 'msdyn_isvisiblebit' },
			msdyn_otc: { a: 'msdyn_otc' },
			msdyn_postconfigurationid: { b: 'msdyn_postconfigurationid', a: '_msdyn_postconfigurationid_value', c: 'msdyn_postconfigs', d: 'msdyn_postconfig' },
			msdyn_SavedQueryId: { a: 'msdyn_savedqueryid' },
			msdyn_savedqueryname: { a: 'msdyn_savedqueryname' },
			msdyn_wallsavedqueryId: { a: 'msdyn_wallsavedqueryid' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_wallsavedquery) {
			var a = msdyn_wallsavedquery[field].a;
			var b = msdyn_wallsavedquery[field].b;
			var c = msdyn_wallsavedquery[field].c;
			var d = msdyn_wallsavedquery[field].d;
			var g = msdyn_wallsavedquery[field].g;
			var r = msdyn_wallsavedquery[field].r;
			msdyn_wallsavedquery[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_wallsavedquery.Entity = u;
		msdyn_wallsavedquery.EntityName = 'msdyn_wallsavedquery';
		msdyn_wallsavedquery.EntityCollectionName = 'msdyn_wallsavedqueries';
		msdyn_wallsavedquery['@odata.etag'] = e['@odata.etag'];
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
			statecode: {
				Active: 0,
				Inactive: 1
			},
			statuscode: {
				Active: 1,
				Inactive: 2
			}
		};
		msdyn_wallsavedquery.OptionSet = optionSet;
		msdyn_wallsavedquery.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_wallsavedquery.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_wallsavedquery;
	};
})(Hsbc || (Hsbc = {}));