﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.msfp_questionApi = function (e) {
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
		var msfp_question = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msfp_choicetype: { a: 'msfp_choicetype' },
			msfp_correctanswer: { a: 'msfp_correctanswer' },
			msfp_imageproperties: { a: 'msfp_imageproperties' },
			msfp_Maximumrating: { a: 'msfp_maximumrating' },
			msfp_multiline: { a: 'msfp_multiline' },
			msfp_name: { a: 'msfp_name' },
			msfp_otherproperties: { a: 'msfp_otherproperties' },
			msfp_questionchoices: { a: 'msfp_questionchoices' },
			msfp_questionId: { a: 'msfp_questionid' },
			msfp_questiontext: { a: 'msfp_questiontext' },
			msfp_questiontype: { a: 'msfp_questiontype' },
			msfp_responserequired: { a: 'msfp_responserequired' },
			msfp_sequence: { a: 'msfp_sequence' },
			msfp_sourceparentquestionidentifier: { a: 'msfp_sourceparentquestionidentifier' },
			msfp_Sourcequestionidentifier: { a: 'msfp_sourcequestionidentifier' },
			msfp_sourcesurveyidentifier: { a: 'msfp_sourcesurveyidentifier' },
			msfp_subtitle: { a: 'msfp_subtitle' },
			msfp_Survey: { b: 'msfp_Survey', a: '_msfp_survey_value', c: 'msfp_surveies', d: 'msfp_survey' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msfp_question) {
			var a = msfp_question[field].a;
			var b = msfp_question[field].b;
			var c = msfp_question[field].c;
			var d = msfp_question[field].d;
			var g = msfp_question[field].g;
			var r = msfp_question[field].r;
			msfp_question[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msfp_question.Entity = u;
		msfp_question.EntityName = 'msfp_question';
		msfp_question.EntityCollectionName = 'msfp_questions';
		msfp_question['@odata.etag'] = e['@odata.etag'];
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
			msfp_choicetype: {
				Single_choice: 647390000,
				Multi_choice: 647390001,
				none: 647390002
			},
			msfp_questiontype: {
				Choice: 647390000,
				Text: 647390001,
				Rating: 647390002,
				Date: 647390003,
				Ranking: 647390004,
				MatrixChoiceGroup: 647390005,
				MatrixChoice: 647390006,
				NPS: 647390007,
				File_Upload: 647390008,
				Number: 647390009
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
		msfp_question.OptionSet = optionSet;
		msfp_question.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msfp_question.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msfp_question;
	};
})(Hsbc || (Hsbc = {}));