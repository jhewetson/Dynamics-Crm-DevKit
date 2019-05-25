///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ComplexControlApi {
		/**
		* PL.DynamicsCrm.DevKit ComplexControlApi
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
		/** Unique identifier of the complex control. */
		ComplexControlId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		ComplexControlIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** XML representation of the complex control layout. */
		ComplexControlXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Description of the complex control. */
		Description: DevKit.WebApi.StringValue;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Name of the complex control. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Type of the complex control, for example, Process Control or Link Control. */
		Type: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		Version: DevKit.WebApi.IntegerValue;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ComplexControl {
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
		enum Type {
			/** 0 */
			ProcessControl,
			/** 1 */
			LinkControl
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}