﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ServiceEndpointApi {
		/**
		* PL.DynamicsCrm.DevKit ServiceEndpointApi
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
		/** Specifies mode of authentication with SB */
		AuthType: DevKit.WebApi.OptionSetValue;
		/** Authentication Value */
		AuthValue: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Connection mode to contact the service endpoint. */
		ConnectionMode: DevKit.WebApi.OptionSetValue;
		/** Type of the endpoint contract. */
		Contract: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the service endpoint. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the service endpoint was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the service endpoint. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the service endpoint. */
		Description: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		IsAuthValueSet: DevKit.WebApi.BooleanValueReadonly;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		IsSASKeySet: DevKit.WebApi.BooleanValueReadonly;
		IsSASTokenSet: DevKit.WebApi.BooleanValueReadonly;
		/** Content type of the message */
		MessageFormat: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the service endpoint. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the service endpoint was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the service endpoint. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of Service end point. */
		Name: DevKit.WebApi.StringValue;
		/** Full service endpoint address. */
		NamespaceAddress: DevKit.WebApi.StringValue;
		/** Format of Service Bus Namespace */
		NamespaceFormat: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the organization with which the service endpoint is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Path to the service endpoint. */
		Path: DevKit.WebApi.StringValue;
		/** Shared Access Key */
		SASKey: DevKit.WebApi.StringValue;
		/** Shared Access Key Name */
		SASKeyName: DevKit.WebApi.StringValue;
		/** Shared Access Token */
		SASToken: DevKit.WebApi.StringValue;
		/** Unique identifier of the service endpoint. */
		ServiceEndpointId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the service endpoint. */
		ServiceEndpointIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Namespace of the App Fabric solution. */
		SolutionNamespace: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Full service endpoint Url. */
		Url: DevKit.WebApi.StringValue;
		/** Additional user claim value type. */
		UserClaim: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace ServiceEndpoint {
		enum AuthType {
			/** 1 */
			ACS,
			/** 2 */
			SAS_Key,
			/** 3 */
			SAS_Token,
			/** 4 */
			Webhook_Key,
			/** 5 */
			Http_Header,
			/** 6 */
			Http_Query_String
		}
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
		enum ConnectionMode {
			/** 1 */
			Normal,
			/** 2 */
			Federated
		}
		enum Contract {
			/** 1 */
			OneWay,
			/** 2 */
			Queue,
			/** 3 */
			Rest,
			/** 4 */
			TwoWay,
			/** 5 */
			Topic,
			/** 6 */
			Queue_Persistent,
			/** 7 */
			Event_Hub,
			/** 8 */
			Webhook
		}
		enum MessageFormat {
			/** 1 */
			Binary_XML,
			/** 2 */
			Json,
			/** 3 */
			Text_XML
		}
		enum NamespaceFormat {
			/** 1 */
			Namespace_Name,
			/** 2 */
			Namespace_Address
		}
		enum UserClaim {
			/** 1 */
			None,
			/** 2 */
			UserId,
			/** 3 */
			UserInfo
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}