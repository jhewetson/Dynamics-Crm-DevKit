///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class SLAItemApi {
		/**
		* PL.DynamicsCrm.DevKit SLAItemApi
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
		/** Condition for SLA item */
		ApplicableWhenXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the SLA Item */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate between the currency associated with the SLA Item record and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		FailureAfter: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name of the service level agreement (SLA) item. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the SLA Item record. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Select the service level agreement (SLA) key performance indicator (KPI) that this SLA Item is created for. */
		RelatedField: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for SLA associated with SLA Item. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the SLA Item. */
		SLAItemId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SLAItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Condition for SLA item */
		SuccessConditionsXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the currency associated with the SLA Item record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Version number of the SLA Item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		WarnAfter: DevKit.WebApi.IntegerValue;
		/** Workflow associated with the SLA Item. */
		WorkflowId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace SLAItem {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}