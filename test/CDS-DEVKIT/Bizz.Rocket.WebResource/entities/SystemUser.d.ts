﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormApplicationUser {
		interface tab_SUMMARY_TAB_Sections {
			onpremiseaccountinformation: DevKit.Form.Controls.ControlSection;
			userinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** The identifier for the application. This is used to access data in another application. */
			ApplicationId: DevKit.Form.Controls.ControlString;
			/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
			ApplicationIdUri: DevKit.Form.Controls.ControlString;
			/** This is the application directory object Id. */
			AzureActiveDirectoryObjectId: DevKit.Form.Controls.ControlString;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Form.Controls.ControlString;
			/** Full name of the user. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormApplicationUser extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form ApplicationUser
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ApplicationUser */
		Body: Rocket.FormApplicationUser.Body;
		/** The Footer section of form ApplicationUser */
		Footer: Rocket.FormApplicationUser.Footer;
	}
	namespace FormUser {
		interface tab_SUMMARY_TAB_Sections {
			onpremise_account_information: DevKit.Form.Controls.ControlSection;
			online_account_information: DevKit.Form.Controls.ControlSection;
			user_information: DevKit.Form.Controls.ControlSection;
			SOCIAL_PANE_TAB: DevKit.Form.Controls.ControlSection;
			teams_information: DevKit.Form.Controls.ControlSection;
			organization_information: DevKit.Form.Controls.ControlSection;
			queue_selection: DevKit.Form.Controls.ControlSection;
			queue_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DETAILS_TAB_Sections {
			user_information_2: DevKit.Form.Controls.ControlSection;
			mailing_address: DevKit.Form.Controls.ControlSection;
			DirectReports: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Form.Controls.ControlSection;
			e_mail_configuration: DevKit.Form.Controls.ControlSection;
		}
		interface tab_MobileOfflineProfile_TAB_Sections {
			mobileofflineaccessinfo: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface tab_MobileOfflineProfile_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_MobileOfflineProfile_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
			DETAILS_TAB: tab_DETAILS_TAB;
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
			MobileOfflineProfile_TAB: tab_MobileOfflineProfile_TAB;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			TeamsSubGrid: DevKit.Form.Controls.ControlGrid;
			PrivateQueuesSubGrid: DevKit.Form.Controls.ControlGrid;
			DirectReports: DevKit.Form.Controls.ControlGrid;
			/** Type of user. */
			AccessMode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Form.Controls.ControlString;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Form.Controls.ControlString;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Form.Controls.ControlString;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Form.Controls.ControlString;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Form.Controls.ControlString;
			/** Shows the complete secondary address. */
			Address2_Composite: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** License type of user. */
			CALType: DevKit.Form.Controls.ControlOptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Form.Controls.ControlLookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Form.Controls.ControlString;
			/** Full name of the user. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Home phone number for the user. */
			HomePhone: DevKit.Form.Controls.ControlString;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Form.Controls.ControlString;
			/** User invitation status. */
			InviteStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Mobile alert email address for the user. */
			MobileAlertEMail: DevKit.Form.Controls.ControlString;
			/** Items contained with a particular SystemUser. */
			MobileOfflineProfileId: DevKit.Form.Controls.ControlLookup;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Form.Controls.ControlLookup;
			/** Personal email address of the user. */
			PersonalEMailAddress: DevKit.Form.Controls.ControlString;
			/** User's position in hierarchical security model. */
			PositionId: DevKit.Form.Controls.ControlLookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Form.Controls.ControlOptionSet;
			/** Preferred phone number for the user. */
			PreferredPhoneCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the default queue for the user. */
			QueueId: DevKit.Form.Controls.ControlLookup;
			/** Title of the user. */
			Title: DevKit.Form.Controls.ControlString;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Form.Controls.ControlString;
			/** Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
			YomiFullName: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormUser extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form User
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form User */
		Body: Rocket.FormUser.Body;
		/** The Footer section of form User */
		Footer: Rocket.FormUser.Footer;
	}
	namespace FormUserformBusiness {
		interface tab_SUMMARY_TAB_Sections {
			onpremiseaccountinformation: DevKit.Form.Controls.ControlSection;
			onlineaccountinformation: DevKit.Form.Controls.ControlSection;
			userinformation: DevKit.Form.Controls.ControlSection;
			organizationinformation: DevKit.Form.Controls.ControlSection;
			mailingaddress: DevKit.Form.Controls.ControlSection;
			TEAMS_TAB: DevKit.Form.Controls.ControlSection;
			DirectReports: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Form.Controls.ControlSection;
			e_mailconfiguration: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			TeamsSubGrid: DevKit.Form.Controls.ControlGrid;
			DirectReports: DevKit.Form.Controls.ControlGrid;
			/** Type of user. */
			AccessMode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Form.Controls.ControlString;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** License type of user. */
			CALType: DevKit.Form.Controls.ControlOptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Form.Controls.ControlLookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Form.Controls.ControlString;
			/** Full name of the user. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Form.Controls.ControlString;
			/** User invitation status. */
			InviteStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Form.Controls.ControlLookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Form.Controls.ControlOptionSet;
			/** Title of the user. */
			Title: DevKit.Form.Controls.ControlString;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Form.Controls.ControlBoolean;
		}
		interface Navigation {
			navTeams: DevKit.Form.Controls.ControlNavigationItem,
			navRoles: DevKit.Form.Controls.ControlNavigationItem,
			navFieldSecurityProfiles: DevKit.Form.Controls.ControlNavigationItem,
			navServices: DevKit.Form.Controls.ControlNavigationItem,
			navResourceGroups: DevKit.Form.Controls.ControlNavigationItem,
			navMonthlyCalendar: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormUserformBusiness extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form UserformBusiness
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UserformBusiness */
		Body: Rocket.FormUserformBusiness.Body;
		/** The Footer section of form UserformBusiness */
		Footer: Rocket.FormUserformBusiness.Footer;
		/** The Navigation of form UserformBusiness */
		Navigation: Rocket.FormUserformBusiness.Navigation;
	}
	class SystemUserApi {
		/**
		* PL.DynamicsCrm.DevKit SystemUserApi
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
		/** Type of user. */
		AccessMode: DevKit.WebApi.OptionSetValue;
		/** Active Directory object GUID for the system user. */
		ActiveDirectoryGuid: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for address 1. */
		Address1_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 1. */
		Address1_City: DevKit.WebApi.StringValue;
		/** Shows the complete primary address. */
		Address1_Composite: DevKit.WebApi.StringValueReadonly;
		/** Country/region name in address 1. */
		Address1_Country: DevKit.WebApi.StringValue;
		/** County name for address 1. */
		Address1_County: DevKit.WebApi.StringValue;
		/** Fax number for address 1. */
		Address1_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 1. */
		Address1_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 1 information. */
		Address1_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 1 information. */
		Address1_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 1 information. */
		Address1_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 1. */
		Address1_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 1. */
		Address1_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 1. */
		Address1_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 2. */
		Address2_City: DevKit.WebApi.StringValue;
		/** Shows the complete secondary address. */
		Address2_Composite: DevKit.WebApi.StringValueReadonly;
		/** Country/region name in address 2. */
		Address2_Country: DevKit.WebApi.StringValue;
		/** County name for address 2. */
		Address2_County: DevKit.WebApi.StringValue;
		/** Fax number for address 2. */
		Address2_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 2. */
		Address2_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 2 information. */
		Address2_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 2 information. */
		Address2_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 2 information. */
		Address2_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 2. */
		Address2_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 2. */
		Address2_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 2. */
		Address2_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: DevKit.WebApi.IntegerValue;
		/** The identifier for the application. This is used to access data in another application. */
		ApplicationId: DevKit.WebApi.GuidValue;
		/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
		ApplicationIdUri: DevKit.WebApi.StringValueReadonly;
		/** This is the application directory object Id. */
		AzureActiveDirectoryObjectId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Fiscal calendar associated with the user. */
		CalendarId: DevKit.WebApi.LookupValue;
		/** License type of user. */
		CALType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the user. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the user was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the systemuser. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Indicates if default outlook filters have been populated. */
		DefaultFiltersPopulated: DevKit.WebApi.BooleanValueReadonly;
		/** Select the mailbox associated with this user. */
		DefaultMailbox: DevKit.WebApi.LookupValueReadonly;
		/** Type a default folder name for the user's OneDrive For Business location. */
		DefaultOdbFolderName: DevKit.WebApi.StringValueReadonly;
		/** Reason for disabling the user. */
		DisabledReason: DevKit.WebApi.StringValueReadonly;
		/** Whether to display the user in service views. */
		DisplayInServiceViews: DevKit.WebApi.BooleanValue;
		/** Active Directory domain of which the user is a member. */
		DomainName: DevKit.WebApi.StringValue;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: DevKit.WebApi.OptionSetValue;
		/** Employee identifier for the user. */
		EmployeeId: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange rate for the currency associated with the systemuser with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** First name of the user. */
		FirstName: DevKit.WebApi.StringValue;
		/** Full name of the user. */
		FullName: DevKit.WebApi.StringValueReadonly;
		/** Government identifier for the user. */
		GovernmentId: DevKit.WebApi.StringValue;
		/** Home phone number for the user. */
		HomePhone: DevKit.WebApi.StringValue;
		/** For internal use only. */
		IdentityId: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Incoming email delivery method for the user. */
		IncomingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Internal email address for the user. */
		InternalEMailAddress: DevKit.WebApi.StringValue;
		/** User invitation status. */
		InviteStatusCode: DevKit.WebApi.OptionSetValue;
		/** Information about whether the user is an AD user. */
		IsActiveDirectoryUser: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the user is enabled. */
		IsDisabled: DevKit.WebApi.BooleanValue;
		/** Shows the status of approval of the email address by O365 Admin. */
		IsEmailAddressApprovedByO365Admin: DevKit.WebApi.BooleanValueReadonly;
		/** Check if user is an integration user. */
		IsIntegrationUser: DevKit.WebApi.BooleanValue;
		/** Information about whether the user is licensed. */
		IsLicensed: DevKit.WebApi.BooleanValue;
		/** Information about whether the user is synced with the directory. */
		IsSyncWithDirectory: DevKit.WebApi.BooleanValue;
		/** Job title of the user. */
		JobTitle: DevKit.WebApi.StringValue;
		/** Last name of the user. */
		LastName: DevKit.WebApi.StringValue;
		/** Time stamp of the latest update for the user */
		LatestUpdateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Middle name of the user. */
		MiddleName: DevKit.WebApi.StringValue;
		/** Mobile alert email address for the user. */
		MobileAlertEMail: DevKit.WebApi.StringValue;
		/** Items contained with a particular SystemUser. */
		MobileOfflineProfileId: DevKit.WebApi.LookupValue;
		/** Mobile phone number for the user. */
		MobilePhone: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the user. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the user was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the systemuser. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Nickname of the user. */
		NickName: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the user. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Outgoing email delivery method for the user. */
		OutgoingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the manager of the user. */
		ParentSystemUserId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		PassportHi: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		PassportLo: DevKit.WebApi.IntegerValue;
		/** Personal email address of the user. */
		PersonalEMailAddress: DevKit.WebApi.StringValue;
		/** URL for the Website on which a photo of the user is located. */
		PhotoUrl: DevKit.WebApi.StringValue;
		/** User's position in hierarchical security model. */
		PositionId: DevKit.WebApi.LookupValue;
		/** Preferred address for the user. */
		PreferredAddressCode: DevKit.WebApi.OptionSetValue;
		/** Preferred email address for the user. */
		PreferredEmailCode: DevKit.WebApi.OptionSetValue;
		/** Preferred phone number for the user. */
		PreferredPhoneCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the default queue for the user. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Salutation for correspondence with the user. */
		Salutation: DevKit.WebApi.StringValue;
		/** Check if user is a setup user. */
		SetupUser: DevKit.WebApi.BooleanValue;
		/** SharePoint Work Email Address */
		SharePointEmailAddress: DevKit.WebApi.StringValue;
		/** Skill set of the user. */
		Skills: DevKit.WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the user. */
		SystemUserId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the territory to which the user is assigned. */
		TerritoryId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Title of the user. */
		Title: DevKit.WebApi.StringValue;
		/** Unique identifier of the currency associated with the systemuser. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Shows the type of user license. */
		UserLicenseType: DevKit.WebApi.IntegerValue;
		/**  User PUID User Identifiable Information */
		UserPuid: DevKit.WebApi.StringValueReadonly;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the user. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Windows Live ID */
		WindowsLiveID: DevKit.WebApi.StringValue;
		/** User's Yammer login email address */
		YammerEmailAddress: DevKit.WebApi.StringValue;
		/** User's Yammer ID */
		YammerUserId: DevKit.WebApi.StringValue;
		/** Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters. */
		YomiFirstName: DevKit.WebApi.StringValue;
		/** Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
		YomiFullName: DevKit.WebApi.StringValueReadonly;
		/** Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters. */
		YomiLastName: DevKit.WebApi.StringValue;
		/** Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters. */
		YomiMiddleName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace SystemUser {
		enum AccessMode {
			/** 0 */
			Read_Write,
			/** 1 */
			Administrative,
			/** 2 */
			Read,
			/** 3 */
			Support_User,
			/** 4 */
			Non_interactive,
			/** 5 */
			Delegated_Admin
		}
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum CALType {
			/** 0 */
			Professional,
			/** 1 */
			Administrative,
			/** 2 */
			Basic,
			/** 3 */
			Device_Professional,
			/** 4 */
			Device_Basic,
			/** 5 */
			Essential,
			/** 6 */
			Device_Essential,
			/** 7 */
			Enterprise,
			/** 8 */
			Device_Enterprise,
			/** 9 */
			Sales,
			/** 10 */
			Service,
			/** 11 */
			Field_Service,
			/** 12 */
			Project_Service
		}
		enum EmailRouterAccessApproval {
			/** 0 */
			Empty,
			/** 1 */
			Approved,
			/** 2 */
			Pending_Approval,
			/** 3 */
			Rejected
		}
		enum IncomingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router,
			/** 3 */
			Forward_Mailbox
		}
		enum InviteStatusCode {
			/** 0 */
			Invitation_Not_Sent,
			/** 1 */
			Invited,
			/** 2 */
			Invitation_Near_Expired,
			/** 3 */
			Invitation_Expired,
			/** 4 */
			Invitation_Accepted,
			/** 5 */
			Invitation_Rejected,
			/** 6 */
			Invitation_Revoked
		}
		enum OutgoingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router
		}
		enum PreferredAddressCode {
			/** 1 */
			Mailing_Address,
			/** 2 */
			Other_Address
		}
		enum PreferredEmailCode {
			/** 1 */
			Default_Value
		}
		enum PreferredPhoneCode {
			/** 1 */
			Main_Phone,
			/** 2 */
			Other_Phone,
			/** 3 */
			Home_Phone,
			/** 4 */
			Mobile_Phone
		}
	}
}
//{'JsForm':['Application User','User','User form – Business'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}