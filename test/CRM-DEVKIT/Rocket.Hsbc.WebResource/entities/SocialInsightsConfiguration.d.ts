﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SocialInsightsConfigurationApi {
		/**
		* PL.DynamicsCrm.DevKit SocialInsightsConfigurationApi
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
		/** Id of the control. */
		ControlId: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the form with which the like is associated. */
		FormId: DevKit.WebApi.LookupValue;
		/** Type of form. */
		FormTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the solution. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated record. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Data Item Id for social data. */
		SocialDataItemId: DevKit.WebApi.StringValue;
		/** Type of social data item. */
		SocialDataItemType: DevKit.WebApi.OptionSetValue;
		/** Parameters used to render social data. */
		SocialDataParameters: DevKit.WebApi.StringValue;
		/** Shows the ID of the social insights configuration. */
		SocialInsightsConfigurationId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace SocialInsightsConfiguration {
		enum FormTypeCode {
			/** 1030 */
			System_Form,
			/** 1031 */
			User_Form
		}
		enum SocialDataItemType {
			/** 1 */
			Search_Item,
			/** 2 */
			Class
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}