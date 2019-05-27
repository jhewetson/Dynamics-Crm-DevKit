///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class RelationshipRoleApi {
		/**
		* PL.DynamicsCrm.DevKit RelationshipRoleApi
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
		/** Unique Identifier of the user who created the relationship role. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the relationship role was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the relationshiprole. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the relationship role. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the relationship role. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the relationship role was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the relationshiprole. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the relationship role. */
		Name: DevKit.WebApi.StringValue;
		/** Unique Identifier of the organization that this relationship role belongs to. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the relationship role. */
		RelationshipRoleId: DevKit.WebApi.GuidValue;
		/** Status of the relationship role. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the relationship role. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RelationshipRole {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}