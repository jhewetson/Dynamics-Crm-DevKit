///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class DuplicateRuleApi {
		/**
		* PL.DynamicsCrm.DevKit DuplicateRuleApi
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
		/** Database table that stores match codes for the record type being evaluated for potential duplicates. */
		BaseEntityMatchCodeTable: DevKit.WebApi.StringValueReadonly;
		/** Record type of the record being evaluated for potential duplicates. */
		BaseEntityName: DevKit.WebApi.StringValue;
		/** Record type of the record being evaluated for potential duplicates. */
		BaseEntityTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the duplicate detection rule. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate detection rule was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the duplicaterule. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the duplicate detection rule. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the duplicate detection rule. */
		DuplicateRuleId: DevKit.WebApi.GuidValue;
		/** Determines whether to flag inactive records as duplicates */
		ExcludeInactiveRecords: DevKit.WebApi.BooleanValue;
		/** Indicates if the operator is case-sensitive. */
		IsCaseSensitive: DevKit.WebApi.BooleanValue;
		/** Database table that stores match codes for potential duplicate records. */
		MatchingEntityMatchCodeTable: DevKit.WebApi.StringValueReadonly;
		/** Record type of the records being evaluated as potential duplicates. */
		MatchingEntityName: DevKit.WebApi.StringValue;
		/** Record type of the records being evaluated as potential duplicates. */
		MatchingEntityTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who last modified the duplicate detection rule. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate detection rule was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the duplicaterule. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the duplicate detection rule. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns duplicate detection rule. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the duplicate detection rule. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the duplicate detection rule. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the duplicate detection rule. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the duplicate detection rule. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace DuplicateRule {
		enum BaseEntityTypeCode {
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 1028 */
			Product_Relationship,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 2023 */
			QueueItemCount,
			/** 1085 */
			Quote_Product,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 2024 */
			QueueMemberCount,
			/** 1084 */
			Quote,
			/** 4211 */
			Quote_Close,
			/** 21 */
			ProductSalesLiterature,
			/** 44 */
			Field_Sharing,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 1023 */
			Privilege,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 1022 */
			Price_List,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 1026 */
			Price_List_Item,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 1189 */
			Document_Suggestions,
			/** 1120 */
			Application_Ribbons,
			/** 1130 */
			Ribbon_Difference,
			/** 1117 */
			Ribbon_Rule,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 1116 */
			Ribbon_Command,
			/** 1115 */
			Ribbon_Context_Group,
			/** 1113 */
			Ribbon_Tab_To_Command_Mapping,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 8181 */
			Routing_Rule_Set,
			/** 1036 */
			Security_Role,
			/** 1037 */
			Role_Template,
			/** 9604 */
			Rollup_Field,
			/** 4006 */
			Resource_Specification,
			/** 4501 */
			Relationship_Role_Map,
			/** 1140 */
			Replication_Backlog,
			/** 9100 */
			Report,
			/** 4250 */
			Recurrence_Rule,
			/** 4251 */
			Recurring_Appointment,
			/** 4500 */
			Relationship_Role,
			/** 9102 */
			Report_Related_Category,
			/** 4002 */
			Resource,
			/** 4005 */
			Scheduling_Group,
			/** 4010 */
			Resource_Expansion,
			/** 9101 */
			Report_Related_Entity,
			/** 9104 */
			Report_Link,
			/** 9103 */
			Report_Visibility,
			/** 8006 */
			Like,
			/** 10040 */
			Survey,
			/** 10041 */
			Survey_invite,
			/** 10042 */
			Survey_response,
			/** 10037 */
			Survey_email_template,
			/** 10038 */
			Survey_question,
			/** 10039 */
			Survey_question_response,
			/** 10043 */
			Unsubscribed_recipient,
			/** 950 */
			New_Process,
			/** 4110 */
			Notification,
			/** 4490 */
			Office_Document,
			/** 9910 */
			MultiEntitySearch,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9900 */
			Navigation_Setting,
			/** 10036 */
			Filter,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 10001 */
			Solution_Component_Summary,
			/** 10003 */
			Solution_History,
			/** 10022 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 10028 */
			salesinsightssettings,
			/** 10023 */
			siconfig,
			/** 10004 */
			Solution_History_Data_Source,
			/** 10009 */
			Upgrade_Step,
			/** 10010 */
			Upgrade_Version,
			/** 10035 */
			Wall_View,
			/** 10044 */
			Microsoft_Teams_Collaboration_entity,
			/** 10029 */
			UntrackedAppointment,
			/** 10008 */
			Upgrade_Run,
			/** 9950 */
			Office_Graph_Document,
			/** 952 */
			Phone_To_Case_Process,
			/** 4418 */
			List_Value_Mapping,
			/** 4605 */
			Plug_in_Assembly,
			/** 1095 */
			Partner_Application,
			/** 9941 */
			Personal_Document_Template,
			/** 4210 */
			Phone_Call,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 8000 */
			Post,
			/** 8005 */
			Comment,
			/** 8003 */
			Follow,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 50 */
			Position,
			/** 4420 */
			Owner_Mapping,
			/** 25 */
			OpportunityCompetitors,
			/** 1083 */
			Opportunity_Product,
			/** 953 */
			Opportunity_Sales_Process,
			/** 9870 */
			Offline_Command_Definition,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 7 */
			Owner,
			/** 1019 */
			Organization,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 2015 */
			Theme,
			/** 4811 */
			Time_Zone_Rule,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 8051 */
			Trace_Association,
			/** 9948 */
			Text_Analytics_Topic,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 2010 */
			Email_Template,
			/** 1030 */
			System_Form,
			/** 8 */
			User,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 9869 */
			Sync_Error,
			/** 7000 */
			System_Application_Metadata,
			/** 51 */
			System_User_Manager_Map,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 14 */
			System_User_Principal,
			/** 4212 */
			Task,
			/** 9 */
			Team,
			/** 8050 */
			Trace,
			/** 52 */
			User_Search_Facet,
			/** 150 */
			User_Settings,
			/** 9333 */
			Web_Resource,
			/** 2016 */
			User_Mapping,
			/** 4230 */
			Saved_View,
			/** 1112 */
			User_Chart,
			/** 4800 */
			Web_Wizard,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 4802 */
			Wizard_Page,
			/** 4703 */
			Process,
			/** 1031 */
			User_Dashboard,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 8052 */
			Trace_Regarding,
			/** 9105 */
			Currency,
			/** 4426 */
			Transformation_Mapping,
			/** 4220 */
			UntrackedEmail,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 7001 */
			User_Application_Metadata,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 4610 */
			Sdk_Message_Response,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 4609 */
			Sdk_Message_Request,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 4618 */
			Service_Endpoint,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 20 */
			Service_Contract_Contact,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 1070 */
			Sales_Attachment,
			/** 1088 */
			Order,
			/** 1089 */
			Order_Product,
			/** 8199 */
			Rule_Item,
			/** 7200 */
			RuntimeDependency,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 4606 */
			Sdk_Message,
			/** 4607 */
			Sdk_Message_Filter,
			/** 4613 */
			Sdk_Message_Pair,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 1039 */
			View,
			/** 1111 */
			System_Chart,
			/** 9508 */
			Document_Location,
			/** 29 */
			Subscription,
			/** 1072 */
			Subscription_Clients,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 1075 */
			Status_Map,
			/** 1043 */
			String_Map,
			/** 129 */
			Subject,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 1190 */
			SuggestionCardTemplate,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 9890 */
			SolutionHistoryData,
			/** 4709 */
			Site_Map,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 9502 */
			SharePoint_Site,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 9752 */
			SLA_KPI_Instance,
			/** 7100 */
			Solution,
			/** 7103 */
			Solution_Component,
			/** 7104 */
			Solution_Component_Definition,
			/** 4216 */
			Social_Activity,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 99 */
			Social_Profile,
			/** 9650 */
			Process_Configuration,
			/** 3234 */
			Connection,
			/** 3231 */
			Connection_Role,
			/** 1004 */
			Competitor_Address,
			/** 1006 */
			Competitor_Product,
			/** 26 */
			CompetitorSalesLiterature,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 4007 */
			Resource_Group,
			/** 2 */
			Contact,
			/** 17 */
			ContactInvoices,
			/** 123 */
			Competitor,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 300 */
			Canvas_App,
			/** 9983 */
			Action_Card_Type,
			/** 9959 */
			Category,
			/** 1236 */
			Channel_Property,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 4215 */
			Commitment,
			/** 1234 */
			Channel_Property_Group,
			/** 1141 */
			Characteristic,
			/** 113 */
			Child_Incident_Count,
			/** 1010 */
			Contract,
			/** 4102 */
			Display_String,
			/** 4101 */
			Display_String_Map,
			/** 126 */
			Indexed_Article,
			/** 7106 */
			Dependency_Node,
			/** 1013 */
			Discount,
			/** 1080 */
			Discount_List,
			/** 9940 */
			Document_Template,
			/** 1048 */
			Property,
			/** 1235 */
			Property_Association,
			/** 1333 */
			Property_Instance,
			/** 4415 */
			Duplicate_Record,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 7108 */
			Dependency_Feature,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 1011 */
			Contract_Line,
			/** 2011 */
			Contract_Template,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9754 */
			Custom_Control_Resource,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 1071 */
			Address,
			/** 4503 */
			Opportunity_Relationship,
			/** 4502 */
			Customer_Relationship,
			/** 4401 */
			Campaign_Response,
			/** 9006 */
			Model_driven_App,
			/** 9007 */
			App_Module_Component,
			/** 8700 */
			AppModule_Metadata,
			/** 9013 */
			App_Configuration_Instance,
			/** 9011 */
			App_Config_Master,
			/** 4707 */
			Application_File,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 4700 */
			System_Job,
			/** 1002,1001 */
			Attachment,
			/** 4601 */
			Attribute_Map,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 9009 */
			App_Module_Roles,
			/** 4201 */
			Appointment,
			/** 9012 */
			App_Configuration,
			/** 9962 */
			Action_Card,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9968 */
			ActionCardUserState,
			/** 1 */
			Account,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 5 */
			Note,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 135 */
			Activity_Party,
			/** 4200 */
			Activity,
			/** 10018 */
			admin_settings_entity,
			/** 4567 */
			Auditing,
			/** 10 */
			Business_Unit,
			/** 6 */
			Business_Unit_Map,
			/** 132 */
			Announcement,
			/** 4405 */
			Bulk_Operation_Log,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 4003 */
			Calendar,
			/** 4402 */
			Campaign_Activity,
			/** 4404 */
			Campaign_Activity_Item,
			/** 4403 */
			Campaign_Item,
			/** 4004 */
			Calendar_Rule,
			/** 301 */
			Callback_Registration,
			/** 4400 */
			Campaign,
			/** 4406 */
			Quick_Campaign,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 1094 */
			Authorization_Server,
			/** 9936 */
			Azure_Service_Connection,
			/** 1150 */
			Bookable_Resource,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1152 */
			Booking_Status,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 9201 */
			LocalConfigStore,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 4419 */
			Lookup_Mapping,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 9106 */
			Mail_Merge_Template,
			/** 4231 */
			Metadata_Difference,
			/** 9606 */
			Mailbox,
			/** 9607 */
			Mailbox_Statistics,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 27 */
			LeadProduct,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 9960 */
			Knowledge_Article_Category,
			/** 9955 */
			Knowledge_Article_Views,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 9953 */
			Knowledge_Article,
			/** 9930 */
			Knowledge_Base_Record,
			/** 4 */
			Lead,
			/** 1017 */
			Lead_Address,
			/** 24 */
			LeadCompetitors,
			/** 9947 */
			Knowledge_Search_Model,
			/** 9957 */
			Language,
			/** 9875 */
			Language_Provisioning_State,
			/** 9603 */
			Goal_Metric,
			/** 10030 */
			Notes_analysis_Config,
			/** 10000 */
			OData_v4_Data_Source,
			/** 10012 */
			Playbook_activity,
			/** 10020 */
			Forecast,
			/** 10021 */
			Forecast_recurrence,
			/** 10031 */
			icebreakersconfig,
			/** 10013 */
			Playbook_activity_attribute,
			/** 10032 */
			Profile_Album,
			/** 10033 */
			Post_Configuration,
			/** 10034 */
			Post_Rule_Configuration,
			/** 10014 */
			Playbook_category,
			/** 10015 */
			Playbook,
			/** 10016 */
			Playbook_template,
			/** 10019 */
			Forecast_definition,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10024 */
			actioncardregarding,
			/** 10025 */
			Action_Card_Role_Setting,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 10011 */
			Playbook_Callable_Context,
			/** 10007 */
			Database_Version,
			/** 10026 */
			EntityRankingRule,
			/** 10027 */
			flowcardtype,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 371 */
			Connector,
			/** 127 */
			Article,
			/** 4000 */
			FacilityEquipment,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 4600 */
			Entity_Map,
			/** 955 */
			Expired_Process,
			/** 9958 */
			Feedback,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 4204 */
			Fax,
			/** 4545 */
			Entitlement_Template_Product,
			/** 4299 */
			Email_Search,
			/** 9605 */
			Email_Server_Profile,
			/** 9997 */
			Email_Signature,
			/** 1049 */
			Property_Option_Set_Item,
			/** 4202 */
			Email,
			/** 4023 */
			Email_Hash,
			/** 9700 */
			Entitlement,
			/** 6363 */
			Entitlement_Product,
			/** 9702 */
			Entitlement_Template,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 9701 */
			Entitlement_Channel,
			/** 7272 */
			Entitlement_Contact,
			/** 9704 */
			Entitlement_Entity_Allocation_Type_Mapping,
			/** 55 */
			FileAttachment,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 4206 */
			Case_Resolution,
			/** 3000 */
			Integration_Status,
			/** 4423 */
			Import_Log,
			/** 4411 */
			Data_Map,
			/** 112 */
			Case,
			/** 9986 */
			Interaction_for_Email,
			/** 1090 */
			Invoice,
			/** 1091 */
			Invoice_Product,
			/** 4705 */
			ISV_Config,
			/** 1003 */
			Internal_Address,
			/** 4011 */
			Inter_Process_Lock,
			/** 7107 */
			Invalid_Dependency,
			/** 9107 */
			Import_Job,
			/** 9600 */
			Goal,
			/** 9602 */
			Rollup_Query,
			/** 8840 */
			Hierarchy_Rule,
			/** 30 */
			Filter_Template,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 54 */
			Global_Search_Configuration,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 4413 */
			Import_Data,
			/** 4428 */
			Import_Entity_Mapping,
			/** 4412 */
			Import_Source_File,
			/** 9996 */
			HolidayWrapper,
			/** 1007 */
			Image_Descriptor,
			/** 4410 */
			Data_Import
		}
		enum MatchingEntityTypeCode {
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 1028 */
			Product_Relationship,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 2023 */
			QueueItemCount,
			/** 1085 */
			Quote_Product,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 2024 */
			QueueMemberCount,
			/** 1084 */
			Quote,
			/** 4211 */
			Quote_Close,
			/** 21 */
			ProductSalesLiterature,
			/** 44 */
			Field_Sharing,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 1023 */
			Privilege,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 1022 */
			Price_List,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 1026 */
			Price_List_Item,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 1189 */
			Document_Suggestions,
			/** 1120 */
			Application_Ribbons,
			/** 1130 */
			Ribbon_Difference,
			/** 1117 */
			Ribbon_Rule,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 1116 */
			Ribbon_Command,
			/** 1115 */
			Ribbon_Context_Group,
			/** 1113 */
			Ribbon_Tab_To_Command_Mapping,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 8181 */
			Routing_Rule_Set,
			/** 1036 */
			Security_Role,
			/** 1037 */
			Role_Template,
			/** 9604 */
			Rollup_Field,
			/** 4006 */
			Resource_Specification,
			/** 4501 */
			Relationship_Role_Map,
			/** 1140 */
			Replication_Backlog,
			/** 9100 */
			Report,
			/** 4250 */
			Recurrence_Rule,
			/** 4251 */
			Recurring_Appointment,
			/** 4500 */
			Relationship_Role,
			/** 9102 */
			Report_Related_Category,
			/** 4002 */
			Resource,
			/** 4005 */
			Scheduling_Group,
			/** 4010 */
			Resource_Expansion,
			/** 9101 */
			Report_Related_Entity,
			/** 9104 */
			Report_Link,
			/** 9103 */
			Report_Visibility,
			/** 8006 */
			Like,
			/** 10040 */
			Survey,
			/** 10041 */
			Survey_invite,
			/** 10042 */
			Survey_response,
			/** 10037 */
			Survey_email_template,
			/** 10038 */
			Survey_question,
			/** 10039 */
			Survey_question_response,
			/** 10043 */
			Unsubscribed_recipient,
			/** 950 */
			New_Process,
			/** 4110 */
			Notification,
			/** 4490 */
			Office_Document,
			/** 9910 */
			MultiEntitySearch,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9900 */
			Navigation_Setting,
			/** 10036 */
			Filter,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 10001 */
			Solution_Component_Summary,
			/** 10003 */
			Solution_History,
			/** 10022 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 10028 */
			salesinsightssettings,
			/** 10023 */
			siconfig,
			/** 10004 */
			Solution_History_Data_Source,
			/** 10009 */
			Upgrade_Step,
			/** 10010 */
			Upgrade_Version,
			/** 10035 */
			Wall_View,
			/** 10044 */
			Microsoft_Teams_Collaboration_entity,
			/** 10029 */
			UntrackedAppointment,
			/** 10008 */
			Upgrade_Run,
			/** 9950 */
			Office_Graph_Document,
			/** 952 */
			Phone_To_Case_Process,
			/** 4418 */
			List_Value_Mapping,
			/** 4605 */
			Plug_in_Assembly,
			/** 1095 */
			Partner_Application,
			/** 9941 */
			Personal_Document_Template,
			/** 4210 */
			Phone_Call,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 8000 */
			Post,
			/** 8005 */
			Comment,
			/** 8003 */
			Follow,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 50 */
			Position,
			/** 4420 */
			Owner_Mapping,
			/** 25 */
			OpportunityCompetitors,
			/** 1083 */
			Opportunity_Product,
			/** 953 */
			Opportunity_Sales_Process,
			/** 9870 */
			Offline_Command_Definition,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 7 */
			Owner,
			/** 1019 */
			Organization,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 2015 */
			Theme,
			/** 4811 */
			Time_Zone_Rule,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 8051 */
			Trace_Association,
			/** 9948 */
			Text_Analytics_Topic,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 2010 */
			Email_Template,
			/** 1030 */
			System_Form,
			/** 8 */
			User,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 9869 */
			Sync_Error,
			/** 7000 */
			System_Application_Metadata,
			/** 51 */
			System_User_Manager_Map,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 14 */
			System_User_Principal,
			/** 4212 */
			Task,
			/** 9 */
			Team,
			/** 8050 */
			Trace,
			/** 52 */
			User_Search_Facet,
			/** 150 */
			User_Settings,
			/** 9333 */
			Web_Resource,
			/** 2016 */
			User_Mapping,
			/** 4230 */
			Saved_View,
			/** 1112 */
			User_Chart,
			/** 4800 */
			Web_Wizard,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 4802 */
			Wizard_Page,
			/** 4703 */
			Process,
			/** 1031 */
			User_Dashboard,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 8052 */
			Trace_Regarding,
			/** 9105 */
			Currency,
			/** 4426 */
			Transformation_Mapping,
			/** 4220 */
			UntrackedEmail,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 7001 */
			User_Application_Metadata,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 4610 */
			Sdk_Message_Response,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 4609 */
			Sdk_Message_Request,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 4618 */
			Service_Endpoint,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 20 */
			Service_Contract_Contact,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 1070 */
			Sales_Attachment,
			/** 1088 */
			Order,
			/** 1089 */
			Order_Product,
			/** 8199 */
			Rule_Item,
			/** 7200 */
			RuntimeDependency,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 4606 */
			Sdk_Message,
			/** 4607 */
			Sdk_Message_Filter,
			/** 4613 */
			Sdk_Message_Pair,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 1039 */
			View,
			/** 1111 */
			System_Chart,
			/** 9508 */
			Document_Location,
			/** 29 */
			Subscription,
			/** 1072 */
			Subscription_Clients,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 1075 */
			Status_Map,
			/** 1043 */
			String_Map,
			/** 129 */
			Subject,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 1190 */
			SuggestionCardTemplate,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 9890 */
			SolutionHistoryData,
			/** 4709 */
			Site_Map,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 9502 */
			SharePoint_Site,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 9752 */
			SLA_KPI_Instance,
			/** 7100 */
			Solution,
			/** 7103 */
			Solution_Component,
			/** 7104 */
			Solution_Component_Definition,
			/** 4216 */
			Social_Activity,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 99 */
			Social_Profile,
			/** 9650 */
			Process_Configuration,
			/** 3234 */
			Connection,
			/** 3231 */
			Connection_Role,
			/** 1004 */
			Competitor_Address,
			/** 1006 */
			Competitor_Product,
			/** 26 */
			CompetitorSalesLiterature,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 4007 */
			Resource_Group,
			/** 2 */
			Contact,
			/** 17 */
			ContactInvoices,
			/** 123 */
			Competitor,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 300 */
			Canvas_App,
			/** 9983 */
			Action_Card_Type,
			/** 9959 */
			Category,
			/** 1236 */
			Channel_Property,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 4215 */
			Commitment,
			/** 1234 */
			Channel_Property_Group,
			/** 1141 */
			Characteristic,
			/** 113 */
			Child_Incident_Count,
			/** 1010 */
			Contract,
			/** 4102 */
			Display_String,
			/** 4101 */
			Display_String_Map,
			/** 126 */
			Indexed_Article,
			/** 7106 */
			Dependency_Node,
			/** 1013 */
			Discount,
			/** 1080 */
			Discount_List,
			/** 9940 */
			Document_Template,
			/** 1048 */
			Property,
			/** 1235 */
			Property_Association,
			/** 1333 */
			Property_Instance,
			/** 4415 */
			Duplicate_Record,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 7108 */
			Dependency_Feature,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 1011 */
			Contract_Line,
			/** 2011 */
			Contract_Template,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9754 */
			Custom_Control_Resource,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 1071 */
			Address,
			/** 4503 */
			Opportunity_Relationship,
			/** 4502 */
			Customer_Relationship,
			/** 4401 */
			Campaign_Response,
			/** 9006 */
			Model_driven_App,
			/** 9007 */
			App_Module_Component,
			/** 8700 */
			AppModule_Metadata,
			/** 9013 */
			App_Configuration_Instance,
			/** 9011 */
			App_Config_Master,
			/** 4707 */
			Application_File,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 4700 */
			System_Job,
			/** 1002,1001 */
			Attachment,
			/** 4601 */
			Attribute_Map,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 9009 */
			App_Module_Roles,
			/** 4201 */
			Appointment,
			/** 9012 */
			App_Configuration,
			/** 9962 */
			Action_Card,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9968 */
			ActionCardUserState,
			/** 1 */
			Account,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 5 */
			Note,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 135 */
			Activity_Party,
			/** 4200 */
			Activity,
			/** 10018 */
			admin_settings_entity,
			/** 4567 */
			Auditing,
			/** 10 */
			Business_Unit,
			/** 6 */
			Business_Unit_Map,
			/** 132 */
			Announcement,
			/** 4405 */
			Bulk_Operation_Log,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 4003 */
			Calendar,
			/** 4402 */
			Campaign_Activity,
			/** 4404 */
			Campaign_Activity_Item,
			/** 4403 */
			Campaign_Item,
			/** 4004 */
			Calendar_Rule,
			/** 301 */
			Callback_Registration,
			/** 4400 */
			Campaign,
			/** 4406 */
			Quick_Campaign,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 1094 */
			Authorization_Server,
			/** 9936 */
			Azure_Service_Connection,
			/** 1150 */
			Bookable_Resource,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1152 */
			Booking_Status,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 9201 */
			LocalConfigStore,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 4419 */
			Lookup_Mapping,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 9106 */
			Mail_Merge_Template,
			/** 4231 */
			Metadata_Difference,
			/** 9606 */
			Mailbox,
			/** 9607 */
			Mailbox_Statistics,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 27 */
			LeadProduct,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 9960 */
			Knowledge_Article_Category,
			/** 9955 */
			Knowledge_Article_Views,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 9953 */
			Knowledge_Article,
			/** 9930 */
			Knowledge_Base_Record,
			/** 4 */
			Lead,
			/** 1017 */
			Lead_Address,
			/** 24 */
			LeadCompetitors,
			/** 9947 */
			Knowledge_Search_Model,
			/** 9957 */
			Language,
			/** 9875 */
			Language_Provisioning_State,
			/** 9603 */
			Goal_Metric,
			/** 10030 */
			Notes_analysis_Config,
			/** 10000 */
			OData_v4_Data_Source,
			/** 10012 */
			Playbook_activity,
			/** 10020 */
			Forecast,
			/** 10021 */
			Forecast_recurrence,
			/** 10031 */
			icebreakersconfig,
			/** 10013 */
			Playbook_activity_attribute,
			/** 10032 */
			Profile_Album,
			/** 10033 */
			Post_Configuration,
			/** 10034 */
			Post_Rule_Configuration,
			/** 10014 */
			Playbook_category,
			/** 10015 */
			Playbook,
			/** 10016 */
			Playbook_template,
			/** 10019 */
			Forecast_definition,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10024 */
			actioncardregarding,
			/** 10025 */
			Action_Card_Role_Setting,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 10011 */
			Playbook_Callable_Context,
			/** 10007 */
			Database_Version,
			/** 10026 */
			EntityRankingRule,
			/** 10027 */
			flowcardtype,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 371 */
			Connector,
			/** 127 */
			Article,
			/** 4000 */
			FacilityEquipment,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 4600 */
			Entity_Map,
			/** 955 */
			Expired_Process,
			/** 9958 */
			Feedback,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 4204 */
			Fax,
			/** 4545 */
			Entitlement_Template_Product,
			/** 4299 */
			Email_Search,
			/** 9605 */
			Email_Server_Profile,
			/** 9997 */
			Email_Signature,
			/** 1049 */
			Property_Option_Set_Item,
			/** 4202 */
			Email,
			/** 4023 */
			Email_Hash,
			/** 9700 */
			Entitlement,
			/** 6363 */
			Entitlement_Product,
			/** 9702 */
			Entitlement_Template,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 9701 */
			Entitlement_Channel,
			/** 7272 */
			Entitlement_Contact,
			/** 9704 */
			Entitlement_Entity_Allocation_Type_Mapping,
			/** 55 */
			FileAttachment,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 4206 */
			Case_Resolution,
			/** 3000 */
			Integration_Status,
			/** 4423 */
			Import_Log,
			/** 4411 */
			Data_Map,
			/** 112 */
			Case,
			/** 9986 */
			Interaction_for_Email,
			/** 1090 */
			Invoice,
			/** 1091 */
			Invoice_Product,
			/** 4705 */
			ISV_Config,
			/** 1003 */
			Internal_Address,
			/** 4011 */
			Inter_Process_Lock,
			/** 7107 */
			Invalid_Dependency,
			/** 9107 */
			Import_Job,
			/** 9600 */
			Goal,
			/** 9602 */
			Rollup_Query,
			/** 8840 */
			Hierarchy_Rule,
			/** 30 */
			Filter_Template,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 54 */
			Global_Search_Configuration,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 4413 */
			Import_Data,
			/** 4428 */
			Import_Entity_Mapping,
			/** 4412 */
			Import_Source_File,
			/** 9996 */
			HolidayWrapper,
			/** 1007 */
			Image_Descriptor,
			/** 4410 */
			Data_Import
		}
		enum StateCode {
			/** 0 */
			Inactive,
			/** 1 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Unpublished,
			/** 1 */
			Publishing,
			/** 2 */
			Published
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}