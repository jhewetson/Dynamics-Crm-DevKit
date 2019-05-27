﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class FieldPermissionApi {
		/**
		* PL.DynamicsCrm.DevKit FieldPermissionApi
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
		/** Attribute Name. */
		AttributeLogicalName: DevKit.WebApi.StringValue;
		/** Can this Profile create the attribute */
		CanCreate: DevKit.WebApi.OptionSetValue;
		/** Can this Profile read the attribute */
		CanRead: DevKit.WebApi.OptionSetValue;
		/** Can this Profile update the attribute */
		CanUpdate: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the Field Permission. */
		FieldPermissionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		FieldPermissionIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of profile to which this privilege belongs. */
		FieldSecurityProfileId: DevKit.WebApi.LookupValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace FieldPermission {
		enum CanCreate {
			/** 0 */
			Not_Allowed,
			/** 4 */
			Allowed
		}
		enum CanRead {
			/** 0 */
			Not_Allowed,
			/** 4 */
			Allowed
		}
		enum CanUpdate {
			/** 0 */
			Not_Allowed,
			/** 4 */
			Allowed
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