using System;
using System.Linq;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.Xrm.Sdk.Client;
using PL.DynamicsCrm.DevKit.Shared;
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

        public string WizardNameSpace => lblProjectName.Text;

        //================================================================================================================================================


        public OrganizationServiceProxy CrmService { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string ProjectName => lblProjectName.Text;
        public string CrmName => ComboboxCrmName.Text;

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

                lblProjectName.Text = $"{FormHelper.GetProjectName(DTE, _formType)}";
                lblProjectName.Tag = lblProjectName.Text;
            }
        }

        public FormProject(FormType formType, DTE dte)
        {
            InitializeComponent();

            Text += Const.Version;

            DTE = dte;
            FormType = formType;
            LoadCombobox();
        }

        private void LoadCombobox()
        {
            var packages = NugetHelper.GetPackages(Const.MicrosoftCrmSdkCoreAssemblies);
            var items = (from i in packages
                         select new DataSourceCrm
                         {
                             Name = Utility.GetCrmName(i.Version.Version) + " - " + i?.GetSupportedFrameworks()?.LastOrDefault()?.Version?.ToString(),
                             Version = i?.GetSupportedFrameworks()?.LastOrDefault()?.Version?.ToString()
                         }).ToList();
            var dataSource = items
                .GroupBy(x => new { x.Name, x.Version })
                .Select(x => x.First())
                .ToList();
            ComboboxCrmName.DataSource = dataSource;
            ComboboxCrmName.ValueMember = "Version";
            ComboboxCrmName.DisplayMember = "Name";
        }

        private void ButtonOk_Click(object sender, EventArgs e)
        {
            if (Utility.ExistProject(DTE, txtProjectName.Text))
            {
                MessageBox.Show($@"{FormType.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            DialogResult = DialogResult.OK;
        }

        private void Buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void ButtonConnection_Click(object sender, EventArgs e)
        {
            var form = new FormConnection(DTE);
            if (form.ShowDialog() == DialogResult.Cancel) return;

            ButtonOk.Enabled = true;
            txtProjectName.Enabled = true;
            txtProjectName.Focus();
            ComboboxCrmName.Enabled = true;
            progressBar.Value = 100;

            CrmConnection = form.CrmConnection;
            CrmService = form.CrmService;

            CheckFormByFormType();
        }

        private void CheckFormByFormType()
        {
            switch (FormType)
            {
                case FormType.Shared:
                    txtProjectName.Enabled = false;
                    break;
            }
        }

        private void Link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }

        private void TxtProjectName_TextChanged(object sender, EventArgs e)
        {
            if (txtProjectName.Text.Length == 0)
            {
                lblProjectName.Text = $@"{lblProjectName?.Tag}";
            }
            else
            {
                lblProjectName.Text = $@"{lblProjectName.Tag}.{txtProjectName.Text}";
            }
        }
    }
}
