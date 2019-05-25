﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SystemFormApi {
		/**
		* PL.DynamicsCrm.DevKit SystemFormApi
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
		/** Unique identifier of the parent form. */
		AncestorFormId: DevKit.WebApi.LookupValue;
		/** Information that specifies whether this component can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Description of the form or dashboard. */
		Description: DevKit.WebApi.StringValue;
		/** Specifies the state of the form. */
		FormActivationState: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the record type form. */
		FormId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		FormIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Json representation of the form layout. */
		FormJson: DevKit.WebApi.StringValue;
		/** Specifies whether this form is in the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		FormPresentation: DevKit.WebApi.OptionSetValue;
		/** XML representation of the form layout. */
		FormXml: DevKit.WebApi.StringValue;
		/** formXml diff as in a managed solution. for internal use only */
		FormXmlManaged: DevKit.WebApi.StringValueReadonly;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Specifies whether this form is merged with the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		IsAIRMerged: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether the form or the dashboard is the system default. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether the dashboard is enabled for desktop. */
		IsDesktopEnabled: DevKit.WebApi.BooleanValue;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information that specifies whether the dashboard is enabled for tablet. */
		IsTabletEnabled: DevKit.WebApi.BooleanValue;
		/** Name of the form. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Type of the form, for example, Dashboard or Preview. */
		Type: DevKit.WebApi.OptionSetValue;
		/** Unique Name */
		UniqueName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		Version: DevKit.WebApi.IntegerValue;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SystemForm {
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
		enum FormActivationState {
			/** 0 */
			Inactive,
			/** 1 */
			Active
		}
		enum FormPresentation {
			/** 0 */
			ClassicForm,
			/** 1 */
			AirForm,
			/** 2 */
			ConvertedICForm
		}
		enum Type {
			/** 0 */
			Dashboard,
			/** 1 */
			AppointmentBook,
			/** 2 */
			Main,
			/** 3 */
			MiniCampaignBO,
			/** 4 */
			Preview,
			/** 5 */
			Mobile_Express,
			/** 6 */
			Quick_View_Form,
			/** 7 */
			Quick_Create,
			/** 8 */
			Dialog,
			/** 9 */
			Task_Flow_Form,
			/** 10 */
			InteractionCentricDashboard,
			/** 11 */
			Card,
			/** 12 */
			Main_Interactive_experience,
			/** 100 */
			Other,
			/** 101 */
			MainBackup,
			/** 102 */
			AppointmentBookBackup,
			/** 103 */
			Power_BI_Dashboard
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}