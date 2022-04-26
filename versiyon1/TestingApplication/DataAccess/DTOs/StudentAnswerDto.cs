using Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.DTOs
{
    public class StudentAnswerDto:IDto
    {
        public int StudentId { get; set; }
        public int SigmaCount { get; set; }
        public bool Validation { get; set; }
        public int QuestionId { get; set; }
        public string QuestionText { get; set; }
        public string PicturePath { get; set; }
        public string AnswerA { get; set; }
        public string AnswerB { get; set; }
        public string AnswerC { get; set; }
        public string AnswerD { get; set; }
        public string CorrectAnswer { get; set; }
    }
}
