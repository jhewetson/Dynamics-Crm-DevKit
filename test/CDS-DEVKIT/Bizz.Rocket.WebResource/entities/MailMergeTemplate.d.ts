﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class MailMergeTemplateApi {
		/**
		* PL.DynamicsCrm.DevKit MailMergeTemplateApi
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
		/** Body text of the mail merge template. */
		Body: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the mail merge template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the mail merge template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the mailmergetemplate. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Default data fields associated with the mail merge template. */
		DefaultFilter: DevKit.WebApi.StringValue;
		/** Description of the mail merge template. */
		Description: DevKit.WebApi.StringValue;
		/** Version of the Microsoft Office Word XML format used by the template. */
		DocumentFormat: DevKit.WebApi.OptionSetValue;
		/** Exchange rate for the currency associated with the mailmergetemplate with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** File name of the mail merge template. */
		FileName: DevKit.WebApi.StringValue;
		/** File size of the mail merge template. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the mail merge template is personal or is available to all users. */
		IsPersonal: DevKit.WebApi.BooleanValue;
		/** Language of the mail merge template. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the mail merge template. */
		MailMergeTemplateId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		MailMergeTemplateIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Drop-down list for selecting the type of the mail merge. */
		MailMergeType: DevKit.WebApi.OptionSetValue;
		/** MIME type of the mail merge template. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the mail merge template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the mail merge template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the mailmergetemplate. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the mail merge template. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the mail merge template. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the mail merge template. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the mail merge template. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Parameter Xml. */
		ParameterXml: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the mail merge template. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the mail merge template. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the mailmergetemplate. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the mail merge template. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailMergeTemplate {
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
		enum DocumentFormat {
			/** 1 */
			_2003,
			/** 2 */
			_2007
		}
		enum MailMergeType {
			/** 1 */
			Letter,
			/** 2 */
			Email_Message,
			/** 3 */
			Envelope,
			/** 4 */
			Labels,
			/** 5 */
			Quotes,
			/** 6 */
			Fax
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}