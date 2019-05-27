///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class ChannelPropertyApi {
		/**
		* PL.DynamicsCrm.DevKit ChannelPropertyApi
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
		/** Type the name of the application that the property is associated with. */
		Applicationsource: DevKit.WebApi.StringValue;
		/** Unique identifier of the channel property */
		ChannelPropertyId: DevKit.WebApi.GuidValue;
		/** For Internal Use Only */
		ChannelPropertyIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the data type for the property. */
		DataType: DevKit.WebApi.OptionSetValue;
		/** Description of property */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this property. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the name of the property as received in the information provided by the external application. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the channel property. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the attribute was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Properties contained with a particular bag. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** State of the channel property */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Status of the channel property */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the channel property. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ChannelProperty {
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
		enum DataType {
			/** 0 */
			Floating_Point_Number,
			/** 1 */
			Single_Line_Of_Text,
			/** 2 */
			Whole_Number
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}