﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ReportLinkApi {
		/**
		* PL.DynamicsCrm.DevKit ReportLinkApi
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
		/** Unique identifier of the user who created the report link. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the report link record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the reportlink. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the linked report. */
		LinkedReportId: DevKit.WebApi.LookupValue;
		/** Name of the linked report. */
		LinkedReportName: DevKit.WebApi.StringValue;
		/** Link type of the report. */
		LinkTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the report link. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the report link was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the reportlink. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the report link. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the report link. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the main report. */
		ReportId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the report link. */
		ReportLinkId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ReportLinkIdUnique: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ReportLink {
		enum LinkTypeCode {
			/** 1 */
			Drill_through,
			/** 2 */
			Sub_report,
			/** 3 */
			Drill_through_and_sub_report
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}