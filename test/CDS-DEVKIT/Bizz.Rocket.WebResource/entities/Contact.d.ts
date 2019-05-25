///<reference path='devkit.intellisense.js' />
Rocket.FormContact = function (executionContext, defaultWebResourceName) {
	var contact = intellisense.Form;
	contact.Utility = intellisense.Utility;
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
			CONTACT_INFORMATION: intellisense.FormSection,
			MapSection: intellisense.FormSection,
			SOCIAL_PANE_TAB: intellisense.FormSection,
			Summary_section_6: intellisense.FormSection
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
			PERSONALINFORMATION: intellisense.FormSection,
			PERSONAL_NOTES_SECTION: intellisense.FormSection,
			CONTACT_PREFERENCES: intellisense.FormSection,
			billinginformation: intellisense.FormSection,
			shippinginformation: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='Address1_Composite' type='String'></field>
		Address1_Composite: intellisense.FieldString,
		///<field name='Address1_FreightTermsCode' type='OptionSet'></field>
		Address1_FreightTermsCode: intellisense.FieldOptionSet,
		///<field name='Address1_ShippingMethodCode' type='OptionSet'></field>
		Address1_ShippingMethodCode: intellisense.FieldOptionSet,
		///<field name='Anniversary' type='DateTime'></field>
		Anniversary: intellisense.FieldDateTime,
		///<field name='BirthDate' type='DateTime'></field>
		BirthDate: intellisense.FieldDateTime,
		///<field name='CreditLimit' type='Money'></field>
		CreditLimit: intellisense.FieldNumber,
		///<field name='CreditOnHold' type='Boolean'></field>
		CreditOnHold: intellisense.FieldBoolean,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='DoNotBulkEMail' type='Boolean'></field>
		DoNotBulkEMail: intellisense.FieldBoolean,
		///<field name='DoNotEMail' type='Boolean'></field>
		DoNotEMail: intellisense.FieldBoolean,
		///<field name='DoNotFax' type='Boolean'></field>
		DoNotFax: intellisense.FieldBoolean,
		///<field name='DoNotPhone' type='Boolean'></field>
		DoNotPhone: intellisense.FieldBoolean,
		///<field name='DoNotPostalMail' type='Boolean'></field>
		DoNotPostalMail: intellisense.FieldBoolean,
		///<field name='EMailAddress1' type='String'></field>
		EMailAddress1: intellisense.FieldString,
		///<field name='FamilyStatusCode' type='OptionSet'></field>
		FamilyStatusCode: intellisense.FieldOptionSet,
		///<field name='Fax' type='String'></field>
		Fax: intellisense.FieldString,
		///<field name='FollowEmail' type='Boolean'></field>
		FollowEmail: intellisense.FieldBoolean,
		///<field name='FullName' type='String'></field>
		FullName: intellisense.FieldString,
		///<field name='GenderCode' type='OptionSet'></field>
		GenderCode: intellisense.FieldOptionSet,
		///<field name='JobTitle' type='String'></field>
		JobTitle: intellisense.FieldString,
		///<field name='MobilePhone' type='String'></field>
		MobilePhone: intellisense.FieldString,
		///<field name='ParentCustomerId' type='Lookup'></field>
		ParentCustomerId: intellisense.FieldLookup,
		///<field name='PaymentTermsCode' type='OptionSet'></field>
		PaymentTermsCode: intellisense.FieldOptionSet,
		///<field name='PreferredContactMethodCode' type='OptionSet'></field>
		PreferredContactMethodCode: intellisense.FieldOptionSet,
		///<field name='SpousesName' type='String'></field>
		SpousesName: intellisense.FieldString,
		///<field name='Telephone1' type='String'></field>
		Telephone1: intellisense.FieldString,
		///<field name='TransactionCurrencyId' type='Lookup'></field>
		TransactionCurrencyId: intellisense.FieldLookup
	};
	contact.Body = body;
	var header = {
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup
	};
	contact.Header = header;
	var footer = {

	};
	contact.Footer = footer;
	var quickForm = {

	};
	contact.QuickForm = quickForm;
	var navigation = {
		navAddresses: intellisense.FormNavigation,
		navSubConts: intellisense.FormNavigation,
		navRelationships: intellisense.FormNavigation,
		navAsyncOperations: intellisense.FormNavigation,
		navProcessSessions: intellisense.FormNavigation
	};
	contact.Navigation = navigation;
	contact.OptionSet = {};
	///<field name='AccountRoleCode' type='PickList'></field>
	contact.OptionSet.AccountRoleCode = {
		///<field name='Decision_Maker' type='PickListValue'>Decision_Maker = 1</field>
		Decision_Maker: 1,
		///<field name='Employee' type='PickListValue'>Employee = 2</field>
		Employee: 2,
		///<field name='Influencer' type='PickListValue'>Influencer = 3</field>
		Influencer: 3
	};
	///<field name='Address1_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address1_AddressTypeCode = {
		///<field name='Bill_To' type='PickListValue'>Bill_To = 1</field>
		Bill_To: 1,
		///<field name='Ship_To' type='PickListValue'>Ship_To = 2</field>
		Ship_To: 2,
		///<field name='Primary' type='PickListValue'>Primary = 3</field>
		Primary: 3,
		///<field name='Other' type='PickListValue'>Other = 4</field>
		Other: 4
	};
	///<field name='Address1_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address1_FreightTermsCode = {
		///<field name='FOB' type='PickListValue'>FOB = 1</field>
		FOB: 1,
		///<field name='No_Charge' type='PickListValue'>No_Charge = 2</field>
		No_Charge: 2
	};
	///<field name='Address1_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address1_ShippingMethodCode = {
		///<field name='Airborne' type='PickListValue'>Airborne = 1</field>
		Airborne: 1,
		///<field name='DHL' type='PickListValue'>DHL = 2</field>
		DHL: 2,
		///<field name='FedEx' type='PickListValue'>FedEx = 3</field>
		FedEx: 3,
		///<field name='UPS' type='PickListValue'>UPS = 4</field>
		UPS: 4,
		///<field name='Postal_Mail' type='PickListValue'>Postal_Mail = 5</field>
		Postal_Mail: 5,
		///<field name='Full_Load' type='PickListValue'>Full_Load = 6</field>
		Full_Load: 6,
		///<field name='Will_Call' type='PickListValue'>Will_Call = 7</field>
		Will_Call: 7
	};
	///<field name='Address2_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address2_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address2_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address2_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address3_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address3_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address3_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerSizeCode' type='PickList'></field>
	contact.OptionSet.CustomerSizeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerTypeCode' type='PickList'></field>
	contact.OptionSet.CustomerTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='EducationCode' type='PickList'></field>
	contact.OptionSet.EducationCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='FamilyStatusCode' type='PickList'></field>
	contact.OptionSet.FamilyStatusCode = {
		///<field name='Single' type='PickListValue'>Single = 1</field>
		Single: 1,
		///<field name='Married' type='PickListValue'>Married = 2</field>
		Married: 2,
		///<field name='Divorced' type='PickListValue'>Divorced = 3</field>
		Divorced: 3,
		///<field name='Widowed' type='PickListValue'>Widowed = 4</field>
		Widowed: 4
	};
	///<field name='GenderCode' type='PickList'></field>
	contact.OptionSet.GenderCode = {
		///<field name='Male' type='PickListValue'>Male = 1</field>
		Male: 1,
		///<field name='Female' type='PickListValue'>Female = 2</field>
		Female: 2
	};
	///<field name='HasChildrenCode' type='PickList'></field>
	contact.OptionSet.HasChildrenCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='LeadSourceCode' type='PickList'></field>
	contact.OptionSet.LeadSourceCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='PaymentTermsCode' type='PickList'></field>
	contact.OptionSet.PaymentTermsCode = {
		///<field name='Net_30' type='PickListValue'>Net_30 = 1</field>
		Net_30: 1,
		///<field name='_2_10_Net_30' type='PickListValue'>_2_10_Net_30 = 2</field>
		_2_10_Net_30: 2,
		///<field name='Net_45' type='PickListValue'>Net_45 = 3</field>
		Net_45: 3,
		///<field name='Net_60' type='PickListValue'>Net_60 = 4</field>
		Net_60: 4
	};
	///<field name='PreferredAppointmentDayCode' type='PickList'></field>
	contact.OptionSet.PreferredAppointmentDayCode = {
		///<field name='Sunday' type='PickListValue'>Sunday = 0</field>
		Sunday: 0,
		///<field name='Monday' type='PickListValue'>Monday = 1</field>
		Monday: 1,
		///<field name='Tuesday' type='PickListValue'>Tuesday = 2</field>
		Tuesday: 2,
		///<field name='Wednesday' type='PickListValue'>Wednesday = 3</field>
		Wednesday: 3,
		///<field name='Thursday' type='PickListValue'>Thursday = 4</field>
		Thursday: 4,
		///<field name='Friday' type='PickListValue'>Friday = 5</field>
		Friday: 5,
		///<field name='Saturday' type='PickListValue'>Saturday = 6</field>
		Saturday: 6
	};
	///<field name='PreferredAppointmentTimeCode' type='PickList'></field>
	contact.OptionSet.PreferredAppointmentTimeCode = {
		///<field name='Morning' type='PickListValue'>Morning = 1</field>
		Morning: 1,
		///<field name='Afternoon' type='PickListValue'>Afternoon = 2</field>
		Afternoon: 2,
		///<field name='Evening' type='PickListValue'>Evening = 3</field>
		Evening: 3
	};
	///<field name='PreferredContactMethodCode' type='PickList'></field>
	contact.OptionSet.PreferredContactMethodCode = {
		///<field name='Any' type='PickListValue'>Any = 1</field>
		Any: 1,
		///<field name='Email' type='PickListValue'>Email = 2</field>
		Email: 2,
		///<field name='Phone' type='PickListValue'>Phone = 3</field>
		Phone: 3,
		///<field name='Fax' type='PickListValue'>Fax = 4</field>
		Fax: 4,
		///<field name='Mail' type='PickListValue'>Mail = 5</field>
		Mail: 5
	};
	///<field name='ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='StateCode' type='PickList'></field>
	contact.OptionSet.StateCode = {
		///<field name='Active' type='PickListValue'>Active = 0</field>
		Active: 0,
		///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
		Inactive: 1
	};
	///<field name='StatusCode' type='PickList'></field>
	contact.OptionSet.StatusCode = {
		///<field name='Active' type='PickListValue'>Active = 1</field>
		Active: 1,
		///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
		Inactive: 2
	};
	///<field name='TerritoryCode' type='PickList'></field>
	contact.OptionSet.TerritoryCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	return contact;
};
Rocket.FormContactQuickCreate = function (executionContext, defaultWebResourceName) {
	var contact = intellisense.FormQuickCreate;
	contact.Utility = intellisense.Utility;
	///<field name='section' type='Object'></field>
	var section = {
		tab_1_column_1_section_1: intellisense.FormSection,
		tab_1_column_2_section_1: intellisense.FormSection,
		tab_1_column_3_section_1: intellisense.FormSection
	}
	var body = {
		///<field name='Section' type='Object'>A group of sections on a quick create form</field>
		Section: section,
		///<field name='Address1_City' type='String'></field>
		Address1_City: intellisense.FieldString,
		///<field name='Address1_Line1' type='String'></field>
		Address1_Line1: intellisense.FieldString,
		///<field name='Address1_Line2' type='String'></field>
		Address1_Line2: intellisense.FieldString,
		///<field name='Address1_PostalCode' type='String'></field>
		Address1_PostalCode: intellisense.FieldString,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='EMailAddress1' type='String'></field>
		EMailAddress1: intellisense.FieldString,
		///<field name='FirstName' type='String'></field>
		FirstName: intellisense.FieldString,
		///<field name='JobTitle' type='String'></field>
		JobTitle: intellisense.FieldString,
		///<field name='LastName' type='String'></field>
		LastName: intellisense.FieldString,
		///<field name='MobilePhone' type='String'></field>
		MobilePhone: intellisense.FieldString,
		///<field name='ParentCustomerId' type='Lookup'></field>
		ParentCustomerId: intellisense.FieldLookup,
		///<field name='Telephone1' type='String'></field>
		Telephone1: intellisense.FieldString
	}
	contact.Body = body;
	contact.OptionSet = {};
	///<field name='AccountRoleCode' type='PickList'></field>
	contact.OptionSet.AccountRoleCode = {
		///<field name='Decision_Maker' type='PickListValue'>Decision_Maker = 1</field>
		Decision_Maker: 1,
		///<field name='Employee' type='PickListValue'>Employee = 2</field>
		Employee: 2,
		///<field name='Influencer' type='PickListValue'>Influencer = 3</field>
		Influencer: 3
	};
	///<field name='Address1_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address1_AddressTypeCode = {
		///<field name='Bill_To' type='PickListValue'>Bill_To = 1</field>
		Bill_To: 1,
		///<field name='Ship_To' type='PickListValue'>Ship_To = 2</field>
		Ship_To: 2,
		///<field name='Primary' type='PickListValue'>Primary = 3</field>
		Primary: 3,
		///<field name='Other' type='PickListValue'>Other = 4</field>
		Other: 4
	};
	///<field name='Address1_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address1_FreightTermsCode = {
		///<field name='FOB' type='PickListValue'>FOB = 1</field>
		FOB: 1,
		///<field name='No_Charge' type='PickListValue'>No_Charge = 2</field>
		No_Charge: 2
	};
	///<field name='Address1_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address1_ShippingMethodCode = {
		///<field name='Airborne' type='PickListValue'>Airborne = 1</field>
		Airborne: 1,
		///<field name='DHL' type='PickListValue'>DHL = 2</field>
		DHL: 2,
		///<field name='FedEx' type='PickListValue'>FedEx = 3</field>
		FedEx: 3,
		///<field name='UPS' type='PickListValue'>UPS = 4</field>
		UPS: 4,
		///<field name='Postal_Mail' type='PickListValue'>Postal_Mail = 5</field>
		Postal_Mail: 5,
		///<field name='Full_Load' type='PickListValue'>Full_Load = 6</field>
		Full_Load: 6,
		///<field name='Will_Call' type='PickListValue'>Will_Call = 7</field>
		Will_Call: 7
	};
	///<field name='Address2_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address2_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address2_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address2_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address2_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_AddressTypeCode' type='PickList'></field>
	contact.OptionSet.Address3_AddressTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_FreightTermsCode' type='PickList'></field>
	contact.OptionSet.Address3_FreightTermsCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='Address3_ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.Address3_ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerSizeCode' type='PickList'></field>
	contact.OptionSet.CustomerSizeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='CustomerTypeCode' type='PickList'></field>
	contact.OptionSet.CustomerTypeCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='EducationCode' type='PickList'></field>
	contact.OptionSet.EducationCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='FamilyStatusCode' type='PickList'></field>
	contact.OptionSet.FamilyStatusCode = {
		///<field name='Single' type='PickListValue'>Single = 1</field>
		Single: 1,
		///<field name='Married' type='PickListValue'>Married = 2</field>
		Married: 2,
		///<field name='Divorced' type='PickListValue'>Divorced = 3</field>
		Divorced: 3,
		///<field name='Widowed' type='PickListValue'>Widowed = 4</field>
		Widowed: 4
	};
	///<field name='GenderCode' type='PickList'></field>
	contact.OptionSet.GenderCode = {
		///<field name='Male' type='PickListValue'>Male = 1</field>
		Male: 1,
		///<field name='Female' type='PickListValue'>Female = 2</field>
		Female: 2
	};
	///<field name='HasChildrenCode' type='PickList'></field>
	contact.OptionSet.HasChildrenCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='LeadSourceCode' type='PickList'></field>
	contact.OptionSet.LeadSourceCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='PaymentTermsCode' type='PickList'></field>
	contact.OptionSet.PaymentTermsCode = {
		///<field name='Net_30' type='PickListValue'>Net_30 = 1</field>
		Net_30: 1,
		///<field name='_2_10_Net_30' type='PickListValue'>_2_10_Net_30 = 2</field>
		_2_10_Net_30: 2,
		///<field name='Net_45' type='PickListValue'>Net_45 = 3</field>
		Net_45: 3,
		///<field name='Net_60' type='PickListValue'>Net_60 = 4</field>
		Net_60: 4
	};
	///<field name='PreferredAppointmentDayCode' type='PickList'></field>
	contact.OptionSet.PreferredAppointmentDayCode = {
		///<field name='Sunday' type='PickListValue'>Sunday = 0</field>
		Sunday: 0,
		///<field name='Monday' type='PickListValue'>Monday = 1</field>
		Monday: 1,
		///<field name='Tuesday' type='PickListValue'>Tuesday = 2</field>
		Tuesday: 2,
		///<field name='Wednesday' type='PickListValue'>Wednesday = 3</field>
		Wednesday: 3,
		///<field name='Thursday' type='PickListValue'>Thursday = 4</field>
		Thursday: 4,
		///<field name='Friday' type='PickListValue'>Friday = 5</field>
		Friday: 5,
		///<field name='Saturday' type='PickListValue'>Saturday = 6</field>
		Saturday: 6
	};
	///<field name='PreferredAppointmentTimeCode' type='PickList'></field>
	contact.OptionSet.PreferredAppointmentTimeCode = {
		///<field name='Morning' type='PickListValue'>Morning = 1</field>
		Morning: 1,
		///<field name='Afternoon' type='PickListValue'>Afternoon = 2</field>
		Afternoon: 2,
		///<field name='Evening' type='PickListValue'>Evening = 3</field>
		Evening: 3
	};
	///<field name='PreferredContactMethodCode' type='PickList'></field>
	contact.OptionSet.PreferredContactMethodCode = {
		///<field name='Any' type='PickListValue'>Any = 1</field>
		Any: 1,
		///<field name='Email' type='PickListValue'>Email = 2</field>
		Email: 2,
		///<field name='Phone' type='PickListValue'>Phone = 3</field>
		Phone: 3,
		///<field name='Fax' type='PickListValue'>Fax = 4</field>
		Fax: 4,
		///<field name='Mail' type='PickListValue'>Mail = 5</field>
		Mail: 5
	};
	///<field name='ShippingMethodCode' type='PickList'></field>
	contact.OptionSet.ShippingMethodCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='StateCode' type='PickList'></field>
	contact.OptionSet.StateCode = {
		///<field name='Active' type='PickListValue'>Active = 0</field>
		Active: 0,
		///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
		Inactive: 1
	};
	///<field name='StatusCode' type='PickList'></field>
	contact.OptionSet.StatusCode = {
		///<field name='Active' type='PickListValue'>Active = 1</field>
		Active: 1,
		///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
		Inactive: 2
	};
	///<field name='TerritoryCode' type='PickList'></field>
	contact.OptionSet.TerritoryCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	return contact;
}
Rocket.ContactApi = function (entity) {
	return {
		///<field name='AccountId' type='Lookup'>ReadOnly - Edm.Guid</field>
		AccountId: intellisense.EntityValue,
		///<field name='AccountRoleCode' type='OptionSet'>Edm.Int32 - this.OptionSet.AccountRoleCode</field>
		AccountRoleCode: intellisense.EntityValue,
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
		///<field name='Address1_FreightTermsCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address1_FreightTermsCode</field>
		Address1_FreightTermsCode: intellisense.EntityValue,
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
		///<field name='Address1_PrimaryContactName' type='String'>Edm.String</field>
		Address1_PrimaryContactName: intellisense.EntityValue,
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
		///<field name='Address2_FreightTermsCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address2_FreightTermsCode</field>
		Address2_FreightTermsCode: intellisense.EntityValue,
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
		///<field name='Address2_PrimaryContactName' type='String'>Edm.String</field>
		Address2_PrimaryContactName: intellisense.EntityValue,
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
		///<field name='Address3_AddressId' type='Uniqueidentifier'>Edm.Guid</field>
		Address3_AddressId: intellisense.EntityValue,
		///<field name='Address3_AddressTypeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address3_AddressTypeCode</field>
		Address3_AddressTypeCode: intellisense.EntityValue,
		///<field name='Address3_City' type='String'>Edm.String</field>
		Address3_City: intellisense.EntityValue,
		///<field name='Address3_Composite' type='Memo'>ReadOnly - Edm.String</field>
		Address3_Composite: intellisense.EntityValue,
		///<field name='Address3_Country' type='String'>Edm.String</field>
		Address3_Country: intellisense.EntityValue,
		///<field name='Address3_County' type='String'>Edm.String</field>
		Address3_County: intellisense.EntityValue,
		///<field name='Address3_Fax' type='String'>Edm.String</field>
		Address3_Fax: intellisense.EntityValue,
		///<field name='Address3_FreightTermsCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address3_FreightTermsCode</field>
		Address3_FreightTermsCode: intellisense.EntityValue,
		///<field name='Address3_Latitude' type='Double'>Edm.Double</field>
		Address3_Latitude: intellisense.EntityValue,
		///<field name='Address3_Line1' type='String'>Edm.String</field>
		Address3_Line1: intellisense.EntityValue,
		///<field name='Address3_Line2' type='String'>Edm.String</field>
		Address3_Line2: intellisense.EntityValue,
		///<field name='Address3_Line3' type='String'>Edm.String</field>
		Address3_Line3: intellisense.EntityValue,
		///<field name='Address3_Longitude' type='Double'>Edm.Double</field>
		Address3_Longitude: intellisense.EntityValue,
		///<field name='Address3_Name' type='String'>Edm.String</field>
		Address3_Name: intellisense.EntityValue,
		///<field name='Address3_PostalCode' type='String'>Edm.String</field>
		Address3_PostalCode: intellisense.EntityValue,
		///<field name='Address3_PostOfficeBox' type='String'>Edm.String</field>
		Address3_PostOfficeBox: intellisense.EntityValue,
		///<field name='Address3_PrimaryContactName' type='String'>Edm.String</field>
		Address3_PrimaryContactName: intellisense.EntityValue,
		///<field name='Address3_ShippingMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.Address3_ShippingMethodCode</field>
		Address3_ShippingMethodCode: intellisense.EntityValue,
		///<field name='Address3_StateOrProvince' type='String'>Edm.String</field>
		Address3_StateOrProvince: intellisense.EntityValue,
		///<field name='Address3_Telephone1' type='String'>Edm.String</field>
		Address3_Telephone1: intellisense.EntityValue,
		///<field name='Address3_Telephone2' type='String'>Edm.String</field>
		Address3_Telephone2: intellisense.EntityValue,
		///<field name='Address3_Telephone3' type='String'>Edm.String</field>
		Address3_Telephone3: intellisense.EntityValue,
		///<field name='Address3_UPSZone' type='String'>Edm.String</field>
		Address3_UPSZone: intellisense.EntityValue,
		///<field name='Address3_UTCOffset' type='Integer'>Edm.Int32</field>
		Address3_UTCOffset: intellisense.EntityValue,
		///<field name='Aging30' type='Money'>ReadOnly - Edm.Decimal</field>
		Aging30: intellisense.EntityValue,
		///<field name='Aging30_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		Aging30_Base: intellisense.EntityValue,
		///<field name='Aging60' type='Money'>ReadOnly - Edm.Decimal</field>
		Aging60: intellisense.EntityValue,
		///<field name='Aging60_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		Aging60_Base: intellisense.EntityValue,
		///<field name='Aging90' type='Money'>ReadOnly - Edm.Decimal</field>
		Aging90: intellisense.EntityValue,
		///<field name='Aging90_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		Aging90_Base: intellisense.EntityValue,
		///<field name='Anniversary_DateOnly' type='DateOnly'>Edm.Date</field>
		Anniversary_DateOnly: intellisense.EntityValue,
		///<field name='AnnualIncome' type='Money'>Edm.Decimal</field>
		AnnualIncome: intellisense.EntityValue,
		///<field name='AnnualIncome_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		AnnualIncome_Base: intellisense.EntityValue,
		///<field name='AssistantName' type='String'>Edm.String</field>
		AssistantName: intellisense.EntityValue,
		///<field name='AssistantPhone' type='String'>Edm.String</field>
		AssistantPhone: intellisense.EntityValue,
		///<field name='BirthDate_DateOnly' type='DateOnly'>Edm.Date</field>
		BirthDate_DateOnly: intellisense.EntityValue,
		///<field name='Business2' type='String'>Edm.String</field>
		Business2: intellisense.EntityValue,
		///<field name='Callback' type='String'>Edm.String</field>
		Callback: intellisense.EntityValue,
		///<field name='ChildrensNames' type='String'>Edm.String</field>
		ChildrensNames: intellisense.EntityValue,
		///<field name='Company' type='String'>Edm.String</field>
		Company: intellisense.EntityValue,
		///<field name='ContactId' type='Uniqueidentifier'>Edm.Guid</field>
		ContactId: intellisense.EntityValue,
		///<field name='CreatedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name='CreatedByExternalParty' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedByExternalParty: intellisense.EntityValue,
		///<field name='CreatedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='CreatedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name='CreditLimit' type='Money'>Edm.Decimal</field>
		CreditLimit: intellisense.EntityValue,
		///<field name='CreditLimit_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		CreditLimit_Base: intellisense.EntityValue,
		///<field name='CreditOnHold' type='Boolean'>Edm.Boolean</field>
		CreditOnHold: intellisense.EntityValue,
		///<field name='CustomerSizeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.CustomerSizeCode</field>
		CustomerSizeCode: intellisense.EntityValue,
		///<field name='CustomerTypeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.CustomerTypeCode</field>
		CustomerTypeCode: intellisense.EntityValue,
		///<field name='Department' type='String'>Edm.String</field>
		Department: intellisense.EntityValue,
		///<field name='Description' type='Memo'>Edm.String</field>
		Description: intellisense.EntityValue,
		///<field name='DoNotBulkEMail' type='Boolean'>Edm.Boolean</field>
		DoNotBulkEMail: intellisense.EntityValue,
		///<field name='DoNotBulkPostalMail' type='Boolean'>Edm.Boolean</field>
		DoNotBulkPostalMail: intellisense.EntityValue,
		///<field name='DoNotEMail' type='Boolean'>Edm.Boolean</field>
		DoNotEMail: intellisense.EntityValue,
		///<field name='DoNotFax' type='Boolean'>Edm.Boolean</field>
		DoNotFax: intellisense.EntityValue,
		///<field name='DoNotPhone' type='Boolean'>Edm.Boolean</field>
		DoNotPhone: intellisense.EntityValue,
		///<field name='DoNotPostalMail' type='Boolean'>Edm.Boolean</field>
		DoNotPostalMail: intellisense.EntityValue,
		///<field name='DoNotSendMM' type='Boolean'>Edm.Boolean</field>
		DoNotSendMM: intellisense.EntityValue,
		///<field name='EducationCode' type='OptionSet'>Edm.Int32 - this.OptionSet.EducationCode</field>
		EducationCode: intellisense.EntityValue,
		///<field name='EMailAddress1' type='String'>Edm.String</field>
		EMailAddress1: intellisense.EntityValue,
		///<field name='EMailAddress2' type='String'>Edm.String</field>
		EMailAddress2: intellisense.EntityValue,
		///<field name='EMailAddress3' type='String'>Edm.String</field>
		EMailAddress3: intellisense.EntityValue,
		///<field name='EmployeeId' type='String'>Edm.String</field>
		EmployeeId: intellisense.EntityValue,
		///<field name='EntityImageId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		EntityImageId: intellisense.EntityValue,
		///<field name='ExchangeRate' type='Decimal'>ReadOnly - Edm.Decimal</field>
		ExchangeRate: intellisense.EntityValue,
		///<field name='ExternalUserIdentifier' type='String'>Edm.String</field>
		ExternalUserIdentifier: intellisense.EntityValue,
		///<field name='FamilyStatusCode' type='OptionSet'>Edm.Int32 - this.OptionSet.FamilyStatusCode</field>
		FamilyStatusCode: intellisense.EntityValue,
		///<field name='Fax' type='String'>Edm.String</field>
		Fax: intellisense.EntityValue,
		///<field name='FirstName' type='String'>Edm.String</field>
		FirstName: intellisense.EntityValue,
		///<field name='FollowEmail' type='Boolean'>Edm.Boolean</field>
		FollowEmail: intellisense.EntityValue,
		///<field name='FtpSiteUrl' type='String'>Edm.String</field>
		FtpSiteUrl: intellisense.EntityValue,
		///<field name='FullName' type='String'>ReadOnly - Edm.String</field>
		FullName: intellisense.EntityValue,
		///<field name='GenderCode' type='OptionSet'>Edm.Int32 - this.OptionSet.GenderCode</field>
		GenderCode: intellisense.EntityValue,
		///<field name='GovernmentId' type='String'>Edm.String</field>
		GovernmentId: intellisense.EntityValue,
		///<field name='HasChildrenCode' type='OptionSet'>Edm.Int32 - this.OptionSet.HasChildrenCode</field>
		HasChildrenCode: intellisense.EntityValue,
		///<field name='Home2' type='String'>Edm.String</field>
		Home2: intellisense.EntityValue,
		///<field name='ImportSequenceNumber' type='Integer'>Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name='IsAutoCreate' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsAutoCreate: intellisense.EntityValue,
		///<field name='IsBackofficeCustomer' type='Boolean'>Edm.Boolean</field>
		IsBackofficeCustomer: intellisense.EntityValue,
		///<field name='IsPrivate' type='Boolean'>ReadOnly - Edm.Boolean</field>
		IsPrivate: intellisense.EntityValue,
		///<field name='JobTitle' type='String'>Edm.String</field>
		JobTitle: intellisense.EntityValue,
		///<field name='LastName' type='String'>Edm.String</field>
		LastName: intellisense.EntityValue,
		///<field name='LastOnHoldTime_UtcDateAndTime' type='DateTime'>Edm.DateTimeOffset</field>
		LastOnHoldTime_UtcDateAndTime: intellisense.EntityValue,
		///<field name='LastUsedInCampaign_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		LastUsedInCampaign_UtcDateOnly: intellisense.EntityValue,
		///<field name='LeadSourceCode' type='OptionSet'>Edm.Int32 - this.OptionSet.LeadSourceCode</field>
		LeadSourceCode: intellisense.EntityValue,
		///<field name='ManagerName' type='String'>Edm.String</field>
		ManagerName: intellisense.EntityValue,
		///<field name='ManagerPhone' type='String'>Edm.String</field>
		ManagerPhone: intellisense.EntityValue,
		///<field name='MarketingOnly' type='Boolean'>Edm.Boolean</field>
		MarketingOnly: intellisense.EntityValue,
		///<field name='MasterId' type='Lookup'>ReadOnly - Edm.Guid</field>
		MasterId: intellisense.EntityValue,
		///<field name='Merged' type='Boolean'>ReadOnly - Edm.Boolean</field>
		Merged: intellisense.EntityValue,
		///<field name='MiddleName' type='String'>Edm.String</field>
		MiddleName: intellisense.EntityValue,
		///<field name='MobilePhone' type='String'>Edm.String</field>
		MobilePhone: intellisense.EntityValue,
		///<field name='ModifiedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name='ModifiedByExternalParty' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedByExternalParty: intellisense.EntityValue,
		///<field name='ModifiedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
		///<field name='NickName' type='String'>Edm.String</field>
		NickName: intellisense.EntityValue,
		///<field name='NumberOfChildren' type='Integer'>Edm.Int32</field>
		NumberOfChildren: intellisense.EntityValue,
		///<field name='OnHoldTime' type='Integer'>ReadOnly - Edm.Int32</field>
		OnHoldTime: intellisense.EntityValue,
		///<field name='OverriddenCreatedOn_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		OverriddenCreatedOn_UtcDateOnly: intellisense.EntityValue,
		///<field name='OwnerId_systemuser' type='Lookup'></field>
		OwnerId_systemuser: intellisense.EntityValue,
		///<field name='OwnerId_team' type='Lookup'></field>
		OwnerId_team: intellisense.EntityValue,
		///<field name='OwningBusinessUnit' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningBusinessUnit: intellisense.EntityValue,
		///<field name='OwningTeam' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningTeam: intellisense.EntityValue,
		///<field name='OwningUser' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningUser: intellisense.EntityValue,
		///<field name='Pager' type='String'>Edm.String</field>
		Pager: intellisense.EntityValue,
		///<field name='ParentContactId' type='Lookup'>ReadOnly - Edm.Guid</field>
		ParentContactId: intellisense.EntityValue,
		///<field name='ParentCustomerId' type='Lookup'>Edm.Guid</field>
		parentcustomerid_account: intellisense.EntityValue,
		///<field name='ParentCustomerId' type='Lookup'>Edm.Guid</field>
		parentcustomerid_contact: intellisense.EntityValue,
		///<field name='ParticipatesInWorkflow' type='Boolean'>Edm.Boolean</field>
		ParticipatesInWorkflow: intellisense.EntityValue,
		///<field name='PaymentTermsCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PaymentTermsCode</field>
		PaymentTermsCode: intellisense.EntityValue,
		///<field name='PreferredAppointmentDayCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PreferredAppointmentDayCode</field>
		PreferredAppointmentDayCode: intellisense.EntityValue,
		///<field name='PreferredAppointmentTimeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PreferredAppointmentTimeCode</field>
		PreferredAppointmentTimeCode: intellisense.EntityValue,
		///<field name='PreferredContactMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PreferredContactMethodCode</field>
		PreferredContactMethodCode: intellisense.EntityValue,
		///<field name='PreferredSystemUserId' type='Lookup'>Edm.Guid</field>
		PreferredSystemUserId: intellisense.EntityValue,
		///<field name='ProcessId' type='Uniqueidentifier'>Edm.Guid</field>
		ProcessId: intellisense.EntityValue,
		///<field name='Salutation' type='String'>Edm.String</field>
		Salutation: intellisense.EntityValue,
		///<field name='ShippingMethodCode' type='OptionSet'>Edm.Int32 - this.OptionSet.ShippingMethodCode</field>
		ShippingMethodCode: intellisense.EntityValue,
		///<field name='SLAId' type='Lookup'>Edm.Guid</field>
		SLAId: intellisense.EntityValue,
		///<field name='SLAInvokedId' type='Lookup'>ReadOnly - Edm.Guid</field>
		SLAInvokedId: intellisense.EntityValue,
		///<field name='SpousesName' type='String'>Edm.String</field>
		SpousesName: intellisense.EntityValue,
		///<field name='StageId' type='Uniqueidentifier'>Edm.Guid</field>
		StageId: intellisense.EntityValue,
		///<field name='StateCode' type='OptionSet'>Edm.Int32 - this.OptionSet.StateCode</field>
		StateCode: intellisense.EntityValue,
		///<field name='StatusCode' type='OptionSet'>Edm.Int32 - this.OptionSet.StatusCode</field>
		StatusCode: intellisense.EntityValue,
		///<field name='SubscriptionId' type='Uniqueidentifier'>Edm.Guid</field>
		SubscriptionId: intellisense.EntityValue,
		///<field name='Suffix' type='String'>Edm.String</field>
		Suffix: intellisense.EntityValue,
		///<field name='Telephone1' type='String'>Edm.String</field>
		Telephone1: intellisense.EntityValue,
		///<field name='Telephone2' type='String'>Edm.String</field>
		Telephone2: intellisense.EntityValue,
		///<field name='Telephone3' type='String'>Edm.String</field>
		Telephone3: intellisense.EntityValue,
		///<field name='TerritoryCode' type='OptionSet'>Edm.Int32 - this.OptionSet.TerritoryCode</field>
		TerritoryCode: intellisense.EntityValue,
		///<field name='TimeSpentByMeOnEmailAndMeetings' type='String'>ReadOnly - Edm.String</field>
		TimeSpentByMeOnEmailAndMeetings: intellisense.EntityValue,
		///<field name='TimeZoneRuleVersionNumber' type='Integer'>Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
		///<field name='TransactionCurrencyId' type='Lookup'>Edm.Guid</field>
		TransactionCurrencyId: intellisense.EntityValue,
		///<field name='TraversedPath' type='String'>Edm.String</field>
		TraversedPath: intellisense.EntityValue,
		///<field name='UTCConversionTimeZoneCode' type='Integer'>Edm.Int32</field>
		UTCConversionTimeZoneCode: intellisense.EntityValue,
		///<field name='VersionNumber' type='BigInt'>ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name='WebSiteUrl' type='String'>Edm.String</field>
		WebSiteUrl: intellisense.EntityValue,
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
			///<field name='AccountRoleCode' type='PickList'></field>
			AccountRoleCode: {
				///<field name='Decision_Maker' type='PickListValue'>Decision_Maker = 1</field>
				Decision_Maker: 1,
				///<field name='Employee' type='PickListValue'>Employee = 2</field>
				Employee: 2,
				///<field name='Influencer' type='PickListValue'>Influencer = 3</field>
				Influencer: 3
			},
			///<field name='Address1_AddressTypeCode' type='PickList'></field>
			Address1_AddressTypeCode: {
				///<field name='Bill_To' type='PickListValue'>Bill_To = 1</field>
				Bill_To: 1,
				///<field name='Ship_To' type='PickListValue'>Ship_To = 2</field>
				Ship_To: 2,
				///<field name='Primary' type='PickListValue'>Primary = 3</field>
				Primary: 3,
				///<field name='Other' type='PickListValue'>Other = 4</field>
				Other: 4
			},
			///<field name='Address1_FreightTermsCode' type='PickList'></field>
			Address1_FreightTermsCode: {
				///<field name='FOB' type='PickListValue'>FOB = 1</field>
				FOB: 1,
				///<field name='No_Charge' type='PickListValue'>No_Charge = 2</field>
				No_Charge: 2
			},
			///<field name='Address1_ShippingMethodCode' type='PickList'></field>
			Address1_ShippingMethodCode: {
				///<field name='Airborne' type='PickListValue'>Airborne = 1</field>
				Airborne: 1,
				///<field name='DHL' type='PickListValue'>DHL = 2</field>
				DHL: 2,
				///<field name='FedEx' type='PickListValue'>FedEx = 3</field>
				FedEx: 3,
				///<field name='UPS' type='PickListValue'>UPS = 4</field>
				UPS: 4,
				///<field name='Postal_Mail' type='PickListValue'>Postal_Mail = 5</field>
				Postal_Mail: 5,
				///<field name='Full_Load' type='PickListValue'>Full_Load = 6</field>
				Full_Load: 6,
				///<field name='Will_Call' type='PickListValue'>Will_Call = 7</field>
				Will_Call: 7
			},
			///<field name='Address2_AddressTypeCode' type='PickList'></field>
			Address2_AddressTypeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address2_FreightTermsCode' type='PickList'></field>
			Address2_FreightTermsCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address2_ShippingMethodCode' type='PickList'></field>
			Address2_ShippingMethodCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address3_AddressTypeCode' type='PickList'></field>
			Address3_AddressTypeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address3_FreightTermsCode' type='PickList'></field>
			Address3_FreightTermsCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='Address3_ShippingMethodCode' type='PickList'></field>
			Address3_ShippingMethodCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='CustomerSizeCode' type='PickList'></field>
			CustomerSizeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='CustomerTypeCode' type='PickList'></field>
			CustomerTypeCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='EducationCode' type='PickList'></field>
			EducationCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='FamilyStatusCode' type='PickList'></field>
			FamilyStatusCode: {
				///<field name='Single' type='PickListValue'>Single = 1</field>
				Single: 1,
				///<field name='Married' type='PickListValue'>Married = 2</field>
				Married: 2,
				///<field name='Divorced' type='PickListValue'>Divorced = 3</field>
				Divorced: 3,
				///<field name='Widowed' type='PickListValue'>Widowed = 4</field>
				Widowed: 4
			},
			///<field name='GenderCode' type='PickList'></field>
			GenderCode: {
				///<field name='Male' type='PickListValue'>Male = 1</field>
				Male: 1,
				///<field name='Female' type='PickListValue'>Female = 2</field>
				Female: 2
			},
			///<field name='HasChildrenCode' type='PickList'></field>
			HasChildrenCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='LeadSourceCode' type='PickList'></field>
			LeadSourceCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='PaymentTermsCode' type='PickList'></field>
			PaymentTermsCode: {
				///<field name='Net_30' type='PickListValue'>Net_30 = 1</field>
				Net_30: 1,
				///<field name='_2_10_Net_30' type='PickListValue'>_2_10_Net_30 = 2</field>
				_2_10_Net_30: 2,
				///<field name='Net_45' type='PickListValue'>Net_45 = 3</field>
				Net_45: 3,
				///<field name='Net_60' type='PickListValue'>Net_60 = 4</field>
				Net_60: 4
			},
			///<field name='PreferredAppointmentDayCode' type='PickList'></field>
			PreferredAppointmentDayCode: {
				///<field name='Sunday' type='PickListValue'>Sunday = 0</field>
				Sunday: 0,
				///<field name='Monday' type='PickListValue'>Monday = 1</field>
				Monday: 1,
				///<field name='Tuesday' type='PickListValue'>Tuesday = 2</field>
				Tuesday: 2,
				///<field name='Wednesday' type='PickListValue'>Wednesday = 3</field>
				Wednesday: 3,
				///<field name='Thursday' type='PickListValue'>Thursday = 4</field>
				Thursday: 4,
				///<field name='Friday' type='PickListValue'>Friday = 5</field>
				Friday: 5,
				///<field name='Saturday' type='PickListValue'>Saturday = 6</field>
				Saturday: 6
			},
			///<field name='PreferredAppointmentTimeCode' type='PickList'></field>
			PreferredAppointmentTimeCode: {
				///<field name='Morning' type='PickListValue'>Morning = 1</field>
				Morning: 1,
				///<field name='Afternoon' type='PickListValue'>Afternoon = 2</field>
				Afternoon: 2,
				///<field name='Evening' type='PickListValue'>Evening = 3</field>
				Evening: 3
			},
			///<field name='PreferredContactMethodCode' type='PickList'></field>
			PreferredContactMethodCode: {
				///<field name='Any' type='PickListValue'>Any = 1</field>
				Any: 1,
				///<field name='Email' type='PickListValue'>Email = 2</field>
				Email: 2,
				///<field name='Phone' type='PickListValue'>Phone = 3</field>
				Phone: 3,
				///<field name='Fax' type='PickListValue'>Fax = 4</field>
				Fax: 4,
				///<field name='Mail' type='PickListValue'>Mail = 5</field>
				Mail: 5
			},
			///<field name='ShippingMethodCode' type='PickList'></field>
			ShippingMethodCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			},
			///<field name='StateCode' type='PickList'></field>
			StateCode: {
				///<field name='Active' type='PickListValue'>Active = 0</field>
				Active: 0,
				///<field name='Inactive' type='PickListValue'>Inactive = 1</field>
				Inactive: 1
			},
			///<field name='StatusCode' type='PickList'></field>
			StatusCode: {
				///<field name='Active' type='PickListValue'>Active = 1</field>
				Active: 1,
				///<field name='Inactive' type='PickListValue'>Inactive = 2</field>
				Inactive: 2
			},
			///<field name='TerritoryCode' type='PickList'></field>
			TerritoryCode: {
				///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
				Default_Value: 1
			}
		}
	};
};
//{'JsForm':['Contact','Contact Quick Create'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}