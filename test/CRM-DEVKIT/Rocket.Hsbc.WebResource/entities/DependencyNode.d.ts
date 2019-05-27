﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class DependencyNodeApi {
		/**
		* PL.DynamicsCrm.DevKit DependencyNodeApi
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
		/** Unique identifier of the user who created the solution */
		BaseSolutionId: DevKit.WebApi.LookupValueReadonly;
		/** The type code of the component. */
		ComponentType: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the dependency node. */
		DependencyNodeId: DevKit.WebApi.GuidValueReadonly;
		/** Introduced version for the component */
		IntroducedVersion: DevKit.WebApi.DoubleValue;
		/** Whether this component is shared by two solutions with the same publisher. */
		IsSharedComponent: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the object with which the node is associated. */
		ObjectId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the parent entity. */
		ParentId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the top solution. */
		TopSolutionId: DevKit.WebApi.LookupValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DependencyNode {
		enum ComponentType {
			/** 1 */
			Entity,
			/** 2 */
			Attribute,
			/** 3 */
			Relationship,
			/** 4 */
			Attribute_Picklist_Value,
			/** 5 */
			Attribute_Lookup_Value,
			/** 6 */
			View_Attribute,
			/** 7 */
			Localized_Label,
			/** 8 */
			Relationship_Extra_Condition,
			/** 9 */
			Option_Set,
			/** 10 */
			Entity_Relationship,
			/** 11 */
			Entity_Relationship_Role,
			/** 12 */
			Entity_Relationship_Relationships,
			/** 13 */
			Managed_Property,
			/** 14 */
			Entity_Key,
			/** 16 */
			Privilege,
			/** 17 */
			PrivilegeObjectTypeCode,
			/** 20 */
			Role,
			/** 21 */
			Role_Privilege,
			/** 22 */
			Display_String,
			/** 23 */
			Display_String_Map,
			/** 24 */
			Form,
			/** 25 */
			Organization,
			/** 26 */
			Saved_Query,
			/** 29 */
			Workflow,
			/** 31 */
			Report,
			/** 32 */
			Report_Entity,
			/** 33 */
			Report_Category,
			/** 34 */
			Report_Visibility,
			/** 35 */
			Attachment,
			/** 36 */
			Email_Template,
			/** 37 */
			Contract_Template,
			/** 38 */
			KB_Article_Template,
			/** 39 */
			Mail_Merge_Template,
			/** 44 */
			Duplicate_Rule,
			/** 45 */
			Duplicate_Rule_Condition,
			/** 46 */
			Entity_Map,
			/** 47 */
			Attribute_Map,
			/** 48 */
			Ribbon_Command,
			/** 49 */
			Ribbon_Context_Group,
			/** 50 */
			Ribbon_Customization,
			/** 52 */
			Ribbon_Rule,
			/** 53 */
			Ribbon_Tab_To_Command_Map,
			/** 55 */
			Ribbon_Diff,
			/** 59 */
			Saved_Query_Visualization,
			/** 60 */
			System_Form,
			/** 61 */
			Web_Resource,
			/** 62 */
			Site_Map,
			/** 63 */
			Connection_Role,
			/** 64 */
			Complex_Control,
			/** 70 */
			Field_Security_Profile,
			/** 71 */
			Field_Permission,
			/** 90 */
			Plugin_Type,
			/** 91 */
			Plugin_Assembly,
			/** 92 */
			SDK_Message_Processing_Step,
			/** 93 */
			SDK_Message_Processing_Step_Image,
			/** 95 */
			Service_Endpoint,
			/** 150 */
			Routing_Rule,
			/** 151 */
			Routing_Rule_Item,
			/** 152 */
			SLA,
			/** 153 */
			SLA_Item,
			/** 154 */
			Convert_Rule,
			/** 155 */
			Convert_Rule_Item,
			/** 65 */
			Hierarchy_Rule,
			/** 161 */
			Mobile_Offline_Profile,
			/** 162 */
			Mobile_Offline_Profile_Item,
			/** 165 */
			Similarity_Rule,
			/** 66 */
			Custom_Control,
			/** 68 */
			Custom_Control_Default_Config,
			/** 166 */
			Data_Source_Mapping,
			/** 201 */
			SDKMessage,
			/** 202 */
			SDKMessageFilter,
			/** 203 */
			SdkMessagePair,
			/** 204 */
			SdkMessageRequest,
			/** 205 */
			SdkMessageRequestField,
			/** 206 */
			SdkMessageResponse,
			/** 207 */
			SdkMessageResponseField,
			/** 210 */
			WebWizard,
			/** 18 */
			Index,
			/** 208 */
			Import_Map,
			/** 300 */
			Canvas_App,
			/** 371,372 */
			Connector,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 400 */
			AI_Project_Type,
			/** 401 */
			AI_Project,
			/** 402 */
			AI_Configuration
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}