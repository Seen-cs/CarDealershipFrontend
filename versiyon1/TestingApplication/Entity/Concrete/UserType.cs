using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Concrete
{
    public class UserType:IEntity
    {
        public int UserTypeId { get; set; }
        public string UserTypeName { get; set; }
    }
}
