///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class IncidentApi {
		/**
		* PL.DynamicsCrm.DevKit IncidentApi
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
		/** Unique identifier of the account with which the case is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** This attribute is used for Sample Service Business Processes. */
		ActivitiesComplete: DevKit.WebApi.BooleanValue;
		/** Type the number of service units that were actually required to resolve the case. */
		ActualServiceUnits: DevKit.WebApi.IntegerValue;
		/** Type the number of service units that were billed to the customer for the case. */
		BilledServiceUnits: DevKit.WebApi.IntegerValue;
		/** Details whether the profile is blocked or not. */
		BlockedProfile: DevKit.WebApi.BooleanValue;
		/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
		CaseOriginCode: DevKit.WebApi.OptionSetValue;
		/** Select the type of case to identify the incident for use in case routing and analysis. */
		CaseTypeCode: DevKit.WebApi.OptionSetValue;
		/** This attribute is used for Sample Service Business Processes. */
		CheckEmail: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the contact associated with the case. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
		ContractDetailId: DevKit.WebApi.LookupValue;
		/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
		ContractId: DevKit.WebApi.LookupValue;
		/** Select the service level for the case to make sure the case is handled correctly. */
		ContractServiceLevelCode: DevKit.WebApi.OptionSetValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Tells whether customer service representative has contacted the customer or not. */
		CustomerContacted: DevKit.WebApi.BooleanValue;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Select the customer's level of satisfaction with the handling and resolution of the case. */
		CustomerSatisfactionCode: DevKit.WebApi.OptionSetValue;
		/** Shows whether terms of the associated entitlement should be decremented or not. */
		DecrementEntitlementTerm: DevKit.WebApi.BooleanValue;
		/** Type additional information to describe the case to assist the service team in reaching a resolution. */
		Description: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Choose the entitlement that is applicable for the case. */
		EntitlementId: DevKit.WebApi.LookupValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Indicates the date and time when the case was escalated. */
		EscalatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Select an existing case for the customer that has been populated. For internal use only. */
		ExistingCase: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		FirstResponseByKPIId: DevKit.WebApi.LookupValue;
		/** Indicates if the first response has been sent. */
		FirstResponseSent: DevKit.WebApi.BooleanValue;
		/** Shows the status of the initial response time for the case according to the terms of the SLA. */
		FirstResponseSLAStatus: DevKit.WebApi.OptionSetValue;
		/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
		FollowupBy_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** This attribute is used for Sample Service Business Processes. */
		FollowUpTaskCreated: DevKit.WebApi.BooleanValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the case. */
		IncidentId: DevKit.WebApi.GuidValue;
		/** Select the current stage of the service process for the case to assist service team members when they review or transfer a case. */
		IncidentStageCode: DevKit.WebApi.OptionSetValue;
		/** Will contain the Influencer score coming from NetBreeze. */
		InfluenceScore: DevKit.WebApi.DoubleValue;
		/** For system use only. */
		IsDecrementing: DevKit.WebApi.BooleanValue;
		/** Indicates if the case has been escalated. */
		IsEscalated: DevKit.WebApi.BooleanValue;
		/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
		KbArticleId: DevKit.WebApi.LookupValue;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the primary case the current case was merged into. */
		MasterId: DevKit.WebApi.LookupValue;
		/** Tells whether the incident has been merged with another incident. */
		Merged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows whether the post originated as a public or private message. */
		MessageTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Number of child incidents associated with the incident. */
		NumberOfChildIncidents: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the duration in minutes for which the case was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
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
		/** Choose the parent case for a case. */
		ParentCaseId: DevKit.WebApi.LookupValue;
		/** Select a primary contact for this case. */
		PrimaryContactId: DevKit.WebApi.LookupValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
		ProductId: DevKit.WebApi.LookupValue;
		/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
		ProductSerialNumber: DevKit.WebApi.StringValue;
		/** Enter the date by when the case must be resolved. */
		ResolveBy_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ResolveByKPIId: DevKit.WebApi.LookupValue;
		/** Shows the status of the resolution time for the case according to the terms of the SLA. */
		ResolveBySLAStatus: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		ResponseBy_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Tells whether the incident has been routed to queue or not. */
		RouteCase: DevKit.WebApi.BooleanValue;
		/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
		SentimentValue: DevKit.WebApi.DoubleValue;
		/** Select the stage, in the case resolution process, that the case is in. */
		ServiceStage: DevKit.WebApi.OptionSetValue;
		/** Select the severity of this case to indicate the incident's impact on the customer's business. */
		SeverityCode: DevKit.WebApi.OptionSetValue;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the social profile with which the case is associated. */
		SocialProfileId: DevKit.WebApi.LookupValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the case's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
		TicketNumber: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
		Title: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Incident {
		enum CaseOriginCode {
			/** 1 */
			Phone,
			/** 2 */
			Email,
			/** 3 */
			Web,
			/** 2483 */
			Facebook,
			/** 3986 */
			Twitter
		}
		enum CaseTypeCode {
			/** 1 */
			Question,
			/** 2 */
			Problem,
			/** 3 */
			Request
		}
		enum ContractServiceLevelCode {
			/** 1 */
			Gold,
			/** 2 */
			Silver,
			/** 3 */
			Bronze
		}
		enum CustomerSatisfactionCode {
			/** 5 */
			Very_Satisfied,
			/** 4 */
			Satisfied,
			/** 3 */
			Neutral,
			/** 2 */
			Dissatisfied,
			/** 1 */
			Very_Dissatisfied
		}
		enum FirstResponseSLAStatus {
			/** 1 */
			In_Progress,
			/** 2 */
			Nearing_Noncompliance,
			/** 3 */
			Succeeded,
			/** 4 */
			Noncompliant
		}
		enum IncidentStageCode {
			/** 1 */
			Default_Value
		}
		enum MessageTypeCode {
			/** 0 */
			Public_Message,
			/** 1 */
			Private_Message
		}
		enum PriorityCode {
			/** 1 */
			High,
			/** 2 */
			Normal,
			/** 3 */
			Low
		}
		enum ResolveBySLAStatus {
			/** 1 */
			In_Progress,
			/** 2 */
			Nearing_Noncompliance,
			/** 3 */
			Succeeded,
			/** 4 */
			Noncompliant
		}
		enum ServiceStage {
			/** 0 */
			Identify,
			/** 1 */
			Research,
			/** 2 */
			Resolve
		}
		enum SeverityCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Resolved,
			/** 2 */
			Cancelled
		}
		enum StatusCode {
			/** 5 */
			Problem_Solved,
			/** 1000 */
			Information_Provided,
			/** 6 */
			Cancelled,
			/** 2000 */
			Merged,
			/** 1 */
			In_Progress,
			/** 2 */
			On_Hold,
			/** 3 */
			Waiting_for_Details,
			/** 4 */
			Researching
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}