﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class CanvasAppApi {
		/**
		* PL.DynamicsCrm.DevKit CanvasAppApi
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
		/** Unique identifier of the user who created the canvas app. */
		AADCreatedById: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the application. */
		AADLastModifiedById: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last published the application. */
		AADLastPublishedById: DevKit.WebApi.StringValue;
		/** Indicates whether the canvas app was marked for bypass consent by an admin. */
		AdminControlBypassConsent: DevKit.WebApi.BooleanValue;
		/** The app open URI. */
		AppOpenUri: DevKit.WebApi.StringValue;
		/** The application version. */
		AppVersion: DevKit.WebApi.StringValue;
		/** The authorization references of the application. */
		AuthorizationReferences: DevKit.WebApi.StringValue;
		/** The background image color. */
		BackgroundColor: DevKit.WebApi.StringValue;
		/** Indicates whether the canvas app should bypass consent from consumers. */
		BypassConsent: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		CanvasAppId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		CanvasAppRowId: DevKit.WebApi.GuidValueReadonly;
		/** The commit message of the app. */
		CommitMessage: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** The connection references of the application. */
		ConnectionReferences: DevKit.WebApi.StringValue;
		/** The version of the client that was used to author the application. */
		CreatedByClientVersion: DevKit.WebApi.StringValue;
		/** Date and time when the application was created. */
		CreatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The description of the app. */
		Description: DevKit.WebApi.StringValue;
		/** The display name of the app. */
		DisplayName: DevKit.WebApi.StringValue;
		/** Internal use. The embedded app information. */
		EmbeddedApp: DevKit.WebApi.StringValue;
		/** The gallery item identifier. */
		GalleryItemId: DevKit.WebApi.StringValue;
		/** Version in which the canvas app is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Indicates whether the canvas app contains CDS 1.0 references. */
		IsCdsUpgraded: DevKit.WebApi.BooleanValue;
		/** Indicates whether the canvas app is a featured app. */
		IsFeaturedApp: DevKit.WebApi.BooleanValue;
		/** Indicates whether the canvas app is a hero app. */
		IsHeroApp: DevKit.WebApi.BooleanValue;
		/** Indicates whether the canvas app is hidden from a user's list. */
		IsHidden: DevKit.WebApi.BooleanValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Date and time when the application was last modified. */
		LastModifiedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Date and time when the application was last published. */
		LastPublishTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The version of the client that was used to author the application. */
		MinClientVersion: DevKit.WebApi.StringValue;
		/** Name of the CanvasApp */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the process. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the process. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the process. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** The publisher of the app. */
		Publisher: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** A value indicating whether the application is ready for consumption. */
		Status: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** The metadata tags of the application. */
		Tags: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CanvasApp {
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