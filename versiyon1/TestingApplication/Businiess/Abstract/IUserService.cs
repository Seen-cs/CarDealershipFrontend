using Core.Utilities.Results;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businiess.Abstract
{
    public interface IUserService
    {
        IDataResult<List<User>> GetAll();
        IDataResult<User> GetUserWithUserNameAndPassword(string userName,string Password);
        IResult Add(User user);
        IResult Delete(User user);
        IResult Update(User user);

    }
}
