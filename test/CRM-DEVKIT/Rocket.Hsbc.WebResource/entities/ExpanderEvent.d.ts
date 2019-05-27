///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ExpanderEventApi {
		/**
		* PL.DynamicsCrm.DevKit ExpanderEventApi
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
		/** The URI where the context is stored. */
		ContextUri: DevKit.WebApi.StringValue;
		/** Unique identifier used to correlate between expander events and SDK message invocations. */
		CorrelationId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the event. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the event was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the event. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the expander event. */
		ExpanderEventId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who last modified the event. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the event was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the event. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the event. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the event is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** The workloads that have registered to send an event. */
		Registrations: DevKit.WebApi.StringValue;
		/** Version number of the event. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ExpanderEvent {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}