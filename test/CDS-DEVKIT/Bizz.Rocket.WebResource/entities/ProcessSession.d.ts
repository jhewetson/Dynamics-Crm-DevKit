﻿///<reference path='DevKit.d.ts' />
declare namespace Rocket {
	namespace FormProcessSessionInformation {
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections {
			Details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary_Sections {
			Summary: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Comments_Sections {
			Comments: DevKit.Form.Controls.ControlSection;
		}
		interface tab_LinkedSessions_Sections {
			LinkedSessions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details_Sections {
			Details_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417 extends DevKit.Form.Controls.IControlTab {
			Section: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Comments extends DevKit.Form.Controls.IControlTab {
			Section: tab_Comments_Sections;
		}
		interface tab_LinkedSessions extends DevKit.Form.Controls.IControlTab {
			Section: tab_LinkedSessions_Sections;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417;
			Summary: tab_Summary;
			Comments: tab_Comments;
			LinkedSessions: tab_LinkedSessions;
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Form.Controls.ControlDateTime;
			/** User comments. */
			Comments: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Name of the dialog session. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Form.Controls.ControlLookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Form.Controls.ControlDateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Footer {
			/** Status of the dialog session. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormProcessSessionInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ProcessSessionInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ProcessSessionInformation */
		Body: Rocket.FormProcessSessionInformation.Body;
		/** The Footer section of form ProcessSessionInformation */
		Footer: Rocket.FormProcessSessionInformation.Footer;
	}
	class ProcessSessionApi {
		/**
		* PL.DynamicsCrm.DevKit ProcessSessionApi
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
		/** Name of the activity that is being executed. */
		ActivityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who canceled the dialog session. */
		CanceledBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was canceled. */
		CanceledOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** User comments. */
		Comments: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who completed the dialog session. */
		CompletedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who started the dialog session. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the dialog session. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Error code related to the dialog session. */
		ErrorCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who ran the dialog process. */
		ExecutedBy: DevKit.WebApi.LookupValue;
		/** Date and time when the dialog process was run. */
		ExecutedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Input arguments for the child dialog process. */
		InputArguments: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the dialog session. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the dialog session. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the dialog session. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the succeeding linked dialog session. */
		NextLinkedSessionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the originating dialog session. */
		OriginatingSessionId: DevKit.WebApi.LookupValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the dialog session. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the dialog session. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the dialog session. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the preceding linked dialog session. */
		PreviousLinkedSessionId: DevKit.WebApi.LookupValue;
		/** Select the process activation record that is related to the dialog session. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the dialog session. */
		ProcessSessionId: DevKit.WebApi.GuidValue;
		/** Name of the dialog stage. */
		ProcessStageName: DevKit.WebApi.StringValue;
		/** State of the dialog process. */
		ProcessState: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ProtectionKey: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		channelaccessprofile_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		profileid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connectionrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_devkit_processwebapi1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_expiredprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalparty_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalpartyitem_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goalrollupquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_metric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_newprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_report: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_rollupfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_subject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_template: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_theme: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_transactioncurrency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_translationprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who started the dialog session. */
		StartedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Status of the dialog session. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the dialog session. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Name of the dialog step. */
		StepName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ProcessSession {
		enum StateCode {
			/** 0 */
			Incomplete,
			/** 1 */
			Complete
		}
		enum StatusCode {
			/** 1 */
			Not_Started,
			/** 2 */
			In_Progress,
			/** 3 */
			Paused,
			/** 4 */
			Completed,
			/** 5 */
			Canceled,
			/** 6 */
			Failed
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}