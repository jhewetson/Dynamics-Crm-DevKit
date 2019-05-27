///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class SharePointDataApi {
		/**
		* PL.DynamicsCrm.DevKit SharePointDataApi
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
		/** Unique identifier of the user who created the SharePoint Data. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint Data was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the SharePoint Data. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** SharePoint Data Serialized */
		Data: DevKit.WebApi.StringValue;
		/** Is valid */
		IsValid: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who created the SharePoint Data. */
		Location: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who last modified the SharePoint Data. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Sharepoint Data was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the SharePoint Data. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Next Page Token of the SharePoint document. */
		NextPageToken: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the organization associated with the SharePoint Data. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		PageNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Previous Page Token of the SharePoint document. */
		PreviousPageToken: DevKit.WebApi.StringValueReadonly;
		/** Regarding Object Id. */
		RegardingObjectId: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the SharePoint data record. */
		SharePointDataId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the SharePoint data. */
		UserId: DevKit.WebApi.LookupValueReadonly;
		UserName: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SharePointData {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}