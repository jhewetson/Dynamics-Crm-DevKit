﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.Xrm.Sdk.Client;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.Helper;
using PL.DynamicsCrm.DevKit.Shared.Models;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public partial class FormProject : Form
    {
        public string WizardCrmConnectionString
        {
            get
            {
                var url = CrmConnection.Url.Substring(0, CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
                url = url.Replace(".api.", ".");
                if (CrmConnection.Url.Contains(".dynamics.com"))
                    return $"AuthType=Office365;Url={url};Username={CrmConnection.UserName};Password={CrmConnection.Password};";
                var domain = CrmConnection.UserName.Split("\\".ToCharArray())[0];
                var user = CrmConnection.UserName.Split("\\".ToCharArray())[1];
                return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={CrmConnection.Password};";
            }
        }

        public string WizardShortCrmName
        {
            get
            {
                var crmName = Utility.GetCrmName(comboBoxCrmName.Text);
                return crmName.Substring(crmName.LastIndexOf(" ")).Trim();
            }
        }

        public string WizardNameSpace => labelProjectName.Text;

        //================================================================================================================================================


        public OrganizationServiceProxy CrmService { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string ProjectName => labelProjectName.Text;
        public string ProjectJsName
        {
            get
            {
                var parts = ProjectName.Split(".".ToCharArray());
                for(var i=0; i<parts.Length; i++)
                {
                    if (parts[i].ToLower() == FormType.WebResource.ToString().ToLower())
                    {
                        if (i > 1)
                        {
                            var projectJsName = parts[i - 1];
                            if (int.TryParse(projectJsName.Substring(0, 1), out _))
                            {
                                projectJsName = $"_{projectJsName}";
                            }
                            return projectJsName;
                        }
                    }
                }
                return FormType.WebResource.ToString();
            }
        }
        public string ComboBoxCrmName => comboBoxCrmName.Text;

        public DTE DTE { get; }
        private FormType _formType;
        public FormType FormType
        {
            get => _formType;
            set
            {
                _formType = value;
                if (_formType == FormType.Shared)
                {
                    link.Text = @"Add New Shared Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template";
                }
                else if (_formType == FormType.Console)
                {
                    link.Text = @"Add New Console Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template";
                }
                else if (_formType == FormType.Plugin)
                {
                    link.Text = @"Add New Plugin Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Plugin-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_formType == FormType.ProxyTypes)
                {
                    link.Text = @"Add New Proxy Types Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template";
                }
                else if (_formType == FormType.Workflow)
                {
                    link.Text = @"Add New Workflow Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Workflow-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_formType == FormType.CustomAction)
                {
                    link.Text = @"Add new Custom Action Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Action-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_formType == FormType.DataProvider)
                {
                    link.Text = @"Add New Data Provider Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Data-Provider-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_formType == FormType.WebResource)
                {
                    link.Text = @"Add New WebResource Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template";
                }
                else if (_formType == FormType.SolutionPackager)
                {
                    link.Text = @"Add New Solution Packager Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template";
                }
                else if (_formType == FormType.Test)
                {
                    link.Text = @"Add New Test Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }


                labelProjectName.Text = $"{FormHelper.GetProjectName(DTE, _formType)}";
                labelProjectName.Tag = labelProjectName.Text;
            }
        }

        public FormProject(FormType formType, DTE dte)
        {
            InitializeComponent();

            Text += Const.Version;

            DTE = dte;
            FormType = formType;
            LoadComboBoxCrmName();
        }

        private void LoadComboBoxCrmName()
        {
            var dataSource = Const.DataSourceCrm;
            if (_formType == FormType.DataProvider)
            {
                dataSource = Const.DataSourceCrm.Where(x => x.Name.StartsWith(Const.Dynamics365)).ToList();
            }
            comboBoxCrmName.DataSource = dataSource;
            comboBoxCrmName.ValueMember = "Version";
            comboBoxCrmName.DisplayMember = "Name";
        }

        private void LoadComboBoxEntity(List<XrmEntity> entities)
        {
            comboBoxEntity.DataSource = entities;
            comboBoxEntity.ValueMember = "LogicalName";
            comboBoxEntity.DisplayMember = "Name";
        }

        private void LoadComboBoxEntity(List<string> projects)
        {
            comboBoxEntity.DataSource = projects;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            if (Utility.ExistProject(DTE, textProjectName.Text))
            {
                MessageBox.Show($@"{FormType.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (Utility.ExistProject(DTE, ProjectName))
            {
                MessageBox.Show($@"{ProjectName} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void buttonConnection_Click(object sender, EventArgs e)
        {
            var form = new FormConnection(DTE);
            if (form.ShowDialog() == DialogResult.Cancel) return;

            CrmConnection = form.CrmConnection;
            CrmService = form.CrmService;

            buttonOk.Enabled = true;
            comboBoxCrmName.Enabled = true;
            CheckFormByFormType();
        }

        private void CheckFormByFormType()
        {
            switch (FormType)
            {
                case FormType.Shared:
                    textProjectName.Enabled = false;
                    comboBoxCrmName.Enabled = false;
                    progressBar.Value = 100;
                    break;
                case FormType.Console:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case FormType.Plugin:
                    EnabledAll(false);
                    List<XrmEntity> entitiesPlugin = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskPlugin = Task.Factory.StartNew(() =>
                    {
                        entitiesPlugin = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!taskPlugin.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entitiesPlugin);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case FormType.ProxyTypes:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case FormType.Workflow:
                    EnabledAll(false);
                    List<XrmEntity> entitiesWorkflow = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskWorkflow = Task.Factory.StartNew(() =>
                    {
                        entitiesWorkflow = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!taskWorkflow.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entitiesWorkflow);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case FormType.CustomAction:
                    EnabledAll(false);
                    List<XrmEntity> entitiesCustomAction = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskCustomAction = Task.Factory.StartNew(() =>
                    {
                        entitiesCustomAction = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!taskCustomAction.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entitiesCustomAction);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case FormType.DataProvider:
                    EnabledAll(false);
                    List<XrmEntity> entitiesDataProvider = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskDataProvider = Task.Factory.StartNew(() =>
                    {
                        entitiesDataProvider = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!taskDataProvider.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entitiesDataProvider);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case FormType.WebResource:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case FormType.SolutionPackager:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case FormType.Test:
                    EnabledAll(false);
                    List<string> projects = new List<string>();
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskTest = Task.Factory.StartNew(() =>
                    {
                        projects = Utility.GetAllProjectForTesting(DTE);
                    });
                    while (!taskTest.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(projects);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
            }
        }

        private void EnabledAll(bool value)
        {
            buttonConnection.Enabled = value;
            buttonOk.Enabled = value;
            buttonCancel.Enabled = value;
            comboBoxCrmName.Enabled = value;
            textProjectName.Enabled = value;
            comboBoxEntity.Enabled = value;
        }

        private void link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }

        private void textProjectName_TextChanged(object sender, EventArgs e)
        {
            ComboBoxEntityChange(textProjectName.Text);
        }

        private void comboBoxEntity_SelectedIndexChanged(object sender, EventArgs e)
        {
            ComboBoxEntityChange(comboBoxEntity.Text);
        }

        private void comboBoxEntity_TextUpdate(object sender, EventArgs e)
        {
            ComboBoxEntityChange(comboBoxEntity.Text);
        }

        private void ComboBoxEntityChange(string text)
        {
            if (_formType == FormType.Test)
            {
                var temp = $@"{text}.Test";
                if (temp.StartsWith("."))
                    temp = temp.Substring(1);
                labelProjectName.Text = temp;
            }
            else
            {
                var temp = $@"{labelProjectName.Tag}.{text}";
                if (temp.EndsWith("."))
                    temp = temp.Substring(0, temp.Length - 1);
                labelProjectName.Text = temp;
            }
        }
    }
}
