﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.TextAnalyticsEntityMappingApi = function (e) {
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
		var textanalyticsentitymapping = {
			AdvancedSimilarityRuleId: { b: 'advancedsimilarityruleid', a: '_advancedsimilarityruleid_value', c: 'incidents', d: 'incident' },
			ComponentState: { a: 'componentstate', r: true },
			Entity: { a: 'entity' },
			EntityDisplayName: { a: 'entitydisplayname' },
			EntityPickList: { a: 'entitypicklist' },
			Field: { a: 'field' },
			FieldDisplayName: { a: 'fielddisplayname' },
			FieldPickList: { a: 'fieldpicklist' },
			IsManaged: { a: 'ismanaged', r: true },
			IsTextMatchMapping: { a: 'istextmatchmapping' },
			KnowledgeSearchModelId: { b: 'knowledgesearchmodelid', a: '_knowledgesearchmodelid_value', c: 'incidents', d: 'incident' },
			ModelType: { a: 'modeltype' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RelationshipName: { a: 'relationshipname' },
			SimilarityRuleId: { b: 'similarityruleid', a: '_similarityruleid_value', c: 'similarityrules', d: 'similarityrule' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TextAnalyticsEntityMappingId: { a: 'textanalyticsentitymappingid' },
			TextAnalyticsEntityMappingIdUnique: { a: 'textanalyticsentitymappingidunique', r: true },
			TopicModelConfigurationId: { b: 'topicmodelconfigurationid', a: '_topicmodelconfigurationid_value', c: 'topicmodelconfigurations', d: 'topicmodelconfiguration' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in textanalyticsentitymapping) {
			var a = textanalyticsentitymapping[field].a;
			var b = textanalyticsentitymapping[field].b;
			var c = textanalyticsentitymapping[field].c;
			var d = textanalyticsentitymapping[field].d;
			var g = textanalyticsentitymapping[field].g;
			var r = textanalyticsentitymapping[field].r;
			textanalyticsentitymapping[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		textanalyticsentitymapping.Entity = u;
		textanalyticsentitymapping.EntityName = 'textanalyticsentitymapping';
		textanalyticsentitymapping.EntityCollectionName = 'textanalyticsentitymapping';
		textanalyticsentitymapping['@odata.etag'] = e['@odata.etag'];
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
			EntityPickList: {
				No: 1,
				Yes: 2
			},
			FieldPickList: {
				No: 1,
				Yes: 2
			}
		};
		textanalyticsentitymapping.OptionSet = optionSet;
		textanalyticsentitymapping.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		textanalyticsentitymapping.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return textanalyticsentitymapping;
	};
})(Hsbc || (Hsbc = {}));