
namespace WinFormsUI
{
    partial class Test
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_A = new System.Windows.Forms.Button();
            this.btn_B = new System.Windows.Forms.Button();
            this.btn_C = new System.Windows.Forms.Button();
            this.btn_D = new System.Windows.Forms.Button();
            this.lbl_QuestionText = new System.Windows.Forms.Label();
            this.btn_AskQuestion = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btn_A
            // 
            this.btn_A.Location = new System.Drawing.Point(43, 211);
            this.btn_A.Name = "btn_A";
            this.btn_A.Size = new System.Drawing.Size(117, 51);
            this.btn_A.TabIndex = 0;
            this.btn_A.Text = "A";
            this.btn_A.UseVisualStyleBackColor = true;
            // 
            // btn_B
            // 
            this.btn_B.Location = new System.Drawing.Point(197, 211);
            this.btn_B.Name = "btn_B";
            this.btn_B.Size = new System.Drawing.Size(102, 51);
            this.btn_B.TabIndex = 1;
            this.btn_B.Text = "B";
            this.btn_B.UseVisualStyleBackColor = true;
            this.btn_B.Click += new System.EventHandler(this.btn_B_Click);
            // 
            // btn_C
            // 
            this.btn_C.ImageAlign = System.Drawing.ContentAlignment.BottomCenter;
            this.btn_C.Location = new System.Drawing.Point(360, 211);
            this.btn_C.Name = "btn_C";
            this.btn_C.Size = new System.Drawing.Size(154, 51);
            this.btn_C.TabIndex = 2;
            this.btn_C.Text = "C";
            this.btn_C.UseVisualStyleBackColor = true;
            this.btn_C.Click += new System.EventHandler(this.btn_C_Click);
            // 
            // btn_D
            // 
            this.btn_D.Location = new System.Drawing.Point(554, 211);
            this.btn_D.Name = "btn_D";
            this.btn_D.Size = new System.Drawing.Size(161, 51);
            this.btn_D.TabIndex = 3;
            this.btn_D.Text = "D";
            this.btn_D.UseVisualStyleBackColor = true;
            this.btn_D.Click += new System.EventHandler(this.btn_D_Click);
            // 
            // lbl_QuestionText
            // 
            this.lbl_QuestionText.AutoSize = true;
            this.lbl_QuestionText.Location = new System.Drawing.Point(224, 84);
            this.lbl_QuestionText.Name = "lbl_QuestionText";
            this.lbl_QuestionText.Size = new System.Drawing.Size(50, 20);
            this.lbl_QuestionText.TabIndex = 4;
            this.lbl_QuestionText.Text = "label1";
            // 
            // btn_AskQuestion
            // 
            this.btn_AskQuestion.Location = new System.Drawing.Point(270, 348);
            this.btn_AskQuestion.Name = "btn_AskQuestion";
            this.btn_AskQuestion.Size = new System.Drawing.Size(244, 62);
            this.btn_AskQuestion.TabIndex = 5;
            this.btn_AskQuestion.Text = "Sınava Basla";
            this.btn_AskQuestion.UseVisualStyleBackColor = true;
            this.btn_AskQuestion.Click += new System.EventHandler(this.btn_AskQuestion_Click);
            // 
            // Test
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(889, 579);
            this.Controls.Add(this.btn_AskQuestion);
            this.Controls.Add(this.lbl_QuestionText);
            this.Controls.Add(this.btn_D);
            this.Controls.Add(this.btn_C);
            this.Controls.Add(this.btn_B);
            this.Controls.Add(this.btn_A);
            this.Name = "Test";
            this.Text = "Test";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_A;
        private System.Windows.Forms.Button btn_B;
        private System.Windows.Forms.Button btn_C;
        private System.Windows.Forms.Button btn_D;
        private System.Windows.Forms.Label lbl_QuestionText;
        private System.Windows.Forms.Button btn_AskQuestion;
    }
}