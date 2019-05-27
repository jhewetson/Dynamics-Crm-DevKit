///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ConnectionRoleObjectTypeCodeApi {
		/**
		* PL.DynamicsCrm.DevKit ConnectionRoleObjectTypeCodeApi
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
		/** Unique identifier of the connection role associated with the Connection Role Object Type Code. */
		ConnectionRoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the connection role object type association. */
		ConnectionRoleObjectTypeCodeId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the organization associated with the connectionroleobjecttypecode. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ConnectionRoleObjectTypeCode {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}