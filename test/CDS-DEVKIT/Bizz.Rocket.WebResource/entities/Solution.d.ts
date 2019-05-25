///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SolutionApi {
		/**
		* PL.DynamicsCrm.DevKit SolutionApi
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
		/** A link to an optional configuration page for this solution. */
		ConfigurationPageId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the solution. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the solution was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the solution. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the solution. */
		Description: DevKit.WebApi.StringValue;
		/** User display name for the solution. */
		FriendlyName: DevKit.WebApi.StringValue;
		/** Date and time when the solution was installed/upgraded. */
		InstalledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Indicates whether the solution is internal or not. */
		IsInternal: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution is managed or unmanaged. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution is visible outside of the platform. */
		IsVisible: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the solution. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the solution was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the solution. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the solution. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the parent solution. Should only be non-null if this solution is a patch. */
		ParentSolutionId: DevKit.WebApi.LookupValueReadonly;
		PinpointAssetId: DevKit.WebApi.StringValueReadonly;
		/** Identifier of the publisher of this solution in Microsoft Pinpoint. */
		PinpointPublisherId: DevKit.WebApi.BigIntValueReadonly;
		/** Default locale of the solution in Microsoft Pinpoint. */
		PinpointSolutionDefaultLocale: DevKit.WebApi.StringValueReadonly;
		/** Identifier of the solution in Microsoft Pinpoint. */
		PinpointSolutionId: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the publisher. */
		PublisherId: DevKit.WebApi.LookupValue;
		PublisherIdOptionValuePrefix: DevKit.WebApi.IntegerValueReadonly;
		PublisherIdPrefix: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the solution. */
		SolutionId: DevKit.WebApi.GuidValue;
		/** Solution package source organization version */
		SolutionPackageVersion: DevKit.WebApi.StringValue;
		/** Solution Type */
		SolutionType: DevKit.WebApi.OptionSetValue;
		/** The unique name of this solution */
		UniqueName: DevKit.WebApi.StringValue;
		/** Date and time when the solution was updated. */
		UpdatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Solution version, used to identify a solution for upgrades and hotfixes. */
		Version: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Solution {
		enum SolutionType {
			/** 0 */
			None,
			/** 1 */
			Snapshot,
			/** 2 */
			Internal
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}