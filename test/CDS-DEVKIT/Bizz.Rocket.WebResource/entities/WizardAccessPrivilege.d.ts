﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class WizardAccessPrivilegeApi {
		/**
		* PL.DynamicsCrm.DevKit WizardAccessPrivilegeApi
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
		/** Unique identifier of the user who created the wizard access privilege record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the wizard access privilege record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the wizardaccessprivilege. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Logical name of the entity for which access privileges are required. */
		EntityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the wizard access privilege record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the wizard access privilege record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the wizardaccessprivilege. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the wizard access privilege. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Name of the privilege required to access the wizard. */
		PrivilegeName: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the wizard associated with this wizard access privilege record. */
		WebWizardId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the access privilege. */
		WizardAccessPrivilegeId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace WizardAccessPrivilege {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}