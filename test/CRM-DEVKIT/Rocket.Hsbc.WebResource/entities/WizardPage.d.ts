///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class WizardPageApi {
		/**
		* PL.DynamicsCrm.DevKit WizardPageApi
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
		/** Unique identifier of the user who created the wizard page. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the wizard page was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the wizardpage. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who last modified the wizard page. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the wizard page was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the wizardpage. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Data to post to the wizard page when requesting the page. */
		PageDataToPost: DevKit.WebApi.StringValue;
		/** Sequence number of the wizard page. */
		PageSequenceNumber: DevKit.WebApi.IntegerValue;
		/** URL for the wizard page. */
		PageUrl: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the wizard associated with this wizard page. */
		WebWizardId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the wizard page. */
		WizardPageId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace WizardPage {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}