///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class PostRoleApi {
		/**
		* PL.DynamicsCrm.DevKit PostRoleApi
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
		/** Unique identifier of the organization associated with the solution. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the post with which the post role is associated. */
		PostId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the post role. */
		PostRoleId: DevKit.WebApi.GuidValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_processsession: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_queue: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_task: DevKit.WebApi.LookupValue;
		/** Choose the record that the post role relates to. */
		regardingobjectid_team: DevKit.WebApi.LookupValue;
		/** Select the role type for the post. */
		Type: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace PostRole {
		enum Type {
			/** 1 */
			Regarding,
			/** 2 */
			Mentioning,
			/** 3 */
			Mentioning_And_Regarding,
			/** 4 */
			Topic
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}