using Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.DTOs
{
    public class QuestionSectionDto:IDto
    {
        public int QuestionId { get; set; }
        public string SextionText { get; set; }
        public bool Validate { get; set; }
    }
}
