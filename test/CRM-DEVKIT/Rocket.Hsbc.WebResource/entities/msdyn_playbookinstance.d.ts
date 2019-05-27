///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class msdyn_playbookinstanceApi {
		/**
		* PL.DynamicsCrm.DevKit msdyn_playbookinstanceApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the playbook was started. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_activitiesassociated: DevKit.WebApi.IntegerValue;
		msdyn_activitiesclosed: DevKit.WebApi.IntegerValue;
		/** Select the playbook category for the playbook. */
		msdyn_categoryid: DevKit.WebApi.LookupValue;
		/** Estimated close date for a playbook based on the estimated duration specified for the playbook template. */
		msdyn_estimatedclose_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Internal Use Only */
		msdyn_evaluateactivityclosure: DevKit.WebApi.BooleanValue;
		/** Type the name of the playbook. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_playbookinstanceId: DevKit.WebApi.GuidValue;
		/** Shows the unique ID of the playbook template associated with the playbook. */
		msdyn_playbooktemplateid: DevKit.WebApi.LookupValue;
		/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
		msdyn_trackprogress: DevKit.WebApi.BooleanValue;
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
		/** Shows the entity the playbook is launched for. */
		regarding_account: DevKit.WebApi.LookupValue;
		/** Shows the entity the playbook is launched for. */
		regarding_contact: DevKit.WebApi.LookupValue;
		/** Shows the entity the playbook is launched for. */
		regarding_invoice: DevKit.WebApi.LookupValue;
		/** Shows the entity the playbook is launched for. */
		regarding_lead: DevKit.WebApi.LookupValue;
		/** Shows the entity the playbook is launched for. */
		regarding_opportunity: DevKit.WebApi.LookupValue;
		/** Shows the entity the playbook is launched for. */
		regarding_quote: DevKit.WebApi.LookupValue;
		/** Shows the entity the playbook is launched for. */
		regarding_salesorder: DevKit.WebApi.LookupValue;
		RegardingIdName: DevKit.WebApi.StringValueReadonly;
		/** Status of the Playbook */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Playbook result */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_playbookinstance {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Completed
		}
		enum statuscode {
			/** 1 */
			In_Progress,
			/** 2 */
			Successful,
			/** 3 */
			Not_Successful,
			/** 4 */
			Partially_Successful,
			/** 5 */
			Not_Required,
			/** 6 */
			Not_Tracked
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}