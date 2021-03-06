﻿///<reference path='../entities/devkit_WebApi.d.ts' />
describe("devkit_WebApi.test", function () {
    var fakeUrl = "https://pl-dynamicscrm-devkit.crm5.dynamics.com";
    var xhr;

    function ExportContext() {
        Xrm = {};
        Xrm.Page = {};
        Xrm.Page.context = {};
        Xrm.Page.context.getClientUrl = function () {
            return fakeUrl;
        }
    }

    ExportContext();

    RegExp.escape = function (s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    function removeWhitespaces(s) {
        s = s.replace(/\s\s+/g, ' ');
        s = s.replace(/> </g, '><');
        return s;
    }

    function getFromUserId() {
        var fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
            "  <entity name='systemuser'>",
            "    <attribute name='systemuserid'/>",
            "    <filter type='and'>",
            "      <condition attribute='systemuserid' operator='eq-userid'/>",
            "    </filter>",
            "  </entity>",
            "</fetch>",
        ].join("");
        var req = new Rocket.WebApi.RetrieveRequest();
        req.entityName = "systemuser";
        req.fetchXml = fetchXml;
        var res = WebApiClient.Retrieve(req);
        var user = new Rocket.SystemUserApi(res.value[0]);
        return user.SystemUserId.Value;
    }

    function getToContactId() {
        var key = new Rocket.WebApi.AlternateKey("emailaddress1", "someone_a@example.com");
        var req = new Rocket.WebApi.RetrieveRequest();
        req.alternateKey = [key];
        req.entityName = "contact";
        req.queryParams = "?$select=contactid";
        var res = WebApiClient.Retrieve(req);
        console.log(JSON.stringify(res));
        var contact = new Rocket.ContactApi(res);
        return contact.ContactId.Value;
    }

    function getToAccountId() {
        var fetchData = {
            name: "A. Datum Corporation (sample)"
        };
        var fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
            "  <entity name='account'>",
            "    <attribute name='accountid'/>",
            "    <filter type='and'>",
            "      <condition attribute='name' operator='eq' value='", fetchData.name, "'/>",
            "    </filter>",
            "  </entity>",
            "</fetch>",
        ].join("");
        var req = new Rocket.WebApi.RetrieveRequest();
        req.entityName = "account";
        req.fetchXml = fetchXml;
        var res = WebApiClient.Retrieve(req);
        var account = new Rocket.AccountApi(res.value[0]);
        return account.AccountId.Value;
    }

    var defaults = {
        ApiVersion: "9.1",
        ReturnAllPages: true,
        PrettifyErrors: false,
        Async: false
    };

    beforeEach(function () {
        WebApiClient.Configure(defaults);
        //BUG: sinon use setRequestHeader key and value should have, remove this to pass the error
        var if_None_Match = WebApiClient.GetDefaultHeaders().splice(3, 1);
        xhr = sinon.fakeServer.create();
        xhr.autoRespond = true;
    });

    afterEach(function () {
        xhr.restore();
    });

    describe("Retrieve", function () {
        it("Retrieve OptionSet", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#devkit_webapis(devkit_yesandnocalculated,devkit_singleoptionsetcodecalculated,statuscode,devkit_singleoptionsetcode,devkit_name,devkit_webapiid,devkit_yesandno,statecode,devkit_multioptionsetcode)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_name%20last%3d%22OPTIONSET%22%20first%3d%22OPTIONSET%22%20%2f%3e%3cdevkit_webapiid%20last%3d%22%7bD7F649CA-D864-E911-A991-000D3A802AB7%7d%22%20first%3d%22%7bD7F649CA-D864-E911-A991-000D3A802AB7%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "@a.OData.Community.Display.V1.CurrentEntityField": "devkit_linkwebapiid",
                "value": [{
                    "@odata.etag": "W/\"585157\"",
                    "devkit_yesandnocalculated@OData.Community.Display.V1.FormattedValue": "Yes",
                    "devkit_yesandnocalculated": true,
                    "devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "devkit_singleoptionsetcodecalculated": 100000000,
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Active",
                    "statuscode": 1,
                    "devkit_singleoptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "devkit_singleoptionsetcode": 100000000,
                    "devkit_name": "OPTIONSET",
                    "devkit_webapiid": "d7f649ca-d864-e911-a991-000d3a802ab7",
                    "devkit_yesandno@OData.Community.Display.V1.FormattedValue": "Yes",
                    "devkit_yesandno": true,
                    "statecode@OData.Community.Display.V1.FormattedValue": "Active",
                    "statecode": 0,
                    "devkit_multioptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4; Crm 2011; Crm 2013",
                    "devkit_multioptionsetcode": "100000000,100000001,100000002",
                    "a.devkit_multioptionsetcode@OData.Community.Display.V1.AttributeName": "devkit_multioptionsetcode",
                    "a.devkit_multioptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4; Crm 2011; Crm 2013",
                    "a.devkit_multioptionsetcode": "100000000,100000001,100000002",
                    "a.devkit_singleoptionsetcode@OData.Community.Display.V1.AttributeName": "devkit_singleoptionsetcode",
                    "a.devkit_singleoptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "a.devkit_singleoptionsetcode": 100000000,
                    "a.devkit_yesandno@OData.Community.Display.V1.AttributeName": "devkit_yesandno",
                    "a.devkit_yesandno@OData.Community.Display.V1.FormattedValue": "Yes",
                    "a.devkit_yesandno": true,
                    "a.devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.AttributeName": "devkit_singleoptionsetcodecalculated",
                    "a.devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.FormattedValue": "Crm 4",
                    "a.devkit_singleoptionsetcodecalculated": 100000000,
                    "a.statecode@OData.Community.Display.V1.AttributeName": "statecode",
                    "a.statecode@OData.Community.Display.V1.FormattedValue": "Active",
                    "a.statecode": 0,
                    "a.devkit_yesandnocalculated@OData.Community.Display.V1.AttributeName": "devkit_yesandnocalculated",
                    "a.devkit_yesandnocalculated@OData.Community.Display.V1.FormattedValue": "Yes",
                    "a.devkit_yesandnocalculated": true,
                    "a.statuscode@OData.Community.Display.V1.AttributeName": "statuscode",
                    "a.statuscode@OData.Community.Display.V1.FormattedValue": "Active",
                    "a.statuscode": 1
                }]
            };
            var fetchData = {
                devkit_name: "OPTIONSET%"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_name'/>",
                "    <attribute name='devkit_yesandnocalculated'/>",
                "    <attribute name='devkit_yesandno'/>",
                "    <attribute name='statuscode'/>",
                "    <attribute name='statecode'/>",
                "    <attribute name='devkit_singleoptionsetcodecalculated'/>",
                "    <attribute name='devkit_singleoptionsetcode'/>",
                "    <attribute name='devkit_multioptionsetcode'/>",
                "    <attribute name='devkit_webapiid'/>",
                "    <order attribute='devkit_name' descending='false'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "    <link-entity name='devkit_webapi' from='devkit_webapiid' to='devkit_linkwebapiid' visible='false' link-type='outer' alias='a'>",
                "      <attribute name='devkit_singleoptionsetcode'/>",
                "      <attribute name='devkit_multioptionsetcode'/>",
                "      <attribute name='devkit_yesandnocalculated'/>",
                "      <attribute name='devkit_yesandno'/>",
                "      <attribute name='statuscode'/>",
                "      <attribute name='statecode'/>",
                "      <attribute name='devkit_singleoptionsetcodecalculated'/>",
                "    </link-entity>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            expect(webapi.statuscode.Value).toEqual(1);
            expect(webapi.statuscode.FormattedValue).toEqual("Active");
            expect(webapi.statecode.Value).toEqual(0);
            expect(webapi.statecode.FormattedValue).toEqual("Active");
            webapi.devkit_SingleOptionSetCode.
            expect(webapi.devkit_SingleOptionSetCode.Value).toEqual(webapi.OptionSet.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCode.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_SingleOptionSetCodeCalculated.Value).toEqual(webapi.OptionSet.devkit_SingleOptionSetCode.Crm_4);
            expect(webapi.devkit_SingleOptionSetCodeCalculated.FormattedValue).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.Value.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.Value[0]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_4);
            expect(webapi.devkit_MultiOptionSetCode.Value[1]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2011);
            expect(webapi.devkit_MultiOptionSetCode.Value[2]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2013);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue.length).toEqual(3);
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[0]).toEqual("Crm 4");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[1]).toEqual("Crm 2011");
            expect(webapi.devkit_MultiOptionSetCode.FormattedValue[2]).toEqual("Crm 2013");
            expect(webapi.devkit_YesAndNo.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNo.FormattedValue).toEqual("Yes");
            expect(webapi.devkit_YesAndNoCalculated.Value).toBeTruthy();
            expect(webapi.devkit_YesAndNoCalculated.FormattedValue).toEqual("Yes");
            expect(webapi.getAliasedValue("a.devkit_singleoptionsetcode")).toEqual(webapi.OptionSet.devkit_SingleOptionSetCode.Crm_4);
            var multi = webapi.getAliasedValue("a.devkit_multioptionsetcode", true);
            expect(multi.length).toEqual(3);
            expect(multi[0]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_4);
            expect(multi[1]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2011);
            expect(multi[2]).toEqual(webapi.OptionSet.devkit_MultiOptionSetCode.Crm_2013);
            var multi2 = webapi.getAliasedFormattedValue("a.devkit_multioptionsetcode", true);
            expect(multi2.length).toEqual(3);
            expect(multi2[0]).toEqual("Crm 4");
            expect(multi2[1]).toEqual("Crm 2011");
            expect(multi2[2]).toEqual("Crm 2013");
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve DateTime", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#devkit_webapis(devkit_dateonlydateonlyrollup,devkit_dateonlydateonly,devkit_userlocaldateonly,devkit_timezonedateandtimecalculated,devkit_userlocaldateandtimerollup_date,devkit_timezonedateandtimerollup_date,devkit_userlocaldateonlyrollup_state,devkit_userlocaldateonlyrollup_date,devkit_dateonlydateonlyrollup_date,devkit_userlocaldateandtime,devkit_timezonedateonlyrollup_state,devkit_timezonedateonly,devkit_dateonlydateonlyrollup_state,devkit_timezonedateonlyrollup_date,devkit_userlocaldateandtimerollup_state,devkit_userlocaldateandtimecalculated,devkit_webapiid,devkit_userlocaldateandtimerollup,devkit_dateonlydateonlycalculated,devkit_timezonedateandtimerollup,devkit_userlocaldateonlyrollup,devkit_timezonedateonlycalculated,devkit_userlocaldateonlycalculated,devkit_timezonedateonlyrollup,devkit_timezonedateandtime,devkit_timezonedateandtimerollup_state)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_webapiid%20last%3d%22%7bF55A0D1E-286B-E911-A997-000D3A802135%7d%22%20first%3d%22%7bF55A0D1E-286B-E911-A997-000D3A802135%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
                    "@odata.etag": "W/\"585967\"",
                    "devkit_dateonlydateonlyrollup@OData.Community.Display.V1.FormattedValue": "07.04.2019",
                    "devkit_dateonlydateonlyrollup": "2019-04-07",
                    "devkit_dateonlydateonly@OData.Community.Display.V1.FormattedValue": "29.04.2019",
                    "devkit_dateonlydateonly": "2019-04-29",
                    "devkit_userlocaldateonly@OData.Community.Display.V1.FormattedValue": "30.04.2019",
                    "devkit_userlocaldateonly": "2019-04-29T17:00:00Z",
                    "devkit_timezonedateandtimecalculated@OData.Community.Display.V1.FormattedValue": "28.04.2019 03:30 CH",
                    "devkit_timezonedateandtimecalculated": "2019-04-28T15:30:00Z",
                    "devkit_userlocaldateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 04:08 SA",
                    "devkit_userlocaldateandtimerollup_date": "2019-04-30T21:08:14Z",
                    "devkit_timezonedateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_timezonedateandtimerollup_date": "2019-05-01T14:35:49Z",
                    "devkit_userlocaldateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_userlocaldateonlyrollup_state": 1,
                    "devkit_userlocaldateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 03:52 SA",
                    "devkit_userlocaldateonlyrollup_date": "2019-04-30T20:52:27Z",
                    "devkit_dateonlydateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_dateonlydateonlyrollup_date": "2019-05-01T14:35:54Z",
                    "devkit_userlocaldateandtime@OData.Community.Display.V1.FormattedValue": "27.04.2019 02:30 CH",
                    "devkit_userlocaldateandtime": "2019-04-27T07:30:00Z",
                    "devkit_timezonedateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_timezonedateonlyrollup_state": 1,
                    "devkit_timezonedateonly@OData.Community.Display.V1.FormattedValue": "26.04.2019",
                    "devkit_timezonedateonly": "2019-04-26T00:00:00Z",
                    "devkit_dateonlydateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_dateonlydateonlyrollup_state": 1,
                    "devkit_timezonedateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "01.05.2019 09:35 CH",
                    "devkit_timezonedateonlyrollup_date": "2019-05-01T14:35:44Z",
                    "devkit_userlocaldateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_userlocaldateandtimerollup_state": 1,
                    "devkit_userlocaldateandtimecalculated@OData.Community.Display.V1.FormattedValue": "27.04.2019 02:30 CH",
                    "devkit_userlocaldateandtimecalculated": "2019-04-27T07:30:00Z",
                    "devkit_webapiid": "f55a0d1e-286b-e911-a997-000d3a802135",
                    "devkit_userlocaldateandtimerollup@OData.Community.Display.V1.FormattedValue": "08.04.2019 08:30 SA",
                    "devkit_userlocaldateandtimerollup": "2019-04-08T01:30:00Z",
                    "devkit_dateonlydateonlycalculated@OData.Community.Display.V1.FormattedValue": "29.04.2019",
                    "devkit_dateonlydateonlycalculated": "2019-04-29",
                    "devkit_timezonedateandtimerollup@OData.Community.Display.V1.FormattedValue": "10.04.2019 01:30 SA",
                    "devkit_timezonedateandtimerollup": "2019-04-10T01:30:00Z",
                    "devkit_userlocaldateonlyrollup@OData.Community.Display.V1.FormattedValue": "06.04.2019",
                    "devkit_userlocaldateonlyrollup": "2019-04-05T17:00:00Z",
                    "devkit_timezonedateonlycalculated@OData.Community.Display.V1.FormattedValue": "26.04.2019",
                    "devkit_timezonedateonlycalculated": "2019-04-26T00:00:00Z",
                    "devkit_userlocaldateonlycalculated@OData.Community.Display.V1.FormattedValue": "30.04.2019",
                    "devkit_userlocaldateonlycalculated": "2019-04-29T17:00:00Z",
                    "devkit_timezonedateonlyrollup@OData.Community.Display.V1.FormattedValue": "09.04.2019",
                    "devkit_timezonedateonlyrollup": "2019-04-09T00:00:00Z",
                    "devkit_timezonedateandtime@OData.Community.Display.V1.FormattedValue": "28.04.2019 03:30 CH",
                    "devkit_timezonedateandtime": "2019-04-28T15:30:00Z",
                    "devkit_timezonedateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                    "devkit_timezonedateandtimerollup_state": 1
                }]
            };
            var fetchData = {
                devkit_name: "DATETIME"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_dateonlydateonly'/>",
                "    <attribute name='devkit_dateonlydateonlycalculated'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup_state'/>",
                "    <attribute name='devkit_dateonlydateonlyrollup_date'/>",

                "    <attribute name='devkit_userlocaldateonly'/>",
                "    <attribute name='devkit_userlocaldateonlycalculated'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup_state'/>",
                "    <attribute name='devkit_userlocaldateonlyrollup_date'/>",

                "    <attribute name='devkit_userlocaldateandtime'/>",
                "    <attribute name='devkit_userlocaldateandtimecalculated'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup_state'/>",
                "    <attribute name='devkit_userlocaldateandtimerollup_date'/>",

                "    <attribute name='devkit_timezonedateonly'/>",
                "    <attribute name='devkit_timezonedateonlycalculated'/>",
                "    <attribute name='devkit_timezonedateonlyrollup'/>",
                "    <attribute name='devkit_timezonedateonlyrollup_state'/>",
                "    <attribute name='devkit_timezonedateonlyrollup_date'/>",

                "    <attribute name='devkit_timezonedateandtime'/>",
                "    <attribute name='devkit_timezonedateandtimecalculated'/>",
                "    <attribute name='devkit_timezonedateandtimerollup'/>",
                "    <attribute name='devkit_timezonedateandtimerollup_state'/>",
                "    <attribute name='devkit_timezonedateandtimerollup_date'/>",

                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            //date only date only
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnly_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.Value).toEqual("2019-04-29");
            expect(webapi.devkit_DateOnlyDateOnlyCalculated_DateOnly.FormattedValue).toEqual("29.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.Value).toEqual("2019-04-07");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_DateOnly.FormattedValue).toEqual("07.04.2019");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_DateOnlyDateOnlyRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:54Z");
            expect(webapi.devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //user local date only
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnly_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.Value).toEqual("2019-04-29T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyCalculated_UtcDateOnly.FormattedValue).toEqual("30.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.Value).toEqual("2019-04-05T17:00:00Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_UtcDateOnly.FormattedValue).toEqual("06.04.2019");
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateOnlyRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T20:52:27Z");
            expect(webapi.devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 03:52 SA");
            //user local date and time
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTime_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.Value).toEqual("2019-04-27T07:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime.FormattedValue).toEqual("27.04.2019 02:30 CH");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.Value).toEqual("2019-04-08T01:30:00Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_UtcDateAndTime.FormattedValue).toEqual("08.04.2019 08:30 SA");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_UserLocalDateAndTimeRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-04-30T21:08:14Z");
            expect(webapi.devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 04:08 SA");
            //time-zone date only
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnly_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.Value).toEqual("2019-04-26T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly.FormattedValue).toEqual("26.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.Value).toEqual("2019-04-09T00:00:00Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly.FormattedValue).toEqual("09.04.2019");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateOnlyRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:44Z");
            expect(webapi.devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //time-zone date and time
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTime_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.Value).toEqual("2019-04-28T15:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime.FormattedValue).toEqual("28.04.2019 03:30 CH");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.Value).toEqual("2019-04-10T01:30:00Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime.FormattedValue).toEqual("10.04.2019 01:30 SA");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.Value).toEqual(webapi.OptionSet.RollupState.Calculated);
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_State.FormattedValue).toEqual(webapi.OptionSet.RollupState.Calculated.toString());
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.Value).toEqual("2019-05-01T14:35:49Z");
            expect(webapi.devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime.FormattedValue).toEqual("01.05.2019 09:35 CH");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve Number", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#devkit_webapis(devkit_wholenumbernone,_transactioncurrencyid_value,transactioncurrencyid,devkit_webapiid,devkit_wholenumbertimezone,devkit_wholenumberduration,devkit_currency_base,devkit_currency,devkit_decimalnumber,exchangerate,devkit_wholenumberlanguage,devkit_floatingpointnumber)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_webapiid%20last%3d%22%7b9670BBC4-2B6C-E911-A997-000D3A802135%7d%22%20first%3d%22%7b9670BBC4-2B6C-E911-A997-000D3A802135%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
                    "@odata.etag": "W/\"586414\"",
                    "devkit_wholenumbernone@OData.Community.Display.V1.FormattedValue": "1.234",
                    "devkit_wholenumbernone": 1234,
                    "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue": "US Dollar",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "transactioncurrencyid",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "transactioncurrency",
                    "_transactioncurrencyid_value": "08a827ca-9063-e911-a836-000d3a80e227",
                    "devkit_webapiid": "9670bbc4-2b6c-e911-a997-000d3a802135",
                    "devkit_wholenumbertimezone@OData.Community.Display.V1.FormattedValue": "205",
                    "devkit_wholenumbertimezone": 205,
                    "devkit_wholenumberduration@OData.Community.Display.V1.FormattedValue": "480",
                    "devkit_wholenumberduration": 480,
                    "devkit_currency_base@OData.Community.Display.V1.FormattedValue": "123.456,35 $",
                    "devkit_currency_base": 123456.35,
                    "devkit_currency@OData.Community.Display.V1.FormattedValue": "123.456,35 $",
                    "devkit_currency": 123456.35,
                    "devkit_decimalnumber@OData.Community.Display.V1.FormattedValue": "1.234.567,89",
                    "devkit_decimalnumber": 1234567.89,
                    "exchangerate@OData.Community.Display.V1.FormattedValue": "1,0000000000",
                    "exchangerate": 1,
                    "devkit_wholenumberlanguage@OData.Community.Display.V1.FormattedValue": "1.033",
                    "devkit_wholenumberlanguage": 1033,
                    "devkit_floatingpointnumber@OData.Community.Display.V1.FormattedValue": "1.234,57",
                    "devkit_floatingpointnumber": 1234.57
                }]
            };
            var fetchData = {
                devkit_name: "NUMBER"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_wholenumbertimezone'/>",
                "    <attribute name='devkit_wholenumbernone'/>",
                "    <attribute name='devkit_wholenumberlanguage'/>",
                "    <attribute name='devkit_wholenumberduration'/>",
                "    <attribute name='devkit_floatingpointnumber'/>",
                "    <attribute name='exchangerate'/>",
                "    <attribute name='devkit_decimalnumber'/>",
                "    <attribute name='devkit_currency_base'/>",
                "    <attribute name='devkit_currency'/>",
                "    <attribute name='transactioncurrencyid'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            //whole number
            expect(webapi.devkit_WholeNumberNone.Value).toEqual(1234);
            expect(webapi.devkit_WholeNumberNone.FormattedValue).toEqual("1.234");
            expect(webapi.devkit_WholeNumberDuration.Value).toEqual(480);
            expect(webapi.devkit_WholeNumberDuration.FormattedValue).toEqual("480");
            expect(webapi.devkit_WholeNumberLanguage.Value).toEqual(1033);
            expect(webapi.devkit_WholeNumberLanguage.FormattedValue).toEqual("1.033");
            expect(webapi.devkit_WholeNumberTimeZone.Value).toEqual(205);
            expect(webapi.devkit_WholeNumberTimeZone.FormattedValue).toEqual("205");
            //floating point number
            expect(webapi.devkit_FloatingPointNumber.Value).toEqual(1234.57);
            expect(webapi.devkit_FloatingPointNumber.FormattedValue).toEqual("1.234,57");
            //decimal
            expect(webapi.devkit_DecimalNumber.Value).toEqual(1234567.89);
            expect(webapi.devkit_DecimalNumber.FormattedValue).toEqual("1.234.567,89");
            //currency
            expect(webapi.devkit_Currency.Value).toEqual(123456.35);
            expect(webapi.devkit_Currency.FormattedValue).toEqual("123.456,35 $");
            expect(webapi.devkit_currency_Base.Value).toEqual(123456.35);
            expect(webapi.devkit_currency_Base.FormattedValue).toEqual("123.456,35 $");
            expect(webapi.ExchangeRate.Value).toEqual(1);
            expect(webapi.ExchangeRate.FormattedValue).toEqual("1,0000000000");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve String", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#devkit_webapis(devkit_singlelineoftexttickersymbol,devkit_singlelineoftextphone,_ownerid_value,ownerid,devkit_multipleliniesoftext,devkit_singlelineoftextemail,devkit_singlelineoftexturl,devkit_name,devkit_webapiid,devkit_singlelineoftexttextarea,_devkit_linkwebapiid_value,devkit_LinkWebApiId,_devkit_customerid_value,devkit_CustomerId_account,devkit_singlelineoftexttext)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_name%20last%3d%22STRING%22%20first%3d%22STRING%22%20%2f%3e%3cdevkit_webapiid%20last%3d%22%7b3C254671-456D-E911-A98D-000D3A80280E%7d%22%20first%3d%22%7b3C254671-456D-E911-A98D-000D3A80280E%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
                    "@odata.etag": "W/\"588561\"",
                    "devkit_singlelineoftexttickersymbol": "APP",
                    "devkit_singlelineoftextphone": "84 0907952232",
                    "devkit_singlelineoftextemail": "a@a.a",
                    "devkit_singlelineoftexturl": "https://google.com",
                    "devkit_singlelineoftexttextarea": "Single\nline\nof\ntext\ntext\narea",
                    "devkit_singlelineoftexttext": "abcd",
                    "devkit_multipleliniesoftext": "multiple\nlines\nof\ntext",
                    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
                    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                    "_devkit_linkwebapiid_value@OData.Community.Display.V1.FormattedValue": "DATETIME",
                    "_devkit_linkwebapiid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "devkit_LinkWebApiId",
                    "_devkit_linkwebapiid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "devkit_webapi",
                    "_devkit_linkwebapiid_value": "f55a0d1e-286b-e911-a997-000d3a802135",
                    "_devkit_customerid_value@OData.Community.Display.V1.FormattedValue": "A. Datum Corporation (sample)",
                    "_devkit_customerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "devkit_CustomerId_account",
                    "_devkit_customerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                    "_devkit_customerid_value": "928d37ec-9e66-e911-a993-000d3a804bc9",
                    "devkit_name": "STRING",
                    "devkit_webapiid": "3c254671-456d-e911-a98d-000d3a80280e"
                }]
            };
            var fetchData = {
                devkit_name: "STRING"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='devkit_name'/>",
                "    <attribute name='devkit_singlelineoftexturl'/>",
                "    <attribute name='devkit_singlelineoftexttickersymbol'/>",
                "    <attribute name='devkit_singlelineoftexttextarea'/>",
                "    <attribute name='devkit_singlelineoftexttext'/>",
                "    <attribute name='devkit_singlelineoftextphone'/>",
                "    <attribute name='devkit_singlelineoftextemail'/>",
                "    <attribute name='ownerid'/>",
                "    <attribute name='devkit_multipleliniesoftext'/>",
                "    <attribute name='devkit_linkwebapiid'/>",
                "    <attribute name='devkit_customerid'/>",
                "    <attribute name='devkit_webapiid'/>",
                "    <order attribute='devkit_name' descending='false'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            //single line of text
            expect(webapi.devkit_SingleLineofTextText.Value).toEqual("abcd");
            expect(webapi.devkit_SingleLineofTextEmail.Value).toEqual("a@a.a");
            expect(webapi.devkit_SingleLineofTextPhone.Value).toEqual("84 0907952232");
            expect(webapi.devkit_SingleLineofTextTickerSymbol.Value).toEqual("APP");
            expect(webapi.devkit_SingleLineofTextUrl.Value).toEqual("https://google.com");
            expect(webapi.devkit_SingleLineofTextTextArea.Value).toEqual("Single\nline\nof\ntext\ntext\narea");
            //multiple lilnes of text
            expect(webapi.devkit_MultipleLiniesofText.Value).toEqual("multiple\nlines\nof\ntext");
            //loolup
            expect(webapi.devkit_LinkWebApiId.Value).toEqual("f55a0d1e-286b-e911-a997-000d3a802135");
            expect(webapi.devkit_LinkWebApiId.FormattedValue).toEqual("DATETIME");
            expect(webapi.OwnerId_systemuser.Value).toEqual("739d2b22-5f57-42f9-9a17-ebad89799e7e");
            expect(webapi.OwnerId_systemuser.FormattedValue).toEqual("dev kit");
            expect(webapi.OwnerId_team.Value).toBeNull();
            expect(webapi.OwnerId_team.FormattedValue).toEqual("");
            expect(webapi.devkit_CustomerId_account.Value).toEqual("928d37ec-9e66-e911-a993-000d3a804bc9");
            expect(webapi.devkit_CustomerId_account.FormattedValue).toEqual("A. Datum Corporation (sample)");
            expect(webapi.devkit_CustomerId_contact.Value).toBeNull();
            expect(webapi.devkit_CustomerId_contact.FormattedValue).toEqual("");
            //guid
            expect(webapi.devkit_WebApiId.Value).toEqual("3c254671-456d-e911-a98d-000d3a80280e");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve Image", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#devkit_webapis(entityimageid,devkit_webapiid,entityimage,entityimage_url,entityimage_timestamp)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3cdevkit_webapiid%20last%3d%22%7bC9C7D336-456D-E911-A98D-000D3A80280E%7d%22%20first%3d%22%7bC9C7D336-456D-E911-A98D-000D3A80280E%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
                    "@odata.etag": "W/\"588558\"",
                    "entityimageid": "cbc7d336-456d-e911-a98d-000d3a80280e",
                    "devkit_webapiid": "c9c7d336-456d-e911-a98d-000d3a80280e",
                    "entityimage": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACQAJADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKiubmG0t3nuJFjiQZZm7V5xrnjC81CRorN3trUcDacO/uT2+grKrWjTWplUqxprU9J82PzPL3rvPRc81WuNVsLSUxXF5BFIOqu4BrzrwcxbxRAWJLFXySeehpvjJt3ie5H90IP8Ax0Vg8U/Z86XWxi8S/Z86XU9KttQs7xittcxSsBkhGBIFWa8++H9sW1C7uf4Y4gn1JOf6V6DW9Go6kOZm9KbnHmYUUUVqaBRRRQAUUUUAFFFFABRRRQAUhYLjJAycDPeoby8gsLWS5uZAkSDJJ/z1rh9P16fXPGVmzZS3Qt5UXp8p5PvWVSqoNLqzOdVRaXVmZ4q1i51DVJraQ7YLeQokY6ZHGT71gVoa7xr1/wD9d3/nWfXlVG3Jtnl1G3Jtm74O/wCRntfo3/oJpniw7vE96f8AaUf+OineEDjxNaf8C/kah8TEv4mv/wDrrgfkKv8A5c/P9C/+XPz/AEO18DWvkaD5xXDTyFvqBwP5V01VdNthZ6Za2w/5ZxKp+uKtV6lOPLBI9KnHlgkFFFFWWFFFFABRRRQAUUUUAFRzzxW0DzzOEjQbmY9hT2ZUUsxAUDJJ7CvMvFPiM6vP9mtmIsozx28w+p9vSsq1VU436mVWqqcbia/rcmtxzSDK2scqrEh+jcn3NQ+D/wDkaLP/AIH/AOgmqWzHh8vj711jP0X/AOvV/wAG/wDI0Wv+6/8A6Ca82LcqsW/I8+LcqkWyn4gGPEN//wBdmrNrT8Rf8jDf/wDXY1mVnP4mZz+Jm14TOPE1l7sw/wDHTVoWv2/x88R5X7UWb6Lz/SqfhY48TWP++f5Gum8M2fm+LNYvW6RSOi/VmP8AQfrW9KPNGK8zelHmil5nZ0UUV6h6QUUUUAFFFFABRRRQAUUVjeK7mW18OXUkLlHIChh1wSAf0zUylyxbJlLlTZy/i/xL9qd9Nsn/AHKnE0in75H8I9v51x9FFePUqOcuZnkzm5yuzXkUL4Rtzjlr1z/44tWPBn/I0W3sr/8AoJpLxNngzTj/AHriRqXwZ/yM1v8A7r/+gmtI/wASPyNI/wASPyKniT/kY7//AK6n+VZda3ibjxLf/wDXT+grJrKp8bM5/EzW8MHHiSxP/TT+hr0XQLP7NbXMp+9cXMkh+mcD9BXnHhv/AJGOwA/56ivXFUKoVRgDpXbg43Vzswiuri0UUV3HYFFFFABRRRQAUUVS1XU4NJsJLqc8LwqjqzdgKTaSuxNpK7KXiPX49EtBt2vdScRof1J9qqeNJP8AimCRzvdP8a891HUJ9TvpLu4bLueB2UdgPYVreNPG2jL4dtLOK7W5vPkZ4oeduF5yeg5/GuWnKpieeMFfscUsQpRnfRHP02SRIl3SOqL6scCuPu/E17OSIAsCf7PLfmayJZpZ5N80jyP/AHnOTXVQyOrLWrK34s8x1ktj1HWPFmip4Y0yzju/PuImdpI4lJ25PHPT9aw9M+IC6PqK3dvp5mZVYASSbRyMZ4Brh6K9WnlOGi1J3bXn/kJ4mbd1odJqvjXUtU1Ge7MdvCZWyVRScdu5rNbX9Tb/AJeiv+6oH9KzavaZpN1qtwI7dMID88pHyp9f8K6lgsOteRfcZSqSerZ0PhG51W61UXZvZhFbfNnd1bsP616GPEOrA/8AH9IfrisLT7CHTbJLaAfKvJY9WPcmrVaKhSW0V9xzuvUv7smjYTxRq6f8vIb/AHkFaen+LNTuJ1h+xx3LHoI8qf6iqGleGLvUCJJgbe3/ALzD5m+grt7DTbXTYfLtogufvN1Zvqa4cRUw8NFFNnp4Oli6j5nJpf13LEZdo1MiBHI5UHOPxp9FFeWe4gooooAjuLiK1geeeQRxIMsx6AV4z4w8ZR3V4ZJSdqcQWynkD1PpmmfEP4iC+uH0zSJM28Rw0wOQzeo9cV5g7s7s7sWZjkknk100cvlX1q6R7dX/AMA8jF4u75IGjqGt3l+WVn8uE/8ALNDgfj61m0qK0jbY1Ln0UZq9FomqTjKWE+D3ZNo/WvapUoUo8tNWR5spN6soUV0Ft4O1ObmUwwL/ALTbj+QrVg8EWykG4u5ZPUIoUf1rQhzijiquWelX1/g21rI6n+LGF/M8V6LZeHdPjYLa6esjjuVMjfrmuktvDeq3GALUxr6yHaB+FRKpGPxOw488/gi2ee6d4LRGWTUJt+OfKiOB+J/wrqYII4IlhgjVI14VEGBXZ2vglRg3d0T6rEMfqa6Cz0iwsMG3tkVh/GeW/M1yVMdTj8Op1U8tr1Pj0RxGn+GdQviGaPyIv78nGfoK6zTPDdjp+1yvnTDne46fQVs0VwVcXUqabI9ShgKNHW135hRRRXKdoUUUUAFRXNtDeW0ltcJvhlUq65IyD24rhvHfjnUvDWtafpmmWUFxLdpuHmE5JLbQBgiqJ8UfElVLHwnCQOTg5P8A6FW8aE2lK6V/MwlXgm42bt5G+/w08JscrpaJ/usf601fhvoCf6uAL77FJ/lTvA/jeLxfazrJbG1vrUgTQ5yMHoQfw6HpWh4v8SR+FfDs2pMiySAhIYmbG9z0H5ZP4VftMRGfJd3MnRw0oc/KrFNPA9jGMJcSqPRVUf0qUeC7D+Ke4P4j/Cua8FfEq713Xv7I1exitJZYvMgZMjdwCAQfVTkH2r0DUbo2Ol3d4qBzBC8oUnGdqk4/SqqVcRCXLJkU8NhZx5oxMuPwlpKdY5H/AN6Q/wBKuxaHpkP3LKH8Vz/OvKLT4q+L9QjaWx8OLcxBtpaC3lcA+mR3qx/wsbx3/wBClJ/4CTVUqWIejl+IoTwsdYx/A9dSNIl2xoqD0UYp1eNS/FXxVZ3VvFf6DFaCdwq+dDIm7kA4z1613nj7xTceEdAjv7a3jnlkuFhAkJwMhjnj/d/WsJYeopJPqdMcRTcW1sjqaK8utfGHxDvbSK6tvC9vJDMgeNw3DKeh+9Wj4Y+IV5feIm8PeINL+waif9XtJwxxnBB6ccg5INDw80m9HbzBYiDaWqv5HoFFcv4z8b2Xg+zjMkZuL2cHyLdTjdjuT2FcxH4i+JtzCLyHw7aJAw3LE/DkfQtn9KUaEpR5tl5jlXjF8u78j0+iuJ8GfEGPxHdy6Vf2bWGrQ53QnOGx1xnkEehp/jPx/D4Zni06ztWv9Wnxst1zhcnAzjkk9gKXsKnPyW1H7aHJz30OzorzFvEHxOhhN2/h20aEDcYl+/j6bs10fgvxxaeL7eVBEba/g/11uxzgeoPcfypyoSjHm3XkKNeMpcuz8zhPiv8Aaf8AhYGg/Ytv2ryk8nf03+acZ9s1tyf8LY8tsHS8442hc/hmrnjzwPqfiPWtP1TSr2G3ntU25lzwQ25SOD6ms/8A4Rf4lEEHxXCMjBP+VrqjOLpxV1p3OWUJqpJ2evYo/Bbyhd64Ljzf7T3r5u/ptyf13Zz+FZXxV1631PxhaaQ7ytYWDD7SIRklmwWwOhIXj6k16L4K8Ep4Qsrkm6+1ahdcyzMuF4zgDvjJ9eao+CPAtzoGq6lqurzwXV9dEhXjBIAJy3UdScflS9tTVWVXfsP2NR0o0tu55p4w8U6bfazpOsaBbXdpcWIVT50QUEKRs6E+4PtXs91qUOseArrUbdgY7jT5JBg9Mocj6g8Vd1vRLXXNFu9NnRQlxGV3BeVPYj6HBrm/CXhHVNF8J6joN9dwSRzB1t5I8nYHUg5B9+fxNRKpTnBdGvyNIU5wm+qf5mX8FP8AkULv/r8b/wBAWumtdTvJPGt1YPNm1SPcse0cHA79e9Vvh94Wu/CWhz2N5NDK73BlDRZxjaB3+lTW1ldR+PLq6aCQW7xfLLt+U8Dv+FcmMlzVbx2uOEZRpwRxXxm/5Cvhr/rpJ/6FHWp8a/8AkTrT/r+T/wBAetHx94LvPFdzpM9ncwxGydiyy5+YEqeCP939avePvC1x4t8PpYW08cMsdwsymQHDYDDHHT736V2QqQXs7va9yJ05v2llvaxx+gSfEv8A4R/T/wCzotLNl9nTyDJjdsxxnnrisjQPt5+MsR8VhhqW0+UI8bN2z5f+A4z07/jW5a+DviJZWkVrb+JreOCJQiIucKB0H3a1PC/w9u7HxC3iHxBqf2/U/wCDYCFU4xknvxwBgAVo6kIqTutU9tzNU5ycVZ6d9jC+IuP+Fp+Fd2NvmQZz0x51eu1y/jPwTZeMLSMSSNb3kAPkXCjOM9iO44rmI/DnxNtbf7FB4ktXgA2rK/LgfUqT+tYPlqwiuazXc3XNSnJ8t0+xSOP+Ghjsx/qxnH/XCm6h/wAnA2mcfdXGf+uRrqfBvw+i8N3cmqX149/q0oIaZs4XPXGeST6mneM/AEHieeLULW6ax1WEAJOucMAcjOOcj1Fae2p89r6ctrmfsp8l7a817HZ15H4G/wCSxeJtmNmZ/u9P9aKuv4e+J00Bs5PEdosJG0yrw+PqEz+tdL4M8D2fhCCV1la5v5wPOuGGM98Adhn86zXLShJc12+xo+arOL5bJdzqqKKK5TqCiiigAooooAKKKKACua8b67Jomg4tGcX93ILe28tC7BjyWCjJOFBP5V0tV5bG1nu7e6lgR7i33eTIw5TcMHH1FVBpSuyZptWR57B4pvR4K8SW5ubsahpkbNBcXERjlkib7jlSByOR07Z71LrGrXw8RRQNLrT266VFcMmm7chizZZs+wruLrSNOvpJZLqyhleWE28jOuS0ZOdp9s81LHYWsV19pjgRZvKEO8DnYDkL9BW3tYbpGXsp2tc4Wz1vVjo/he5ub07b3VNm/K7pLcq5USY43cDOK1YNZlOt+LI3v18m0jiMC71xFmIk4/H1rcbQdJfTW05tPtzZM5cwFBt3E5Jx25qj/wAIR4Y2xj+w7LEZyP3fvnn1/Gj2lN3uv6vcOSatZ/1axyeoeJb9vDnhzT47y9j1C9tVubq5t4DLIiBeu0An5mIHT1q3F4i1S88JWniO1dzcaYWj1OxcbBKF4k4P3WAG4flXbxafZw3bXcVtGlw8axNIq4JRei/QU3+y7DbeL9ki23v/AB8jbxLxt+b144o9rD+UFSn3OLuX8RvoFvqMuoeVPqFyjtax3CRlICCViiZuN+MZPU89KveFdQl/ty70u5n1NZUgWYW1+0cpAJI3CRCfT7prprrS7C9sBYXVpDNagBRFIgKgDpj6VFpmh6XoyuNNsYLbzPvmNcFvqeppOrFxasNU5KSdz//Z",
                    "entityimage_url": "/Image/download.aspx?Entity=devkit_webapi&Attribute=entityimage&Id=c9c7d336-456d-e911-a98d-000d3a80280e&Timestamp=636924447719637143",
                    "entityimage_timestamp@OData.Community.Display.V1.FormattedValue": "636.924.447.719.637.000",
                    "entityimage_timestamp": 636924447719637100
                }]
            };
            var fetchData = {
                devkit_name: "IMAGE"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='devkit_webapi'>",
                "    <attribute name='entityimage'/>",
                "    <attribute name='entityimageid'/>",
                "    <attribute name='entityimage_url'/>",
                "    <attribute name='entityimage_timestamp'/>",
                "    <filter type='and'>",
                "      <condition attribute='devkit_name' operator='eq' value='", fetchData.devkit_name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "devkit_webapi";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res.value[0]);
            //image
            expect(webapi.EntityImageId.Value).toEqual("cbc7d336-456d-e911-a98d-000d3a80280e");
            expect(webapi.EntityImage.Value).toStartsWith("/9j/4AAQSkZJRgABAQEAYABgAAD");
            expect(webapi.EntityImage_URL.Value).toEqual("/Image/download.aspx?Entity=devkit_webapi&Attribute=entityimage&Id=c9c7d336-456d-e911-a98d-000d3a80280e&Timestamp=636924447719637143");
            expect(webapi.EntityImage_Timestamp.Value).toEqual(636924447719637100);
            expect(webapi.EntityImage_Timestamp.FormattedValue).toEqual("636.924.447.719.637.000");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve PartyList", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#emails(subject,prioritycode,statuscode,modifiedon,activityid,email_activity_parties)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3csubject%20last%3d%22EMAIL%22%20first%3d%22EMAIL%22%20%2f%3e%3cactivityid%20last%3d%22%7bDF6BEC1B-C26D-E911-A98D-000D3A80280E%7d%22%20first%3d%22%7bDF6BEC1B-C26D-E911-A98D-000D3A80280E%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
                    "@odata.etag": "W/\"591128\"",
                    "subject": "EMAIL",
                    "prioritycode@OData.Community.Display.V1.FormattedValue": "Normal",
                    "prioritycode": 1,
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Draft",
                    "statuscode": 1,
                    "modifiedon@OData.Community.Display.V1.FormattedValue": "03.05.2019 11:40 CH",
                    "modifiedon": "2019-05-03T16:40:20Z",
                    "activityid": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                    "email_activity_parties": [{
                        "@odata.etag": "W/\"591126\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "35",
                        "addressusedemailcolumnnumber": 35,
                        "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotemail": false,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "donotfax@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotfax": false,
                        "addressused": "someone9@example.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "A. Datum Corporation (sample)",
                        "_partyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "partyid_account",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                        "_partyid_value": "928d37ec-9e66-e911-a993-000d3a804bc9",
                        "donotphone@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotphone": false,
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "To Recipient",
                        "participationtypemask": 2,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotpostalmail": false,
                        "activitypartyid": "e16bec1b-c26d-e911-a98d-000d3a80280e"
                    }, {
                        "@odata.etag": "W/\"591127\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "35",
                        "addressusedemailcolumnnumber": 35,
                        "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotemail": false,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "donotfax@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotfax": false,
                        "addressused": "someone8@example.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "Alpine Ski House (sample)",
                        "_partyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "partyid_account",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                        "_partyid_value": "908d37ec-9e66-e911-a993-000d3a804bc9",
                        "donotphone@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotphone": false,
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "To Recipient",
                        "participationtypemask": 2,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Allow",
                        "donotpostalmail": false,
                        "activitypartyid": "e26bec1b-c26d-e911-a98d-000d3a80280e"
                    }, {
                        "@odata.etag": "W/\"591125\"",
                        "addressusedemailcolumnnumber@OData.Community.Display.V1.FormattedValue": "15",
                        "addressusedemailcolumnnumber": 15,
                        "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
                        "instancetypecode": 0,
                        "addressused": "devkit@crmgridplus.com",
                        "_activityid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "activityid_activitypointer",
                        "_activityid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "activitypointer",
                        "_activityid_value": "df6bec1b-c26d-e911-a98d-000d3a80280e",
                        "_partyid_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                        "_partyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_partyid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "participationtypemask@OData.Community.Display.V1.FormattedValue": "Sender",
                        "participationtypemask": 1,
                        "ispartydeleted@OData.Community.Display.V1.FormattedValue": "No",
                        "ispartydeleted": false,
                        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                        "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                        "activitypartyid": "e06bec1b-c26d-e911-a98d-000d3a80280e"
                    }]
                }]
            };
            var fetchData = {
                subject: "EMAIL"
            };
            var fetchXml = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='email'>",
                "    <attribute name='subject'/>",
                "    <attribute name='regardingobjectid'/>",
                "    <attribute name='from'/>",
                "    <attribute name='to'/>",
                "    <attribute name='prioritycode'/>",
                "    <attribute name='statuscode'/>",
                "    <attribute name='modifiedon'/>",
                "    <attribute name='activityid'/>",
                "    <order attribute='subject' descending='false'/>",
                "    <filter type='and'>",
                "      <condition attribute='subject' operator='eq' value='", fetchData.subject, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            fetchXml = removeWhitespaces(fetchXml);
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/emails?fetchXml=") + escape(fetchXml);
            xhr.respondWith("GET", RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var req = new Rocket.WebApi.RetrieveRequest();
            req.entityName = "email";
            req.fetchXml = fetchXml;
            req.returnAllPages = true;
            req.async = false;
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.EmailApi(res.value[0]);
            var ActivityParties = webapi.ActivityParties;
            var party0 = new Rocket.ActivityPartyApi(ActivityParties[0]);
            expect(party0.ParticipationTypeMask.Value).toEqual(party0.OptionSet.ParticipationTypeMask.To_Recipient);
            expect(party0.partyid_account.FormattedValue).toEqual("A. Datum Corporation (sample)");
            expect(party0.AddressUsed.Value).toEqual("someone9@example.com");
            var party2 = new Rocket.ActivityPartyApi(ActivityParties[2]);
            expect(party2.partyid_systemuser.FormattedValue).toEqual("dev kit");
            //others
            expect(webapi["@odata.etag"]).not.toBeUndefined();
            expect(res.value.length).toBeGreaterThan(0);
            expect(res["@odata.context"]).toStartsWith(fakeUrl);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcount"]).toEqual(-1);
            expect(res["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.morerecords"]).toBeFalsy();
            expect(res["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]).not.toBeNull();
            expect(res["@odata.nextLink"]).toBeUndefined();
            expect(res["@odata.count"]).toBeUndefined();
        });
        it("Retrieve Alternate Key", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#devkit_webapis/$entity",
                "@odata.etag": "W/\"596155\"",
                "devkit_singleoptionsetcodecalculated@OData.Community.Display.V1.FormattedValue": "Dynamics 365",
                "devkit_singleoptionsetcodecalculated": 100000005,
                "statecode@OData.Community.Display.V1.FormattedValue": "Active",
                "statecode": 0,
                "devkit_name": "OPTIONSET - INSERT",
                "statuscode@OData.Community.Display.V1.FormattedValue": "Active",
                "statuscode": 1,
                "devkit_dateonlydateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "04.05.2019 06:05 CH",
                "devkit_dateonlydateonlyrollup_date": "2019-05-04T11:05:11Z",
                "devkit_yesandno@OData.Community.Display.V1.FormattedValue": "No",
                "devkit_yesandno": false,
                "devkit_alternatekey": "KEY-0001",
                "createdon@OData.Community.Display.V1.FormattedValue": "04.05.2019 06:05 CH",
                "createdon": "2019-05-04T11:05:11Z",
                "devkit_timezonedateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                "devkit_timezonedateonlyrollup_state": 1,
                "devkit_userlocaldateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "04.05.2019 06:05 CH",
                "devkit_userlocaldateandtimerollup_date": "2019-05-04T11:05:11Z",
                "devkit_userlocaldateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                "devkit_userlocaldateonlyrollup_state": 1,
                "devkit_singleoptionsetcode@OData.Community.Display.V1.FormattedValue": "Dynamics 365",
                "devkit_singleoptionsetcode": 100000005,
                "devkit_dateonlydateonlyrollup_state@OData.Community.Display.V1.FormattedValue": "1",
                "devkit_dateonlydateonlyrollup_state": 1,
                "_ownerid_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
                "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "modifiedon@OData.Community.Display.V1.FormattedValue": "04.05.2019 09:07 CH",
                "modifiedon": "2019-05-04T14:07:08Z",
                "devkit_multioptionsetcode@OData.Community.Display.V1.FormattedValue": "Crm, 2015; Crm 2016",
                "devkit_multioptionsetcode": "100000003,100000004",
                "versionnumber@OData.Community.Display.V1.FormattedValue": "596.155",
                "versionnumber": 596155,
                "devkit_yesandnocalculated@OData.Community.Display.V1.FormattedValue": "No",
                "devkit_yesandnocalculated": false,
                "devkit_userlocaldateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                "devkit_userlocaldateandtimerollup_state": 1,
                "devkit_webapiid": "f4378d7b-5c6e-e911-a991-000d3a802ab7",
                "devkit_timezonedateandtimerollup_date@OData.Community.Display.V1.FormattedValue": "04.05.2019 06:05 CH",
                "devkit_timezonedateandtimerollup_date": "2019-05-04T11:05:11Z",
                "_modifiedby_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                "_modifiedby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "devkit_timezonedateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "04.05.2019 06:05 CH",
                "devkit_timezonedateonlyrollup_date": "2019-05-04T11:05:11Z",
                "devkit_timezonedateandtimerollup_state@OData.Community.Display.V1.FormattedValue": "1",
                "devkit_timezonedateandtimerollup_state": 1,
                "devkit_userlocaldateonlyrollup_date@OData.Community.Display.V1.FormattedValue": "04.05.2019 06:05 CH",
                "devkit_userlocaldateonlyrollup_date": "2019-05-04T11:05:11Z",
                "_createdby_value@OData.Community.Display.V1.FormattedValue": "dev kit",
                "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                "_createdby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "_owningbusinessunit_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "owningbusinessunit",
                "_owningbusinessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname": "businessunit",
                "_owningbusinessunit_value": "3394d17f-8b63-e911-a836-000d3a80e227",
                "_owninguser_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                "_owninguser_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e"
            }
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis(devkit_alternatekey='KEY-0001')");
            xhr.respondWith("GET", new RegExp(url),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var key = new Rocket.WebApi.AlternateKey("devkit_alternatekey", "KEY-0001");
            var req = new Rocket.WebApi.RetrieveRequest();
            req.alternateKey = [key];
            req.entityName = "devkit_webapi";
            var res = WebApiClient.Retrieve(req);
            //result
            var webapi = new Rocket.devkit_WebApiApi(res);
            expect(webapi.devkit_Name.Value).toEqual("OPTIONSET - INSERT");
        });
    });

    describe("Insert", function () {
        it("Insert name", function () {
            //setup
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#devkit_webapis/$entity",
                "@odata.etag": "W/\"596043\"",
                "devkit_singleoptionsetcodecalculated": 100000005,
                "statecode": 0,
                "devkit_name": "OPTIONSET - INSERT",
                "statuscode": 1,
                "devkit_dateonlydateonlyrollup_date": "2019-05-04T11:05:11Z",
                "devkit_yesandno": false,
                "createdon": "2019-05-04T11:05:11Z",
                "devkit_timezonedateonlyrollup_state": 1,
                "devkit_userlocaldateandtimerollup_date": "2019-05-04T11:05:11Z",
                "devkit_userlocaldateonlyrollup_state": 1,
                "devkit_singleoptionsetcode": 100000005,
                "devkit_dateonlydateonlyrollup_state": 1,
                "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "modifiedon": "2019-05-04T11:05:11Z",
                "devkit_multioptionsetcode": "100000003,100000004",
                "versionnumber": 596043,
                "devkit_yesandnocalculated": false,
                "devkit_userlocaldateandtimerollup_state": 1,
                "devkit_webapiid": "f4378d7b-5c6e-e911-a991-000d3a802ab7",
                "devkit_timezonedateandtimerollup_date": "2019-05-04T11:05:11Z",
                "_modifiedby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "devkit_timezonedateonlyrollup_date": "2019-05-04T11:05:11Z",
                "devkit_timezonedateandtimerollup_state": 1,
                "devkit_userlocaldateonlyrollup_date": "2019-05-04T11:05:11Z",
                "_createdby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "_owningbusinessunit_value": "3394d17f-8b63-e911-a836-000d3a80e227",
                "_owninguser_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e"
            }
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/devkit_webapis");
            xhr.respondWith("POST", url,
                [201, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var api = new Rocket.devkit_WebApiApi();
            api.devkit_Name.Value = "OPTIONSET - INSERT";
            api.devkit_SingleOptionSetCode.Value = api.OptionSet.devkit_SingleOptionSetCode.Dynamics_365;
            api.devkit_MultiOptionSetCode.Value = [api.OptionSet.devkit_MultiOptionSetCode.Crm_2015, api.OptionSet.devkit_MultiOptionSetCode.Crm_2016];
            api.devkit_YesAndNo.Value = false;

            var req = new Rocket.WebApi.CreateRequest();
            req.async = false;
            req.entity = api.Entity;
            req.entityName = api.EntityName;
            var res = WebApiClient.Create(req);
            //result
            expect(JSON.stringify(api.Entity)).toEqual('{"devkit_name":"OPTIONSET - INSERT","devkit_singleoptionsetcode":100000005,"devkit_multioptionsetcode":"100000003,100000004","devkit_yesandno":false}');
        });

        it("Insert with Activity Party", function () {
            //setup fromUserId
            var dataFromUserId = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#systemusers(systemuserid,ownerid)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3csystemuserid%20last%3d%22%7b739D2B22-5F57-42F9-9A17-EBAD89799E7E%7d%22%20first%3d%22%7b739D2B22-5F57-42F9-9A17-EBAD89799E7E%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
                    "@odata.etag": "W/\"565063\"",
                    "systemuserid": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                    "ownerid": "739d2b22-5f57-42f9-9a17-ebad89799e7e"
                }]
            }
            var fetchXmlFromUserId = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='systemuser'>",
                "    <attribute name='systemuserid'/>",
                "    <filter type='and'>",
                "      <condition attribute='systemuserid' operator='eq-userid'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            var urlFromUserId = RegExp.escape(fakeUrl + "/api/data/v9.1/systemusers?fetchXml=") + escape(fetchXmlFromUserId);
            xhr.respondWith("GET", RegExp(urlFromUserId),
                [200, { "Content-Type": "application/json" }, JSON.stringify(dataFromUserId)]
            );
            //-- setup toContactId
            var dataToContactId = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#contacts(contactid)/$entity",
                "@odata.etag": "W/\"568359\"",
                "contactid": "968d37ec-9e66-e911-a993-000d3a804bc9"
            }
            var urlToContactId = RegExp.escape(fakeUrl + "/api/data/v9.1/contacts(emailaddress1='someone_a@example.com')?$select=contactid");
            xhr.respondWith("GET", RegExp(urlToContactId),
                [200, { "Content-Type": "application/json" }, JSON.stringify(dataToContactId)]
            );
            //-- setup toAccountId
            var dataToAccountId = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#accounts(accountid)",
                "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
                "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
                "@Microsoft.Dynamics.CRM.morerecords": false,
                "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": "<cookie pagenumber=\"1\" pagingcookie=\"%3ccookie%20page%3d%221%22%3e%3caccountid%20last%3d%22%7b928D37EC-9E66-E911-A993-000D3A804BC9%7d%22%20first%3d%22%7b928D37EC-9E66-E911-A993-000D3A804BC9%7d%22%20%2f%3e%3c%2fcookie%3e\" istracking=\"False\" />",
                "value": [{
                    "@odata.etag": "W/\"568808\"",
                    "accountid": "928d37ec-9e66-e911-a993-000d3a804bc9"
                }]
            }
            var fetchData = {
                name: "A. Datum Corporation (sample)"
            };
            var fetchXmlToAccountId = [
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                "  <entity name='account'>",
                "    <attribute name='accountid'/>",
                "    <filter type='and'>",
                "      <condition attribute='name' operator='eq' value='", fetchData.name, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>",
            ].join("");
            var urlToAccountId = RegExp.escape(fakeUrl + "/api/data/v9.1/accounts?fetchXml=") + escape(fetchXmlToAccountId);
            xhr.respondWith("GET", RegExp(urlToAccountId),
                [200, { "Content-Type": "application/json" }, JSON.stringify(dataToAccountId)]
            );
            // setup email
            var dataEmail = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#emails/$entity",
                "@odata.etag": "W/\"668705\"",
                "notifications": 0,
                "isunsafe": 0,
                "correlationmethod": 0,
                "statuscode": 1,
                "description": "EMAIL BODY",
                "isemailfollowed": false,
                "createdon": "2019-05-06T08:17:39Z",
                "attachmentcount": 0,
                "followemailuserpreference": false,
                "statecode": 0,
                "isbilled": false,
                "subject": "EMAIL SUBJECT",
                "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "deliveryreceiptrequested": false,
                "directioncode": true,
                "compressed": false,
                "modifiedon": "2019-05-06T08:17:39Z",
                "emailremindertype": 0,
                "versionnumber": 668705,
                "prioritycode": 2,
                "_owningbusinessunit_value": "3394d17f-8b63-e911-a836-000d3a80e227",
                "isregularactivity": true,
                "isemailreminderset": false,
                "_modifiedby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "readreceiptrequested": false,
                "activitytypecode": "email",
                "_regardingobjectid_value": "928d37ec-9e66-e911-a993-000d3a804bc9",
                "sender": "devkit@crmgridplus.com",
                "isworkflowcreated": false,
                "deliveryprioritycode": 1,
                "_createdby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "emailreminderstatus": 0,
                "torecipients": "someone_a@example.com;someone9@example.com;",
                "_owninguser_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "activityid": "2d65ef68-d76f-e911-a998-000d3a802135"
            }
            var url = RegExp.escape(fakeUrl + "/api/data/v9.1/emails");
            xhr.respondWith("POST", url,
                [201, { "Content-Type": "application/json" }, JSON.stringify(dataEmail)]
            );
            var sendData = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#Microsoft.Dynamics.CRM.SendEmailResponse",
                "Subject": "EMAIL SUBJECT [DEVKIT]"
            }
            var urlSend = RegExp.escape(fakeUrl + "/api/data/v9.1/emails(2d65ef68-d76f-e911-a998-000d3a802135)/Microsoft.Dynamics.CRM.SendEmail()");
            xhr.respondWith("POST", urlSend,
                [201, { "Content-Type": "application/json" }, JSON.stringify(sendData)]
            );
            //run
            var fromUserId = getFromUserId();
            var toContactId = getToContactId();
            var toAccountId = getToAccountId();

            var from = new Rocket.ActivityPartyApi();
            from.ParticipationTypeMask.Value = from.OptionSet.ParticipationTypeMask.Sender;
            from.partyid_systemuser.Value = fromUserId;
            var to1 = new Rocket.ActivityPartyApi();
            to1.ParticipationTypeMask.Value = to1.OptionSet.ParticipationTypeMask.To_Recipient;
            to1.partyid_contact.Value = toContactId;
            var to2 = new Rocket.ActivityPartyApi();
            to2.ParticipationTypeMask.Value = to2.OptionSet.ParticipationTypeMask.To_Recipient;
            to2.partyid_account.Value = toAccountId;

            var email = new Rocket.EmailApi();
            email.ActivityParties = [from.Entity, to1.Entity, to2.Entity];
            email.Subject.Value = "EMAIL SUBJECT";
            email.Description.Value = "EMAIL BODY";
            email.regardingobjectid_account_email.Value = toAccountId;
            email.PriorityCode.Value = email.OptionSet.PriorityCode.High;

            var req = new Rocket.WebApi.CreateRequest();
            req.entityName = email.EntityName;
            req.entity = email.Entity;

            var res = WebApiClient.Create(req);
            var email = new Rocket.EmailApi(res);
            //send email
            var customRequest = new Rocket.WebApi.CustomRequest();
            customRequest.method = "POST";
            customRequest.async = false;
            customRequest.bound = true;
            customRequest.entityId = email.ActivityId.Value;
            customRequest.entityName = email.EntityName;
            customRequest.name = "SendEmail";
            customRequest.payload = {
                IssueSend: true,
                TrackingToken: "[DEVKIT]"
            }
            var res2 = WebApiClient.Execute(customRequest)
            //result
            expect(email.Subject.Value).toEqual("EMAIL SUBJECT");
            expect(email.Description.Value).toEqual("EMAIL BODY");
            expect(email.StateCode.Value).toEqual(email.OptionSet.StateCode.Open);
            expect(email.StatusCode.Value).toEqual(email.OptionSet.StatusCode.Draft);
            expect(email.PriorityCode.Value).toEqual(email.OptionSet.PriorityCode.High);
            expect(email.ToRecipients.Value).toEqual("someone_a@example.com;someone9@example.com;");
            expect(email.Sender.Value).toEqual("devkit@crmgridplus.com");
            expect(res2.Subject).toEqual("EMAIL SUBJECT [DEVKIT]");
        });
    });

    describe("Update", function () {
        it("Update Contact", function () {
            //setup contact first
            //-- setup toContactId
            var dataToContactId = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#contacts(contactid)/$entity",
                "@odata.etag": "W/\"568359\"",
                "contactid": "968d37ec-9e66-e911-a993-000d3a804bc9"
            }
            var urlToContactId = RegExp.escape(fakeUrl + "/api/data/v9.1/contacts(emailaddress1='someone_a@example.com')?$select=contactid");
            xhr.respondWith("GET", RegExp(urlToContactId),
                [200, { "Content-Type": "application/json" }, JSON.stringify(dataToContactId)]
            );
            //setup contact updated
            var data = {
                "@odata.context": fakeUrl + "/api/data/v9.1/$metadata#contacts/$entity",
                "@odata.etag": "W/\"669838\"",
                "customertypecode": 1,
                "address2_addresstypecode": 1,
                "birthdate": "1954-05-16",
                "merged": false,
                "gendercode": 2,
                "territorycode": 1,
                "emailaddress1": "someone_a@example.com",
                "haschildrencode": 1,
                "exchangerate": 1,
                "preferredappointmenttimecode": 1,
                "isbackofficecustomer": false,
                "modifiedon": "2019-05-07T14:55:08Z",
                "_owninguser_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "importsequencenumber": 1,
                "address1_composite": "249 Alexander Pl.\r\nRedmond, WA 86372\r\nU.S.",
                "lastname": "LAST NAME",
                "marketingonly": false,
                "donotphone": false,
                "preferredcontactmethodcode": 1,
                "educationcode": 1,
                "_ownerid_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "customersizecode": 1,
                "firstname": "FIRST NAME",
                "anniversary": "1983-04-02",
                "jobtitle": "Purchasing Manager",
                "donotpostalmail": false,
                "yomifullname": "FIRST NAME LAST NAME",
                "donotemail": false,
                "address2_shippingmethodcode": 1,
                "fullname": "FIRST NAME LAST NAME",
                "timezoneruleversionnumber": 0,
                "address1_addressid": "646b8cd6-1c8b-44e2-a9a1-e5080df6b1ed",
                "address2_freighttermscode": 1,
                "statuscode": 1,
                "createdon": "2019-04-24T14:40:52Z",
                "address1_stateorprovince": "WA",
                "donotsendmm": false,
                "donotfax": false,
                "leadsourcecode": 1,
                "address1_country": "U.S.",
                "versionnumber": 669838,
                "address1_line1": "249 Alexander Pl.",
                "creditonhold": false,
                "telephone1": "123456789",
                "_transactioncurrencyid_value": "08a827ca-9063-e911-a836-000d3a80e227",
                "address3_addressid": "c60afa4b-b1c9-41d1-890a-ccdfbe0ad137",
                "donotbulkemail": false,
                "familystatuscode": 2,
                "_modifiedby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "followemail": true,
                "shippingmethodcode": 1,
                "_createdby_value": "739d2b22-5f57-42f9-9a17-ebad89799e7e",
                "address1_city": "Redmond",
                "donotbulkpostalmail": false,
                "_parentcustomerid_value": "828d37ec-9e66-e911-a993-000d3a804bc9",
                "spousesname": "Abrus, Luka",
                "contactid": "968d37ec-9e66-e911-a993-000d3a804bc9",
                "participatesinworkflow": false,
                "statecode": 0,
                "_owningbusinessunit_value": "3394d17f-8b63-e911-a836-000d3a80e227",
                "address2_addressid": "cc36008a-ed0d-46fd-a185-8006d9b44574",
                "address1_postalcode": "86372"
            }
            var urlUpdate = RegExp.escape(fakeUrl + "/api/data/v9.1/contacts(968d37ec-9e66-e911-a993-000d3a804bc9)");
            xhr.respondWith("PATCH", RegExp(urlUpdate),
                [200, { "Content-Type": "application/json" }, JSON.stringify(data)]
            );
            //run
            var key = new Rocket.WebApi.AlternateKey("emailaddress1", "someone_a@example.com");
            var req = new Rocket.WebApi.RetrieveRequest();
            req.alternateKey = [key];
            req.entityName = "contact";
            req.queryParams = "?$select=contactid";
            var res = WebApiClient.Retrieve(req);
            var contact = new Rocket.ContactApi(res);
            var contactId = contact.ContactId.Value;

            //update contact
            var update = new Rocket.ContactApi();
            update.FirstName.Value = "FIRST NAME";
            update.LastName.Value = "LAST NAME";
            update.Telephone1.Value = "123456789";

            var updateRequest = new Rocket.WebApi.UpdateRequest();
            updateRequest.entityId = contactId;
            updateRequest.entity = update.Entity;
            updateRequest.entityName = update.EntityName;

            var res = WebApiClient.Update(updateRequest);
            //result
            var contact = new Rocket.ContactApi(res);
            expect(contact.FirstName.Value).toEqual("FIRST NAME");
            expect(contact.LastName.Value).toEqual("LAST NAME");
            expect(contact.YomiFullName.Value).toEqual("FIRST NAME LAST NAME");
        });
    });

    describe("Delete", function () {
        it("Delete Contact", function () {
            //setup
            var urlUpdate = RegExp.escape(fakeUrl + "/api/data/v9.1/contacts(968d37ec-9e66-e911-a993-000d3a804bc9)");
            xhr.respondWith("DELETE", RegExp(urlUpdate),
                [200, { "Content-Type": "application/json" }, JSON.stringify({})]
            );
            //run
            var deleteRequest = new Rocket.WebApi.DeleteRequest();
            deleteRequest.entityId = "968d37ec-9e66-e911-a993-000d3a804bc9";
            deleteRequest.entityName = "contact";
            var res = WebApiClient.Delete(deleteRequest);
            //result
            expect(res).not.toBeUndefined();
        });
    });
});