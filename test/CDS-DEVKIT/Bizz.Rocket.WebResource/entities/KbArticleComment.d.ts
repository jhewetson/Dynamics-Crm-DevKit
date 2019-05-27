﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormKbArticleCommentInformation {
		interface tab_general_Sections {
			kbcomment: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the knowledge base article comment. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the knowledge base article comment was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who last modified the knowledge base article comment. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the knowledge base article comment was last modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Title of the knowledge base article comment. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormKbArticleCommentInformation extends DevKit.Form.IForm {
		/**
		* PL.DynamicsCrm.DevKit form KbArticleCommentInformation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KbArticleCommentInformation */
		Body: Rocket.FormKbArticleCommentInformation.Body;
	}
	class KbArticleCommentApi {
		/**
		* PL.DynamicsCrm.DevKit KbArticleCommentApi
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
		/** Comment text for the knowledge base article. */
		CommentText: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the knowledge base article comment. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the knowledge base article comment was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the kbarticlecomment. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the knowledge base article comment. */
		KbArticleCommentId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the knowledge base article to which the comment applies. */
		KbArticleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who last modified the knowledge base article comment. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the knowledge base article comment was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the kbarticlecomment. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization with which the article comment is associated. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Title of the knowledge base article comment. */
		Title: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace KbArticleComment {
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}