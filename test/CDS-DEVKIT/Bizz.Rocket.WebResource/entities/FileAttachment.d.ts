///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class FileAttachmentApi {
		/**
		* PL.DynamicsCrm.DevKit FileAttachmentApi
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
		/** Date and time when the attachment was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the file attachment. */
		FileAttachmentId: DevKit.WebApi.GuidValue;
		/** File name of the attachment. */
		FileName: DevKit.WebApi.StringValue;
		/** File pointer of the attachment. */
		FilePointer: DevKit.WebApi.StringValueReadonly;
		/** File size of the attachment in bytes. */
		FileSizeInBytes: DevKit.WebApi.BigIntValueReadonly;
		/** MIME type of the attachment. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the object with which the attachment is associated. */
		ObjectId: DevKit.WebApi.LookupValue;
		/** Prefix of the file pointer in blob storage. */
		Prefix: DevKit.WebApi.StringValueReadonly;
		/** Regarding attribute schema name of the attachment. */
		RegardingFieldName: DevKit.WebApi.StringValue;
		/** Storage pointer. */
		StoragePointer: DevKit.WebApi.StringValueReadonly;
		/** Version number of the file attachment. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace FileAttachment {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}