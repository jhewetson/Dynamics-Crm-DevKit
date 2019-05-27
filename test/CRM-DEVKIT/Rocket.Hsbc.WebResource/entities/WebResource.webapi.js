﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.WebResourceApi = function (e) {
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
		var webresource = {
			CanBeDeleted: { a: 'canbedeleted' },
			ComponentState: { a: 'componentstate', r: true },
			Content: { a: 'content' },
			ContentJson: { a: 'contentjson' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DependencyXml: { a: 'dependencyxml' },
			Description: { a: 'description' },
			DisplayName: { a: 'displayname' },
			IntroducedVersion: { a: 'introducedversion' },
			IsAvailableForMobileOffline: { a: 'isavailableformobileoffline' },
			IsCustomizable: { a: 'iscustomizable' },
			IsEnabledForMobileClient: { a: 'isenabledformobileclient' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true },
			LanguageCode: { a: 'languagecode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			SilverlightVersion: { a: 'silverlightversion' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true },
			WebResourceId: { a: 'webresourceid' },
			WebResourceIdUnique: { a: 'webresourceidunique', r: true },
			WebResourceType: { a: 'webresourcetype' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in webresource) {
			var a = webresource[field].a;
			var b = webresource[field].b;
			var c = webresource[field].c;
			var d = webresource[field].d;
			var g = webresource[field].g;
			var r = webresource[field].r;
			webresource[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		webresource.Entity = u;
		webresource.EntityName = 'webresource';
		webresource.EntityCollectionName = 'webresources';
		webresource['@odata.etag'] = e['@odata.etag'];
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
			WebResourceType: {
				Webpage_HTML: 1,
				Style_Sheet_CSS: 2,
				Script_JScript: 3,
				Data_XML: 4,
				PNG_format: 5,
				JPG_format: 6,
				GIF_format: 7,
				Silverlight_XAP: 8,
				Style_Sheet_XSL: 9,
				ICO_format: 10,
				Vector_format_SVG: 11,
				String_RESX: 12
			}
		};
		webresource.OptionSet = optionSet;
		webresource.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		webresource.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return webresource;
	};
})(Hsbc || (Hsbc = {}));