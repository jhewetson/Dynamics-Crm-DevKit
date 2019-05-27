﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace Formmsdyn_playbooktemplateInformation {
		interface Header {
			/** Publisher Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the Playbook Template */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__3A0EE21B_6FBD_455F_913E_A42FE8978461_Sections {
			_30B01E30_AE8E_4D6D_ACA8_95CFBB42C003: DevKit.Form.Controls.ControlSection;
			_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_4: DevKit.Form.Controls.ControlSection;
			_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Monitoring_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__3A0EE21B_6FBD_455F_913E_A42FE8978461 extends DevKit.Form.Controls.IControlTab {
			Section: tab__3A0EE21B_6FBD_455F_913E_A42FE8978461_Sections;
		}
		interface tab_Monitoring extends DevKit.Form.Controls.IControlTab {
			Section: tab_Monitoring_Sections;
		}
		interface Tabs {
			_3A0EE21B_6FBD_455F_913E_A42FE8978461: tab__3A0EE21B_6FBD_455F_913E_A42FE8978461;
			Monitoring: tab_Monitoring;
		}
		interface Body {
			Tab: Tabs;
			PlaybookActivities: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			AssociatedPlaybooks: DevKit.Form.Controls.ControlGrid;
			/** Shows the unique ID of the playbook category associated with the playbook template. */
			msdyn_categoryid: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the playbook template. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Enter the estimated duration in days to indicate the time it may take to complete the playbook template once launched. */
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Type the name of the playbook template. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_relatedentitylist: DevKit.Form.Controls.ControlActionCards;
			/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
			msdyn_trackprogress: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class Formmsdyn_playbooktemplateInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form msdyn_playbooktemplateInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_playbooktemplateInformation */
		Body: Hsbc.Formmsdyn_playbooktemplateInformation.Body;
		/** The Header section of form msdyn_playbooktemplateInformation */
		Header: Hsbc.Formmsdyn_playbooktemplateInformation.Header;
	}
	class msdyn_playbooktemplateApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_playbooktemplateApi
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
		/** Shows the unique ID of the playbook category associated with the playbook template. */
		msdyn_categoryid: DevKit.WebApi.LookupValue;
		/** Type additional information to describe the playbook template. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** Enter the estimated duration in days to indicate the time it may take to complete the playbook template once launched. */
		msdyn_EstimatedDuration: DevKit.WebApi.IntegerValue;
		/** Internal Use Only */
		msdyn_fullentitylist: DevKit.WebApi.StringValue;
		/** Type the name of the playbook template. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the unique ID of the playbook template. */
		msdyn_playbooktemplateId: DevKit.WebApi.GuidValue;
		/** Internal Use Only */
		msdyn_relatedentitylist: DevKit.WebApi.StringValue;
		/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
		msdyn_trackprogress: DevKit.WebApi.BooleanValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Playbook Template */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Playbook Template */
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
	namespace msdyn_playbooktemplate {
		enum statecode {
			/** 0 */
			Draft,
			/** 1 */
			Published
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 2 */
			Published
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}