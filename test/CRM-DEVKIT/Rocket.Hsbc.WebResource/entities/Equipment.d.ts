///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class EquipmentApi {
		/**
		* PL.DynamicsCrm.DevKit EquipmentApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Business Unit Id */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Fiscal calendar associated with the facility/equipment. */
		CalendarId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the facility/equipment entry. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the equipment. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the facility/equipment. */
		Description: DevKit.WebApi.StringValue;
		/** For internal use only. */
		DisplayInServiceViews: DevKit.WebApi.BooleanValue;
		/** Email address of person to contact about the use of the facility/equipment. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Unique identifier of the facility/equipment. */
		EquipmentId: DevKit.WebApi.GuidValue;
		/** Exchange rate for the currency associated with the equipment with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Whether the facility/equipment is disabled or operational. */
		IsDisabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the facility/equipment. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the equipment. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the facility/equipment. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the parent business unit. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Site where the facility/equipment is located. */
		SiteId: DevKit.WebApi.LookupValue;
		/** Skills needed to operate the facility/equipment. */
		Skills: DevKit.WebApi.StringValue;
		/** Local time zone where the facility/equipment is located. */
		TimeZoneCode: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the equipment. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Equipment {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}