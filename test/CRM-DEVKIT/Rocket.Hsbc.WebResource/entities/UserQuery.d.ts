///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class UserQueryApi {
		/**
		* PL.DynamicsCrm.DevKit UserQueryApi
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
		/** Type the column name that will be used to group the results from the data collected across multiple records from a user view. */
		AdvancedGroupBy: DevKit.WebApi.StringValue;
		/** Shows the columns and sorting criteria for the saved view, stored in XML format. */
		ColumnSetXml: DevKit.WebApi.StringValue;
		/** Type information about how the items in the user view are formatted. */
		ConditionalFormatting: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the saved view, such as the filter criteria or intended results set. */
		Description: DevKit.WebApi.StringValue;
		/** Contains the Fetch XML query that defines the entities and attributes included in the saved view. */
		FetchXml: DevKit.WebApi.StringValue;
		/** Layout data in JSON format. */
		LayoutJson: DevKit.WebApi.StringValue;
		/** For internal use only. */
		LayoutXml: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the saved view. */
		Name: DevKit.WebApi.StringValue;
		/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
		OfflineSqlQuery: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns this saved view. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this saved view. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the ID of the saved query that the record was created from. */
		ParentQueryId: DevKit.WebApi.LookupValue;
		/** Shows the code for the query type to indicate whether the saved view is an address book filter, advanced search, or other view. */
		QueryType: DevKit.WebApi.IntegerValue;
		/** Shows whether the saved view is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the item's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the saved view. */
		UserQueryId: DevKit.WebApi.GuidValue;
		/** Version number of the saved view. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UserQuery {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 3 */
			All,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}