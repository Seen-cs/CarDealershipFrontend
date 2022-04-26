using Core.Utilities.Results;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businiess.Abstract
{
    public interface IQuestionService
    {
        IDataResult<List<Question>> GetAll();
        IDataResult<Question> GetQuestionsById(int Id);
        IResult Add(Question question);
        IResult Delete(Question question);
        IResult Update(Question question);

    }
}
