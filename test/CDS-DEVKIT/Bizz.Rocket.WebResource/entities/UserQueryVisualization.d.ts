﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class UserQueryVisualizationApi {
		/**
		* PL.DynamicsCrm.DevKit UserQueryVisualizationApi
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
		/** Indicates the library used to render the visualization. */
		ChartType: DevKit.WebApi.OptionSetValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the fields that are used to display data in a chart, stored in XML format. */
		DataDescription: DevKit.WebApi.StringValue;
		/** Type additional information to describe the chart, such as the filter criteria or intended audience. */
		Description: DevKit.WebApi.StringValue;
		/** Select whether the chart is the default chart for the view that it is associated with. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the chart. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the user chart. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the user chart. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the chart's formatting details and presentation properties, stored in XML format. */
		PresentationDescription: DevKit.WebApi.StringValue;
		/** Unique identifier of the user chart. */
		UserQueryVisualizationId: DevKit.WebApi.GuidValue;
		/** Version number of the user chart. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Shows the web resource that will be displayed in the chart to the user. */
		WebResourceId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace UserQueryVisualization {
		enum ChartType {
			/** 0 */
			ASPNET_Charts,
			/** 1 */
			Power_BI
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}