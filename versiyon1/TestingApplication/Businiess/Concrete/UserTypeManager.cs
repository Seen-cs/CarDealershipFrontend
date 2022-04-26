using Businiess.Abstract;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businiess.Concrete
{
    public class UserTypeManager:IUserTypeService
    {
        IUserTypeDal _userTypeDal;
        public UserTypeManager(IUserTypeDal userTypeDal)
        {
            _userTypeDal = userTypeDal;
        }
    }
}
