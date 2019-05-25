///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ProcessStageApi {
		/**
		* PL.DynamicsCrm.DevKit ProcessStageApi
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
		/** Step metadata for process stage */
		ClientData: DevKit.WebApi.StringValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Select the business unit that owns the record. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Shows the ID of the process stage record. */
		ProcessStageId: DevKit.WebApi.GuidValue;
		/** Select the category of the sales process. */
		StageCategory: DevKit.WebApi.OptionSetValue;
		/** Type a name for the process stage. */
		StageName: DevKit.WebApi.StringValue;
		/** Version number of the process stage. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ProcessStage {
		enum StageCategory {
			/** 0 */
			Qualify,
			/** 1 */
			Develop,
			/** 2 */
			Propose,
			/** 3 */
			Close,
			/** 4 */
			Identify,
			/** 5 */
			Research,
			/** 6 */
			Resolve,
			/** 7 */
			Approval
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}