﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
    class AccountApi {
        /**
         * PL.DynamicsCrm.DevKit AccountApi.
         * @param entity The enity object.
         */
		constructor(entity?: object);
		/**
		 * Get the value of alias.
		 * @param alias the alias value.
		 * @param isMultiOptionSet true if the alias is multi optionset.
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): object;
		/**
		 * Get the formatted value of alias.
		 * @param alias the alias value.
		 * @param isMultiOptionSet true if the alias is multi optionset.
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object. */
		Entity: object;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of Account enttiy */
        OptionSet: AccountOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Select a category to indicate whether the customer account is standard or preferred. */
		AccountCategoryCode: DevKit.WebApi.OptionSetValue;
		/** Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria. */
		AccountClassificationCode: WebApi.OptionSetValue;
		/** Unique identifier of the account. */
		AccountId: WebApi.GuidValue;
		/** Type an ID number or code for the account to quickly search and identify the account in system views. */
		AccountNumber: WebApi.StringValue;
		/** Select a rating to indicate the value of the customer account. */
		AccountRatingCode: WebApi.OptionSetValue;
		/** Unique identifier for address 1. */
		Address1_AddressId: WebApi.GuidValue;
		/** Select the primary address type. */
		Address1_AddressTypeCode: WebApi.OptionSetValue;
		/** Type the city for the primary address. */
		Address1_City: WebApi.StringValue;
		/** ReadOnly - Shows the complete primary address. */
		Address1_Composite: WebApi.StringValue;
		/** Type the country or region for the primary address. */
		Address1_Country: WebApi.StringValue;
		/** Type the county for the primary address. */
		Address1_County: WebApi.StringValue;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: WebApi.StringValue;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: WebApi.OptionSetValue;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: WebApi.DoubleValue;
		/** Type the first line of the primary address. */
		Address1_Line1: WebApi.StringValue;
		/** Type the second line of the primary address. */
		Address1_Line2: WebApi.StringValue;
		/** Type the third line of the primary address. */
		Address1_Line3: WebApi.StringValue;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: WebApi.DoubleValue;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: WebApi.StringValue;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: WebApi.StringValue;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: WebApi.StringValue;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: WebApi.OptionSetValue;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: WebApi.StringValue;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: WebApi.StringValue;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: WebApi.StringValue;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: WebApi.StringValue;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: WebApi.GuidValue;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: WebApi.OptionSetValue;
		/** Type the city for the secondary address. */
		Address2_City: WebApi.StringValue;
		/** ReadOnly - Shows the complete secondary address. */
		Address2_Composite: WebApi.StringValue;
		/** Type the country or region for the secondary address. */
		Address2_Country: WebApi.StringValue;
		/** Type the county for the secondary address. */
		Address2_County: WebApi.StringValue;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: WebApi.StringValue;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: WebApi.OptionSetValue;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: WebApi.DoubleValue;
		/** Type the first line of the secondary address. */
		Address2_Line1: WebApi.StringValue;
		/** Type the second line of the secondary address. */
		Address2_Line2: WebApi.StringValue;
		/** Type the third line of the secondary address. */
		Address2_Line3: WebApi.StringValue;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: WebApi.DoubleValue;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: WebApi.StringValue;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: WebApi.StringValue;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: WebApi.StringValue;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: WebApi.OptionSetValue;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: WebApi.StringValue;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: WebApi.StringValue;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: WebApi.StringValue;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: WebApi.StringValue;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: WebApi.IntegerValue;
		/** ReadOnly - For system use only. */
		Aging30: WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 30 field. */
		Aging30_Base: WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging60: WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 60 field. */
		Aging60_Base: WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging90: WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 90 field. */
		Aging90_Base: WebApi.MoneyValue;
		/** Select the legal designation or other business type of the account for contracts or reporting purposes. */
		BusinessTypeCode: WebApi.OptionSetValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: WebApi.LookupValue;
		/** ReadOnly - Shows the external party who created the record. */
		CreatedByExternalParty: WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: WebApi.LookupValue;
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: WebApi.MoneyValue;
		/** ReadOnly - Shows the credit limit converted to the system's default base currency for reporting purposes. */
		CreditLimit_Base: WebApi.MoneyValue;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: WebApi.BooleanValue;
		/** Select the size category or range of the account for segmentation and reporting purposes. */
		CustomerSizeCode: WebApi.OptionSetValue;
		/** Select the category that best describes the relationship between the account and your organization. */
		CustomerTypeCode: WebApi.OptionSetValue;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: WebApi.StringValue;
		/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
		DoNotBulkEMail: WebApi.BooleanValue;
		/** Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail. */
		DoNotBulkPostalMail: WebApi.BooleanValue;
		/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: WebApi.BooleanValue;
		/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
		DoNotFax: WebApi.BooleanValue;
		/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
		DoNotPhone: WebApi.BooleanValue;
		/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: WebApi.BooleanValue;
		/** Select whether the account accepts marketing materials, such as brochures or catalogs. */
		DoNotSendMM: WebApi.BooleanValue;
		/** Type the primary email address for the account. */
		EMailAddress1: WebApi.StringValue;
		/** Type the secondary email address for the account. */
		EMailAddress2: WebApi.StringValue;
		/** Type an alternate email address for the account. */
		EMailAddress3: WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: WebApi.StringValue;
		/** ReadOnly */
		EntityImage_Timestamp: WebApi.BigIntValue;
		/** ReadOnly */
		EntityImage_URL: WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		EntityImageId: WebApi.GuidValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: WebApi.DecimalValue;
		/** Type the fax number for the account. */
		Fax: WebApi.StringValue;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
		FollowEmail: WebApi.BooleanValue;
		/** Type the URL for the account's FTP site to enable users to access data and share documents. */
		FtpSiteURL: WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: WebApi.IntegerValue;
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: WebApi.OptionSetValue;
		/** ReadOnly */
		IsPrivate: WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows the date when the account was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis. */
		MarketCap: WebApi.MoneyValue;
		/** ReadOnly - Shows the market capitalization converted to the system's default base currency. */
		MarketCap_Base: WebApi.MoneyValue;
		/** Whether is only for marketing */
		MarketingOnly: WebApi.BooleanValue;
		/** ReadOnly */
		MasterAccountIdName: WebApi.StringValue;
		/** ReadOnly - Shows the master account that the account was merged with. */
		MasterId: WebApi.LookupValue;
		/** ReadOnly - Shows whether the account has been merged with another account. */
		Merged: WebApi.BooleanValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: WebApi.LookupValue;
		/** ReadOnly - Shows the external party who modified the record. */
		ModifiedByExternalParty: WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: WebApi.LookupValue;
		/** Type the company or business name. */
		Name: WebApi.StringValue;
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: WebApi.IntegerValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: WebApi.LookupValue;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: WebApi.OptionSetValue;
		/** ReadOnly - Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team who owns the account. */
		OwningTeam: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user who owns the account. */
		OwningUser: WebApi.LookupValue;
		/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
		ParentAccountId: WebApi.LookupValue;
		/** For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data. */
		ParticipatesInWorkflow: WebApi.BooleanValue;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: WebApi.OptionSetValue;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: WebApi.OptionSetValue;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: WebApi.OptionSetValue;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: WebApi.OptionSetValue;
		/** Choose the preferred service representative for reference when you schedule service activities for the account. */
		PreferredSystemUserId: WebApi.LookupValue;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: WebApi.LookupValue;
		/** Primary Satori ID for Account */
		PrimarySatoriId: WebApi.StringValue;
		/** Primary Twitter ID for Account */
		PrimaryTwitterId: WebApi.StringValue;
		/** Shows the ID of the process. */
		ProcessId: WebApi.GuidValue;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: WebApi.MoneyValue;
		/** ReadOnly - Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Revenue_Base: WebApi.MoneyValue;
		/** Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. */
		SharesOutstanding: WebApi.IntegerValue;
		/** Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option. */
		ShippingMethodCode: WebApi.OptionSetValue;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: WebApi.StringValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Account record. */
		SLAId: WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: WebApi.LookupValue;
		/** ReadOnly */
		SLAName: WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: WebApi.GuidValue;
		/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
		StateCode: WebApi.OptionSetValue;
		/** Select the account's status. */
		StatusCode: WebApi.OptionSetValue;
		/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
		StockExchange: WebApi.StringValue;
		/** Type the main phone number for this account. */
		Telephone1: WebApi.StringValue;
		/** Type a second phone number for this account. */
		Telephone2: WebApi.StringValue;
		/** Type a third phone number for this account. */
		Telephone3: WebApi.StringValue;
		/** Select a region or territory for the account for use in segmentation and analysis. */
		TerritoryCode: WebApi.OptionSetValue;
		/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: WebApi.StringValue;
		/** ReadOnly - Total time spent for emails (read and write) and meetings by me in relation to account record. */
		TimeSpentByMeOnEmailAndMeetings: WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: WebApi.IntegerValue;
		/** ReadOnly - Version number of the account. */
		VersionNumber: WebApi.BigIntValue;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: WebApi.StringValue;
		/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiName: WebApi.StringValue;
    }
    class FormAccount {
        /**
         * PL.DynamicsCrm.DevKit form Account.
         * @param executionContext the execution context.
         * @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource".
         */
        constructor(executionContext: object, defaultWebResourceName?: string);
        /** OptionSet fields in entity Account. */
        OptionSet: AccountOptionSet;
        /** Utility functions/methods/objects for Dynamics 365 from. */
        Utility: Rocket.Form.Utility;
        /** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement. */
        WebApi: Rocket.Form.WebApi;
        /**
        * Adds a function to be called when the record is saved.
        * @param successCallback The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function.
        * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
        */
        AddOnSave(successCallback: (executionContext: object) => void): void;
        /**
         *  The Attributes collections of form Account.
         *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
         * */
        Attributes: Rocket.Form.Collections;
        /** The body of form Account. */
        Body: FormAccountBody;
    }
    /** @deprecated */
    interface AccountOptionSet {
        RollupState: {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated: number;
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated: number;
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError: number;
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError: number;
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded: number;
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached: number;
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected: number;
        };
        AccountCategoryCode: {
            /** 1 */
            Preferred_Customer: number;
            /** 2 */
            Standard: number;
        }
    }
}
declare namespace OptionSet {
    declare namespace AccountOptionSet {
        enum AccountCategoryCode {
            /** 1 */
            Preferred_Customer,
            /** 2 */
            Standard
        }
    }
}
//{'JsForm':['Account'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}