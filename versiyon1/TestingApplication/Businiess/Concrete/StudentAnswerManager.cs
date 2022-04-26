using Businiess.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.DTOs;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businiess.Concrete
{
    public class StudentAnswerManager : IStudentAnswerService
    {
        IStudentAnswerDal _studentAnswerDal;
        public StudentAnswerManager(IStudentAnswerDal studentAnswerDal)
        {
            _studentAnswerDal = studentAnswerDal;
        }

        public IResult Add(StudentAnswer studentAnswers)
        {
            _studentAnswerDal.Add(studentAnswers);
            return new SuccessResult();
        }

        public IResult Delete(StudentAnswer studentAnswer)
        {
            _studentAnswerDal.Delete(studentAnswer);
            return new SuccessResult();
        }

        public IDataResult<List<StudentAnswer>> GetAllStudentAnswerWithStudentId(int studentId)
        {
            return new SuccessDataResult<List<StudentAnswer>>(_studentAnswerDal.GetAll(i => i.StudentId == studentId));
        }

        public IDataResult<List<StudentAnswer>> GetAllStudentAnswerWithStudentIdAndQuestionId(int studentId, int QuestionId)
        {
            return new SuccessDataResult<List<StudentAnswer>>(_studentAnswerDal.GetAll(i => i.StudentId==studentId && i.QuestionId==QuestionId));
        }

        public IDataResult<StudentAnswer> GetStudentAnswerWithStudentIdAndQuestionId(int studentId, int QuestionId)
        {
            if (_studentAnswerDal.Get(i => i.StudentId == studentId && i.QuestionId == QuestionId)==null)
            {
                return new ErrorDataResult<StudentAnswer>();
            }
            return new SuccessDataResult<StudentAnswer>(_studentAnswerDal.Get(i => i.StudentId == studentId && i.QuestionId == QuestionId));
        }

        public IDataResult<StudentAnswerDto> GetStudentQuestionWithStudentIdAndQuestionId(int studentId, int questionId)
        {
            return new SuccessDataResult<StudentAnswerDto>(_studentAnswerDal.GetStudentQuestionWithStudentIdAndQuestionId(studentId, questionId));
        }

        public IResult Update(StudentAnswer studentAnswer)
        {
            _studentAnswerDal.Update(studentAnswer);
            return new SuccessResult();
        }
    }
}