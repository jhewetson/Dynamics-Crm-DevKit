///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class PrincipalObjectAccessReadSnapshotApi {
		/**
		* PL.DynamicsCrm.DevKit PrincipalObjectAccessReadSnapshotApi
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
		ChildUserPrincipalsCount: DevKit.WebApi.BigIntValueReadonly;
		Count: DevKit.WebApi.BigIntValueReadonly;
		CountPercentOfTotalRows: DevKit.WebApi.IntegerValueReadonly;
		ObjectTypeCode: DevKit.WebApi.IntegerValueReadonly;
		PrincipalId: DevKit.WebApi.GuidValueReadonly;
		PrincipalObjectAccessReadSnapshotId: DevKit.WebApi.GuidValueReadonly;
		RecordCountForOwnerID: DevKit.WebApi.BigIntValueReadonly;
		RecordCountForOwnerIDPercentOfTotalRows: DevKit.WebApi.IntegerValueReadonly;
		RecordCountForOwningBU: DevKit.WebApi.BigIntValueReadonly;
		RecordCountForOwningBUPercentOfTotalRows: DevKit.WebApi.IntegerValueReadonly;
		TeamPrincipalsCount: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAccessReadSnapshot {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}