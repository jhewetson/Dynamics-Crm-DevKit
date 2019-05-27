///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormConnectionInformation {
		interface Header {
			/** Unique identifier of the source record. */
			Record1Id: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_info_Sections {
			info_s: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_Sections {
			connect_from: DevKit.Form.Controls.ControlSection;
			details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_info extends DevKit.Form.Controls.IControlTab {
			Section: tab_info_Sections;
		}
		interface tab_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_Sections;
		}
		interface Tabs {
			info: tab_info;
			details: tab_details;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the end date of the connection. */
			EffectiveEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the start date of the connection. */
			EffectiveStart: DevKit.Form.Controls.ControlDate;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the source record. */
			Record1Id: DevKit.Form.Controls.ControlLookup;
			/** Choose the primary party's role or relationship with the second party. */
			Record1RoleId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the target record. */
			Record2Id: DevKit.Form.Controls.ControlLookup;
			/** Choose the secondary party's role or relationship with the primary party. */
			Record2RoleId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormConnectionInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ConnectionInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ConnectionInformation */
		Body: Hsbc.FormConnectionInformation.Body;
		/** The Footer section of form ConnectionInformation */
		Footer: Hsbc.FormConnectionInformation.Footer;
		/** The Header section of form ConnectionInformation */
		Header: Hsbc.FormConnectionInformation.Header;
	}
	class ConnectionApi {
		/**
		* PL.DynamicsCrm.DevKit ConnectionApi
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
		/** Unique identifier of the connection. */
		ConnectionId: DevKit.WebApi.GuidValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the connection, such as the length or quality of the relationship. */
		Description: DevKit.WebApi.StringValue;
		/** Enter the end date of the connection. */
		EffectiveEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the start date of the connection. */
		EffectiveStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Indicates that this is the master record. */
		IsMaster: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the connection. */
		Name: DevKit.WebApi.StringValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the connection. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the connection. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the source record. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		profileruleid1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_territory: DevKit.WebApi.LookupValue;
		/** Shows the record type of the source record. */
		Record1ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Choose the primary party's role or relationship with the second party. */
		Record1RoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_territory: DevKit.WebApi.LookupValue;
		/** Shows the record type of the target record. */
		Record2ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Choose the secondary party's role or relationship with the primary party. */
		Record2RoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the reciprocal connection record. */
		RelatedConnectionId: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the connection. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the connection. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Connection {
		enum Record1ObjectTypeCode {
			/** 1024 */
			Product,
			/** 4400 */
			Campaign,
			/** 1088 */
			Order,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 4251 */
			Recurring_Appointment,
			/** 9700 */
			Entitlement,
			/** 4402 */
			Campaign_Activity,
			/** 2013 */
			Territory,
			/** 4204 */
			Fax,
			/** 4214 */
			Service_Activity,
			/** 10042 */
			Survey_response,
			/** 4710 */
			Process_Session,
			/** 1010 */
			Contract,
			/** 1022 */
			Price_List,
			/** 112 */
			Case,
			/** 3 */
			Opportunity,
			/** 4300 */
			Marketing_List,
			/** 99 */
			Social_Profile,
			/** 4212 */
			Task,
			/** 4210 */
			Phone_Call,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9 */
			Team,
			/** 9600 */
			Goal,
			/** 4200 */
			Activity,
			/** 4005 */
			Scheduling_Group,
			/** 8 */
			User,
			/** 4 */
			Lead,
			/** 123 */
			Competitor,
			/** 4000 */
			FacilityEquipment,
			/** 1084 */
			Quote,
			/** 9953 */
			Knowledge_Article,
			/** 4207 */
			Letter,
			/** 4007 */
			Resource_Group,
			/** 4201 */
			Appointment,
			/** 9701 */
			Entitlement_Channel,
			/** 4202 */
			Email,
			/** 2 */
			Contact,
			/** 1090 */
			Invoice,
			/** 50 */
			Position,
			/** 1 */
			Account,
			/** 10032 */
			Profile_Album,
			/** 4216 */
			Social_Activity,
			/** 10041 */
			Survey_invite,
			/** 9930 */
			Knowledge_Base_Record
		}
		enum Record2ObjectTypeCode {
			/** 2 */
			Contact,
			/** 4210 */
			Phone_Call,
			/** 9 */
			Team,
			/** 123 */
			Competitor,
			/** 4214 */
			Service_Activity,
			/** 4251 */
			Recurring_Appointment,
			/** 1090 */
			Invoice,
			/** 4710 */
			Process_Session,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 4204 */
			Fax,
			/** 50 */
			Position,
			/** 10032 */
			Profile_Album,
			/** 4216 */
			Social_Activity,
			/** 1084 */
			Quote,
			/** 10041 */
			Survey_invite,
			/** 4402 */
			Campaign_Activity,
			/** 1022 */
			Price_List,
			/** 4207 */
			Letter,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 4202 */
			Email,
			/** 9953 */
			Knowledge_Article,
			/** 8 */
			User,
			/** 4201 */
			Appointment,
			/** 4007 */
			Resource_Group,
			/** 1088 */
			Order,
			/** 9701 */
			Entitlement_Channel,
			/** 112 */
			Case,
			/** 9700 */
			Entitlement,
			/** 9600 */
			Goal,
			/** 99 */
			Social_Profile,
			/** 4200 */
			Activity,
			/** 4400 */
			Campaign,
			/** 3 */
			Opportunity,
			/** 4005 */
			Scheduling_Group,
			/** 9930 */
			Knowledge_Base_Record,
			/** 4212 */
			Task,
			/** 1024 */
			Product,
			/** 2013 */
			Territory,
			/** 1010 */
			Contract,
			/** 4300 */
			Marketing_List,
			/** 10042 */
			Survey_response,
			/** 4000 */
			FacilityEquipment,
			/** 4 */
			Lead,
			/** 1 */
			Account
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}