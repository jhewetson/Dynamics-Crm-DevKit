﻿using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Facebook.Vietnam.Hcm.Shared;
using System;

namespace Facebook.Vietnam.Hcm.DataProvider
{
    public class Retrieve : IPlugin
    {
        /*
          InputParameters:
              Target                  Microsoft.Xrm.Sdk.EntityReference - require
              ColumnSet               Microsoft.Xrm.Sdk.Query.ColumnSet - require
           OutputParameters:
              Entity                  Microsoft.Xrm.Sdk.Entity - require
        */
        private readonly string _unsecureString = null;
        private readonly string _secureString = null;

        public Retrieve(string unsecureString, string secureString)
        {
            if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
            if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        }

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var retriever = serviceProvider.Get<IEntityDataSourceRetrieverService>();
            var dataSource = retriever.RetrieveEntityDataSource();

            //Debugger.Begin(tracing, context);

            ExecutePlugin(context, serviceFactory, service, tracing, dataSource);

            //Debugger.End(tracing, context);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            //Get Parameter from DataSource
            //var ??? = dataSource.GetAttributeValue<string>("???");
            //var ??? = dataSource.GetAttributeValue<int>("???");

            var target = context.InputParameterOrDefault<EntityReference>("Target");

            var entity = new Entity("???", target.Id);

            //YOUR CODE ...

            context.OutputParameters["BusinessEntity"] = entity;
        }
    }
}
