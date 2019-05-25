///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class TeamApi {
		/**
		* PL.DynamicsCrm.DevKit TeamApi
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
		/** Unique identifier of the user primary responsible for the team. */
		AdministratorId: DevKit.WebApi.LookupValue;
		/** The Azure active directory object Id for a group. */
		AzureActiveDirectoryObjectId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the business unit with which the team is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the team. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the team. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the team. */
		Description: DevKit.WebApi.StringValue;
		/** Email address for the team. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the team with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information about whether the team is a default business unit team. */
		IsDefault: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the team. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the team. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the team. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the team. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the default queue for the team. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Choose the record that the team relates to. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Select whether the team will be managed by the system. */
		SystemManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier for the team. */
		TeamId: DevKit.WebApi.GuidValue;
		/** Shows the team template that is associated with the team. */
		TeamTemplateId: DevKit.WebApi.LookupValue;
		/** Select the team type. */
		TeamType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the currency associated with the team. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the team. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Pronunciation of the full name of the team, written in phonetic hiragana or katakana characters. */
		YomiName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace Team {
		enum TeamType {
			/** 0 */
			Owner,
			/** 1 */
			Access,
			/** 2 */
			AAD_Security_Group,
			/** 3 */
			AAD_Office_Group
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}