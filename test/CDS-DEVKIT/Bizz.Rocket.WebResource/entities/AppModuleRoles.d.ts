///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class AppModuleRolesApi {
		/**
		* PL.DynamicsCrm.DevKit AppModuleRolesApi
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
		/** Unique identifier of the app module. */
		AppModuleId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		AppModuleRoleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the App Module Roles used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleRoleIdUnique: DevKit.WebApi.GuidValue;
		/** For internal use only */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Internal use only */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		RoleId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AppModuleRoles {
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