using Core.Utilities.Results;
using DataAccess.DTOs;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businiess.Abstract
{
    public interface IStudentAnswerService
    {
        IDataResult<List<StudentAnswer>> GetAllStudentAnswerWithStudentIdAndQuestionId(int studentId,int QuestionId);
        IDataResult<List<StudentAnswer>> GetAllStudentAnswerWithStudentId(int studentId);
        IDataResult<StudentAnswerDto> GetStudentQuestionWithStudentIdAndQuestionId(int studentId, int questionId);
        IDataResult<StudentAnswer> GetStudentAnswerWithStudentIdAndQuestionId(int studentId, int QuestionId);
        IResult Add(StudentAnswer studentAnswer);
        IResult Delete(StudentAnswer studentAnswer);
        IResult Update(StudentAnswer studentAnswer);
    }
}
