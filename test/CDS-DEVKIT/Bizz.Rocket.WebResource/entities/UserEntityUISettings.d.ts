///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class UserEntityUISettingsApi {
		/**
		* PL.DynamicsCrm.DevKit UserEntityUISettingsApi
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
		/** Describes which entities are most recently inserted into email for this entity */
		InsertIntoEmailMRUXml: DevKit.WebApi.StringValue;
		/** Describes which forms are most recently viewed for this entity. */
		LastViewedFormXml: DevKit.WebApi.StringValue;
		/** List of most recently used lookup references for this entity */
		LookupMRUXml: DevKit.WebApi.StringValue;
		/** Describes which tabs are most recently used for this entity */
		MRUXml: DevKit.WebApi.StringValue;
		/** Object Type Code */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns this. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns this saved view. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this saved view. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Describes the reading pane formatting of this entity */
		ReadingPaneXml: DevKit.WebApi.StringValue;
		/** Describes which objects are most recently viewed for this entity */
		RecentlyViewedXml: DevKit.WebApi.StringValue;
		/** Determines whether a record type is exposed in the Outlook Address Book */
		ShowInAddressBook: DevKit.WebApi.BooleanValue;
		/** Describes the tab ordering for this entity */
		TabOrderXml: DevKit.WebApi.StringValue;
		/** Unique identifier user entity */
		UserEntityUISettingsId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UserEntityUISettings {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}