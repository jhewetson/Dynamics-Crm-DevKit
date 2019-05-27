﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ReportCategoryApi {
		/**
		* PL.DynamicsCrm.DevKit ReportCategoryApi
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
		/** Category of the report. */
		CategoryCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the report category. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the report category record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the report category. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the report category with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the report category. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the report category was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the report category. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the report category. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the report category. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the report category. */
		ReportCategoryId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ReportCategoryIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the report. */
		ReportId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the Report category. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the report category. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ReportCategory {
		enum CategoryCode {
			/** 1 */
			Sales_Reports,
			/** 2 */
			Service_Reports,
			/** 3 */
			Marketing_Reports,
			/** 4 */
			Administrative_Reports
		}
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}