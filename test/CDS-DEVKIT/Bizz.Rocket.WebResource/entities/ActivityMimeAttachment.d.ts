///<reference path='devkit.intellisense.js' />
Rocket.FormInformation = function (executionContext, defaultWebResourceName) {
	var activitymimeattachment = intellisense.Form;
	activitymimeattachment.Utility = intellisense.Utility;
	var tab = {};
	tab.test = {
		///<field name='AddTabStateChange' type='Function'></field>
		AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
		///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
		DisplayState: '',
		///<field name='Focus' type='Function'></field>
		Focus: intellisense.FunctionControlFocus,
		///<field name='Label' type='String'>[GetSet] the tab label.</field>
		Label: '',
		///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
		Name: '',
		///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
		Parent: '',
		///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
		Visible: '',
		///<field name='RemoveTabStateChange' type='Function'></field>
		RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
		///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
		Section: {
			test: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='FileName' type='String'></field>
		FileName: intellisense.FieldString,
		///<field name='FileSize' type='Integer'></field>
		FileSize: intellisense.FieldNumber
	};
	activitymimeattachment.Body = body;
	var header = {

	};
	activitymimeattachment.Header = header;
	var footer = {

	};
	activitymimeattachment.Footer = footer;
	var quickForm = {

	};
	activitymimeattachment.QuickForm = quickForm;
	var navigation = {

	};
	activitymimeattachment.Navigation = navigation;
	activitymimeattachment.OptionSet = {};
	///<field name='ComponentState' type='PickList'></field>
	activitymimeattachment.OptionSet.ComponentState = {
		///<field name='Published' type='PickListValue'>Published = 0</field>
		Published: 0,
		///<field name='Unpublished' type='PickListValue'>Unpublished = 1</field>
		Unpublished: 1,
		///<field name='Deleted' type='PickListValue'>Deleted = 2</field>
		Deleted: 2,
		///<field name='Deleted_Unpublished' type='PickListValue'>Deleted_Unpublished = 3</field>
		Deleted_Unpublished: 3
	};
	return activitymimeattachment;
};
Rocket.ActivityMimeAttachmentApi = function (entity) {
	return {
		///<field name='ActivityMimeAttachmentId' type='Uniqueidentifier'>Edm.Guid</field>
		ActivityMimeAttachmentId: intellisense.EntityValue,
		///<field name='ActivityMimeAttachmentIdUnique' type='Uniqueidentifier'>Edm.Guid</field>
		ActivityMimeAttachmentIdUnique: intellisense.EntityValue,
		///<field name='ActivitySubject' type='String'>ReadOnly - Edm.String</field>
		ActivitySubject: intellisense.EntityValue,
		///<field name='AnonymousLink' type='String'>ReadOnly - Edm.String</field>
		AnonymousLink: intellisense.EntityValue,
		///<field name='AttachmentContentId' type='String'>Edm.String</field>
		AttachmentContentId: intellisense.EntityValue,
		///<field name='AttachmentId' type='Lookup'>Edm.Guid</field>
		AttachmentId: intellisense.EntityValue,
		///<field name='AttachmentNumber' type='Integer'>Edm.Int32</field>
		AttachmentNumber: intellisense.EntityValue,
		///<field name='Body' type='String'>Edm.String</field>
		Body: intellisense.EntityValue,
		///<field name='ComponentState' type='OptionSet'>ReadOnly - Edm.Int32 - this.OptionSet.ComponentState</field>
		ComponentState: intellisense.EntityValue,
		///<field name='FileName' type='String'>Edm.String</field>
		FileName: intellisense.EntityValue,
		///<field name='FileSize' type='Integer'>ReadOnly - Edm.Int32</field>
		FileSize: intellisense.EntityValue,
		///<field name='IsFollowed' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsFollowed: intellisense.EntityValue,
		///<field name='IsManaged' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsManaged: intellisense.EntityValue,
		///<field name='MimeType' type='String'>Edm.String</field>
		MimeType: intellisense.EntityValue,
		///<field name='ObjectId' type='Lookup'>Edm.Guid</field>
		objectid_activitypointer: intellisense.EntityValue,
		///<field name='ObjectId' type='Lookup'>Edm.Guid</field>
		objectid_template: intellisense.EntityValue,
		///<field name='OverwriteTime_UtcDateOnly' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		OverwriteTime_UtcDateOnly: intellisense.EntityValue,
		///<field name='OwnerId_systemuser' type='Lookup'></field>
		OwnerId_systemuser: intellisense.EntityValue,
		///<field name='OwnerId_team' type='Lookup'></field>
		OwnerId_team: intellisense.EntityValue,
		///<field name='OwningBusinessUnit' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningBusinessUnit: intellisense.EntityValue,
		///<field name='OwningUser' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningUser: intellisense.EntityValue,
		///<field name='SolutionId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		SolutionId: intellisense.EntityValue,
		///<field name='Subject' type='String'>Edm.String</field>
		Subject: intellisense.EntityValue,
		///<field name='SupportingSolutionId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		SupportingSolutionId: intellisense.EntityValue,
		///<field name='VersionNumber' type='BigInt'>ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name='Entity' type='Object'></field>
		Entity: null,
		///<field name='EntityName' type='String'></field>
		EntityName: null,
		///<field name='EntityCollectionName' type='String'></field>
		EntityCollectionName: null,
		///<field name='OptionSet' type='Object'></field>
		OptionSet: {
			///<field name='ComponentState' type='PickList'></field>
			ComponentState: {
				///<field name='Published' type='PickListValue'>Published = 0</field>
				Published: 0,
				///<field name='Unpublished' type='PickListValue'>Unpublished = 1</field>
				Unpublished: 1,
				///<field name='Deleted' type='PickListValue'>Deleted = 2</field>
				Deleted: 2,
				///<field name='Deleted_Unpublished' type='PickListValue'>Deleted_Unpublished = 3</field>
				Deleted_Unpublished: 3
			}
		}
	};
};
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}