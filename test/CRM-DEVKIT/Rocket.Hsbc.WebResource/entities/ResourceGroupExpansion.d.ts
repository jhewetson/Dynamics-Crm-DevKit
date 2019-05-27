﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ResourceGroupExpansionApi {
		/**
		* PL.DynamicsCrm.DevKit ResourceGroupExpansionApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Item that is part of expansion of resource identified by object ID. One object ID can have many item IDs. */
		ItemId: DevKit.WebApi.GuidValue;
		/** Code for retrieval method. */
		MethodCode: DevKit.WebApi.OptionSetValue;
		/** Date and time when the record was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** name */
		Name: DevKit.WebApi.StringValue;
		/** Object being expanded. */
		ObjectId: DevKit.WebApi.GuidValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the resource expansion record. */
		ResourceGroupExpansionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ResourceGroupExpansion {
		enum MethodCode {
			/** 0 */
			None,
			/** 1 */
			Participating_Resources,
			/** 2 */
			Schedulable_Resources,
			/** 3 */
			Supported_Services,
			/** 4 */
			Resources,
			/** 5 */
			All_Resources,
			/** 6 */
			Subgroups,
			/** 7 */
			Parent_Groups,
			/** 8 */
			All_Subgroups
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}