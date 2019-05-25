///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class IsvConfigApi {
		/**
		* PL.DynamicsCrm.DevKit IsvConfigApi
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
		/** Structured XML data representing the customizations. */
		ConfigXML: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the ISV configuration. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the ISV configuration was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the isvconfig. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the ISV configuration. */
		IsvConfigId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who last modified the ISV configuration. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the ISV configuration was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the isvconfig. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the ISV configuration XML. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace IsvConfig {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}