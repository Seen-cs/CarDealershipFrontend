using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Concrete
{
    public class StudentAnswer:IEntity
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public int StudentId { get; set; }
        public bool Validation { get; set; }
        public int SigmaCount { get; set; }

    }
}
