using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using DataAccess.DTOs;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfStudentAnswerDal : EfEntityRepositoryBase<StudentAnswer, TestingApplicationContext>, IStudentAnswerDal
    {
        public StudentAnswerDto GetStudentQuestionWithStudentIdAndQuestionId(int studentId,int questionId)
        {
                using (TestingApplicationContext context = new TestingApplicationContext())
                {


                    var result = from sa in context.StudentsAnswers
                                 join q in context.Questions
                                 on sa.QuestionId equals q.Id
                                 where sa.StudentId == studentId
                                 where sa.QuestionId== questionId
                                 select new StudentAnswerDto 
                                 {
                                     StudentId= sa.StudentId,
                                     QuestionId = q.Id,
                                     QuestionText=q.QuestionText,
                                     PicturePath=q.PicturePath,
                                     
                                     SigmaCount= sa.SigmaCount,
                                     Validation=sa.Validation
                                 };
                    return result.FirstOrDefault();
                }
            
        }
    }
}
