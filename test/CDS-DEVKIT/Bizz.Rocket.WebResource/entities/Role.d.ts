﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class RoleApi {
		/**
		* PL.DynamicsCrm.DevKit RoleApi
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
		/** Unique identifier of the business unit with which the role is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Tells whether the role can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the role. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the role was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the role. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Role is inherited by users from team membership, if role associated with team. */
		IsInherited: DevKit.WebApi.OptionSetValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the role. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the role was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the role. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the role. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the role. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the parent role. */
		ParentRoleId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the parent root role. */
		ParentRootRoleId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the role. */
		RoleId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		RoleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the role template that is associated with the role. */
		RoleTemplateId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the role. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Role {
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
		enum IsInherited {
			/** 0 */
			Default_Team_privileges_only,
			/** 1 */
			Direct_User_Basic_access_level_and_Team_privileges
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}