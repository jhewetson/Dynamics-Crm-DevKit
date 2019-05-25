///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ActionCardUserSettingsApi {
		/**
		* PL.DynamicsCrm.DevKit ActionCardUserSettingsApi
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
		/** Unique identifier user entity */
		ActionCardUserSettingsId: DevKit.WebApi.GuidValue;
		/** Bolean option for a cardtype. */
		BoolCardOption: DevKit.WebApi.BooleanValue;
		/** The CardType ENUM value. */
		CardType: DevKit.WebApi.IntegerValue;
		/** card type attribute */
		CardTypeId: DevKit.WebApi.LookupValue;
		/** Any int option for a cardtype. */
		IntCardOption: DevKit.WebApi.IntegerValue;
		/** Select whether the card is enabled for user or not. */
		IsEnabled: DevKit.WebApi.BooleanValue;
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
		/** Any string option for a cardtype. */
		StringCardOption: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ActionCardUserSettings {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}