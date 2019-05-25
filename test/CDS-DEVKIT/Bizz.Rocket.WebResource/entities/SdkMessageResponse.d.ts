///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SdkMessageResponseApi {
		/**
		* PL.DynamicsCrm.DevKit SdkMessageResponseApi
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
		/** Unique identifier of the user who created the SDK message response. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message response was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessageresponse. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message response. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the SDK message response. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message response was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessageresponse. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization with which the SDK message response is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the message request with which the SDK message response is associated. */
		SdkMessageRequestId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the SDK message response entity. */
		SdkMessageResponseId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the SDK message response. */
		SdkMessageResponseIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SdkMessageResponse {
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