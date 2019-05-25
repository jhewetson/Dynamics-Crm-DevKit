///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SyncAttributeMappingProfileApi {
		/**
		* PL.DynamicsCrm.DevKit SyncAttributeMappingProfileApi
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
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the profile. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the profile was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the role. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the Profile */
		Description: DevKit.WebApi.StringValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the profile. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the profile was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the profile. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the profile. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the profile. */
		SyncAttributeMappingProfileId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SyncAttributeMappingProfileIdUnique: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SyncAttributeMappingProfile {
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