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
                return CrmName.Substring(CrmName.LastIndexOf(" ")).Trim();
            }
        }

        public string WizardNameSpace => labelProjectName.Text;

        //================================================================================================================================================


        public OrganizationServiceProxy CrmService { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string ProjectName => labelProjectName.Text;
        public string CrmName => comboBoxCrmName.Text;

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
            comboBoxCrmName.DataSource = Const.DataSourceCrm;
            comboBoxCrmName.ValueMember = "Version";
            comboBoxCrmName.DisplayMember = "Name";
        }

        private void LoadComboBoxEntity(List<XrmEntity> entities)
        {
            comboBoxEntity.DataSource = entities;
            comboBoxEntity.ValueMember = "LogicalName";
            comboBoxEntity.DisplayMember = "Name";
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
                    List<XrmEntity> entities = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task task = Task.Factory.StartNew(() =>
                    {
                        entities = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!task.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities);
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
            if (textProjectName.Text.Length == 0)
            {
                labelProjectName.Text = $@"{labelProjectName?.Tag}";
            }
            else
            {
                labelProjectName.Text = $@"{labelProjectName.Tag}.{textProjectName.Text}";
            }
        }

        private void comboBoxEntity_SelectedIndexChanged(object sender, EventArgs e)
        {
            labelProjectName.Text = $@"{labelProjectName.Tag}.{comboBoxEntity.Text}";
        }

        private void comboBoxEntity_TextUpdate(object sender, EventArgs e)
        {
            labelProjectName.Text = $@"{labelProjectName.Tag}.{comboBoxEntity.Text}";
        }
    }
}
