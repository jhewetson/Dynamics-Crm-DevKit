///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class CommitmentApi {
		/**
		* PL.DynamicsCrm.DevKit CommitmentApi
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
		ActivityId: DevKit.WebApi.GuidValueReadonly;
		CommitmentId: DevKit.WebApi.GuidValueReadonly;
		Effort: DevKit.WebApi.DoubleValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** name */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		ParticipationTypeMask: DevKit.WebApi.IntegerValueReadonly;
		PartyId: DevKit.WebApi.GuidValueReadonly;
		ResourceSpecId: DevKit.WebApi.GuidValueReadonly;
		ScheduledEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		ScheduledStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		ServiceId: DevKit.WebApi.LookupValueReadonly;
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		StatusCode: DevKit.WebApi.OptionSetValueReadonly;
		Subject: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Commitment {
		enum StateCode {
		}
		enum StatusCode {
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}