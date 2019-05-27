///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ConvertRuleApi {
		/**
		* PL.DynamicsCrm.DevKit ConvertRuleApi
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
		/** Choose whether items from unknown senders should be converted to records. */
		AllowUnknownSender: DevKit.WebApi.BooleanValue;
		/** channel property group associated with the convert rule. */
		ChannelPropertyGroupId: DevKit.WebApi.LookupValue;
		/** Choose whether cases should be created for customers with active entitlements. */
		CheckActiveEntitlement: DevKit.WebApi.BooleanValue;
		/** Information whether record needs to be created for black listed social profiles. */
		CheckBlockedSocialProfile: DevKit.WebApi.BooleanValue;
		/** Information whether record needs to be created for direct messages. */
		CheckDirectMessages: DevKit.WebApi.BooleanValue;
		/** Choose whether an item related to a resolved case should be converted to a case. */
		CheckIfResolved: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier for entity instances */
		ConvertRuleId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ConvertRuleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the rule for creating records automatically. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a title or name of the queue for which the setting is defined. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the convert rule owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Choose the queue that the rule is assigned to. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Record Version */
		RecordVersion: DevKit.WebApi.StringValueReadonly;
		/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
		ResolvedSince: DevKit.WebApi.IntegerValue;
		/** Choose the email template to use to create an automatic response to the customer. */
		ResponseTemplateId: DevKit.WebApi.LookupValue;
		/** Choose whether to send an automatic email response to the customer after a record is created. */
		SendAutomaticResponse: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Source of the record. */
		SourceTypeCode: DevKit.WebApi.OptionSetValue;
		/** Status of the Convert Rule */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Convert Rule */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the currency associated with the queue. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the convert rule. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Shows the workflow for this rule. */
		WorkflowId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace ConvertRule {
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
		enum SourceTypeCode {
			/** 1 */
			Social_Monitoring,
			/** 2 */
			Email
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Active
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}