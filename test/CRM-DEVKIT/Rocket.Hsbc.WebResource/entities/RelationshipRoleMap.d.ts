///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class RelationshipRoleMapApi {
		/**
		* PL.DynamicsCrm.DevKit RelationshipRoleMapApi
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
		/** Unique identifier of the user who created the relationship role map. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the relationship role map was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the relationshiprolemap. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who last modified the relationship role map. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the relationship role map record was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the relationshiprolemap. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization with which the relationship role map is associated. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the relationship role. This relationship role is only valid in a relationship between an entity of type specified in the primaryobjecttypecode property and an entity of type specified in the associateobjecttypecode property. */
		RelationshipRoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the relationship role map. */
		RelationshipRoleMapId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RelationshipRoleMap {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}