﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormContractTemplateInformation {
		interface Tabs {
		}
		interface Body {
			IFRAME_ContractTemplateCalendar: DevKit.Form.Controls.ControlIFrame;
			/** Abbreviation of the contract template name. */
			Abbreviation: DevKit.Form.Controls.ControlString;
			/** Criteria for the contracts based on the template, such as number of cases, time, or coverage dates. */
			AllotmentTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** How often the customer or account is to be billed in contracts that are based on the template. */
			BillingFrequencyCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the level of service specified in contracts that are based on the template. */
			ContractServiceLevelCode: DevKit.Form.Controls.ControlOptionSet;
			/** Description of the contract template. */
			Description: DevKit.Form.Controls.ControlString;
			effectivitycalendar: DevKit.Form.Controls.ControlActionCards;
			/** Name of the contract template. */
			Name: DevKit.Form.Controls.ControlString;
			/** Specifies whether the discount is a percentage or a monetary amount in contracts based on the template. */
			UseDiscountAsPercentage: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormContractTemplateInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ContractTemplateInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ContractTemplateInformation */
		Body: Hsbc.FormContractTemplateInformation.Body;
	}
	class ContractTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit ContractTemplateApi
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
		/** Abbreviation of the contract template name. */
		Abbreviation: DevKit.WebApi.StringValue;
		/** Criteria for the contracts based on the template, such as number of cases, time, or coverage dates. */
		AllotmentTypeCode: DevKit.WebApi.OptionSetValue;
		/** How often the customer or account is to be billed in contracts that are based on the template. */
		BillingFrequencyCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the level of service specified in contracts that are based on the template. */
		ContractServiceLevelCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the contract template. */
		ContractTemplateId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ContractTemplateIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who created the contract template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the contract template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the contracttemplate. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the contract template. */
		Description: DevKit.WebApi.StringValue;
		/** Days of the week and times for which contracts based on the template are effective. */
		EffectivityCalendar: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the contract template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the contract template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the contracttemplate. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the contract template. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Specifies whether the discount is a percentage or a monetary amount in contracts based on the template. */
		UseDiscountAsPercentage: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ContractTemplate {
		enum AllotmentTypeCode {
			/** 1 */
			Number_of_Cases,
			/** 2 */
			Time,
			/** 3 */
			Coverage_Dates
		}
		enum BillingFrequencyCode {
			/** 1 */
			Monthly,
			/** 2 */
			Bimonthly,
			/** 3 */
			Quarterly,
			/** 4 */
			Semiannually,
			/** 5 */
			Annually
		}
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
		enum ContractServiceLevelCode {
			/** 1 */
			Gold,
			/** 2 */
			Silver,
			/** 3 */
			Bronze
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}