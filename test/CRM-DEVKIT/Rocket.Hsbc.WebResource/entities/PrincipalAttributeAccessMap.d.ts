///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class PrincipalAttributeAccessMapApi {
		/**
		* PL.DynamicsCrm.DevKit PrincipalAttributeAccessMapApi
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
		AttributeId: DevKit.WebApi.GuidValue;
		CreateAccess: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the principal attribute access. */
		PrincipalAttributeAccessMapId: DevKit.WebApi.GuidValue;
		PrincipalId: DevKit.WebApi.GuidValue;
		ReadAccess: DevKit.WebApi.OptionSetValue;
		UpdateAccess: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalAttributeAccessMap {
		enum CreateAccess {
			/** 0 */
			Not_Allowed,
			/** 4 */
			Allowed
		}
		enum ReadAccess {
			/** 0 */
			Not_Allowed,
			/** 4 */
			Allowed
		}
		enum UpdateAccess {
			/** 0 */
			Not_Allowed,
			/** 4 */
			Allowed
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}