///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class RolePrivilegesApi {
		/**
		* PL.DynamicsCrm.DevKit RolePrivilegesApi
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
		/** Tells whether the role privilege can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** System-generated attribute that stores the privileges associated with the role. */
		PrivilegeDepthMask: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the privilege associated with the role. */
		PrivilegeId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the role that is associated with the role privilege. */
		RoleId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the role privilege. */
		RolePrivilegeId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		RolePrivilegeIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RolePrivileges {
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