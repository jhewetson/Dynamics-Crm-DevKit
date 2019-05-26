///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class PrincipalObjectAttributeAccessApi {
		/**
		* PL.DynamicsCrm.DevKit PrincipalObjectAttributeAccessApi
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
		/** Unique identifier of the shared secured field */
		AttributeId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		channelaccessprofile_principalobjectattributeaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_devkit_processwebapi1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_feedback: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleviews: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reportcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the shared secured field instance */
		PrincipalObjectAttributeAccessId: DevKit.WebApi.GuidValue;
		/** Read permission for secured field instance */
		ReadAccess: DevKit.WebApi.BooleanValue;
		/** Update permission for secured field instance */
		UpdateAccess: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAttributeAccess {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}