@echo off
..\packages\Microsoft.CrmSdk.CoreTools.7.1.1\content\bin\coretools\CrmSvcUtil.exe /url:http://crm2015.southeastasia.cloudapp.azure.com/G16/XRMServices/2011/Organization.svc /username:crmadmin /domain:crm /password:????????? /namespace:Delta.Beta.ProxyTypes /out:GeneratedCode.cs
exit