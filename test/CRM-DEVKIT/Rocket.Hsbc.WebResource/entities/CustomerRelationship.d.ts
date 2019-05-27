///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class CustomerRelationshipApi {
		/**
		* PL.DynamicsCrm.DevKit CustomerRelationshipApi
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
		/** Unique identifier of the converse relationship of the customer relationship. */
		ConverseRelationshipId: DevKit.WebApi.LookupValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the customer relationship was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the customer relationship. */
		CustomerRelationshipId: DevKit.WebApi.GuidValue;
		/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
		CustomerRoleDescription: DevKit.WebApi.StringValue;
		/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
		CustomerRoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the customer relationship. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the customer relationship. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the customer relationship. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		partnerid_account: DevKit.WebApi.LookupValue;
		partnerid_contact: DevKit.WebApi.LookupValue;
		/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
		PartnerRoleDescription: DevKit.WebApi.StringValue;
		/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
		PartnerRoleId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		UniqueDscId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CustomerRelationship {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}