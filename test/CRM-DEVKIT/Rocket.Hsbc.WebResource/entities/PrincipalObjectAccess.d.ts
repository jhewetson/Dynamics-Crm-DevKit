﻿///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class PrincipalObjectAccessApi {
		/**
		* PL.DynamicsCrm.DevKit PrincipalObjectAccessApi
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
		AccessRightsMask: DevKit.WebApi.IntegerValue;
		ChangedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		InheritedAccessRightsMask: DevKit.WebApi.IntegerValue;
		ObjectId: DevKit.WebApi.GuidValueReadonly;
		PrincipalId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the principal object access. */
		PrincipalObjectAccessId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAccess {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}