﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class AppModuleApi {
		/**
		* PL.DynamicsCrm.DevKit AppModuleApi
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
		/** Unique identifier for entity instances */
		AppModuleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the App Module used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleIdUnique: DevKit.WebApi.GuidValue;
		/** App Module Version */
		AppModuleVersion: DevKit.WebApi.StringValue;
		/** App Module Xml Managed */
		AppModuleXmlManaged: DevKit.WebApi.StringValue;
		/** Client Type such as Web or UCI */
		ClientType: DevKit.WebApi.IntegerValue;
		/** For internal use only */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Contains configuration XML */
		ConfigXML: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description for entity */
		Description: DevKit.WebApi.StringValue;
		/** App Module Descriptor */
		Descriptor: DevKit.WebApi.StringValueReadonly;
		/** App Module Event Handlers */
		EventHandlers: DevKit.WebApi.StringValue;
		/** Form Factor */
		FormFactor: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Default */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Is Featured */
		IsFeatured: DevKit.WebApi.BooleanValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of App Module */
		Name: DevKit.WebApi.StringValue;
		/** App navigation type */
		NavigationType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the organization associated with the app. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Internal use only */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Date and time when the record was published. */
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the publisher. */
		PublisherId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique Name of App Module */
		UniqueName: DevKit.WebApi.StringValue;
		/** Contains URL */
		URL: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the Web Resource */
		WebResourceId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Web Resource as Welcome Page Id */
		WelcomePageId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace AppModule {
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
		enum NavigationType {
			/** 0 */
			Single_session,
			/** 1 */
			Multi_session
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}