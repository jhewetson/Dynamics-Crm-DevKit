///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class RollupFieldApi {
		/**
		* PL.DynamicsCrm.DevKit RollupFieldApi
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
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select a date field for the selected record type, such as Actual Closed Date for the Opportunity record type. A record participates in the goal rollup, if the selected date falls between the start date and the end date for the goal. */
		DateAttribute: DevKit.WebApi.StringValue;
		/** Select a rollup field where the metric rollup data will be displayed in the goal. The options are an integer or money, depending on the Metric Type you chose for the goal metric. */
		GoalAttribute: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Tells whether the state or status belongs to the parent entity. */
		IsStateParentEntityAttribute: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the goal metric associated with the rollup field. */
		MetricId: DevKit.WebApi.LookupValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the ID of the organization that the record is associated with. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the rollup field. */
		RollupFieldId: DevKit.WebApi.GuidValue;
		/** Type the name of the field that the data for the goal rolls up from. */
		SourceAttribute: DevKit.WebApi.StringValue;
		/** Select the state of the records you want to use as the source of the rollup data for the metric. */
		SourceState: DevKit.WebApi.IntegerValue;
		/** Select the status of the records you want to use as the source of the rollup data for the metric. */
		SourceStatus: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the rollup field. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RollupField {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}