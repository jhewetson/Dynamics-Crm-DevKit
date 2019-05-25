﻿'use strict';
var Rocket;
(function (Rocket) {
	'use strict';
	Rocket.DuplicateRuleApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
                }
                return entity[logicalName + f];
            };
            var getValue = function () {
                if (entity[logicalName] === undefined || entity[logicalName] === null) {
                    return null;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName];
                    }
                    return null;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
                }
                return entity[logicalName];
            };
            var setValue = function (value) {
                if (isMultiOptionSet) value = value.join(',');
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var duplicaterule = {
			BaseEntityMatchCodeTable: { a: 'baseentitymatchcodetable', r: true },
			BaseEntityName: { a: 'baseentityname' },
			BaseEntityTypeCode: { a: 'baseentitytypecode', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DuplicateRuleId: { a: 'duplicateruleid' },
			ExcludeInactiveRecords: { a: 'excludeinactiverecords' },
			IsCaseSensitive: { a: 'iscasesensitive' },
			MatchingEntityMatchCodeTable: { a: 'matchingentitymatchcodetable', r: true },
			MatchingEntityName: { a: 'matchingentityname' },
			MatchingEntityTypeCode: { a: 'matchingentitytypecode', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			StateCode: { a: 'statecode', r: true },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in duplicaterule) {
			var a = duplicaterule[field].a;
			var b = duplicaterule[field].b;
			var c = duplicaterule[field].c;
			var d = duplicaterule[field].d;
			var g = duplicaterule[field].g;
			var r = duplicaterule[field].r;
			duplicaterule[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		duplicaterule.Entity = u;
		duplicaterule.EntityName = 'duplicaterule';
		duplicaterule.EntityCollectionName = 'duplicaterules';
		duplicaterule['@odata.etag'] = e['@odata.etag'];
		var optionSet = {
			RollupState: {
				NotCalculated: 0,
				Calculated: 1,
				OverflowError: 2,
				OtherError: 3,
				RetryLimitExceeded: 4,
				HierarchicalRecursionLimitReached: 5,
				LoopDetected: 6
			},
			BaseEntityTypeCode: {
				Ribbon_Difference: 1130,
				Ribbon_Rule: 1117,
				Ribbon_Context_Group: 1115,
				Application_Ribbons: 1120,
				Ribbon_Tab_To_Command_Mapping: 1113,
				Rollup_Field: 9604,
				Rollup_Job: 9511,
				Security_Role: 1036,
				Role_Template: 1037,
				Ribbon_Command: 1116,
				Replication_Backlog: 1140,
				Report: 9100,
				Relationship_Role: 4500,
				Relationship_Role_Map: 4501,
				Report_Related_Category: 9102,
				Report_Visibility: 9103,
				Ribbon_Client_Metadata: 4579,
				Report_Related_Entity: 9101,
				Report_Link: 9104,
				Sdk_Message_Processing_Step_Secure_Configuration: 4616,
				Sdk_Message_Request: 4609,
				Sdk_Message_Processing_Step: 4608,
				Sdk_Message_Processing_Step_Image: 4615,
				Sdk_Message_Request_Field: 4614,
				Semiannual_Fiscal_Calendar: 2001,
				Service_Endpoint: 4618,
				Sdk_Message_Response: 4610,
				Sdk_Message_Response_Field: 4611,
				Sdk_Message_Pair: 4613,
				Rule_Item: 8199,
				RuntimeDependency: 7200,
				Rollup_Properties: 9510,
				Routing_Rule_Set: 8181,
				Saved_Organization_Insights_Configuration: 1309,
				Sdk_Message: 4606,
				Sdk_Message_Filter: 4607,
				View: 1039,
				System_Chart: 1111,
				Recurring_Appointment: 4251,
				Plug_in_Trace_Log: 4619,
				Plug_in_Type: 4602,
				List_Value_Mapping: 4418,
				Plug_in_Assembly: 4605,
				Plug_in_Type_Statistic: 4603,
				Comment: 8005,
				Follow: 8003,
				Position: 50,
				Post: 8000,
				Phone_Call: 4210,
				Organization_UI: 1021,
				Organization_Insights_Metric: 9699,
				Organization: 1019,
				Organization_Statistic: 4708,
				Organization_Insights_Notification: 9690,
				Partner_Application: 1095,
				Personal_Document_Template: 9941,
				Owner: 7,
				Owner_Mapping: 4420,
				Quarterly_Fiscal_Calendar: 2002,
				Queue: 2020,
				Publisher: 7101,
				Publisher_Address: 7102,
				Queue_Item: 2029,
				Document_Suggestions: 1189,
				Recurrence_Rule: 4250,
				QueueItemCount: 2023,
				QueueMemberCount: 2024,
				Process_Trigger: 4712,
				Post_Role: 8001,
				Field_Sharing: 44,
				Like: 8006,
				Post_Regarding: 8002,
				Principal_Sync_Attribute_Map: 1404,
				Process_Session: 4710,
				Process_Stage: 4724,
				Privilege: 1023,
				Privilege_Object_Type_Code: 31,
				SharePoint_Data: 9509,
				Trace: 8050,
				Trace_Regarding: 8052,
				Time_Zone_Rule: 4811,
				Trace_Association: 8051,
				Currency: 9105,
				Translation_Process: 951,
				Unresolved_Address: 2012,
				Transformation_Mapping: 4426,
				Transformation_Parameter_Mapping: 4427,
				Time_Zone_Localized_Name: 4812,
				Team_template: 92,
				Email_Template: 2010,
				Team_Profiles: 1203,
				Team_Sync_Attribute_Mapping_Profiles: 1403,
				Territory: 2013,
				Time_Stamp_Date_Mapping: 9932,
				Time_Zone_Definition: 4810,
				Text_Analytics_Entity_Mapping: 9945,
				Theme: 2015,
				Web_Wizard: 4800,
				Web_Wizard_Access_Privilege: 4803,
				User_Settings: 150,
				Web_Resource: 9333,
				Wizard_Page: 4802,
				Process_Log: 4706,
				Workflow_Wait_Subscription: 4702,
				Process: 4703,
				Process_Dependency: 4704,
				User_Search_Facet: 52,
				User_Entity_Instance_Data: 2501,
				User_Entity_UI_Settings: 2500,
				UntrackedEmail: 4220,
				User_Application_Metadata: 7001,
				User_Fiscal_Calendar: 1086,
				Saved_View: 4230,
				User_Chart: 1112,
				User_Dashboard: 1031,
				User_Mapping: 2016,
				Team: 9,
				Solution_Component: 7103,
				Solution_Component_Definition: 7104,
				Social_Profile: 99,
				Solution: 7100,
				SolutionHistoryData: 9890,
				Subject: 129,
				Subscription: 29,
				Status_Map: 1075,
				String_Map: 1043,
				SocialInsightsConfiguration: 1300,
				SharePoint_Site: 9502,
				Similarity_Rule: 9951,
				Sharepoint_Document: 9507,
				Document_Location: 9508,
				Site_Map: 4709,
				SLA_KPI_Instance: 9752,
				Social_Activity: 4216,
				SLA: 9750,
				SLA_Item: 9751,
				System_Application_Metadata: 7000,
				System_Form: 1030,
				Sync_Attribute_Mapping_Profile: 1400,
				Sync_Error: 9869,
				User: 8,
				System_User_Principal: 14,
				Task: 4212,
				SystemUser_BusinessUnit_Entity_Map: 42,
				System_User_Manager_Map: 51,
				Sync_Attribute_Mapping: 1401,
				Subscription_Statistic_Offline: 45,
				Subscription_Statistic_Outlook: 46,
				Subscription_Clients: 1072,
				Subscription_Manually_Tracked_Object: 37,
				Subscription_Sync_Entry_Offline: 47,
				Tracking_information_for_deleted_entities: 35,
				SuggestionCardTemplate: 1190,
				Subscription_Sync_Entry_Outlook: 48,
				Subscription_Synchronization_Information: 33,
				Offline_Command_Definition: 9870,
				Connection_Role_Object_Type_Code: 3233,
				Contact: 2,
				Connection: 3234,
				Connection_Role: 3231,
				Record_Creation_and_Update_Rule: 9300,
				Custom_Control_Default_Config: 9755,
				Custom_Control_Resource: 9754,
				Record_Creation_and_Update_Rule_Item: 9301,
				Custom_Control: 9753,
				Process_Configuration: 9650,
				Channel_Access_Profile: 3005,
				Channel_Access_Profile_Rule: 9400,
				Action_Card_Type: 9983,
				Category: 9959,
				Channel_Access_Profile_Rule_Item: 9401,
				Client_update: 36,
				Column_Mapping: 4417,
				Channel_Property: 1236,
				Channel_Property_Group: 1234,
				Indexed_Article: 126,
				Document_Template: 9940,
				Display_String: 4102,
				Display_String_Map: 4101,
				Duplicate_Record: 4415,
				Email: 4202,
				Email_Hash: 4023,
				Duplicate_Detection_Rule: 4414,
				Duplicate_Rule_Condition: 4416,
				WebApi: 10007,
				Data_Performance_Dashboard: 4450,
				DelveActionHub: 9961,
				Address: 1071,
				Customer_Relationship: 4502,
				Dependency: 7105,
				Custom_Activity: 10015,
				Process_WebApi_1: 10016,
				Dependency_Feature: 7108,
				Dependency_Node: 7106,
				Canvas_App: 300,
				App_Configuration_Instance: 9013,
				App_Config_Master: 9011,
				Annual_Fiscal_Calendar: 2000,
				App_Configuration: 9012,
				Application_File: 4707,
				AppModule_Metadata: 8700,
				AppModule_Metadata_Dependency: 8701,
				Model_driven_App: 9006,
				App_Module_Component: 9007,
				Note: 5,
				Action_Card: 9962,
				Action_Card_User_Settings: 9973,
				Account: 1,
				ACIViewMapper: 8040,
				ActionCardUserState: 9968,
				Activity: 4200,
				Advanced_Similarity_Rule: 9949,
				Attachment: 1001,1002,
				Activity_Party: 135,
				Business_Process_Flow_Instance: 4725,
				Business_Unit: 10,
				Bulk_Delete_Operation: 4424,
				Business_Data_Localized_Label: 4232,
				Business_Unit_Map: 6,
				Calendar_Rule: 4004,
				Callback_Registration: 301,
				Announcement: 132,
				Calendar: 4003,
				Bulk_Delete_Failure: 4425,
				Appointment: 4201,
				System_Job: 4700,
				AppModule_Metadata_Async_Operation: 8702,
				App_Module_Roles: 9009,
				Authorization_Server: 1094,
				Azure_Service_Connection: 9936,
				Attribute_Map: 4601,
				Auditing: 4567,
				Email_Search: 4299,
				Mailbox: 9606,
				Mailbox_Statistics: 9607,
				LocalConfigStore: 9201,
				Lookup_Mapping: 4419,
				Mailbox_Tracking_Category: 9609,
				Metadata_Difference: 4231,
				Goal_Metric: 9603,
				Mailbox_Auto_Tracking_Folder: 9608,
				Mail_Merge_Template: 9106,
				License: 2027,
				Knowledge_Article_Category: 9960,
				Knowledge_Article_Views: 9955,
				Article_Template: 1016,
				Knowledge_Article: 9953,
				Knowledge_Base_Record: 9930,
				Language_Provisioning_State: 9875,
				Letter: 4207,
				Knowledge_Search_Model: 9947,
				Language: 9957,
				MultiEntitySearch: 9910,
				Multi_Select_Option_Value: 9912,
				Solution_History: 10003,
				Solution_History_Data_Source: 10004,
				Navigation_Setting: 9900,
				Office_Document: 4490,
				Office_Graph_Document: 9950,
				New_Process: 950,
				Notification: 4110,
				Solution_Component_Summary: 10001,
				Mobile_Offline_Profile_Item_Association: 9868,
				Monthly_Fiscal_Calendar: 2003,
				Mobile_Offline_Profile: 9866,
				Mobile_Offline_Profile_Item: 9867,
				Component_Layer: 10005,
				OData_v4_Data_Source: 10000,
				Solution_Component_Data_Source: 10002,
				Component_Layer_Data_Source: 10006,
				Connector: 371,
				Article_Comment: 1082,
				Field_Permission: 1201,
				Field_Security_Profile: 1200,
				Fax: 4204,
				Feedback: 9958,
				FileAttachment: 55,
				Global_Search_Configuration: 54,
				Goal: 9600,
				Filter_Template: 30,
				Fixed_Monthly_Fiscal_Calendar: 2004,
				External_Party_Item: 9987,
				Virtual_Entity_Data_Provider: 78,
				Virtual_Entity_Data_Source: 85,
				Email_Server_Profile: 9605,
				Email_Signature: 9997,
				Entity_Map: 4600,
				Expired_Process: 955,
				External_Party: 3008,
				Exchange_Sync_Id_Mapping: 4120,
				Expander_Event: 4711,
				Integration_Status: 3000,
				Interaction_for_Email: 9986,
				Import_Log: 4423,
				Data_Map: 4411,
				Internal_Address: 1003,
				ISV_Config: 4705,
				Article: 127,
				Inter_Process_Lock: 4011,
				Invalid_Dependency: 7107,
				Import_Job: 9107,
				Hierarchy_Security_Configuration: 9919,
				HolidayWrapper: 9996,
				Rollup_Query: 9602,
				Hierarchy_Rule: 8840,
				Image_Descriptor: 1007,
				Import_Entity_Mapping: 4428,
				Import_Source_File: 4412,
				Data_Import: 4410,
				Import_Data: 4413
			},
			MatchingEntityTypeCode: {
				Ribbon_Difference: 1130,
				Ribbon_Rule: 1117,
				Ribbon_Context_Group: 1115,
				Application_Ribbons: 1120,
				Ribbon_Tab_To_Command_Mapping: 1113,
				Rollup_Field: 9604,
				Rollup_Job: 9511,
				Security_Role: 1036,
				Role_Template: 1037,
				Ribbon_Command: 1116,
				Replication_Backlog: 1140,
				Report: 9100,
				Relationship_Role: 4500,
				Relationship_Role_Map: 4501,
				Report_Related_Category: 9102,
				Report_Visibility: 9103,
				Ribbon_Client_Metadata: 4579,
				Report_Related_Entity: 9101,
				Report_Link: 9104,
				Sdk_Message_Processing_Step_Secure_Configuration: 4616,
				Sdk_Message_Request: 4609,
				Sdk_Message_Processing_Step: 4608,
				Sdk_Message_Processing_Step_Image: 4615,
				Sdk_Message_Request_Field: 4614,
				Semiannual_Fiscal_Calendar: 2001,
				Service_Endpoint: 4618,
				Sdk_Message_Response: 4610,
				Sdk_Message_Response_Field: 4611,
				Sdk_Message_Pair: 4613,
				Rule_Item: 8199,
				RuntimeDependency: 7200,
				Rollup_Properties: 9510,
				Routing_Rule_Set: 8181,
				Saved_Organization_Insights_Configuration: 1309,
				Sdk_Message: 4606,
				Sdk_Message_Filter: 4607,
				View: 1039,
				System_Chart: 1111,
				Recurring_Appointment: 4251,
				Plug_in_Trace_Log: 4619,
				Plug_in_Type: 4602,
				List_Value_Mapping: 4418,
				Plug_in_Assembly: 4605,
				Plug_in_Type_Statistic: 4603,
				Comment: 8005,
				Follow: 8003,
				Position: 50,
				Post: 8000,
				Phone_Call: 4210,
				Organization_UI: 1021,
				Organization_Insights_Metric: 9699,
				Organization: 1019,
				Organization_Statistic: 4708,
				Organization_Insights_Notification: 9690,
				Partner_Application: 1095,
				Personal_Document_Template: 9941,
				Owner: 7,
				Owner_Mapping: 4420,
				Quarterly_Fiscal_Calendar: 2002,
				Queue: 2020,
				Publisher: 7101,
				Publisher_Address: 7102,
				Queue_Item: 2029,
				Document_Suggestions: 1189,
				Recurrence_Rule: 4250,
				QueueItemCount: 2023,
				QueueMemberCount: 2024,
				Process_Trigger: 4712,
				Post_Role: 8001,
				Field_Sharing: 44,
				Like: 8006,
				Post_Regarding: 8002,
				Principal_Sync_Attribute_Map: 1404,
				Process_Session: 4710,
				Process_Stage: 4724,
				Privilege: 1023,
				Privilege_Object_Type_Code: 31,
				SharePoint_Data: 9509,
				Trace: 8050,
				Trace_Regarding: 8052,
				Time_Zone_Rule: 4811,
				Trace_Association: 8051,
				Currency: 9105,
				Translation_Process: 951,
				Unresolved_Address: 2012,
				Transformation_Mapping: 4426,
				Transformation_Parameter_Mapping: 4427,
				Time_Zone_Localized_Name: 4812,
				Team_template: 92,
				Email_Template: 2010,
				Team_Profiles: 1203,
				Team_Sync_Attribute_Mapping_Profiles: 1403,
				Territory: 2013,
				Time_Stamp_Date_Mapping: 9932,
				Time_Zone_Definition: 4810,
				Text_Analytics_Entity_Mapping: 9945,
				Theme: 2015,
				Web_Wizard: 4800,
				Web_Wizard_Access_Privilege: 4803,
				User_Settings: 150,
				Web_Resource: 9333,
				Wizard_Page: 4802,
				Process_Log: 4706,
				Workflow_Wait_Subscription: 4702,
				Process: 4703,
				Process_Dependency: 4704,
				User_Search_Facet: 52,
				User_Entity_Instance_Data: 2501,
				User_Entity_UI_Settings: 2500,
				UntrackedEmail: 4220,
				User_Application_Metadata: 7001,
				User_Fiscal_Calendar: 1086,
				Saved_View: 4230,
				User_Chart: 1112,
				User_Dashboard: 1031,
				User_Mapping: 2016,
				Team: 9,
				Solution_Component: 7103,
				Solution_Component_Definition: 7104,
				Social_Profile: 99,
				Solution: 7100,
				SolutionHistoryData: 9890,
				Subject: 129,
				Subscription: 29,
				Status_Map: 1075,
				String_Map: 1043,
				SocialInsightsConfiguration: 1300,
				SharePoint_Site: 9502,
				Similarity_Rule: 9951,
				Sharepoint_Document: 9507,
				Document_Location: 9508,
				Site_Map: 4709,
				SLA_KPI_Instance: 9752,
				Social_Activity: 4216,
				SLA: 9750,
				SLA_Item: 9751,
				System_Application_Metadata: 7000,
				System_Form: 1030,
				Sync_Attribute_Mapping_Profile: 1400,
				Sync_Error: 9869,
				User: 8,
				System_User_Principal: 14,
				Task: 4212,
				SystemUser_BusinessUnit_Entity_Map: 42,
				System_User_Manager_Map: 51,
				Sync_Attribute_Mapping: 1401,
				Subscription_Statistic_Offline: 45,
				Subscription_Statistic_Outlook: 46,
				Subscription_Clients: 1072,
				Subscription_Manually_Tracked_Object: 37,
				Subscription_Sync_Entry_Offline: 47,
				Tracking_information_for_deleted_entities: 35,
				SuggestionCardTemplate: 1190,
				Subscription_Sync_Entry_Outlook: 48,
				Subscription_Synchronization_Information: 33,
				Offline_Command_Definition: 9870,
				Connection_Role_Object_Type_Code: 3233,
				Contact: 2,
				Connection: 3234,
				Connection_Role: 3231,
				Record_Creation_and_Update_Rule: 9300,
				Custom_Control_Default_Config: 9755,
				Custom_Control_Resource: 9754,
				Record_Creation_and_Update_Rule_Item: 9301,
				Custom_Control: 9753,
				Process_Configuration: 9650,
				Channel_Access_Profile: 3005,
				Channel_Access_Profile_Rule: 9400,
				Action_Card_Type: 9983,
				Category: 9959,
				Channel_Access_Profile_Rule_Item: 9401,
				Client_update: 36,
				Column_Mapping: 4417,
				Channel_Property: 1236,
				Channel_Property_Group: 1234,
				Indexed_Article: 126,
				Document_Template: 9940,
				Display_String: 4102,
				Display_String_Map: 4101,
				Duplicate_Record: 4415,
				Email: 4202,
				Email_Hash: 4023,
				Duplicate_Detection_Rule: 4414,
				Duplicate_Rule_Condition: 4416,
				WebApi: 10007,
				Data_Performance_Dashboard: 4450,
				DelveActionHub: 9961,
				Address: 1071,
				Customer_Relationship: 4502,
				Dependency: 7105,
				Custom_Activity: 10015,
				Process_WebApi_1: 10016,
				Dependency_Feature: 7108,
				Dependency_Node: 7106,
				Canvas_App: 300,
				App_Configuration_Instance: 9013,
				App_Config_Master: 9011,
				Annual_Fiscal_Calendar: 2000,
				App_Configuration: 9012,
				Application_File: 4707,
				AppModule_Metadata: 8700,
				AppModule_Metadata_Dependency: 8701,
				Model_driven_App: 9006,
				App_Module_Component: 9007,
				Note: 5,
				Action_Card: 9962,
				Action_Card_User_Settings: 9973,
				Account: 1,
				ACIViewMapper: 8040,
				ActionCardUserState: 9968,
				Activity: 4200,
				Advanced_Similarity_Rule: 9949,
				Attachment: 1001,1002,
				Activity_Party: 135,
				Business_Process_Flow_Instance: 4725,
				Business_Unit: 10,
				Bulk_Delete_Operation: 4424,
				Business_Data_Localized_Label: 4232,
				Business_Unit_Map: 6,
				Calendar_Rule: 4004,
				Callback_Registration: 301,
				Announcement: 132,
				Calendar: 4003,
				Bulk_Delete_Failure: 4425,
				Appointment: 4201,
				System_Job: 4700,
				AppModule_Metadata_Async_Operation: 8702,
				App_Module_Roles: 9009,
				Authorization_Server: 1094,
				Azure_Service_Connection: 9936,
				Attribute_Map: 4601,
				Auditing: 4567,
				Email_Search: 4299,
				Mailbox: 9606,
				Mailbox_Statistics: 9607,
				LocalConfigStore: 9201,
				Lookup_Mapping: 4419,
				Mailbox_Tracking_Category: 9609,
				Metadata_Difference: 4231,
				Goal_Metric: 9603,
				Mailbox_Auto_Tracking_Folder: 9608,
				Mail_Merge_Template: 9106,
				License: 2027,
				Knowledge_Article_Category: 9960,
				Knowledge_Article_Views: 9955,
				Article_Template: 1016,
				Knowledge_Article: 9953,
				Knowledge_Base_Record: 9930,
				Language_Provisioning_State: 9875,
				Letter: 4207,
				Knowledge_Search_Model: 9947,
				Language: 9957,
				MultiEntitySearch: 9910,
				Multi_Select_Option_Value: 9912,
				Solution_History: 10003,
				Solution_History_Data_Source: 10004,
				Navigation_Setting: 9900,
				Office_Document: 4490,
				Office_Graph_Document: 9950,
				New_Process: 950,
				Notification: 4110,
				Solution_Component_Summary: 10001,
				Mobile_Offline_Profile_Item_Association: 9868,
				Monthly_Fiscal_Calendar: 2003,
				Mobile_Offline_Profile: 9866,
				Mobile_Offline_Profile_Item: 9867,
				Component_Layer: 10005,
				OData_v4_Data_Source: 10000,
				Solution_Component_Data_Source: 10002,
				Component_Layer_Data_Source: 10006,
				Connector: 371,
				Article_Comment: 1082,
				Field_Permission: 1201,
				Field_Security_Profile: 1200,
				Fax: 4204,
				Feedback: 9958,
				FileAttachment: 55,
				Global_Search_Configuration: 54,
				Goal: 9600,
				Filter_Template: 30,
				Fixed_Monthly_Fiscal_Calendar: 2004,
				External_Party_Item: 9987,
				Virtual_Entity_Data_Provider: 78,
				Virtual_Entity_Data_Source: 85,
				Email_Server_Profile: 9605,
				Email_Signature: 9997,
				Entity_Map: 4600,
				Expired_Process: 955,
				External_Party: 3008,
				Exchange_Sync_Id_Mapping: 4120,
				Expander_Event: 4711,
				Integration_Status: 3000,
				Interaction_for_Email: 9986,
				Import_Log: 4423,
				Data_Map: 4411,
				Internal_Address: 1003,
				ISV_Config: 4705,
				Article: 127,
				Inter_Process_Lock: 4011,
				Invalid_Dependency: 7107,
				Import_Job: 9107,
				Hierarchy_Security_Configuration: 9919,
				HolidayWrapper: 9996,
				Rollup_Query: 9602,
				Hierarchy_Rule: 8840,
				Image_Descriptor: 1007,
				Import_Entity_Mapping: 4428,
				Import_Source_File: 4412,
				Data_Import: 4410,
				Import_Data: 4413
			},
			StateCode: {
				Inactive: 0,
				Active: 1
			},
			StatusCode: {
				Unpublished: 0,
				Publishing: 1,
				Published: 2
			}
		};
		duplicaterule.OptionSet = optionSet;
		duplicaterule.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		duplicaterule.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return duplicaterule;
	};
})(Rocket || (Rocket = {}));