///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class CallbackRegistrationApi {
		/**
		* PL.DynamicsCrm.DevKit CallbackRegistrationApi
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
		/** Unique identifier of the callback registration. */
		CallbackRegistrationId: DevKit.WebApi.GuidValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the callback registration was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalfÂ of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Entity Name. */
		EntityName: DevKit.WebApi.StringValue;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the callback url should be called. */
		FilteringAttributes: DevKit.WebApi.StringValue;
		/** Specifies the message type */
		Message: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the callback registration was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of callback registration. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the callback registration. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the callback registration. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the callback registration. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Specifies the Scope */
		Scope: DevKit.WebApi.OptionSetValue;
		/** Full callback registration Url. */
		Url: DevKit.WebApi.StringValue;
		/** Specifies the Callback registration version type */
		Version: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace CallbackRegistration {
		enum Message {
			/** 1 */
			Create,
			/** 2 */
			Delete,
			/** 3 */
			Update
		}
		enum Scope {
			/** 1 */
			User,
			/** 2 */
			BusinessUnit,
			/** 3 */
			ParentChildBusinessUnit,
			/** 4 */
			Organization
		}
		enum Version {
			/** 1 */
			V1
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}