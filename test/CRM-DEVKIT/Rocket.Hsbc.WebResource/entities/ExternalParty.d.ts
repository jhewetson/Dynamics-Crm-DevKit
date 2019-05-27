﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	namespace FormExternalPartyInformation {
		interface Header {
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the external party status */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			externalPartyItemsGrid: DevKit.Form.Controls.ControlGrid;
			/** Contains the value that is used to detect and avoid duplicate external party records. */
			CorrelationKey: DevKit.Form.Controls.ControlString;
			/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
			EmailAddress: DevKit.Form.Controls.ControlString;
			/** Type the full name of the external party. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Shows the date when the external party was last disabled on. */
			LastDisabledOn: DevKit.Form.Controls.ControlDate;
			/** Shows the date when the external party was last enabled on. */
			LastEnabledOn: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormExternalPartyInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ExternalPartyInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ExternalPartyInformation */
		Body: Hsbc.FormExternalPartyInformation.Body;
		/** The Header section of form ExternalPartyInformation */
		Header: Hsbc.FormExternalPartyInformation.Header;
	}
	class ExternalPartyApi {
		/**
		* PL.DynamicsCrm.DevKit ExternalPartyApi
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
		/** Contains the value that is used to detect and avoid duplicate external party records. */
		CorrelationKey: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier for entity instances */
		ExternalPartyId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the External Party used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		ExternalPartyIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Type the external party's first name. */
		FirstName: DevKit.WebApi.StringValue;
		/** Type the full name of the external party. */
		FullName: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows the date when the external party was last disabled on. */
		LastDisabledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the date when the external party was last enabled on. */
		LastEnabledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the external party's last name. */
		LastName: DevKit.WebApi.StringValue;
		/** Type the external party's middle name. */
		MiddleName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the external party is enabled or disabled */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the external party status */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Type of the external party. */
		Type: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Type the phonetic spelling of the external party's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party.. */
		YomiFirstName: DevKit.WebApi.StringValue;
		/** Shows the combined Yomi first and last names of the external party so that the full phonetic name can be displayed in views and reports. */
		YomiFullName: DevKit.WebApi.StringValueReadonly;
		/** Type the phonetic spelling of the external party's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party. */
		YomiLastName: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the external party's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ExternalParty {
		enum StateCode {
			/** 0 */
			Enabled,
			/** 1 */
			Disabled
		}
		enum StatusCode {
			/** 1 */
			Enabled,
			/** 2 */
			Disabled
		}
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}