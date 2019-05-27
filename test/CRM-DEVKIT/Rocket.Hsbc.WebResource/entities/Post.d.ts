///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class PostApi {
		/**
		* PL.DynamicsCrm.DevKit PostApi
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
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the solution. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for entity instances */
		PostId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the post regarding with which the post is associated. */
		PostRegardingId: DevKit.WebApi.LookupValueReadonly;
		/** Internal use only. */
		PostToYammer: DevKit.WebApi.BooleanValueReadonly;
		/** Choose the parent record for the post to identify the customer, opportunity, case, or other record that the post most closely relates to. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the regarding object. */
		RegardingObjectOwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Select whether the post was created manually or automatically. */
		Source: DevKit.WebApi.OptionSetValue;
		/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
		Text: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Select the post type. */
		Type: DevKit.WebApi.OptionSetValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Internal use only. */
		YammerPostState: DevKit.WebApi.IntegerValueReadonly;
		/** Internal use only. */
		YammerRetryCount: DevKit.WebApi.IntegerValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Post {
		enum Source {
			/** 1 */
			Auto_Post,
			/** 2 */
			Manual_Post,
			/** 3 */
			ActionHub_Post
		}
		enum Type {
			/** 1 */
			Check_in,
			/** 2 */
			Idea,
			/** 3 */
			News,
			/** 4 */
			Private_Message,
			/** 5 */
			Question,
			/** 6 */
			Re_post,
			/** 7 */
			Status
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}