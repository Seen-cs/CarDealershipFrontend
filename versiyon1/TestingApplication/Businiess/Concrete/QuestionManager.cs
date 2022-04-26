using Businiess.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businiess.Concrete
{
    public class QuestionManager:IQuestionService
    {
        IQuestionDal _qestionDal;
        public QuestionManager(IQuestionDal qestionDal)
        {
            _qestionDal = qestionDal;
        }

        public IResult Add(Question question)
        {
            _qestionDal.Add(question);
            return new SuccessResult();
        }

        public IResult Delete(Question question)
        {
            _qestionDal.Delete(question);
            return new SuccessResult();
        }

        public IDataResult<List<Question>> GetAll()
        {
            return new SuccessDataResult<List<Question>>(_qestionDal.GetAll());
        }

        public IResult Update(Question question)
        {
            _qestionDal.Update(question);
            return new SuccessResult();
        }

        public IDataResult<Question> GetQuestionsById(int Id)
        {
            return new SuccessDataResult<Question>(_qestionDal.Get(q => q.Id == Id));
        }
    }
}
