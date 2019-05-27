'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.SharePointDocumentApi = function (e) {
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
		var sharepointdocument = {
			AbsoluteUrl: { a: 'absoluteurl', r: true },
			AppCreatedBy: { a: 'appcreatedby', r: true },
			AppModifiedBy: { a: 'appmodifiedby', r: true },
			Author: { a: 'author' },
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit' },
			CheckedOutTo: { a: 'checkedoutto', r: true },
			CheckInComment: { a: 'checkincomment', r: true },
			ChildFolderCount: { a: 'childfoldercount', r: true },
			ChildItemCount: { a: 'childitemcount', r: true },
			ContentType: { a: 'contenttype', r: true },
			ContentTypeId: { a: 'contenttypeid', r: true },
			CopySource: { a: 'copysource', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DocumentId: { a: 'documentid', r: true },
			DocumentLocationType: { a: 'documentlocationtype', r: true },
			Edit: { a: 'edit', r: true },
			EditUrl: { a: 'editurl', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			FileSize: { a: 'filesize', r: true },
			FileType: { a: 'filetype', r: true },
			FullName: { a: 'fullname', r: true },
			IconClassName: { a: 'iconclassname', r: true },
			IsCheckedOut: { a: 'ischeckedout', r: true },
			IsFolder: { a: 'isfolder', r: true },
			IsRecursiveFetch: { a: 'isrecursivefetch', r: true },
			LocationId: { a: 'locationid', r: true },
			LocationName: { a: 'locationname', r: true },
			Modified_UtcDateAndTime: { a: 'modified', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: '', d: '', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: '', d: '', r: true },
			ReadUrl: { a: 'readurl', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_lead: { b: 'regardingobjectid_lead', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_playbookactivity: { b: 'regardingobjectid_msdyn_playbookactivity', a: '_regardingobjectid_value', c: 'msdyn_playbookactivities', d: 'msdyn_playbookactivity' },
			regardingobjectid_opportunity: { b: 'regardingobjectid_opportunity', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_product: { b: 'regardingobjectid_product', a: '_regardingobjectid_value', c: 'products', d: 'product' },
			regardingobjectid_quote: { b: 'regardingobjectid_quote', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesliterature: { b: 'regardingobjectid_salesliterature', a: '_regardingobjectid_value', c: 'salesliteratures', d: 'salesliterature' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			RelativeLocation: { a: 'relativelocation', r: true },
			ServiceType: { a: 'servicetype' },
			SharePointCreatedOn_UtcDateAndTime: { a: 'sharepointcreatedon', r: true },
			SharePointDocumentId: { a: 'sharepointdocumentid' },
			SharePointModifiedBy: { a: 'sharepointmodifiedby', r: true },
			Title: { a: 'title', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			Version: { a: 'version', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in sharepointdocument) {
			var a = sharepointdocument[field].a;
			var b = sharepointdocument[field].b;
			var c = sharepointdocument[field].c;
			var d = sharepointdocument[field].d;
			var g = sharepointdocument[field].g;
			var r = sharepointdocument[field].r;
			sharepointdocument[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		sharepointdocument.Entity = u;
		sharepointdocument.EntityName = 'sharepointdocument';
		sharepointdocument.EntityCollectionName = 'sharepointdocuments';
		sharepointdocument['@odata.etag'] = e['@odata.etag'];
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
			DocumentLocationType: {
				General: 0,
				Dedicated_for_OneNote_Integration: 1
			},
			ServiceType: {
				SharePoint: 0,
				OneDrive: 1,
				Shared_with_me: 2,
				MS_Teams: 3
			}
		};
		sharepointdocument.OptionSet = optionSet;
		sharepointdocument.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sharepointdocument.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sharepointdocument;
	};
})(Hsbc || (Hsbc = {}));