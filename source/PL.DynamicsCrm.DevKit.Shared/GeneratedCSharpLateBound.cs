﻿using System.Collections.Generic;
using System.Linq;
using System.Xml;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class GeneratedCSharpLateBound
    {
        private OrganizationServiceProxy _crmService;
        private List<CrmAttribute> Lists { get; set; }
        private int ObjectTypeCode { get; set; }
        private bool HasImage { get; set; }

        internal string Go(OrganizationServiceProxy crmService, CrmVersionName crmVersionName, string entity, string rootNameSpace, string sharedNameSpace)
        {
            _crmService = crmService;
            LoadData(entity);
            var logicalName = entity.ToLower();

            var code = string.Empty;
            code += $"//---------------------------------------------------------------------------------------------------\r\n";
            code += $"// <auto-generated>\r\n";
            code += $"//\t\tChanges to this file may cause incorrect behavior and will be lost if the code is regenerated.\r\n";
            code += $"//\t\tGenerated by PL.DynamicsCrm.DevKit {Const.Version} - https://github.com/phuocle/Dynamics-Crm-DevKit\r\n";
            code += $"// </auto-generated>\r\n";
            code += $"//---------------------------------------------------------------------------------------------------\r\n";
            code += $"using Microsoft.Xrm.Sdk;\r\n";
            code += $"using System;\r\n";
            code += $"using System.Diagnostics;\r\n";
            code += $"using System.Collections.Generic;\r\n";
            code += $"using {sharedNameSpace}Shared;\r\n";
            code += $"using {rootNameSpace}.{entity}OptionSets;\r\n";
            code += $"\r\n";
            code += $"namespace {rootNameSpace}.{entity}OptionSets\r\n";
            code += $"{{\r\n";
            code += GeneratorEnum() + "\r\n";
            code += $"}}\r\n";
            code += $"\r\n";
            code += $"namespace {rootNameSpace}\r\n";
            code += $"{{\r\n";
            code += $"\tpublic partial class {entity} : EntityBase\r\n";
            code += $"\t{{\r\n";
            code += $"\t\tpublic struct Fields\r\n";
            code += $"\t\t{{\r\n";
            code += GeneratorClassFields() + "\r\n";
            code += $"\t\t}}\r\n";
            code += $"\r\n";
            code += $"\t\tpublic const string EntityLogicalName = \"{logicalName}\";\r\n";
            code += $"\r\n";
            code += $"\t\tpublic const int EntityTypeCode = {ObjectTypeCode};\r\n";
            code += $"\r\n";
            code += $"\t\t[DebuggerNonUserCode()]\r\n";
            code += $"\t\tpublic {entity}()\r\n";
            code += $"\t\t{{\r\n";
            code += $"\t\t\tEntity = new Entity(EntityLogicalName);\r\n";
            code += $"\t\t\tPreEntity = CloneThisEntity(Entity);\r\n";
            code += $"\t\t}}\r\n";
            code += $"\r\n";
            code += $"\t\t[DebuggerNonUserCode()]\r\n";
            code += $"\t\tpublic {entity}(Guid {entity}Id)\r\n";
            code += $"\t\t{{\r\n";
            if(crmVersionName == CrmVersionName._2011 || crmVersionName == CrmVersionName._2013)
            {
                code += $"\t\t\tEntity = new Entity(EntityLogicalName);\r\n";
                code += $"\t\t\tEntity.Id = {entity}Id;\r\n";
            }
            else
                code += $"\t\t\tEntity = new Entity(EntityLogicalName, {entity}Id);\r\n";
            code += $"\t\t\tPreEntity = CloneThisEntity(Entity);\r\n";
            code += $"\t\t}}\r\n";
            code += $"\r\n";
            if (crmVersionName == CrmVersionName._2011 || crmVersionName == CrmVersionName._2013)
            {
                ;
            }
            else
            {
                code += $"\t\t[DebuggerNonUserCode()]\r\n";
                code += $"\t\tpublic {entity}(string keyName, object keyValue)\r\n";
                code += $"\t\t{{\r\n";
                code += $"\t\t\tEntity = new Entity(EntityLogicalName, keyName, keyValue);\r\n";
                code += $"\t\t\tPreEntity = CloneThisEntity(Entity);\r\n";
                code += $"\t\t}}\r\n";
                code += $"\r\n";
            }
            code += $"\t\t[DebuggerNonUserCode()]\r\n";
            code += $"\t\tpublic {entity}(Entity entity)\r\n";
            code += $"\t\t{{\r\n";
            code += $"\t\t\tEntity = entity;\r\n";
            code += $"\t\t\tPreEntity = CloneThisEntity(Entity);\r\n";
            code += $"\t\t}}\r\n";
            code += $"\r\n";
            code += $"\t\t[DebuggerNonUserCode()]\r\n";
            code += $"\t\tpublic {entity}(Entity entity, Entity merge)\r\n";
            code += $"\t\t{{\r\n";
            code += $"\t\t\tEntity = entity;\r\n";
            code += $"\t\t\tforeach (var property in merge.Attributes)\r\n";
            code += $"\t\t\t{{\r\n";
            code += $"\t\t\t\tvar key = property.Key;\r\n";
            code += $"\t\t\t\tvar value = property.Value;\r\n";
            code += $"\t\t\t\tEntity[key] = value;\r\n";
            code += $"\t\t\t}}\r\n";
            code += $"\t\t\tPreEntity = CloneThisEntity(Entity);\r\n";
            code += $"\t\t}}\r\n";
            code += $"\r\n";
            if (crmVersionName == CrmVersionName._2011 || crmVersionName == CrmVersionName._2013)
            {
                ;
            }
            else
            {
                code += $"\t\t[DebuggerNonUserCode()]\r\n";
                code += $"\t\tpublic {entity}(KeyAttributeCollection keys)\r\n";
                code += $"\t\t{{\r\n";
                code += $"\t\t\tEntity = new Entity(EntityLogicalName, keys);\r\n";
                code += $"\t\t\tPreEntity = CloneThisEntity(Entity);\r\n";
                code += $"\t\t}}\r\n";
                code += $"\r\n";
            }
            code += GeneratorCode() + "\r\n";
            if (HasImage) code += GeneratorEntityImageCode();
            code += $"\t}}\r\n";
            code += $"}}\r\n";
            return code;
        }

        private string GeneratorEntityImageCode()
        {
            var code = @"
		/// <summary>
		/// <para>byte[]</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public byte[] EntityImage
		{
			get { return Entity.GetAttributeValue<byte[]>('entityimage'); }
			set { Entity.Attributes['entityimage'] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - String</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityImageUrl
		{
			get { return Entity.GetAttributeValue<string>('entityimage_url'); }
		}
";
            code = code.Replace("'", ((char) 34).ToString());
            return code;
        }

        private string GetXml(CrmAttribute crmAttribute)
        {
            var dataType = string.Empty;
            var readOnly = string.Empty;
            if (!crmAttribute.IsValidForCreate && !crmAttribute.IsValidForUpdate)
                readOnly = "ReadOnly";
            if (readOnly.Length > 0) dataType += readOnly + " - ";
            if (crmAttribute.IsPrimaryKey) dataType += "Primary Key - ";
            if (crmAttribute.IsRequired) dataType += "Required - ";
            if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
            {
                if (crmAttribute.DateTimeBehavior == null)
                {
                    dataType += "DateTime";
                }
                else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                {
                    dataType += "DateTimeBehavior: DateOnly - DateTimeFormat: DateOnly";
                }
                else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                {
                    if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        dataType += "DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly";
                    else if (crmAttribute.DateTimeFormat == DateTimeFormat.DateAndTime)
                        dataType += "DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime";
                }
                else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                {
                    if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        dataType += "DateTimeBehavior: TimeZoneIndependent - DateTimeFormat: DateOnly";
                    else if (crmAttribute.DateTimeFormat == DateTimeFormat.DateAndTime)
                        dataType += "DateTimeBehavior: TimeZoneIndependent - DateTimeFormat: DateAndTime";
                }
            }
            else
            {
                if (crmAttribute.IsMultiSelectPicklist)
                    dataType += "MultiSelectPicklist";
                else
                    dataType += crmAttribute.FieldType.ToString();
            }
            if (crmAttribute.MaxLength.HasValue) dataType += " - MaxLength: " + crmAttribute.MaxLength;
            if (crmAttribute.Min.HasValue) dataType += " - MinValue: " + crmAttribute.Min.Value.ToString("#,##0");
            if (crmAttribute.Max.HasValue) dataType += " - MaxValue: " + crmAttribute.Max.Value.ToString("#,##0");
            var xml = "/// <summary>\r\n";
            if (!string.IsNullOrEmpty(crmAttribute.Description))
            {
                var description = crmAttribute.Description.Replace("\n", " ");
                xml += "\t\t/// <para>" + XmlEscape(description) + "</para>\r\n";
            }
            xml += "\t\t/// <para>" + dataType + "</para>\r\n";
            xml += "\t\t/// <para>" + crmAttribute?.DisplayName?.Replace("\n", "") + "</para>\r\n";
            xml += "\t\t/// </summary>\r\n";
            xml += "\t\t[DebuggerNonUserCode()]\r\n";
            return xml;
        }

        private string GetSet(CrmAttribute crmAttribute)
        {
            var code = string.Empty;
            if (crmAttribute.IsValidForCreate || crmAttribute.IsValidForUpdate)
                switch (crmAttribute.FieldType)
                {
                    case AttributeTypeCode.Picklist:
                    case AttributeTypeCode.State:
                    case AttributeTypeCode.Status:
                        if (crmAttribute.IsRequired)
                        {
                            code = "set\r\n\t{{\r\n\t\tEntity.Attributes[Fields." +
                                   crmAttribute.Name + "] = new OptionSetValue((int)value);\r\n";
                            code += "}}";
                            return code;
                        }

                        code += "set\r\n";
                        code += "\t\t\t{{\r\n";
                        code += "\t\t\t\tif (value.HasValue)\r\n";
                        code += "\t\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name +
                                "] = new OptionSetValue((int)value.Value);\r\n";
                        code += "\t\t\t\telse\r\n";
                        code += "\t\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name + "] = null;\r\n";
                        code += "\t\t\t}}";
                        return code;
                    case AttributeTypeCode.BigInt:
                        return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                               "] = value; }}";
                    case AttributeTypeCode.Integer:
                        return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                               "] = value; }}";
                    case AttributeTypeCode.Boolean:
                        return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                               "] = value; }}";
                    case AttributeTypeCode.DateTime:
                        if (crmAttribute.DateTimeBehavior == null)
                        {
                            return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                                   "] = value; }}";
                        }
                        else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                        {
                            code += "set\r\n";
                            code += "\t\t\t{{\r\n";
                            code += "\t\t\t\tif (value.HasValue)\r\n";
                            code += "\t\t\t\t{{\r\n";
                            code += "\t\t\t\t\tDateTime" + (crmAttribute.IsRequired ? "" : "?") + " dateTime = value.Value.ToDateTime();\r\n";
                            code += "\t\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name + "] = dateTime;\r\n";
                            code += "\t\t\t\t}}\r\n";
                            code += "\t\t\t\telse\r\n";
                            code += "\t\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name + "] = null;\r\n";
                            code += "\t\t\t}}";
                            return code;
                        }
                        else
                        {
                            return "set {{ Entity.Attributes[Fields." + crmAttribute.Name + "] = value; }}";
                        }
                    case AttributeTypeCode.Decimal:
                        return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                               "] = value; }}";
                    case AttributeTypeCode.Money:
                        code += "set\r\n";
                        code += "\t\t\t{{\r\n";
                        code += "\t\t\t\tif (value.HasValue)\r\n";
                        code += "\t\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name +
                                "] = new Money(value.Value);\r\n";
                        code += "\t\t\t\telse\r\n";
                        code += "\t\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name + "] = null;\r\n";
                        code += "\t\t\t}}";
                        return code;
                    case AttributeTypeCode.Double:
                        return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                               "] = value; }}";
                    case AttributeTypeCode.Uniqueidentifier:
                        if (crmAttribute.LogicalName.ToLower() == (crmAttribute.EntityName + "Id").ToLower())
                        {
                            code += "set\r\n";
                            code += "\t\t\t{{\r\n";
                            code += "\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name + "] = value;\r\n";
                            code += "\t\t\t\tEntity.Id = value;\r\n";
                            code += "\t\t\t}}";
                            return code;
                        }
                        else
                        {
                            return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                                   "] = value; }}";
                        }
                    case AttributeTypeCode.Lookup:
                    case AttributeTypeCode.Owner:
                    case AttributeTypeCode.Customer:
                        return "set {{ Entity.Attributes[Fields." + crmAttribute.Name +
                               "] = value; }}";
                    case AttributeTypeCode.Memo:
                    case AttributeTypeCode.Virtual:
                    case AttributeTypeCode.EntityName:
                    case AttributeTypeCode.String:
                        if (crmAttribute.IsMultiSelectPicklist)
                        {
                            code += "set\r\n";
                            code += "\t\t\t{{\r\n";
                            code += "\t\t\t\tvar data = new OptionSetValueCollection();\r\n";
                            code += "\t\t\t\tforeach (var item in value)\r\n";
                            code += "\t\t\t\t\tdata.Add(new OptionSetValue((int)item));\r\n";
                            code += "\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name + "] = data;\r\n";
                            code += "\t\t\t}}";
                            return code;
                        }
                        else
                            return "set {{ Entity.Attributes[Fields." + crmAttribute.Name + "] = value; }}";
                    case AttributeTypeCode.PartyList:
                        code += "set\r\n";
                        code += "\t\t\t{{\r\n";
                        code += "\t\t\t\tvar data = new EntityCollection();\r\n";
                        code += "\t\t\t\tforeach (var item in value)\r\n";
                        code += "\t\t\t\t\tdata.Entities.Add(item.Entity);\r\n";
                        code += "\t\t\t\tEntity.Attributes[Fields." + crmAttribute.Name + "] = data;\r\n";
                        code += "\t\t\t}}";
                        return code;
                    case AttributeTypeCode.ManagedProperty:
                        return "set;"; //return string.Empty;
                    default:
                        return "set;"; //return string.Empty;
                }
            return string.Empty;
        }

        private string GetGet(CrmAttribute crmAttribute)
        {
            var code = string.Empty;
            switch (crmAttribute.FieldType)
            {
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status:
                    code += "get\r\n";
                    code += "\t\t\t{{\r\n";
                    code += "\t\t\t\tvar value = Entity.GetAttributeValue<OptionSetValue>(Fields." + crmAttribute.Name +
                            ");\r\n";
                    code += "\t\t\t\tif (value == null) return null;\r\n";
                    code += "\t\t\t\treturn (" + crmAttribute.Name + ")value.Value;\r\n";
                    code += "\t\t\t}}";
                    return code;
                case AttributeTypeCode.BigInt:
                    return "get {{ return Entity.GetAttributeValue<long?>(Fields." +
                           crmAttribute.Name + "); }}";
                case AttributeTypeCode.Integer:
                    return "get {{ return Entity.GetAttributeValue<int?>(Fields." +
                           crmAttribute.Name + "); }}";
                case AttributeTypeCode.Boolean:
                    return "get {{ return Entity.GetAttributeValue<bool?>(Fields." +
                           crmAttribute.Name + "); }}";
                case AttributeTypeCode.DateTime:
                    if (crmAttribute.DateTimeBehavior == null)
                    {
                        return "get {{ return Entity.GetAttributeValue<DateTime?>(Fields." +
                               crmAttribute.Name + "); }}";
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    {
                        code += "get\r\n";
                        code += "\t\t\t{{\r\n";
                        code += "\t\t\t\tvar dateTime = Entity.GetAttributeValue<DateTime?>(Fields." +
                                crmAttribute.Name + ");\r\n";
                        code += "\t\t\t\tif (dateTime == null) return null;\r\n";
                        code += "\t\t\t\treturn dateTime.Value.ToDate();\r\n";
                        code += "\t\t\t}}";
                        return code;
                    }
                    else
                    {
                        return "get {{ return Entity.GetAttributeValue<DateTime?>(Fields." +
                               crmAttribute.Name + "); }}";
                    }
                case AttributeTypeCode.Decimal:
                    return "get {{ return Entity.GetAttributeValue<decimal?>(Fields." +
                           crmAttribute.Name + "); }}";
                case AttributeTypeCode.Money:
                    code += "get\r\n";
                    code += "\t\t\t{{\r\n";
                    code += "\t\t\t\tvar value = Entity.GetAttributeValue<Money>(Fields." + crmAttribute.Name +
                            ");\r\n";
                    code += "\t\t\t\tif (value == null) return null;\r\n";
                    code += "\t\t\t\treturn value.Value;\r\n";
                    code += "\t\t\t}}";
                    return code;
                case AttributeTypeCode.Double:
                    return "get {{ return Entity.GetAttributeValue<double?>(Fields." +
                           crmAttribute.Name + "); }}";
                case AttributeTypeCode.Uniqueidentifier:
                    if (crmAttribute.IsPrimaryKey)
                        return "get {{ return Id; }}";
                    else
                        return "get {{ return Entity.GetAttributeValue<Guid?>(Fields." +
                               crmAttribute.Name + "); }}";
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Owner:
                case AttributeTypeCode.Customer:
                    return "get {{ return Entity.GetAttributeValue<EntityReference>(Fields." +
                           crmAttribute.Name + "); }}";
                case AttributeTypeCode.Memo:
                case AttributeTypeCode.Virtual:
                case AttributeTypeCode.EntityName:
                case AttributeTypeCode.String:
                    if (crmAttribute.IsMultiSelectPicklist)
                    {
                        code += "get\r\n";
                        code += "\t\t\t{{\r\n";
                        code += "\t\t\t\tvar data = new List<" + crmAttribute.Name + ">();\r\n";
                        code += "\t\t\t\tforeach (OptionSetValue item in Entity.GetAttributeValue<OptionSetValueCollection>(Fields." + crmAttribute.Name + "))\r\n";
                        code += "\t\t\t\t\tdata.Add((" + crmAttribute.Name + ")item.Value);\r\n";
                        code += "\t\t\t\treturn data;\r\n";
                        code += "\t\t\t}}";
                        return code;
                    }
                    else
                        return "get {{ return Entity.GetAttributeValue<string>(Fields." + crmAttribute.Name + "); }}";
                case AttributeTypeCode.PartyList:
                    code += "get\r\n";
                    code += "\t\t\t{{\r\n";
                    code += "\t\t\t\tvar data = new List<ActivityParty>();\r\n";
                    code += "\t\t\t\tforeach (var item in Entity.GetAttributeValue<EntityCollection>(Fields." +
                            crmAttribute.Name + ").Entities)\r\n";
                    code += "\t\t\t\t\tdata.Add(new ActivityParty(item));\r\n";
                    code += "\t\t\t\treturn data;\r\n";
                    code += "\t\t\t}}";
                    return code;
                default:
                    return "?" + crmAttribute.FieldType;
            }
        }


        private string DeclareType(CrmAttribute crmAttribute)
        {
            if (crmAttribute.IsPrimaryKey)
                return "Guid";
            switch (crmAttribute.FieldType)
            {
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status:
                    return crmAttribute.Name + "?";
                case AttributeTypeCode.BigInt:
                    return "long?";
                case AttributeTypeCode.Integer:
                    return "int?";
                case AttributeTypeCode.Boolean:
                    return "bool?";
                case AttributeTypeCode.DateTime:
                    if (crmAttribute.DateTimeBehavior == null)
                        return "DateTime?";
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                        return "Date?";
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                        return "DateTime?";
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                        return "DateTime?";
                    return "DateTime?";
                case AttributeTypeCode.Decimal:
                    return "decimal?";
                case AttributeTypeCode.Money:
                    return "decimal?";
                case AttributeTypeCode.Double:
                    return "double?";
                case AttributeTypeCode.Uniqueidentifier:
                    return "Guid?";
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Owner:
                case AttributeTypeCode.Customer:
                    return "EntityReference";
                case AttributeTypeCode.Memo:
                case AttributeTypeCode.Virtual:
                case AttributeTypeCode.EntityName:
                case AttributeTypeCode.String:
                    if (crmAttribute.IsMultiSelectPicklist)
                        return "List<" + crmAttribute.Name + ">";
                    else
                        return "string";
                case AttributeTypeCode.PartyList:
                    return "List<ActivityParty>";
                case AttributeTypeCode.ManagedProperty:
                    return "?";
                default:
                    return "?";
            }
        }

        private string GeneratorCode()
        {
            var code = string.Empty;
            const string tmp = "\t\t{0}\t\tpublic {1} {2}\r\n\t\t{{\r\n\t\t\t[get]\r\n\t\t\t[set]\r\n\t\t}}\r\n\r\n";
            foreach (var crmAttribute in Lists)
            {
                if (crmAttribute.AttributeOf != null) continue;
                if (crmAttribute.IsDeprecated) continue;
                var declareType = DeclareType(crmAttribute);
                if (declareType.Length == 0) continue;

                if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                    crmAttribute.FieldType == AttributeTypeCode.Virtual ||
                    crmAttribute.FieldType == AttributeTypeCode.EntityName ||
                    crmAttribute.FieldType == AttributeTypeCode.String ||
                    crmAttribute.FieldType == AttributeTypeCode.Boolean ||
                    crmAttribute.FieldType == AttributeTypeCode.Integer ||
                    crmAttribute.FieldType == AttributeTypeCode.BigInt ||
                    crmAttribute.FieldType == AttributeTypeCode.DateTime ||
                    crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier ||
                    crmAttribute.FieldType == AttributeTypeCode.Decimal ||
                    crmAttribute.FieldType == AttributeTypeCode.Double ||
                    crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                    crmAttribute.FieldType == AttributeTypeCode.Owner ||
                    crmAttribute.FieldType == AttributeTypeCode.Customer ||
                    crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.Money ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status ||
                    crmAttribute.FieldType == AttributeTypeCode.PartyList
                )
                {
                    var get = GetGet(crmAttribute);
                    var set = GetSet(crmAttribute);
                    var xml = GetXml(crmAttribute);
                    string declare;
                    if (set.Length == 0)
                        declare = tmp.Replace("[get]", get).Replace("\r\n\t\t\t[set]", string.Empty);
                    else
                        declare = tmp.Replace("[get]", get).Replace("[set]", set);
                    code += string.Format(declare, xml, declareType,
                        crmAttribute.DateTimeBehavior != null &&
                        crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal
                            ? crmAttribute.Name + "Utc"
                            : crmAttribute.Name);
                }
            }

            code = code.TrimEnd("\r\n".ToCharArray());
            return code;
        }

        private string GeneratorClassFields()
        {
            var code = string.Empty;
            const string tmp = "\t\t\tpublic const string {0} = \"{1}\";\r\n";
            foreach (var crmAttribute in Lists)
            {
                if (crmAttribute.AttributeOf != null) continue;
                if (crmAttribute.IsDeprecated) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                    crmAttribute.FieldType == AttributeTypeCode.Virtual ||
                    crmAttribute.FieldType == AttributeTypeCode.EntityName ||
                    crmAttribute.FieldType == AttributeTypeCode.String ||
                    crmAttribute.FieldType == AttributeTypeCode.Boolean ||
                    crmAttribute.FieldType == AttributeTypeCode.Integer ||
                    crmAttribute.FieldType == AttributeTypeCode.BigInt ||
                    crmAttribute.FieldType == AttributeTypeCode.DateTime ||
                    crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier ||
                    crmAttribute.FieldType == AttributeTypeCode.Decimal ||
                    crmAttribute.FieldType == AttributeTypeCode.Double ||
                    crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                    crmAttribute.FieldType == AttributeTypeCode.Owner ||
                    crmAttribute.FieldType == AttributeTypeCode.Customer ||
                    crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.Money ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status ||
                    crmAttribute.FieldType == AttributeTypeCode.PartyList
                )
                    code += string.Format(tmp, crmAttribute.Name, crmAttribute.LogicalName);
            }

            code = code.TrimEnd("\r\n".ToCharArray());
            return code;
        }

        private void LoadData(string entity)
        {
            var logicalName = entity.ToLower();
            Lists = new List<CrmAttribute>();
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Attributes,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse) _crmService.Execute(request);
            ObjectTypeCode = response.EntityMetadata.ObjectTypeCode.Value;
            HasImage = !string.IsNullOrEmpty(response.EntityMetadata.PrimaryImageAttribute);
            var requestRelationships = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Relationships,
                LogicalName = logicalName
            };
            var responseRelationships = (RetrieveEntityResponse) _crmService.Execute(requestRelationships);

            var lists = new List<CrmAttribute>();
            foreach (var attribute in response.EntityMetadata.Attributes)
            {
                var crmAttribute = new CrmAttribute(attribute, logicalName);
                if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                    crmAttribute.FieldType == AttributeTypeCode.Customer ||
                    crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    crmAttribute.LogicalCollectionName = GetLogicalCollectionName(crmAttribute);
                    crmAttribute.NavigationPropertyName =
                        GetNavigationPropertyName(crmAttribute, responseRelationships);
                }
                else
                {
                    crmAttribute.LogicalCollectionName = string.Empty;
                }

                lists.Add(crmAttribute);
            }

            lists = lists.OrderBy(row => row.Name).ToList();
            Lists = lists;
        }

        private string XmlEscape(string unescaped)
        {
            if (unescaped == null) return string.Empty;
            var doc = new XmlDocument();
            XmlNode node = doc.CreateElement("root");
            node.InnerText = unescaped;
            return node.InnerXml;
        }

        private string GetLogicalCollectionName(CrmAttribute crmAttribute)
        {
            var value = string.Empty;
            var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
            foreach (var entity in entities)
            {
                if (string.IsNullOrEmpty(entity)) continue;
                var request = new RetrieveEntityRequest
                {
                    EntityFilters = EntityFilters.Attributes,
                    LogicalName = entity
                };
                var response = (RetrieveEntityResponse) _crmService.Execute(request);
                value += response.EntityMetadata.LogicalCollectionName + ";";
            }

            return value.TrimEnd(";".ToCharArray());
        }

        private string GetNavigationPropertyName(CrmAttribute crmAttribute,
            RetrieveEntityResponse responseRelationships)
        {
            if (crmAttribute.FieldType == AttributeTypeCode.Owner) return "ownerid;ownerid";
            var value = string.Empty;
            var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
            foreach (var entity in entities)
            {
                var related =
                    responseRelationships.EntityMetadata.ManyToOneRelationships.FirstOrDefault(
                        item => item.ReferencingAttribute == crmAttribute.LogicalName &&
                                item.ReferencedEntity == entity);
                if (related != null)
                    value += related.ReferencingEntityNavigationPropertyName + ";";
            }

            return value.TrimEnd(";".ToCharArray());
        }

        private string GeneratorEnum()
        {
            var @enum = string.Empty;
            @enum += $"\tpublic enum [[Enum]]\r\n";
            @enum += $"\t{{\r\n";
            @enum += $"[[Declare]]";
            @enum += $"\t}}\r\n\r\n";

            var code = string.Empty;
            foreach (var crmAttribute in Lists)
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status ||
                    crmAttribute.IsMultiSelectPicklist)
                {
                    var tmp = string.Empty;
                    foreach (string nvc in crmAttribute.OptionSetValues)
                    {
                        tmp += "\t\t/// <summary>\r\n";
                        tmp += "\t\t/// " + XmlEscape(nvc) + " = " + XmlEscape(crmAttribute.OptionSetValues[nvc]) +
                               "\r\n";
                        tmp += "\t\t/// </summary>\r\n";
                        tmp += string.Format($"\t\t{nvc} = {crmAttribute.OptionSetValues[nvc]},\r\n");
                    }

                    tmp = tmp.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    code += @enum.Replace("[[Enum]]", crmAttribute.Name).Replace("[[Declare]]", tmp);
                }

            code = code.TrimEnd("\r\n".ToCharArray()).TrimEnd("\r\n".ToCharArray());
            return code;
        }
    }
}
