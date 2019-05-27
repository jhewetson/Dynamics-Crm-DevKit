///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class TeamTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit TeamTemplateApi
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
		/** Unique identifier of the user who created the team template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the team template. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Default access rights mask for the access teams associated with entity instances. */
		DefaultAccessRightsMask: DevKit.WebApi.IntegerValue;
		/** Type additional information that describes the team. */
		Description: DevKit.WebApi.StringValue;
		/** Information about whether this team template is user-defined or system-defined. */
		IsSystem: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the team template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the team template. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Object type code of entity which is enabled for access teams */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the team template. */
		TeamTemplateId: DevKit.WebApi.GuidValue;
		/** Type the name of the team template. */
		TeamTemplateName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace TeamTemplate {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}