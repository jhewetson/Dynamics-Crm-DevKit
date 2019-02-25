﻿using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using Delta.Beta.ProxyTypes;
using Delta.Beta.Shared;

namespace Delta.Beta.PluginAccount.Test
{
    [TestClass]
    public class PostAccountRevokeAccessAsynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.PrimaryEntityName = "account";
            PluginContext.MessageName = "RevokeAccess";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Asynchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        /*
        [TestMethod]
        public void PostAccountRevokeAccess_UnsecureString_And_SecureString()
        {
            var target = new Entity("account")
            {
                ["accountid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PostAccountRevokeAccessAsynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void PostAccountRevokeAccess_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountRevokeAccessAsynchronous>(plugin);
            }, "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void PostAccountRevokeAccess_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountRevokeAccessAsynchronous>(plugin);
            }, "Stage does not equals account");
        }

        [TestMethod]
        public void PostAccountRevokeAccess_MessageName_Does_Not_Equals_RevokeAccess()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountRevokeAccessAsynchronous>(plugin);
            }, "Stage does not equals RevokeAccess");
        }

        [TestMethod]
        public void PostAccountRevokeAccess_Mode_Does_Not_Equals_Asynchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "RevokeAccess";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountRevokeAccessAsynchronous>(plugin);
            }, "Stage does not equals Asynchronous");
        }

        /*
        [TestMethod]
        public void PostAccountRevokeAccess_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PostAccountRevokeAccessAsynchronous();
            foreach (var attribute in Attribute.GetCustomAttributes(@class.GetType()))
            {
                if (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))
                {
                    var check = attribute as CrmPluginRegistrationAttribute;
                    Assert.IsNotNull(check.Image1Attributes);
                    Assert.IsNotNull(check.Image1Name);
                    Assert.IsNotNull(check.Image1Type);
                }
                else
                    Assert.Fail();
            }
        }

        [TestMethod]
        public void PostAccountRevokeAccess_CrmPluginRegistration_Check_Image2()
        {
            var @class = new PostAccountRevokeAccessAsynchronous();
            foreach (var attribute in Attribute.GetCustomAttributes(@class.GetType()))
            {
                if (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))
                {
                    var check = attribute as CrmPluginRegistrationAttribute;
                    Assert.IsNotNull(check.Image2Attributes);
                    Assert.IsNotNull(check.Image2Name);
                    Assert.IsNotNull(check.Image2Type);
                }
                else
                    Assert.Fail();
            }
        }
        */

        [TestMethod]
        public void PostAccountRevokeAccess_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
