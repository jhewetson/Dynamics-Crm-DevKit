﻿'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
	Hsbc.msdyn_playbookactivityApi = function (e) {
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
		var msdyn_playbookactivity = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activityLogicalName: { a: 'msdyn_activityLogicalName' },
			msdyn_activityType: { a: 'msdyn_activityType' },
			msdyn_playbookactivity_json: { a: 'msdyn_playbookactivity_json' },
			msdyn_playbookactivityId: { a: 'msdyn_playbookactivityid' },
			msdyn_playbooktemplateid: { b: 'msdyn_playbooktemplateid', a: '_msdyn_playbooktemplateid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			msdyn_subject: { a: 'msdyn_subject' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_playbookactivity) {
			var a = msdyn_playbookactivity[field].a;
			var b = msdyn_playbookactivity[field].b;
			var c = msdyn_playbookactivity[field].c;
			var d = msdyn_playbookactivity[field].d;
			var g = msdyn_playbookactivity[field].g;
			var r = msdyn_playbookactivity[field].r;
			msdyn_playbookactivity[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_playbookactivity.Entity = u;
		msdyn_playbookactivity.EntityName = 'msdyn_playbookactivity';
		msdyn_playbookactivity.EntityCollectionName = 'msdyn_playbookactivities';
		msdyn_playbookactivity['@odata.etag'] = e['@odata.etag'];
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
			msdyn_activityType: {
				Quarterly_Fiscal_Calendar: 2002,
				Queue: 2020,
				Queue_Item: 2029,
				Product_Relationship: 1028,
				Publisher: 7101,
				Publisher_Address: 7102,
				QueueItemCount: 2023,
				Quote_Product: 1085,
				Rating_Model: 1144,
				Rating_Value: 1142,
				QueueMemberCount: 2024,
				Quote: 1084,
				Quote_Close: 4211,
				ProductSalesLiterature: 21,
				Field_Sharing: 44,
				Principal_Sync_Attribute_Map: 1404,
				Privilege: 1023,
				Post_Regarding: 8002,
				Post_Role: 8001,
				Price_List: 1022,
				Privilege_Object_Type_Code: 31,
				Product: 1024,
				Product_Association: 1025,
				Price_List_Item: 1026,
				Process_Session: 4710,
				Process_Stage: 4724,
				Process_Trigger: 4712,
				Document_Suggestions: 1189,
				Application_Ribbons: 1120,
				Ribbon_Difference: 1130,
				Ribbon_Rule: 1117,
				Ribbon_Client_Metadata: 4579,
				Ribbon_Command: 1116,
				Ribbon_Context_Group: 1115,
				Ribbon_Tab_To_Command_Mapping: 1113,
				Rollup_Job: 9511,
				Rollup_Properties: 9510,
				Routing_Rule_Set: 8181,
				Security_Role: 1036,
				Role_Template: 1037,
				Rollup_Field: 9604,
				Resource_Specification: 4006,
				Relationship_Role_Map: 4501,
				Replication_Backlog: 1140,
				Report: 9100,
				Recurrence_Rule: 4250,
				Recurring_Appointment: 4251,
				Relationship_Role: 4500,
				Report_Related_Category: 9102,
				Resource: 4002,
				Scheduling_Group: 4005,
				Resource_Expansion: 4010,
				Report_Related_Entity: 9101,
				Report_Link: 9104,
				Report_Visibility: 9103,
				Like: 8006,
				Survey: 10040,
				Survey_invite: 10041,
				Survey_response: 10042,
				Survey_email_template: 10037,
				Survey_question: 10038,
				Survey_question_response: 10039,
				Unsubscribed_recipient: 10043,
				New_Process: 950,
				Notification: 4110,
				Office_Document: 4490,
				MultiEntitySearch: 9910,
				Multi_Select_Option_Value: 9912,
				Navigation_Setting: 9900,
				Filter: 10036,
				Solution_Component_Data_Source: 10002,
				Solution_Component_Summary: 10001,
				Solution_History: 10003,
				msdyn_relationshipinsightsunifiedconfig: 10022,
				salesinsightssettings: 10028,
				siconfig: 10023,
				Solution_History_Data_Source: 10004,
				Upgrade_Step: 10009,
				Upgrade_Version: 10010,
				Wall_View: 10035,
				Microsoft_Teams_Collaboration_entity: 10044,
				UntrackedAppointment: 10029,
				Upgrade_Run: 10008,
				Office_Graph_Document: 9950,
				Phone_To_Case_Process: 952,
				List_Value_Mapping: 4418,
				Plug_in_Assembly: 4605,
				Partner_Application: 1095,
				Personal_Document_Template: 9941,
				Phone_Call: 4210,
				Plug_in_Trace_Log: 4619,
				Post: 8000,
				Comment: 8005,
				Follow: 8003,
				Plug_in_Type: 4602,
				Plug_in_Type_Statistic: 4603,
				Position: 50,
				Owner_Mapping: 4420,
				OpportunityCompetitors: 25,
				Opportunity_Product: 1083,
				Opportunity_Sales_Process: 953,
				Offline_Command_Definition: 9870,
				Opportunity: 3,
				Opportunity_Close: 4208,
				Order_Close: 4209,
				Organization_Insights_Metric: 9699,
				Organization_Insights_Notification: 9690,
				Owner: 7,
				Organization: 1019,
				Organization_Statistic: 4708,
				Organization_UI: 1021,
				Time_Stamp_Date_Mapping: 9932,
				Time_Zone_Definition: 4810,
				Time_Zone_Localized_Name: 4812,
				Territory: 2013,
				Text_Analytics_Entity_Mapping: 9945,
				Theme: 2015,
				Time_Zone_Rule: 4811,
				Topic_Model_Configuration: 9942,
				Topic_Model_Execution_History: 9943,
				Trace_Association: 8051,
				Text_Analytics_Topic: 9948,
				Topic_History: 9946,
				Topic_Model: 9944,
				Email_Template: 2010,
				System_Form: 1030,
				User: 8,
				SystemUser_BusinessUnit_Entity_Map: 42,
				Sync_Attribute_Mapping_Profile: 1400,
				Sync_Error: 9869,
				System_Application_Metadata: 7000,
				System_User_Manager_Map: 51,
				Team_Profiles: 1203,
				Team_Sync_Attribute_Mapping_Profiles: 1403,
				Team_template: 92,
				System_User_Principal: 14,
				Task: 4212,
				Team: 9,
				Trace: 8050,
				User_Search_Facet: 52,
				User_Settings: 150,
				Web_Resource: 9333,
				User_Mapping: 2016,
				Saved_View: 4230,
				User_Chart: 1112,
				Web_Wizard: 4800,
				Process_Dependency: 4704,
				Process_Log: 4706,
				Workflow_Wait_Subscription: 4702,
				Web_Wizard_Access_Privilege: 4803,
				Wizard_Page: 4802,
				Process: 4703,
				User_Dashboard: 1031,
				Transformation_Parameter_Mapping: 4427,
				Translation_Process: 951,
				Unresolved_Address: 2012,
				Trace_Regarding: 8052,
				Currency: 9105,
				Transformation_Mapping: 4426,
				UntrackedEmail: 4220,
				User_Entity_Instance_Data: 2501,
				User_Entity_UI_Settings: 2500,
				User_Fiscal_Calendar: 1086,
				Unit: 1055,
				Unit_Group: 1056,
				User_Application_Metadata: 7001,
				Sync_Attribute_Mapping: 1401,
				Sdk_Message_Request_Field: 4614,
				Sdk_Message_Response: 4610,
				Sdk_Message_Response_Field: 4611,
				Sdk_Message_Processing_Step_Image: 4615,
				Sdk_Message_Processing_Step_Secure_Configuration: 4616,
				Sdk_Message_Request: 4609,
				Semiannual_Fiscal_Calendar: 2001,
				Service_Endpoint: 4618,
				SharePoint_Data: 9509,
				Sharepoint_Document: 9507,
				Service: 4001,
				Service_Activity: 4214,
				Service_Contract_Contact: 20,
				Sdk_Message_Processing_Step: 4608,
				Sales_Attachment: 1070,
				Order: 1088,
				Order_Product: 1089,
				Rule_Item: 8199,
				RuntimeDependency: 7200,
				Sales_Literature: 1038,
				Sales_Process_Instance: 32,
				Sdk_Message: 4606,
				Sdk_Message_Filter: 4607,
				Sdk_Message_Pair: 4613,
				Saved_Organization_Insights_Configuration: 1309,
				View: 1039,
				System_Chart: 1111,
				Document_Location: 9508,
				Subscription: 29,
				Subscription_Clients: 1072,
				Subscription_Manually_Tracked_Object: 37,
				Status_Map: 1075,
				String_Map: 1043,
				Subject: 129,
				Subscription_Statistic_Offline: 45,
				Subscription_Synchronization_Information: 33,
				Tracking_information_for_deleted_entities: 35,
				SuggestionCardTemplate: 1190,
				Subscription_Statistic_Outlook: 46,
				Subscription_Sync_Entry_Offline: 47,
				Subscription_Sync_Entry_Outlook: 48,
				SolutionHistoryData: 9890,
				Site_Map: 4709,
				SLA: 9750,
				SLA_Item: 9751,
				SharePoint_Site: 9502,
				Similarity_Rule: 9951,
				Site: 4009,
				SLA_KPI_Instance: 9752,
				Solution: 7100,
				Solution_Component: 7103,
				Solution_Component_Definition: 7104,
				Social_Activity: 4216,
				SocialInsightsConfiguration: 1300,
				Social_Profile: 99,
				Process_Configuration: 9650,
				Connection: 3234,
				Connection_Role: 3231,
				Competitor_Address: 1004,
				Competitor_Product: 1006,
				CompetitorSalesLiterature: 26,
				Connection_Role_Object_Type_Code: 3233,
				ContactLeads: 22,
				ContactOrders: 19,
				ContactQuotes: 18,
				Resource_Group: 4007,
				Contact: 2,
				ContactInvoices: 17,
				Competitor: 123,
				Channel_Access_Profile: 3005,
				Channel_Access_Profile_Rule: 9400,
				Channel_Access_Profile_Rule_Item: 9401,
				Canvas_App: 300,
				Action_Card_Type: 9983,
				Category: 9959,
				Channel_Property: 1236,
				Client_update: 36,
				Column_Mapping: 4417,
				Commitment: 4215,
				Channel_Property_Group: 1234,
				Characteristic: 1141,
				Child_Incident_Count: 113,
				Contract: 1010,
				Display_String: 4102,
				Display_String_Map: 4101,
				Indexed_Article: 126,
				Dependency_Node: 7106,
				Discount: 1013,
				Discount_List: 1080,
				Document_Template: 9940,
				Property: 1048,
				Property_Association: 1235,
				Property_Instance: 1333,
				Duplicate_Record: 4415,
				Duplicate_Detection_Rule: 4414,
				Duplicate_Rule_Condition: 4416,
				Dependency_Feature: 7108,
				Record_Creation_and_Update_Rule_Item: 9301,
				Custom_Control: 9753,
				Custom_Control_Default_Config: 9755,
				Contract_Line: 1011,
				Contract_Template: 2011,
				Record_Creation_and_Update_Rule: 9300,
				Custom_Control_Resource: 9754,
				Data_Performance_Dashboard: 4450,
				DelveActionHub: 9961,
				Dependency: 7105,
				Address: 1071,
				Opportunity_Relationship: 4503,
				Customer_Relationship: 4502,
				Campaign_Response: 4401,
				Model_driven_App: 9006,
				App_Module_Component: 9007,
				AppModule_Metadata: 8700,
				App_Configuration_Instance: 9013,
				App_Config_Master: 9011,
				Application_File: 4707,
				AppModule_Metadata_Dependency: 8701,
				System_Job: 4700,
				Attachment: 1002,1001,
				Attribute_Map: 4601,
				AppModule_Metadata_Async_Operation: 8702,
				App_Module_Roles: 9009,
				Appointment: 4201,
				App_Configuration: 9012,
				Action_Card: 9962,
				Action_Card_User_Settings: 9973,
				ActionCardUserState: 9968,
				Account: 1,
				AccountLeads: 16,
				ACIViewMapper: 8040,
				Advanced_Similarity_Rule: 9949,
				Note: 5,
				Annual_Fiscal_Calendar: 2000,
				Activity_Party: 135,
				Activity: 4200,
				admin_settings_entity: 10018,
				Auditing: 4567,
				Business_Unit: 10,
				Business_Unit_Map: 6,
				Announcement: 132,
				Bulk_Operation_Log: 4405,
				Business_Data_Localized_Label: 4232,
				Business_Process_Flow_Instance: 4725,
				Calendar: 4003,
				Campaign_Activity: 4402,
				Campaign_Activity_Item: 4404,
				Campaign_Item: 4403,
				Calendar_Rule: 4004,
				Callback_Registration: 301,
				Campaign: 4400,
				Quick_Campaign: 4406,
				Bookable_Resource_Booking: 1145,
				Bookable_Resource_Booking_to_Exchange_Id_Mapping: 4421,
				Bookable_Resource_Booking_Header: 1146,
				Authorization_Server: 1094,
				Azure_Service_Connection: 9936,
				Bookable_Resource: 1150,
				Bookable_Resource_Category: 1147,
				Booking_Status: 1152,
				Bulk_Delete_Failure: 4425,
				Bulk_Delete_Operation: 4424,
				Bookable_Resource_Category_Assn: 1149,
				Bookable_Resource_Characteristic: 1148,
				Bookable_Resource_Group: 1151,
				Marketing_List: 4300,
				Marketing_List_Member: 4301,
				LocalConfigStore: 9201,
				Lead_To_Opportunity_Sales_Process: 954,
				Letter: 4207,
				License: 2027,
				Lookup_Mapping: 4419,
				Mailbox_Auto_Tracking_Folder: 9608,
				Mail_Merge_Template: 9106,
				Metadata_Difference: 4231,
				Mailbox: 9606,
				Mailbox_Statistics: 9607,
				Mailbox_Tracking_Category: 9609,
				LeadProduct: 27,
				Knowledge_Article_Incident: 9954,
				Knowledge_Article_Category: 9960,
				Knowledge_Article_Views: 9955,
				Article_Comment: 1082,
				Article_Template: 1016,
				Knowledge_Article: 9953,
				Knowledge_Base_Record: 9930,
				Lead: 4,
				Lead_Address: 1017,
				LeadCompetitors: 24,
				Knowledge_Search_Model: 9947,
				Language: 9957,
				Language_Provisioning_State: 9875,
				Goal_Metric: 9603,
				Notes_analysis_Config: 10030,
				OData_v4_Data_Source: 10000,
				Playbook_activity: 10012,
				Forecast: 10020,
				Forecast_recurrence: 10021,
				icebreakersconfig: 10031,
				Playbook_activity_attribute: 10013,
				Profile_Album: 10032,
				Post_Configuration: 10033,
				Post_Rule_Configuration: 10034,
				Playbook_category: 10014,
				Playbook: 10015,
				Playbook_template: 10016,
				Forecast_definition: 10019,
				Monthly_Fiscal_Calendar: 2003,
				actioncardregarding: 10024,
				Action_Card_Role_Setting: 10025,
				Mobile_Offline_Profile: 9866,
				Mobile_Offline_Profile_Item: 9867,
				Mobile_Offline_Profile_Item_Association: 9868,
				Playbook_Callable_Context: 10011,
				Database_Version: 10007,
				EntityRankingRule: 10026,
				flowcardtype: 10027,
				Component_Layer: 10005,
				Component_Layer_Data_Source: 10006,
				Connector: 371,
				Article: 127,
				FacilityEquipment: 4000,
				Exchange_Sync_Id_Mapping: 4120,
				Expander_Event: 4711,
				Virtual_Entity_Data_Provider: 78,
				Virtual_Entity_Data_Source: 85,
				Entity_Map: 4600,
				Expired_Process: 955,
				Feedback: 9958,
				Field_Permission: 1201,
				Field_Security_Profile: 1200,
				External_Party: 3008,
				External_Party_Item: 9987,
				Fax: 4204,
				Entitlement_Template_Product: 4545,
				Email_Search: 4299,
				Email_Server_Profile: 9605,
				Email_Signature: 9997,
				Property_Option_Set_Item: 1049,
				Email: 4202,
				Email_Hash: 4023,
				Entitlement: 9700,
				Entitlement_Product: 6363,
				Entitlement_Template: 9702,
				Entitlement_Template_Channel: 9703,
				Entitlement_Channel: 9701,
				Entitlement_Contact: 7272,
				Entitlement_Entity_Allocation_Type_Mapping: 9704,
				FileAttachment: 55,
				Incident_KnowledgeBaseRecord: 9931,
				Case_Resolution: 4206,
				Integration_Status: 3000,
				Import_Log: 4423,
				Data_Map: 4411,
				Case: 112,
				Interaction_for_Email: 9986,
				Invoice: 1090,
				Invoice_Product: 1091,
				ISV_Config: 4705,
				Internal_Address: 1003,
				Inter_Process_Lock: 4011,
				Invalid_Dependency: 7107,
				Import_Job: 9107,
				Goal: 9600,
				Rollup_Query: 9602,
				Hierarchy_Rule: 8840,
				Filter_Template: 30,
				Fixed_Monthly_Fiscal_Calendar: 2004,
				Global_Search_Configuration: 54,
				Hierarchy_Security_Configuration: 9919,
				Import_Data: 4413,
				Import_Entity_Mapping: 4428,
				Import_Source_File: 4412,
				HolidayWrapper: 9996,
				Image_Descriptor: 1007,
				Data_Import: 4410
			},
			statecode: {
				Draft: 0,
				Published: 1
			},
			statuscode: {
				Draft: 1,
				Published: 2
			}
		};
		msdyn_playbookactivity.OptionSet = optionSet;
		msdyn_playbookactivity.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_playbookactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_playbookactivity;
	};
})(Hsbc || (Hsbc = {}));