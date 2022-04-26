using Core.DataAccess;
using DataAccess.Concrete.EntityFramework;
using DataAccess.DTOs;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Abstract
{
    public interface IStudentAnswerDal : IEntityRepository<StudentAnswer>
    {
        StudentAnswerDto GetStudentQuestionWithStudentIdAndQuestionId(int studentId, int questionId);
    }
}
