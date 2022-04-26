using Businiess.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace WinFormsUI
{
    public partial class Login : Form
    {
        UserManager userManager = new UserManager(new EfUserDal());
        public Login()
        {
            InitializeComponent();
            
        }

        private void btn_Login_Click(object sender, EventArgs e)
        {
                       
            if (userManager.UserValidation(txt_UserName.Text.ToString(), txt_Password.Text.ToString()) == true)
            {
                Test test = new Test()
                {
                    userName = txt_UserName.Text.ToString(),
                    password = txt_Password.Text.ToString()
                };              
                test.Show();
                this.Hide();
            }
            else
                MessageBox.Show("Bu kullanıcı bulunamadı!");

        }

    }
}
