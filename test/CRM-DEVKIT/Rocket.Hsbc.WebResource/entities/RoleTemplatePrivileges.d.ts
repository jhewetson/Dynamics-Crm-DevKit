///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class RoleTemplatePrivilegesApi {
		/**
		* PL.DynamicsCrm.DevKit RoleTemplatePrivilegesApi
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
		/** Information about whether the role in the template applies to the user, the user's team, or objects shared by the user. */
		IsBasic: DevKit.WebApi.BooleanValue;
		/** Information about whether the role in the template applies to child business units of the business unit associated with the user. */
		IsDeep: DevKit.WebApi.BooleanValue;
		/** Information about whether the role in the template applies to the entire organization. */
		IsGlobal: DevKit.WebApi.BooleanValue;
		/** Information about whether the role in the template applies to the user's business unit. */
		IsLocal: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the privilege assigned to the role template. */
		PrivilegeId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the role template that is associated with the role privilege. */
		RoleTemplateId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the role template privileges. */
		RoleTemplatePrivilegeId: DevKit.WebApi.GuidValue;
		Upgrading: DevKit.WebApi.BooleanValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RoleTemplatePrivileges {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}