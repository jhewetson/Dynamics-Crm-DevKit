///<reference path='devkit.intellisense.js' />
Rocket.FormUser = function (executionContext, defaultWebResourceName) {
	var systemuser = intellisense.Form;
	systemuser.Utility = intellisense.Utility;
	var tab = {};
	tab.SUMMARY_TAB = {
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
			onpremise_account_information: intellisense.FormSection,
			online_account_information: intellisense.FormSection,
			user_information: intellisense.FormSection,
			SOCIAL_PANE_TAB: intellisense.FormSection,
			teams_information: intellisense.FormSection,
			organization_information: intellisense.FormSection,
			queue_selection: intellisense.FormSection,
			queue_information: intellisense.FormSection
		}
	};
	tab.DETAILS_TAB = {
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
			user_information_2: intellisense.FormSection,
			mailing_address: intellisense.FormSection,
			DirectReports: intellisense.FormSection
		}
	};
	tab.ADMINISTRATION_TAB = {
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
			administration: intellisense.FormSection,
			e_mail_configuration: intellisense.FormSection
		}
	};
	tab.MobileOfflineProfile_TAB = {
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
			mobileofflineaccessinfo: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='AccessMode' type='OptionSet'></field>
		AccessMode: intellisense.FieldOptionSet,
		///<field name='Address1_Composite' type='String'></field>
		Address1_Composite: intellisense.FieldString,
		///<field name='Address1_Fax' type='String'></field>
		Address1_Fax: intellisense.FieldString,
		///<field name='Address1_Telephone1' type='String'></field>
		Address1_Telephone1: intellisense.FieldString,
		///<field name='Address1_Telephone2' type='String'></field>
		Address1_Telephone2: intellisense.FieldString,
		///<field name='Address1_Telephone3' type='String'></field>
		Address1_Telephone3: intellisense.FieldString,
		///<field name='Address2_Composite' type='String'></field>
		Address2_Composite: intellisense.FieldString,
		///<field name='BusinessUnitId' type='Lookup'></field>
		BusinessUnitId: intellisense.FieldLookup,
		///<field name='CALType' type='OptionSet'></field>
		CALType: intellisense.FieldOptionSet,
		///<field name='DefaultMailbox' type='Lookup'></field>
		DefaultMailbox: intellisense.FieldLookup,
		///<field name='DomainName' type='String'></field>
		DomainName: intellisense.FieldString,
		///<field name='FullName' type='String'></field>
		FullName: intellisense.FieldString,
		///<field name='HomePhone' type='String'></field>
		HomePhone: intellisense.FieldString,
		///<field name='InternalEMailAddress' type='String'></field>
		InternalEMailAddress: intellisense.FieldString,
		///<field name='InviteStatusCode' type='OptionSet'></field>
		InviteStatusCode: intellisense.FieldOptionSet,
		///<field name='MobileAlertEMail' type='String'></field>
		MobileAlertEMail: intellisense.FieldString,
		///<field name='MobileOfflineProfileId' type='Lookup'></field>
		MobileOfflineProfileId: intellisense.FieldLookup,
		///<field name='MobilePhone' type='String'></field>
		MobilePhone: intellisense.FieldString,
		///<field name='ParentSystemUserId' type='Lookup'></field>
		ParentSystemUserId: intellisense.FieldLookup,
		///<field name='PersonalEMailAddress' type='String'></field>
		PersonalEMailAddress: intellisense.FieldString,
		///<field name='PositionId' type='Lookup'></field>
		PositionId: intellisense.FieldLookup,
		///<field name='PreferredAddressCode' type='OptionSet'></field>
		PreferredAddressCode: intellisense.FieldOptionSet,
		///<field name='PreferredPhoneCode' type='OptionSet'></field>
		PreferredPhoneCode: intellisense.FieldOptionSet,
		///<field name='QueueId' type='Lookup'></field>
		QueueId: intellisense.FieldLookup,
		///<field name='Title' type='String'></field>
		Title: intellisense.FieldString,
		///<field name='WindowsLiveID' type='String'></field>
		WindowsLiveID: intellisense.FieldString,
		///<field name='YomiFullName' type='String'></field>
		YomiFullName: intellisense.FieldString
	};
	systemuser.Body = body;
	var header = {

	};
	systemuser.Header = header;
	var footer = {
		///<field name='IsDisabled' type='Boolean'></field>
		IsDisabled: intellisense.FieldBoolean
	};
	systemuser.Footer = footer;
	var quickForm = {

	};
	systemuser.QuickForm = quickForm;
	var navigation = {

	};
	systemuser.Navigation = navigation;
	systemuser.OptionSet = {};
	///<field name='AccessMode' type='PickList'></field>
	systemuser.OptionSet.AccessMode = {
		///<field name='Read_Write' type='PickListValue'>Read_Write = 0</field>
		Read_Write: 0,
		///<field name='Administrative' type='PickListValue'>Administrative = 1</field>
		Administrative: 1,
		///<field name='Read' type='PickListValue'>Read = 2</field>
		Read: 2,
		///<field name='Support_User' type='PickListValue'>Support_User = 3</field>
		Support_User: 3,
		///<field name='Non_interactive' type='PickListValue'>Non_interactive = 4</field>
		Non_interactive: 4,
		///<field name='Delegated_Admin' type='PickListValue'>Delegated_Admin = 5</field>
		Delegated_Admin: 5
	};
	///<field name='Address1_AddressTypeCode' type='PickList'></field>
	systemuser.OptionSet.Address1_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address1_ShippingMethodCode' type='PickList'></field>
	systemuser.OptionSet.Address1_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_AddressTypeCode' type='PickList'></field>
	systemuser.OptionSet.Address2_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_ShippingMethodCode' type='PickList'></field>
	systemuser.OptionSet.Address2_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CALType' type='PickList'></field>
	systemuser.OptionSet.CALType = {
		///<field name='Professional' type='PickListValue'>Professional = 0</field>
		Professional: 0,
		///<field name='Administrative' type='PickListValue'>Administrative = 1</field>
		Administrative: 1,
		///<field name='Basic' type='PickListValue'>Basic = 2</field>
		Basic: 2,
		///<field name='Device_Professional' type='PickListValue'>Device_Professional = 3</field>
		Device_Professional: 3,
		///<field name='Device_Basic' type='PickListValue'>Device_Basic = 4</field>
		Device_Basic: 4,
		///<field name='Essential' type='PickListValue'>Essential = 5</field>
		Essential: 5,
		///<field name='Device_Essential' type='PickListValue'>Device_Essential = 6</field>
		Device_Essential: 6,
		///<field name='Enterprise' type='PickListValue'>Enterprise = 7</field>
		Enterprise: 7,
		///<field name='Device_Enterprise' type='PickListValue'>Device_Enterprise = 8</field>
		Device_Enterprise: 8,
		///<field name='Sales' type='PickListValue'>Sales = 9</field>
		Sales: 9,
		///<field name='Service' type='PickListValue'>Service = 10</field>
		Service: 10,
		///<field name='Field_Service' type='PickListValue'>Field_Service = 11</field>
		Field_Service: 11,
		///<field name='Project_Service' type='PickListValue'>Project_Service = 12</field>
		Project_Service: 12
	};
	///<field name='EmailRouterAccessApproval' type='PickList'></field>
	systemuser.OptionSet.EmailRouterAccessApproval = {
		///<field name='Empty' type='PickListValue'>Empty = 0</field>
		Empty: 0,
		///<field name='Approved' type='PickListValue'>Approved = 1</field>
		Approved: 1,
		///<field name='Pending_Approval' type='PickListValue'>Pending_Approval = 2</field>
		Pending_Approval: 2,
		///<field name='Rejected' type='PickListValue'>Rejected = 3</field>
		Rejected: 3
	};
	///<field name='IncomingEmailDeliveryMethod' type='PickList'></field>
	systemuser.OptionSet.IncomingEmailDeliveryMethod = {
		///<field name='None' type='PickListValue'>None = 0</field>
		None: 0,
		///<field name='Microsoft_Dynamics_365_for_Outlook' type='PickListValue'>Microsoft_Dynamics_365_for_Outlook = 1</field>
		Microsoft_Dynamics_365_for_Outlook: 1,
		///<field name='Server_Side_Synchronization_or_Email_Router' type='PickListValue'>Server_Side_Synchronization_or_Email_Router = 2</field>
		Server_Side_Synchronization_or_Email_Router: 2,
		///<field name='Forward_Mailbox' type='PickListValue'>Forward_Mailbox = 3</field>
		Forward_Mailbox: 3
	};
	///<field name='InviteStatusCode' type='PickList'></field>
	systemuser.OptionSet.InviteStatusCode = {
		///<field name='Invitation_Not_Sent' type='PickListValue'>Invitation_Not_Sent = 0</field>
		Invitation_Not_Sent: 0,
		///<field name='Invited' type='PickListValue'>Invited = 1</field>
		Invited: 1,
		///<field name='Invitation_Near_Expired' type='PickListValue'>Invitation_Near_Expired = 2</field>
		Invitation_Near_Expired: 2,
		///<field name='Invitation_Expired' type='PickListValue'>Invitation_Expired = 3</field>
		Invitation_Expired: 3,
		///<field name='Invitation_Accepted' type='PickListValue'>Invitation_Accepted = 4</field>
		Invitation_Accepted: 4,
		///<field name='Invitation_Rejected' type='PickListValue'>Invitation_Rejected = 5</field>
		Invitation_Rejected: 5,
		///<field name='Invitation_Revoked' type='PickListValue'>Invitation_Revoked = 6</field>
		Invitation_Revoked: 6
	};
	///<field name='OutgoingEmailDeliveryMethod' type='PickList'></field>
	systemuser.OptionSet.OutgoingEmailDeliveryMethod = {
		///<field name='None' type='PickListValue'>None = 0</field>
		None: 0,
		///<field name='Microsoft_Dynamics_365_for_Outlook' type='PickListValue'>Microsoft_Dynamics_365_for_Outlook = 1</field>
		Microsoft_Dynamics_365_for_Outlook: 1,
		///<field name='Server_Side_Synchronization_or_Email_Router' type='PickListValue'>Server_Side_Synchronization_or_Email_Router = 2</field>
		Server_Side_Synchronization_or_Email_Router: 2
	};
	///<field name='PreferredAddressCode' type='PickList'></field>
	systemuser.OptionSet.PreferredAddressCode = {
		///<field name='Mailing_Address' type='PickListValue'>Mailing_Address = 1</field>
		Mailing_Address: 1,
		///<field name='Other_Address' type='PickListValue'>Other_Address = 2</field>
		Other_Address: 2
	};
	///<field name='PreferredEmailCode' type='PickList'></field>
	systemuser.OptionSet.PreferredEmailCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='PreferredPhoneCode' type='PickList'></field>
	systemuser.OptionSet.PreferredPhoneCode = {
		///<field name='Main_Phone' type='PickListValue'>Main_Phone = 1</field>
		Main_Phone: 1,
		///<field name='Other_Phone' type='PickListValue'>Other_Phone = 2</field>
		Other_Phone: 2,
		///<field name='Home_Phone' type='PickListValue'>Home_Phone = 3</field>
		Home_Phone: 3,
		///<field name='Mobile_Phone' type='PickListValue'>Mobile_Phone = 4</field>
		Mobile_Phone: 4
	};
	return systemuser;
};
Rocket.SystemUserApi = function (entity) {
	return {
		///<field name='AccessMode' type='OptionSet'>Edm.Int32 - this.OptionSet.AccessMode</field>
		AccessMode: intellisense.EntityValue,
		///<field name='ActiveDirectoryGuid' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		ActiveDirectoryGuid: intellisense.EntityValue,
		///<field name='Address1_AddressId' type='Uniqueidentifier'>Edm.Guid</field>
		Address1_AddressId: intellisense.EntityValue,
		///<field name='Address1_AddressTypeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address1_AddressTypeCode</field>
		Address1_AddressTypeCode: intellisense.EntityValue,
		///<field name='Address1_City' type='String'>Edm.String</field>
		Address1_City: intellisense.EntityValue,
		///<field name='Address1_Composite' type='Memo'>ReadOnly - Edm.String</field>
		Address1_Composite: intellisense.EntityValue,
		///<field name='Address1_Country' type='String'>Edm.String</field>
		Address1_Country: intellisense.EntityValue,
		///<field name='Address1_County' type='String'>Edm.String</field>
		Address1_County: intellisense.EntityValue,
		///<field name='Address1_Fax' type='String'>Edm.String</field>
		Address1_Fax: intellisense.EntityValue,
		///<field name='Address1_Latitude' type='Double'>Edm.Double</field>
		Address1_Latitude: intellisense.EntityValue,
		///<field name='Address1_Line1' type='String'>Edm.String</field>
		Address1_Line1: intellisense.EntityValue,
		///<field name='Address1_Line2' type='String'>Edm.String</field>
		Address1_Line2: intellisense.EntityValue,
		///<field name='Address1_Line3' type='String'>Edm.String</field>
		Address1_Line3: intellisense.EntityValue,
		///<field name='Address1_Longitude' type='Double'>Edm.Double</field>
		Address1_Longitude: intellisense.EntityValue,
		///<field name='Address1_Name' type='String'>Edm.String</field>
		Address1_Name: intellisense.EntityValue,
		///<field name='Address1_PostalCode' type='String'>Edm.String</field>
		Address1_PostalCode: intellisense.EntityValue,
		///<field name='Address1_PostOfficeBox' type='String'>Edm.String</field>
		Address1_PostOfficeBox: intellisense.EntityValue,
		///<field name='Address1_ShippingMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address1_ShippingMethodCode</field>
		Address1_ShippingMethodCode: intellisense.EntityValue,
		///<field name='Address1_StateOrProvince' type='String'>Edm.String</field>
		Address1_StateOrProvince: intellisense.EntityValue,
		///<field name='Address1_Telephone1' type='String'>Edm.String</field>
		Address1_Telephone1: intellisense.EntityValue,
		///<field name='Address1_Telephone2' type='String'>Edm.String</field>
		Address1_Telephone2: intellisense.EntityValue,
		///<field name='Address1_Telephone3' type='String'>Edm.String</field>
		Address1_Telephone3: intellisense.EntityValue,
		///<field name='Address1_UPSZone' type='String'>Edm.String</field>
		Address1_UPSZone: intellisense.EntityValue,
		///<field name='Address1_UTCOffset' type='Integer'>Edm.Int32</field>
		Address1_UTCOffset: intellisense.EntityValue,
		///<field name='Address2_AddressId' type='Uniqueidentifier'>Edm.Guid</field>
		Address2_AddressId: intellisense.EntityValue,
		///<field name='Address2_AddressTypeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address2_AddressTypeCode</field>
		Address2_AddressTypeCode: intellisense.EntityValue,
		///<field name='Address2_City' type='String'>Edm.String</field>
		Address2_City: intellisense.EntityValue,
		///<field name='Address2_Composite' type='Memo'>ReadOnly - Edm.String</field>
		Address2_Composite: intellisense.EntityValue,
		///<field name='Address2_Country' type='String'>Edm.String</field>
		Address2_Country: intellisense.EntityValue,
		///<field name='Address2_County' type='String'>Edm.String</field>
		Address2_County: intellisense.EntityValue,
		///<field name='Address2_Fax' type='String'>Edm.String</field>
		Address2_Fax: intellisense.EntityValue,
		///<field name='Address2_Latitude' type='Double'>Edm.Double</field>
		Address2_Latitude: intellisense.EntityValue,
		///<field name='Address2_Line1' type='String'>Edm.String</field>
		Address2_Line1: intellisense.EntityValue,
		///<field name='Address2_Line2' type='String'>Edm.String</field>
		Address2_Line2: intellisense.EntityValue,
		///<field name='Address2_Line3' type='String'>Edm.String</field>
		Address2_Line3: intellisense.EntityValue,
		///<field name='Address2_Longitude' type='Double'>Edm.Double</field>
		Address2_Longitude: intellisense.EntityValue,
		///<field name='Address2_Name' type='String'>Edm.String</field>
		Address2_Name: intellisense.EntityValue,
		///<field name='Address2_PostalCode' type='String'>Edm.String</field>
		Address2_PostalCode: intellisense.EntityValue,
		///<field name='Address2_PostOfficeBox' type='String'>Edm.String</field>
		Address2_PostOfficeBox: intellisense.EntityValue,
		///<field name='Address2_ShippingMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address2_ShippingMethodCode</field>
		Address2_ShippingMethodCode: intellisense.EntityValue,
		///<field name='Address2_StateOrProvince' type='String'>Edm.String</field>
		Address2_StateOrProvince: intellisense.EntityValue,
		///<field name='Address2_Telephone1' type='String'>Edm.String</field>
		Address2_Telephone1: intellisense.EntityValue,
		///<field name='Address2_Telephone2' type='String'>Edm.String</field>
		Address2_Telephone2: intellisense.EntityValue,
		///<field name='Address2_Telephone3' type='String'>Edm.String</field>
		Address2_Telephone3: intellisense.EntityValue,
		///<field name='Address2_UPSZone' type='String'>Edm.String</field>
		Address2_UPSZone: intellisense.EntityValue,
		///<field name='Address2_UTCOffset' type='Integer'>Edm.Int32</field>
		Address2_UTCOffset: intellisense.EntityValue,
		///<field name='ApplicationId' type='Uniqueidentifier'>Edm.Guid</field>
		ApplicationId: intellisense.EntityValue,
		///<field name='ApplicationIdUri' type='String'>ReadOnly - Edm.String</field>
		ApplicationIdUri: intellisense.EntityValue,
		///<field name='AzureActiveDirectoryObjectId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		AzureActiveDirectoryObjectId: intellisense.EntityValue,
		///<field name='BusinessUnitId' type='Lookup'>Edm.Guid</field>
		BusinessUnitId: intellisense.EntityValue,
		///<field name='CalendarId' type='Lookup'>Edm.Guid</field>
		CalendarId: intellisense.EntityValue,
		///<field name='CALType' type='OptionSet'>Edm.Int32 - this.OptionSet.CALType</field>
		CALType: intellisense.EntityValue,
		///<field name='CreatedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name='CreatedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='CreatedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name='DefaultFiltersPopulated' type='Boolean'>ReadOnly - Edm.Boolean</field>
		DefaultFiltersPopulated: intellisense.EntityValue,
		///<field name='DefaultMailbox' type='Lookup'>ReadOnly - Edm.Guid</field>
		DefaultMailbox: intellisense.EntityValue,
		///<field name='DefaultOdbFolderName' type='String'>ReadOnly - Edm.String</field>
		DefaultOdbFolderName: intellisense.EntityValue,
		///<field name='DisabledReason' type='String'>ReadOnly - Edm.String</field>
		DisabledReason: intellisense.EntityValue,
		///<field name='DisplayInServiceViews' type='Boolean'>Edm.Boolean</field>
		DisplayInServiceViews: intellisense.EntityValue,
		///<field name='DomainName' type='String'>Edm.String</field>
		DomainName: intellisense.EntityValue,
		///<field name='EmailRouterAccessApproval' type='OptionSet'>Edm.Int32 - this.OptionSet.EmailRouterAccessApproval</field>
		EmailRouterAccessApproval: intellisense.EntityValue,
		///<field name='EmployeeId' type='String'>Edm.String</field>
		EmployeeId: intellisense.EntityValue,
		///<field name='EntityImageId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		EntityImageId: intellisense.EntityValue,
		///<field name='ExchangeRate' type='Decimal'>ReadOnly - Edm.Decimal</field>
		ExchangeRate: intellisense.EntityValue,
		///<field name='FirstName' type='String'>Edm.String</field>
		FirstName: intellisense.EntityValue,
		///<field name='FullName' type='String'>ReadOnly - Edm.String</field>
		FullName: intellisense.EntityValue,
		///<field name='GovernmentId' type='String'>Edm.String</field>
		GovernmentId: intellisense.EntityValue,
		///<field name='HomePhone' type='String'>Edm.String</field>
		HomePhone: intellisense.EntityValue,
		///<field name='IdentityId' type='Integer'>ReadOnly - Edm.Int32</field>
		IdentityId: intellisense.EntityValue,
		///<field name='ImportSequenceNumber' type='Integer'>Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name='IncomingEmailDeliveryMethod' type='OptionSet'>Edm.Int32 - this.OptionSet.IncomingEmailDeliveryMethod</field>
		IncomingEmailDeliveryMethod: intellisense.EntityValue,
		///<field name='InternalEMailAddress' type='String'>Edm.String</field>
		InternalEMailAddress: intellisense.EntityValue,
		///<field name='InviteStatusCode' type='OptionSet'>Edm.Int32 - this.OptionSet.InviteStatusCode</field>
		InviteStatusCode: intellisense.EntityValue,
		///<field name='IsActiveDirectoryUser' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsActiveDirectoryUser: intellisense.EntityValue,
		///<field name='IsDisabled' type='Boolean'>Edm.Boolean</field>
		IsDisabled: intellisense.EntityValue,
		///<field name='IsEmailAddressApprovedByO365Admin' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsEmailAddressApprovedByO365Admin: intellisense.EntityValue,
		///<field name='IsIntegrationUser' type='Boolean'>Edm.Boolean</field>
		IsIntegrationUser: intellisense.EntityValue,
		///<field name='IsLicensed' type='Boolean'>Edm.Boolean</field>
		IsLicensed: intellisense.EntityValue,
		///<field name='IsSyncWithDirectory' type='Boolean'>Edm.Boolean</field>
		IsSyncWithDirectory: intellisense.EntityValue,
		///<field name='JobTitle' type='String'>Edm.String</field>
		JobTitle: intellisense.EntityValue,
		///<field name='LastName' type='String'>Edm.String</field>
		LastName: intellisense.EntityValue,
		///<field name='LatestUpdateTime_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		LatestUpdateTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='MiddleName' type='String'>Edm.String</field>
		MiddleName: intellisense.EntityValue,
		///<field name='MobileAlertEMail' type='String'>Edm.String</field>
		MobileAlertEMail: intellisense.EntityValue,
		///<field name='MobileOfflineProfileId' type='Lookup'>Edm.Guid</field>
		MobileOfflineProfileId: intellisense.EntityValue,
		///<field name='MobilePhone' type='String'>Edm.String</field>
		MobilePhone: intellisense.EntityValue,
		///<field name='ModifiedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name='ModifiedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
		///<field name='NickName' type='String'>Edm.String</field>
		NickName: intellisense.EntityValue,
		///<field name='OrganizationId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		OrganizationId: intellisense.EntityValue,
		///<field name='OutgoingEmailDeliveryMethod' type='OptionSet'>Edm.Int32 - this.OptionSet.OutgoingEmailDeliveryMethod</field>
		OutgoingEmailDeliveryMethod: intellisense.EntityValue,
		///<field name='OverriddenCreatedOn_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		OverriddenCreatedOn_UtcDateOnly: intellisense.EntityValue,
		///<field name='ParentSystemUserId' type='Lookup'>Edm.Guid</field>
		ParentSystemUserId: intellisense.EntityValue,
		///<field name='PassportHi' type='Integer'>Edm.Int32</field>
		PassportHi: intellisense.EntityValue,
		///<field name='PassportLo' type='Integer'>Edm.Int32</field>
		PassportLo: intellisense.EntityValue,
		///<field name='PersonalEMailAddress' type='String'>Edm.String</field>
		PersonalEMailAddress: intellisense.EntityValue,
		///<field name='PhotoUrl' type='String'>Edm.String</field>
		PhotoUrl: intellisense.EntityValue,
		///<field name='PositionId' type='Lookup'>Edm.Guid</field>
		PositionId: intellisense.EntityValue,
		///<field name='PreferredAddressCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PreferredAddressCode</field>
		PreferredAddressCode: intellisense.EntityValue,
		///<field name='PreferredEmailCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PreferredEmailCode</field>
		PreferredEmailCode: intellisense.EntityValue,
		///<field name='PreferredPhoneCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PreferredPhoneCode</field>
		PreferredPhoneCode: intellisense.EntityValue,
		///<field name='ProcessId' type='Uniqueidentifier'>Edm.Guid</field>
		ProcessId: intellisense.EntityValue,
		///<field name='QueueId' type='Lookup'>Edm.Guid</field>
		QueueId: intellisense.EntityValue,
		///<field name='Salutation' type='String'>Edm.String</field>
		Salutation: intellisense.EntityValue,
		///<field name='SetupUser' type='Boolean'>Edm.Boolean</field>
		SetupUser: intellisense.EntityValue,
		///<field name='SharePointEmailAddress' type='String'>Edm.String</field>
		SharePointEmailAddress: intellisense.EntityValue,
		///<field name='Skills' type='String'>Edm.String</field>
		Skills: intellisense.EntityValue,
		///<field name='StageId' type='Uniqueidentifier'>Edm.Guid</field>
		StageId: intellisense.EntityValue,
		///<field name='SystemUserId' type='Uniqueidentifier'>Edm.Guid</field>
		SystemUserId: intellisense.EntityValue,
		///<field name='TerritoryId' type='Lookup'>Edm.Guid</field>
		TerritoryId: intellisense.EntityValue,
		///<field name='TimeZoneRuleVersionNumber' type='Integer'>Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
		///<field name='Title' type='String'>Edm.String</field>
		Title: intellisense.EntityValue,
		///<field name='TransactionCurrencyId' type='Lookup'>Edm.Guid</field>
		TransactionCurrencyId: intellisense.EntityValue,
		///<field name='TraversedPath' type='String'>Edm.String</field>
		TraversedPath: intellisense.EntityValue,
		///<field name='UserLicenseType' type='Integer'>Edm.Int32</field>
		UserLicenseType: intellisense.EntityValue,
		///<field name='UserPuid' type='String'>ReadOnly - Edm.String</field>
		UserPuid: intellisense.EntityValue,
		///<field name='UTCConversionTimeZoneCode' type='Integer'>Edm.Int32</field>
		UTCConversionTimeZoneCode: intellisense.EntityValue,
		///<field name='VersionNumber' type='BigInt'>ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name='WindowsLiveID' type='String'>Edm.String</field>
		WindowsLiveID: intellisense.EntityValue,
		///<field name='YammerEmailAddress' type='String'>Edm.String</field>
		YammerEmailAddress: intellisense.EntityValue,
		///<field name='YammerUserId' type='String'>Edm.String</field>
		YammerUserId: intellisense.EntityValue,
		///<field name='YomiFirstName' type='String'>Edm.String</field>
		YomiFirstName: intellisense.EntityValue,
		///<field name='YomiFullName' type='String'>ReadOnly - Edm.String</field>
		YomiFullName: intellisense.EntityValue,
		///<field name='YomiLastName' type='String'>Edm.String</field>
		YomiLastName: intellisense.EntityValue,
		///<field name='YomiMiddleName' type='String'>Edm.String</field>
		YomiMiddleName: intellisense.EntityValue,
		///<field name='Entity' type='Object'></field>
		Entity: null,
		///<field name='EntityName' type='String'></field>
		EntityName: null,
		///<field name='EntityCollectionName' type='String'></field>
		EntityCollectionName: null,
		///<field name='OptionSet' type='Object'></field>
		OptionSet: {
			///<field name='AccessMode' type='PickList'></field>
			AccessMode: {
				///<field name='Read_Write' type='PickListValue'>Read_Write = 0</field>
				Read_Write: 0,
				///<field name='Administrative' type='PickListValue'>Administrative = 1</field>
				Administrative: 1,
				///<field name='Read' type='PickListValue'>Read = 2</field>
				Read: 2,
				///<field name='Support_User' type='PickListValue'>Support_User = 3</field>
				Support_User: 3,
				///<field name='Non_interactive' type='PickListValue'>Non_interactive = 4</field>
				Non_interactive: 4,
				///<field name='Delegated_Admin' type='PickListValue'>Delegated_Admin = 5</field>
				Delegated_Admin: 5
			},
			///<field name='Address1_AddressTypeCode' type='PickList'></field>
			Address1_AddressTypeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address1_ShippingMethodCode' type='PickList'></field>
			Address1_ShippingMethodCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address2_AddressTypeCode' type='PickList'></field>
			Address2_AddressTypeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address2_ShippingMethodCode' type='PickList'></field>
			Address2_ShippingMethodCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='CALType' type='PickList'></field>
			CALType: {
				///<field name='Professional' type='PickListValue'>Professional = 0</field>
				Professional: 0,
				///<field name='Administrative' type='PickListValue'>Administrative = 1</field>
				Administrative: 1,
				///<field name='Basic' type='PickListValue'>Basic = 2</field>
				Basic: 2,
				///<field name='Device_Professional' type='PickListValue'>Device_Professional = 3</field>
				Device_Professional: 3,
				///<field name='Device_Basic' type='PickListValue'>Device_Basic = 4</field>
				Device_Basic: 4,
				///<field name='Essential' type='PickListValue'>Essential = 5</field>
				Essential: 5,
				///<field name='Device_Essential' type='PickListValue'>Device_Essential = 6</field>
				Device_Essential: 6,
				///<field name='Enterprise' type='PickListValue'>Enterprise = 7</field>
				Enterprise: 7,
				///<field name='Device_Enterprise' type='PickListValue'>Device_Enterprise = 8</field>
				Device_Enterprise: 8,
				///<field name='Sales' type='PickListValue'>Sales = 9</field>
				Sales: 9,
				///<field name='Service' type='PickListValue'>Service = 10</field>
				Service: 10,
				///<field name='Field_Service' type='PickListValue'>Field_Service = 11</field>
				Field_Service: 11,
				///<field name='Project_Service' type='PickListValue'>Project_Service = 12</field>
				Project_Service: 12
			},
			///<field name='EmailRouterAccessApproval' type='PickList'></field>
			EmailRouterAccessApproval: {
				///<field name='Empty' type='PickListValue'>Empty = 0</field>
				Empty: 0,
				///<field name='Approved' type='PickListValue'>Approved = 1</field>
				Approved: 1,
				///<field name='Pending_Approval' type='PickListValue'>Pending_Approval = 2</field>
				Pending_Approval: 2,
				///<field name='Rejected' type='PickListValue'>Rejected = 3</field>
				Rejected: 3
			},
			///<field name='IncomingEmailDeliveryMethod' type='PickList'></field>
			IncomingEmailDeliveryMethod: {
				///<field name='None' type='PickListValue'>None = 0</field>
				None: 0,
				///<field name='Microsoft_Dynamics_365_for_Outlook' type='PickListValue'>Microsoft_Dynamics_365_for_Outlook = 1</field>
				Microsoft_Dynamics_365_for_Outlook: 1,
				///<field name='Server_Side_Synchronization_or_Email_Router' type='PickListValue'>Server_Side_Synchronization_or_Email_Router = 2</field>
				Server_Side_Synchronization_or_Email_Router: 2,
				///<field name='Forward_Mailbox' type='PickListValue'>Forward_Mailbox = 3</field>
				Forward_Mailbox: 3
			},
			///<field name='InviteStatusCode' type='PickList'></field>
			InviteStatusCode: {
				///<field name='Invitation_Not_Sent' type='PickListValue'>Invitation_Not_Sent = 0</field>
				Invitation_Not_Sent: 0,
				///<field name='Invited' type='PickListValue'>Invited = 1</field>
				Invited: 1,
				///<field name='Invitation_Near_Expired' type='PickListValue'>Invitation_Near_Expired = 2</field>
				Invitation_Near_Expired: 2,
				///<field name='Invitation_Expired' type='PickListValue'>Invitation_Expired = 3</field>
				Invitation_Expired: 3,
				///<field name='Invitation_Accepted' type='PickListValue'>Invitation_Accepted = 4</field>
				Invitation_Accepted: 4,
				///<field name='Invitation_Rejected' type='PickListValue'>Invitation_Rejected = 5</field>
				Invitation_Rejected: 5,
				///<field name='Invitation_Revoked' type='PickListValue'>Invitation_Revoked = 6</field>
				Invitation_Revoked: 6
			},
			///<field name='OutgoingEmailDeliveryMethod' type='PickList'></field>
			OutgoingEmailDeliveryMethod: {
				///<field name='None' type='PickListValue'>None = 0</field>
				None: 0,
				///<field name='Microsoft_Dynamics_365_for_Outlook' type='PickListValue'>Microsoft_Dynamics_365_for_Outlook = 1</field>
				Microsoft_Dynamics_365_for_Outlook: 1,
				///<field name='Server_Side_Synchronization_or_Email_Router' type='PickListValue'>Server_Side_Synchronization_or_Email_Router = 2</field>
				Server_Side_Synchronization_or_Email_Router: 2
			},
			///<field name='PreferredAddressCode' type='PickList'></field>
			PreferredAddressCode: {
				///<field name='Mailing_Address' type='PickListValue'>Mailing_Address = 1</field>
				Mailing_Address: 1,
				///<field name='Other_Address' type='PickListValue'>Other_Address = 2</field>
				Other_Address: 2
			},
			///<field name='PreferredEmailCode' type='PickList'></field>
			PreferredEmailCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='PreferredPhoneCode' type='PickList'></field>
			PreferredPhoneCode: {
				///<field name='Main_Phone' type='PickListValue'>Main_Phone = 1</field>
				Main_Phone: 1,
				///<field name='Other_Phone' type='PickListValue'>Other_Phone = 2</field>
				Other_Phone: 2,
				///<field name='Home_Phone' type='PickListValue'>Home_Phone = 3</field>
				Home_Phone: 3,
				///<field name='Mobile_Phone' type='PickListValue'>Mobile_Phone = 4</field>
				Mobile_Phone: 4
			}
		}
	};
};
//{'JsForm':['User'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}