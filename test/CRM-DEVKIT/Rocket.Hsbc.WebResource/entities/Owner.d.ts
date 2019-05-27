///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class OwnerApi {
		/**
		* PL.DynamicsCrm.DevKit OwnerApi
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
		/** Name of the Owner. */
		Name: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier for the Owner: systemuserid or teamid. */
		OwnerId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Pronunciation of the name of the owner, written in phonetic hiragana or katakana characters. */
		YomiName: DevKit.WebApi.StringValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Owner {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}