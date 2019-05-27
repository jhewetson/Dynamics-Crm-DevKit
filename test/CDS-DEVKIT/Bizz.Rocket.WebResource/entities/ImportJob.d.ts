///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormImportJobInformation {
		interface Tabs {
		}
		interface Body {
			/** Import Progress Percentage. */
			Progress: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier of the solution. */
			SolutionName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormImportJobInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ImportJobInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ImportJobInformation */
		Body: Rocket.FormImportJobInformation.Body;
	}
	class ImportJobApi {
		/**
		* PL.DynamicsCrm.DevKit ImportJobApi
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
		/** Date and time when the import job was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the user who created the importJob. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the import job record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the import job record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unstructured data associated with the import job. */
		Data: DevKit.WebApi.StringValue;
		/** The context of the import */
		ImportContext: DevKit.WebApi.StringValue;
		/** Unique identifier of the import job. */
		ImportJobId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who modified the importJob. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the import job was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the import job record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the import job. */
		Name: DevKit.WebApi.StringValue;
		/** The context of the solution operation */
		OperationContext: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the importjob. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Import Progress Percentage. */
		Progress: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the solution. */
		SolutionName: DevKit.WebApi.StringValue;
		/** Date and time when the import job was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace ImportJob {
	}
}
//{'JsForm':['ImportJob Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}