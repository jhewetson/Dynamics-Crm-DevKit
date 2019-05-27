///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormImportMapInformation {
		interface Tabs {
		}
		interface Body {
			/** Shows who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type additional information to describe the data map, such as the intended use or data source. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type a descriptive name for the data map. */
			Name: DevKit.Form.Controls.ControlString;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormImportMapInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ImportMapInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ImportMapInformation */
		Body: Rocket.FormImportMapInformation.Body;
	}
	class ImportMapApi {
		/**
		* PL.DynamicsCrm.DevKit ImportMapApi
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
		/** Type additional information to describe the data map, such as the intended use or data source. */
		Description: DevKit.WebApi.StringValue;
		/** Choose whether a data file can contain data for one or more record types. */
		EntitiesPerFile: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the data map. */
		ImportMapId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the ImortMap. */
		ImportMapIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Select the type of data map to distinguish out-of-the-box data maps from custom maps. */
		ImportMapType: DevKit.WebApi.OptionSetValue;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the data map is valid for use with data import. */
		IsValidForImport: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether this data map was created by the Data Migration Manager. */
		IsWizardCreated: DevKit.WebApi.BooleanValue;
		/** Customizations XML */
		MapCustomizations: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the data map. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Business unit that owns the data map. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the data map. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the data map. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Type the name of the migration source that this data map is used for. */
		Source: DevKit.WebApi.StringValue;
		/** Select the migration source type that this data map is used for. */
		SourceType: DevKit.WebApi.OptionSetValue;
		/** Source user value for source Microsoft Dynamics 365 user link. */
		SourceUserIdentifierForSourceCRMUserLink: DevKit.WebApi.StringValue;
		/** Column in the source file that uniquely identifies a user. */
		SourceUserIdentifierForSourceDataSourceUserLink: DevKit.WebApi.StringValue;
		/** Shows whether the data map is active or inactive. Inactive data maps are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the data map's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Select the name of the Microsoft Dynamics 365 record type that this data map is defined for. */
		TargetEntity: DevKit.WebApi.OptionSetValueReadonly;
		/** Microsoft Dynamics 365 user. */
		TargetUserIdentifierForSourceCRMUserLink: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ImportMap {
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
		enum EntitiesPerFile {
			/** 1 */
			Single_Entity_Per_File,
			/** 2 */
			Multiple_Entities_Per_File
		}
		enum ImportMapType {
			/** 1 */
			Standard,
			/** 2 */
			Out_of_Box,
			/** 3 */
			In_Process
		}
		enum SourceType {
			/** 1 */
			Map_For_SalesForcecom_Full_Data_Export,
			/** 2 */
			Map_For_SalesForcecom_Report_Export,
			/** 3 */
			Map_For_SalesForcecom_Contact_and_Account_Report_Export,
			/** 4 */
			Microsoft_Office_Outlook_2010_with_Business_Contact_Manager,
			/** 5 */
			Generic_Map_for_Contact_and_Account
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
		enum TargetEntity {
			/** 1130 */
			Ribbon_Difference,
			/** 1117 */
			Ribbon_Rule,
			/** 1115 */
			Ribbon_Context_Group,
			/** 1120 */
			Application_Ribbons,
			/** 1113 */
			Ribbon_Tab_To_Command_Mapping,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 1036 */
			Security_Role,
			/** 1037 */
			Role_Template,
			/** 1116 */
			Ribbon_Command,
			/** 1140 */
			Replication_Backlog,
			/** 9100 */
			Report,
			/** 4500 */
			Relationship_Role,
			/** 4501 */
			Relationship_Role_Map,
			/** 9102 */
			Report_Related_Category,
			/** 9103 */
			Report_Visibility,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 9101 */
			Report_Related_Entity,
			/** 9104 */
			Report_Link,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 4609 */
			Sdk_Message_Request,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 4618 */
			Service_Endpoint,
			/** 4610 */
			Sdk_Message_Response,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 4613 */
			Sdk_Message_Pair,
			/** 8199 */
			Rule_Item,
			/** 7200 */
			RuntimeDependency,
			/** 9510 */
			Rollup_Properties,
			/** 8181 */
			Routing_Rule_Set,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4606 */
			Sdk_Message,
			/** 4607 */
			Sdk_Message_Filter,
			/** 1039 */
			View,
			/** 1111 */
			System_Chart,
			/** 4251 */
			Recurring_Appointment,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4602 */
			Plug_in_Type,
			/** 4418 */
			List_Value_Mapping,
			/** 4605 */
			Plug_in_Assembly,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 8005 */
			Comment,
			/** 8003 */
			Follow,
			/** 50 */
			Position,
			/** 8000 */
			Post,
			/** 4210 */
			Phone_Call,
			/** 1021 */
			Organization_UI,
			/** 9699 */
			Organization_Insights_Metric,
			/** 1019 */
			Organization,
			/** 4708 */
			Organization_Statistic,
			/** 9690 */
			Organization_Insights_Notification,
			/** 1095 */
			Partner_Application,
			/** 9941 */
			Personal_Document_Template,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 2020 */
			Queue,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 2029 */
			Queue_Item,
			/** 1189 */
			Document_Suggestions,
			/** 4250 */
			Recurrence_Rule,
			/** 2023 */
			QueueItemCount,
			/** 2024 */
			QueueMemberCount,
			/** 4712 */
			Process_Trigger,
			/** 8001 */
			Post_Role,
			/** 44 */
			Field_Sharing,
			/** 8006 */
			Like,
			/** 8002 */
			Post_Regarding,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 9509 */
			SharePoint_Data,
			/** 8050 */
			Trace,
			/** 8052 */
			Trace_Regarding,
			/** 4811 */
			Time_Zone_Rule,
			/** 8051 */
			Trace_Association,
			/** 9105 */
			Currency,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 92 */
			Team_template,
			/** 2010 */
			Email_Template,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 2013 */
			Territory,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 2015 */
			Theme,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 150 */
			User_Settings,
			/** 9333 */
			Web_Resource,
			/** 4802 */
			Wizard_Page,
			/** 4706 */
			Process_Log,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 4703 */
			Process,
			/** 4704 */
			Process_Dependency,
			/** 52 */
			User_Search_Facet,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 4220 */
			UntrackedEmail,
			/** 7001 */
			User_Application_Metadata,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 4230 */
			Saved_View,
			/** 1112 */
			User_Chart,
			/** 1031 */
			User_Dashboard,
			/** 2016 */
			User_Mapping,
			/** 9 */
			Team,
			/** 7103 */
			Solution_Component,
			/** 7104 */
			Solution_Component_Definition,
			/** 99 */
			Social_Profile,
			/** 7100 */
			Solution,
			/** 9890 */
			SolutionHistoryData,
			/** 129 */
			Subject,
			/** 29 */
			Subscription,
			/** 1075 */
			Status_Map,
			/** 1043 */
			String_Map,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 9502 */
			SharePoint_Site,
			/** 9951 */
			Similarity_Rule,
			/** 9507 */
			Sharepoint_Document,
			/** 9508 */
			Document_Location,
			/** 4709 */
			Site_Map,
			/** 9752 */
			SLA_KPI_Instance,
			/** 4216 */
			Social_Activity,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 7000 */
			System_Application_Metadata,
			/** 1030 */
			System_Form,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 9869 */
			Sync_Error,
			/** 8 */
			User,
			/** 14 */
			System_User_Principal,
			/** 4212 */
			Task,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 51 */
			System_User_Manager_Map,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 1072 */
			Subscription_Clients,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 1190 */
			SuggestionCardTemplate,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 9870 */
			Offline_Command_Definition,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 2 */
			Contact,
			/** 3234 */
			Connection,
			/** 3231 */
			Connection_Role,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 9753 */
			Custom_Control,
			/** 9650 */
			Process_Configuration,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9983 */
			Action_Card_Type,
			/** 9959 */
			Category,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 126 */
			Indexed_Article,
			/** 9940 */
			Document_Template,
			/** 4102 */
			Display_String,
			/** 4101 */
			Display_String_Map,
			/** 4415 */
			Duplicate_Record,
			/** 4202 */
			Email,
			/** 4023 */
			Email_Hash,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 10007 */
			WebApi,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 9961 */
			DelveActionHub,
			/** 1071 */
			Address,
			/** 4502 */
			Customer_Relationship,
			/** 7105 */
			Dependency,
			/** 10015 */
			Custom_Activity,
			/** 10016 */
			Process_WebApi_1,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 300 */
			Canvas_App,
			/** 9013 */
			App_Configuration_Instance,
			/** 9011 */
			App_Config_Master,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 9012 */
			App_Configuration,
			/** 4707 */
			Application_File,
			/** 8700 */
			AppModule_Metadata,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 9006 */
			Model_driven_App,
			/** 9007 */
			App_Module_Component,
			/** 5 */
			Note,
			/** 9962 */
			Action_Card,
			/** 9973 */
			Action_Card_User_Settings,
			/** 1 */
			Account,
			/** 8040 */
			ACIViewMapper,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 1001,1002 */
			Attachment,
			/** 135 */
			Activity_Party,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 10 */
			Business_Unit,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 6 */
			Business_Unit_Map,
			/** 4004 */
			Calendar_Rule,
			/** 301 */
			Callback_Registration,
			/** 132 */
			Announcement,
			/** 4003 */
			Calendar,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4201 */
			Appointment,
			/** 4700 */
			System_Job,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 9009 */
			App_Module_Roles,
			/** 1094 */
			Authorization_Server,
			/** 9936 */
			Azure_Service_Connection,
			/** 4601 */
			Attribute_Map,
			/** 4567 */
			Auditing,
			/** 4299 */
			Email_Search,
			/** 9606 */
			Mailbox,
			/** 9607 */
			Mailbox_Statistics,
			/** 9201 */
			LocalConfigStore,
			/** 4419 */
			Lookup_Mapping,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 4231 */
			Metadata_Difference,
			/** 9603 */
			Goal_Metric,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 9106 */
			Mail_Merge_Template,
			/** 2027 */
			License,
			/** 9960 */
			Knowledge_Article_Category,
			/** 9955 */
			Knowledge_Article_Views,
			/** 1016 */
			Article_Template,
			/** 9953 */
			Knowledge_Article,
			/** 9930 */
			Knowledge_Base_Record,
			/** 9875 */
			Language_Provisioning_State,
			/** 4207 */
			Letter,
			/** 9947 */
			Knowledge_Search_Model,
			/** 9957 */
			Language,
			/** 9910 */
			MultiEntitySearch,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 10003 */
			Solution_History,
			/** 10004 */
			Solution_History_Data_Source,
			/** 9900 */
			Navigation_Setting,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 950 */
			New_Process,
			/** 4110 */
			Notification,
			/** 10001 */
			Solution_Component_Summary,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 10005 */
			Component_Layer,
			/** 10000 */
			OData_v4_Data_Source,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 371 */
			Connector,
			/** 1082 */
			Article_Comment,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 55 */
			FileAttachment,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 30 */
			Filter_Template,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 9987 */
			External_Party_Item,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 9605 */
			Email_Server_Profile,
			/** 9997 */
			Email_Signature,
			/** 4600 */
			Entity_Map,
			/** 955 */
			Expired_Process,
			/** 3008 */
			External_Party,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 3000 */
			Integration_Status,
			/** 9986 */
			Interaction_for_Email,
			/** 4423 */
			Import_Log,
			/** 4411 */
			Data_Map,
			/** 1003 */
			Internal_Address,
			/** 4705 */
			ISV_Config,
			/** 127 */
			Article,
			/** 4011 */
			Inter_Process_Lock,
			/** 7107 */
			Invalid_Dependency,
			/** 9107 */
			Import_Job,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 9602 */
			Rollup_Query,
			/** 8840 */
			Hierarchy_Rule,
			/** 1007 */
			Image_Descriptor,
			/** 4428 */
			Import_Entity_Mapping,
			/** 4412 */
			Import_Source_File,
			/** 4410 */
			Data_Import,
			/** 4413 */
			Import_Data
		}
	}
}
//{'JsForm':['ImportMap Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}