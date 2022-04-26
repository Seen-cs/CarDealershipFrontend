using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Concrete
{
    public class Question:IEntity
    {
        public int Id { get; set; }
        public int SectionId { get; set; }
        public string QuestionText { get; set; }
        public int UnitId { get; set; }
        public string PicturePath { get; set; }
        public string AnswerA { get; set; }
        public string AnswerB { get; set; }
        public string AnswerC { get; set; }
        public string AnswerD { get; set; }
        public string CorrectAnswer { get; set; }

    }
}
