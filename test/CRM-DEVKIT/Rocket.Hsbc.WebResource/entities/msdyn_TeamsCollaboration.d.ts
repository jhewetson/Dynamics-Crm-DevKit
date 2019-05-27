///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace Formmsdyn_TeamsCollaborationInformation {
		interface Tabs {
		}
		interface Body {
			/** Collaboration team name */
			msdyn_TeamName: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_TeamsCollaborationInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form msdyn_TeamsCollaborationInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_TeamsCollaborationInformation */
		Body: Hsbc.Formmsdyn_TeamsCollaborationInformation.Body;
	}
	class msdyn_TeamsCollaborationApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_TeamsCollaborationApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Collaboration channel relative folder URL */
		msdyn_ChannelFolderRelativeUrl: DevKit.WebApi.StringValue;
		/** Collaboration channel Id */
		msdyn_ChannelId: DevKit.WebApi.StringValue;
		/** Collaboration channel name */
		msdyn_ChannelName: DevKit.WebApi.StringValue;
		/** Collaboration group identifier */
		msdyn_GroupId: DevKit.WebApi.GuidValue;
		/** Collaboration team Id */
		msdyn_TeamId: DevKit.WebApi.StringValue;
		/** Collaboration team name */
		msdyn_TeamName: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_TeamsCollaborationId: DevKit.WebApi.GuidValue;
		/** Team site URL */
		msdyn_TeamSiteUrl: DevKit.WebApi.StringValue;
		/** Collaboration tenant identifier */
		msdyn_TenantId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Related Dynamics 365 record Id */
		RegardingObjectId: DevKit.WebApi.GuidValue;
		/** Related Dynamics 365 record Id (entity code) */
		RegardingObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Related Dynamics 365 record type name */
		RegardingObjectTypeName: DevKit.WebApi.StringValue;
		/** Status of the Collaboration entity */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Collaboration entity */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_TeamsCollaboration {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}