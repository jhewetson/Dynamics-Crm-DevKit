///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class IntegrationStatusApi {
		/**
		* PL.DynamicsCrm.DevKit IntegrationStatusApi
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
		/** Unique identifier of the user who created the integration status. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the integration status was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the integrationstatus. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		IntegrationEntryId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who last modified the integration status. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the integration status was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the integrationstatus. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		ObjectId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the organization associated with the integration status. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the integration. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		StateDescription: DevKit.WebApi.StringValue;
		/** Reason for the status of the integration. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		StatusDescription: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SystemName: DevKit.WebApi.StringValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace IntegrationStatus {
		enum StateCode {
		}
		enum StatusCode {
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}