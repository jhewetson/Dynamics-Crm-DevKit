///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ImageDescriptorApi {
		/**
		* PL.DynamicsCrm.DevKit ImageDescriptorApi
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
		ColorDepthBits: DevKit.WebApi.IntegerValue;
		FileLocation: DevKit.WebApi.StringValue;
		FileName: DevKit.WebApi.StringValue;
		FileSizeBytes: DevKit.WebApi.IntegerValue;
		FileType: DevKit.WebApi.StringValue;
		FullImageData: DevKit.WebApi.StringValue;
		FullImageURL: DevKit.WebApi.StringValue;
		ImageData: DevKit.WebApi.StringValue;
		ImageDescription: DevKit.WebApi.StringValue;
		ImageDescriptorId: DevKit.WebApi.GuidValue;
		ImagePixelHeight: DevKit.WebApi.IntegerValue;
		ImagePixelWidth: DevKit.WebApi.IntegerValue;
		ImageTags: DevKit.WebApi.StringValue;
		ImageTimestamp: DevKit.WebApi.BigIntValueReadonly;
		ImageURL: DevKit.WebApi.StringValueReadonly;
		MimeType: DevKit.WebApi.StringValue;
		ObjectId: DevKit.WebApi.GuidValueReadonly;
		Size: DevKit.WebApi.IntegerValueReadonly;
		Title: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ImageDescriptor {
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}