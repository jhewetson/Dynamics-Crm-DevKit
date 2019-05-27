﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.QuoteApi = function (e) {
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
		var quote = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			BillTo_AddressId: { a: 'billto_addressid' },
			BillTo_City: { a: 'billto_city' },
			BillTo_Composite: { a: 'billto_composite', r: true },
			BillTo_ContactName: { a: 'billto_contactname' },
			BillTo_Country: { a: 'billto_country' },
			BillTo_Fax: { a: 'billto_fax' },
			BillTo_Line1: { a: 'billto_line1' },
			BillTo_Line2: { a: 'billto_line2' },
			BillTo_Line3: { a: 'billto_line3' },
			BillTo_Name: { a: 'billto_name' },
			BillTo_PostalCode: { a: 'billto_postalcode' },
			BillTo_StateOrProvince: { a: 'billto_stateorprovince' },
			BillTo_Telephone: { a: 'billto_telephone' },
			CampaignId: { b: 'campaignid', a: '_campaignid_value', c: 'campaigns', d: 'campaign' },
			ClosedOn_DateOnly: { a: 'closedon' },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			Description: { a: 'description' },
			DiscountAmount: { a: 'discountamount' },
			DiscountAmount_Base: { a: 'discountamount_base', r: true },
			DiscountPercentage: { a: 'discountpercentage' },
			EffectiveFrom_UtcDateOnly: { a: 'effectivefrom' },
			EffectiveTo_UtcDateOnly: { a: 'effectiveto' },
			EmailAddress: { a: 'emailaddress' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpiresOn_DateOnly: { a: 'expireson' },
			FreightAmount: { a: 'freightamount' },
			FreightAmount_Base: { a: 'freightamount_base', r: true },
			FreightTermsCode: { a: 'freighttermscode' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OpportunityId: { b: 'opportunityid', a: '_opportunityid_value', c: 'opportunities', d: 'opportunity' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PaymentTermsCode: { a: 'paymenttermscode' },
			PriceLevelId: { b: 'pricelevelid', a: '_pricelevelid_value', c: 'pricelevels', d: 'pricelevel' },
			PricingErrorCode: { a: 'pricingerrorcode' },
			ProcessId: { a: 'processid' },
			QuoteId: { a: 'quoteid' },
			QuoteNumber: { a: 'quotenumber' },
			RequestDeliveryBy_UtcDateOnly: { a: 'requestdeliveryby' },
			RevisionNumber: { a: 'revisionnumber', r: true },
			ShippingMethodCode: { a: 'shippingmethodcode' },
			ShipTo_AddressId: { a: 'shipto_addressid' },
			ShipTo_City: { a: 'shipto_city' },
			ShipTo_Composite: { a: 'shipto_composite', r: true },
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
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SLAName: { a: 'slaname', r: true },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TotalAmount: { a: 'totalamount' },
			TotalAmount_Base: { a: 'totalamount_base', r: true },
			TotalAmountLessFreight: { a: 'totalamountlessfreight' },
			TotalAmountLessFreight_Base: { a: 'totalamountlessfreight_base', r: true },
			TotalDiscountAmount: { a: 'totaldiscountamount' },
			TotalDiscountAmount_Base: { a: 'totaldiscountamount_base', r: true },
			TotalLineItemAmount: { a: 'totallineitemamount' },
			TotalLineItemAmount_Base: { a: 'totallineitemamount_base', r: true },
			TotalLineItemDiscountAmount: { a: 'totallineitemdiscountamount' },
			TotalLineItemDiscountAmount_Base: { a: 'totallineitemdiscountamount_base', r: true },
			TotalTax: { a: 'totaltax' },
			TotalTax_Base: { a: 'totaltax_base', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UniqueDscId: { a: 'uniquedscid', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WillCall: { a: 'willcall' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in quote) {
			var a = quote[field].a;
			var b = quote[field].b;
			var c = quote[field].c;
			var d = quote[field].d;
			var g = quote[field].g;
			var r = quote[field].r;
			quote[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		quote.Entity = u;
		quote.EntityName = 'quote';
		quote.EntityCollectionName = 'quotes';
		quote['@odata.etag'] = e['@odata.etag'];
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
			FreightTermsCode: {
				FOB: 1,
				No_Charge: 2
			},
			PaymentTermsCode: {
				Net_30: 1,
				_2_10_Net_30: 2,
				Net_45: 3,
				Net_60: 4
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
			ShippingMethodCode: {
				Airborne: 1,
				DHL: 2,
				FedEx: 3,
				UPS: 4,
				Postal_Mail: 5,
				Full_Load: 6,
				Will_Call: 7
			},
			ShipTo_FreightTermsCode: {
				Default_Value: 1
			},
			SkipPriceCalculation: {
				DoPriceCalcAlways: 0,
				SkipPriceCalcOnRetrieve: 1
			},
			StateCode: {
				Draft: 0,
				Active: 1,
				Won: 2,
				Closed: 3
			},
			StatusCode: {
				In_Progress: 2,1,
				Open: 3,
				Won: 4,
				Lost: 5,
				Canceled: 6,
				Revised: 7
			}
		};
		quote.OptionSet = optionSet;
		quote.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		quote.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return quote;
	};
})(Hsbc || (Hsbc = {}));