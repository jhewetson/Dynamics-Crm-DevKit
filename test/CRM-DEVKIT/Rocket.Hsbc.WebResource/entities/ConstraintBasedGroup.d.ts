///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ConstraintBasedGroupApi {
		/**
		* PL.DynamicsCrm.DevKit ConstraintBasedGroupApi
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
		/** Shows the business unit that the record owner belongs to. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the resource group. */
		ConstraintBasedGroupId: DevKit.WebApi.GuidValue;
		/** Shows the constraints defined for the users, equipment, teams, and other resource groups included as resources for the group, stored in XML format. */
		Constraints: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the resource group. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the resource group was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the constraintbasedgroup. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the resource group, such as the intended use or associated resource types. */
		Description: DevKit.WebApi.StringValue;
		/** Shows whether the resource group is static, dynamic or hidden. Hidden groups are for system use only and are not viewable in Microsoft Dynamics 365. */
		GroupTypeCode: DevKit.WebApi.OptionSetValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the resource group. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the resource group was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the constraintbasedgroup. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a title or name that describes the resource group. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the resource group. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ConstraintBasedGroup {
		enum GroupTypeCode {
			/** 0 */
			Static,
			/** 1 */
			Dynamic,
			/** 2 */
			Hidden
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}