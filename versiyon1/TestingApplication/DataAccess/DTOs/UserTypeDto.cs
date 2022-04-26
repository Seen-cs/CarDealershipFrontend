using Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.DTOs
{
    public class UserTypeDto:IDto
    {
        public string StudentTypeName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
