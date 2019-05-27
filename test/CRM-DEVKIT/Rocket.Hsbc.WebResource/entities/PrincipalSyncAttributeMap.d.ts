///<reference path='devkit.d.ts' />
declare namespace Hsbc {
	class PrincipalSyncAttributeMapApi {
		/**
		* PL.DynamicsCrm.DevKit PrincipalSyncAttributeMapApi
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
		/** Specifies allowed sync directions. */
		AllowedSyncDirection: DevKit.WebApi.IntegerValue;
		/** CRM Attribute Display Name. */
		AttributeCRMDisplayName: DevKit.WebApi.StringValue;
		/** CRM Attribute Name. */
		AttributeCRMName: DevKit.WebApi.StringValue;
		/** Exchange Attribute Display Name. */
		AttributeExchangeDisplayName: DevKit.WebApi.StringValue;
		/** Exchange Attribute Name. */
		AttributeExchangeName: DevKit.WebApi.StringValue;
		/** Computed Properties. */
		ComputedProperties: DevKit.WebApi.StringValue;
		/** Default Sync Direction */
		DefaultSyncDirection: DevKit.WebApi.OptionSetValue;
		/** Indicates whether the mapping is a computed property */
		IsComputed: DevKit.WebApi.BooleanValueReadonly;
		/** Mapping Name. */
		MappingName: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Parent Sync-Attribute Mapping to which this mapping belongs */
		ParentPrincipalSyncAttributeMappingId: DevKit.WebApi.LookupValue;
		PrincipalId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the principal sync attribute mapping. */
		PrincipalSyncAttributeMapId: DevKit.WebApi.GuidValue;
		/** Sync Direction */
		SyncDirection: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalSyncAttributeMap {
		enum DefaultSyncDirection {
			/** 0 */
			None,
			/** 1 */
			ToExchange,
			/** 2 */
			ToCRM,
			/** 3 */
			Bidirectional
		}
		enum SyncDirection {
			/** 0 */
			None,
			/** 1 */
			ToExchange,
			/** 2 */
			ToCRM,
			/** 3 */
			Bidirectional
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}