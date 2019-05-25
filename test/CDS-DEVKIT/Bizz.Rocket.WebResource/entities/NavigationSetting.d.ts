﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class NavigationSettingApi {
		/**
		* PL.DynamicsCrm.DevKit NavigationSettingApi
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
		/** Enter the position of this NavigationSetting as it should appear within its group in the Advanced Setup menu. */
		AdvancedSettingOrder: DevKit.WebApi.IntegerValue;
		/** Enter the App Config record that this Navigation Setting is associated with. */
		AppConfigId: DevKit.WebApi.LookupValue;
		/** For system use only. */
		AppConfigIdUnique: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a description that describes that Navigation Setting in detail. */
		Description: DevKit.WebApi.StringValue;
		/** Type the name of the group represented by this Navigation Setting record. */
		GroupName: DevKit.WebApi.StringValue;
		/** The web resource identifier of the icon to be used for a navigation setting area or sub area. */
		IconResourceId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a title or name that describes the Navigation Setting so it can be identified in Dynamics CRM views. */
		Name: DevKit.WebApi.StringValue;
		/** Identifies a single setting page or group of pages configured for use in a single app. */
		NavigationSettingId: DevKit.WebApi.GuidValue;
		/** For system use only. */
		NavigationSettingIdUnique: DevKit.WebApi.GuidValue;
		/** Enter the Object Type Code of the entity associated whose page this Navigation Setting record represents. */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** System-populated field that identifies the organization that owns this Navigation Setting record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Type the URL which locates the page associated with this Navigation Setting record. */
		PageUrl: DevKit.WebApi.StringValue;
		/** The Navigation Setting record that represents the group that this record belongs to. */
		ParentNavigationSettingId: DevKit.WebApi.GuidValue;
		/** Enter the Privilege Mask for the entity associated with this navigation setting page that will be the minimum requirement for the page to be made available to a user. */
		Privileges: DevKit.WebApi.IntegerValue;
		/** Select the setup completion level for this Navigation Setting page. */
		ProgressState: DevKit.WebApi.BooleanValue;
		/** Enter the position of this NavigationSetting as it should appear in the Quick Setup menu. */
		QuickSettingOrder: DevKit.WebApi.IntegerValue;
		/** The Web Resource that will be associated with this Navigation Setting record. */
		ResourceId: DevKit.WebApi.GuidValue;
		/** Select the type of group this Navigation Setting record represents. This determines which of the three in-app customization menus will contain this group. */
		SettingType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace NavigationSetting {
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
		enum SettingType {
			/** 0 */
			Advanced_Setup,
			/** 1 */
			Basic_Setup,
			/** 2 */
			Advanced_Setup_Summary,
			/** 3 */
			Basic_Setup_Summary
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}