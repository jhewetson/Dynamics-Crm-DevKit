﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class UserApplicationMetadataApi {
		/**
		* PL.DynamicsCrm.DevKit UserApplicationMetadataApi
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
		/** For internal use only. */
		AssociatedEntityLogicalName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		Data: DevKit.WebApi.StringValue;
		/** For internal use only. */
		Dependency: DevKit.WebApi.StringValue;
		/** For internal use only. */
		DisplayName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		FormFactor: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		Lcid: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		MetadataSubtype: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		MetadataType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		SourceId: DevKit.WebApi.StringValue;
		/** For internal use only. */
		State: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		UserApplicationMetadataId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace UserApplicationMetadata {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}