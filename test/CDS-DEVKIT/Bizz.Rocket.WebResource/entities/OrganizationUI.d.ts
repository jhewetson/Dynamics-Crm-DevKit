///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class OrganizationUIApi {
		/**
		* PL.DynamicsCrm.DevKit OrganizationUIApi
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
		/** For internal use only. */
		FieldXml: DevKit.WebApi.StringValue;
		/** Unique identifier of the record type form. */
		FormId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		FormIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** XML representation of the form layout. */
		FormXml: DevKit.WebApi.StringValue;
		/** Binary representation of the icon used in record type grid views. */
		GridIcon: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Binary representation of the large icon used in the record type form. */
		LargeEntityIcon: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Binary representation of the large icon used in the Microsoft Dynamics 365 client for Outlook for this record type. */
		OutlookShortcutIcon: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		PreviewColumnsetXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		PreviewXml: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		Version: DevKit.WebApi.IntegerValue;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace OrganizationUI {
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