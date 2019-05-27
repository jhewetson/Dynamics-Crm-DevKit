﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormMobileOfflineProfileItem {
		interface tab_GENERALINFORMATION_TAB_Sections {
			EntitySelection: DevKit.Form.Controls.ControlSection;
			MOBILEOFFLINEPROFILEITEMASSOCIATIONS: DevKit.Form.Controls.ControlSection;
		}
		interface tab_GENERALINFORMATION_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			profileassociationgrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Enter the name of the mobile offline profile item. */
			Name: DevKit.Form.Controls.ControlString;
			/** Specify data download filter for selected entity */
			RecordDistributionCriteria: DevKit.Form.Controls.ControlOptionSet;
			/** Download my records */
			RecordsOwnedByMe: DevKit.Form.Controls.ControlBoolean;
			/** Download my business unit's records */
			RecordsOwnedByMyBusinessUnit: DevKit.Form.Controls.ControlBoolean;
			/** Download my team's records */
			RecordsOwnedByMyTeam: DevKit.Form.Controls.ControlBoolean;
			/** Mobile offline enabled entity */
			SelectedEntityTypeCode: DevKit.Form.Controls.ControlString;
		}
	}
	class FormMobileOfflineProfileItem extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form MobileOfflineProfileItem
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form MobileOfflineProfileItem */
		Body: Rocket.FormMobileOfflineProfileItem.Body;
	}
	class MobileOfflineProfileItemApi {
		/**
		* PL.DynamicsCrm.DevKit MobileOfflineProfileItemApi
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
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Internal Use Only */
		EntityObjectTypeCode: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the Mobile offline Profile Item is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether profile item is validated or not */
		IsValidated: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the mobile offline profile item is visible in the Profile Item subgrid. */
		IsVisibleInGrid: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the mobile offline profile item. */
		MobileOfflineProfileItemId: DevKit.WebApi.GuidValue;
		/** For Internal Use Only */
		MobileOfflineProfileItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the name of the mobile offline profile item. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the Mobile Offline Profile Item. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Profile item entity filter criteria */
		ProfileItemEntityFilter: DevKit.WebApi.StringValue;
		/** Displays the last published date time. */
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Specify data download filter for selected entity */
		RecordDistributionCriteria: DevKit.WebApi.OptionSetValue;
		/** Download my records */
		RecordsOwnedByMe: DevKit.WebApi.BooleanValue;
		/** Download my business unit's records */
		RecordsOwnedByMyBusinessUnit: DevKit.WebApi.BooleanValue;
		/** Download my team's records */
		RecordsOwnedByMyTeam: DevKit.WebApi.BooleanValue;
		/** Items contained with a particular Profile. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Internal Use Only */
		RelationshipData: DevKit.WebApi.StringValue;
		/** Internal Use Only */
		SelectedEntityMetadata: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the Mobile Offline Profile Item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItem {
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
		enum RecordDistributionCriteria {
			/** 0 */
			Download_related_data_only,
			/** 1 */
			All_records,
			/** 2 */
			Other_data_filter,
			/** 3 */
			Custom_data_filter
		}
	}
}
//{'JsForm':['Mobile Offline Profile Item'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}