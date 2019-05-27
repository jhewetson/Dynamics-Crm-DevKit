﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.SalesOrderDetailApi = function (e) {
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
		var salesorderdetail = {
			BaseAmount: { a: 'baseamount' },
			BaseAmount_Base: { a: 'baseamount_base', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExtendedAmount: { a: 'extendedamount' },
			ExtendedAmount_Base: { a: 'extendedamount_base', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCopied: { a: 'iscopied' },
			IsPriceOverridden: { a: 'ispriceoverridden' },
			IsProductOverridden: { a: 'isproductoverridden' },
			LineItemNumber: { a: 'lineitemnumber' },
			ManualDiscountAmount: { a: 'manualdiscountamount' },
			ManualDiscountAmount_Base: { a: 'manualdiscountamount_base', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: '', d: '', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: '', d: '', r: true },
			ParentBundleId: { a: 'parentbundleid' },
			ParentBundleIdRef: { b: 'parentbundleidref', a: '_parentbundleidref_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			PricePerUnit: { a: 'priceperunit' },
			PricePerUnit_Base: { a: 'priceperunit_base', r: true },
			PricingErrorCode: { a: 'pricingerrorcode' },
			ProductAssociationId: { a: 'productassociationid' },
			ProductDescription: { a: 'productdescription' },
			ProductId: { b: 'productid', a: '_productid_value', c: 'products', d: 'product' },
			ProductName: { a: 'productname' },
			ProductTypeCode: { a: 'producttypecode' },
			PropertyConfigurationStatus: { a: 'propertyconfigurationstatus' },
			Quantity: { a: 'quantity' },
			QuantityBackordered: { a: 'quantitybackordered' },
			QuantityCancelled: { a: 'quantitycancelled' },
			QuantityShipped: { a: 'quantityshipped' },
			QuoteDetailId: { b: 'quotedetailid', a: '_quotedetailid_value', c: 'quotedetails', d: 'quotedetail' },
			RequestDeliveryBy_UtcDateOnly: { a: 'requestdeliveryby' },
			SalesOrderDetailId: { a: 'salesorderdetailid' },
			SalesOrderDetailName: { a: 'salesorderdetailname' },
			SalesOrderId: { b: 'salesorderid', a: '_salesorderid_value', c: 'salesorders', d: 'salesorder' },
			SalesOrderIsPriceLocked: { a: 'salesorderispricelocked', r: true },
			SalesOrderStateCode: { a: 'salesorderstatecode', r: true },
			SalesRepId: { b: 'salesrepid', a: '_salesrepid_value', c: 'systemusers', d: 'systemuser' },
			SequenceNumber: { a: 'sequencenumber' },
			ShipTo_AddressId: { a: 'shipto_addressid' },
			ShipTo_City: { a: 'shipto_city' },
			ShipTo_ContactName: { a: 'shipto_contactname' },
			ShipTo_Country: { a: 'shipto_country' },
			ShipTo_Fax: { a: 'shipto_fax' },
			ShipTo_FreightTermsCode: { a: 'shipto_freighttermscode' },
			ShipTo_Line1: { a: 'shipto_line1' },
			ShipTo_Line2: { a: 'shipto_line2' },
			ShipTo_Line3: { a: 'shipto_line3' },
			ShipTo_Name: { a: 'shipto_name' },
			ShipTo_PostalCode: { a: 'shipto_postalcode' },
			ShipTo_StateOrProvince: { a: 'shipto_stateorprovince' },
			ShipTo_Telephone: { a: 'shipto_telephone' },
			SkipPriceCalculation: { a: 'skippricecalculation' },
			Tax: { a: 'tax' },
			Tax_Base: { a: 'tax_base', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UoMId: { b: 'uomid', a: '_uomid_value', c: 'uoms', d: 'uom' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			VolumeDiscountAmount: { a: 'volumediscountamount', r: true },
			VolumeDiscountAmount_Base: { a: 'volumediscountamount_base', r: true },
			WillCall: { a: 'willcall' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in salesorderdetail) {
			var a = salesorderdetail[field].a;
			var b = salesorderdetail[field].b;
			var c = salesorderdetail[field].c;
			var d = salesorderdetail[field].d;
			var g = salesorderdetail[field].g;
			var r = salesorderdetail[field].r;
			salesorderdetail[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		salesorderdetail.Entity = u;
		salesorderdetail.EntityName = 'salesorderdetail';
		salesorderdetail.EntityCollectionName = 'salesorderdetails';
		salesorderdetail['@odata.etag'] = e['@odata.etag'];
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
			PricingErrorCode: {
				None: 0,
				Detail_Error: 1,
				Missing_Price_Level: 2,
				Inactive_Price_Level: 3,
				Missing_Quantity: 4,
				Missing_Unit_Price: 5,
				Missing_Product: 6,
				Invalid_Product: 7,
				Missing_Pricing_Code: 8,
				Invalid_Pricing_Code: 9,
				Missing_UOM: 10,
				Product_Not_In_Price_Level: 11,
				Missing_Price_Level_Amount: 12,
				Missing_Price_Level_Percentage: 13,
				Missing_Price: 14,
				Missing_Current_Cost: 15,
				Missing_Standard_Cost: 16,
				Invalid_Price_Level_Amount: 17,
				Invalid_Price_Level_Percentage: 18,
				Invalid_Price: 19,
				Invalid_Current_Cost: 20,
				Invalid_Standard_Cost: 21,
				Invalid_Rounding_Policy: 22,
				Invalid_Rounding_Option: 23,
				Invalid_Rounding_Amount: 24,
				Price_Calculation_Error: 25,
				Invalid_Discount_Type: 26,
				Discount_Type_Invalid_State: 27,
				Invalid_Discount: 28,
				Invalid_Quantity: 29,
				Invalid_Pricing_Precision: 30,
				Missing_Product_Default_UOM: 31,
				Missing_Product_UOM_Schedule_: 32,
				Inactive_Discount_Type: 33,
				Invalid_Price_Level_Currency: 34,
				Price_Attribute_Out_Of_Range: 35,
				Base_Currency_Attribute_Overflow: 36,
				Base_Currency_Attribute_Underflow: 37,
				Transaction_currency_is_not_set_for_the_product_price_list_item: 38
			},
			ProductTypeCode: {
				Product: 1,
				Bundle: 2,
				Required_Bundle_Product: 3,
				Optional_Bundle_Product: 4,
				Project_based_Service: 5
			},
			PropertyConfigurationStatus: {
				Edit: 0,
				Rectify: 1,
				Not_Configured: 2
			},
			SalesOrderStateCode: {
			},
			ShipTo_FreightTermsCode: {
				FOB: 1,
				No_Charge: 2
			},
			SkipPriceCalculation: {
				DoPriceCalcAlways: 0,
				SkipPriceCalcOnCreate: 1,
				SkipPriceCalcOnUpdate: 2
			}
		};
		salesorderdetail.OptionSet = optionSet;
		salesorderdetail.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		salesorderdetail.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return salesorderdetail;
	};
})(Hsbc || (Hsbc = {}));