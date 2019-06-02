﻿///<reference path='DevKit.d.ts' />
declare namespace Rocket {
	namespace FormMobileOfflineProfileItemAssociation {
		interface tab_GENERALINFORMATION_TAB_Sections {
			General: DevKit.Form.Controls.ControlSection;
		}
		interface tab_GENERALINFORMATION_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Enter the name of the mobile offline profile item association. */
			Name: DevKit.Form.Controls.ControlString;
			/** Display name of entity relationship */
			RelationshipName: DevKit.Form.Controls.ControlString;
			/** List of relationships of entity selected in parent profile item */
			SelectedRelationShipsSchema: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormMobileOfflineProfileItemAssociation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form MobileOfflineProfileItemAssociation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form MobileOfflineProfileItemAssociation */
		Body: Rocket.FormMobileOfflineProfileItemAssociation.Body;
	}
	class MobileOfflineProfileItemAssociationApi {
		/**
		* PL.DynamicsCrm.DevKit MobileOfflineProfileItemAssociationApi
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
		/** Version in which the Mobile offline Profile Item Association is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether profile item association is validated or not */
		IsValidated: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the mobile offline profile item associaition. */
		MobileOfflineProfileItemAssociationId: DevKit.WebApi.GuidValue;
		/** For Internal Use Only */
		MobileOfflineProfileItemAssociationIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Id of the parent profile item. */
		MobileOfflineProfileItemId: DevKit.WebApi.LookupValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the name of the mobile offline profile item association. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the Mobile Offline Profile Item Association. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Profile item association entity filter criteria. */
		ProfileItemAssociationEntityFilter: DevKit.WebApi.StringValue;
		/** Displays the last published date time. */
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Internal Use Only */
		RelationshipData: DevKit.WebApi.StringValue;
		/** Entity relationship schema name */
		RelationshipDisplayName: DevKit.WebApi.StringValue;
		/** Shows the relationship */
		RelationshipId: DevKit.WebApi.GuidValue;
		/** Display name of entity relationship */
		RelationshipName: DevKit.WebApi.StringValueReadonly;
		/** List of relationships of entity selected in parent profile item */
		SelectedRelationShipsSchema: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the Mobile Offline profileitemassociation. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItemAssociation {
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
		enum SelectedRelationShipsSchema {
		}
	}
}
//{'JsForm':['Mobile Offline Profile Item Association'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}