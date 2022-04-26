using Entity.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Reflection.Emit;
using System.Text;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace DataAccess
{
    public class TestingApplicationContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-TOT4JFM;Database=TestingApplication;Trusted_Connection=true");
            
        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Admin>().HasNoKey();
        //    modelBuilder.Entity<Trainer>().HasNoKey();
        //    modelBuilder.Entity<Student>().HasNoKey();
        //    modelBuilder.Entity<SectionA>().HasNoKey();
        //    modelBuilder.Entity<SectionB>().HasNoKey();

        //}


        public DbSet<Question> Questions { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<StudentAnswer> StudentsAnswers { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<UserType> UserTypes { get; set; }

    }
}
