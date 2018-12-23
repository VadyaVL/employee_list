using el_back.dal.Repositories;
using el_back.logic.Models;
using el_back.models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace el_back.logic.Services
{
    public class EmployeeService : IEmployeeService
    {
        private IEmployeeRepository _employeeRepository;
        private IJobRepository _jobRepository;

        public EmployeeService(
            IEmployeeRepository employeeRepository,
            IJobRepository jobRepository
        )
        {
            this._employeeRepository = employeeRepository;
            this._jobRepository = jobRepository;
        }

        public IEnumerable<EmployeeDto> GetList()
        {
            var employees = this._employeeRepository.GetList();
            var jobs = this._jobRepository.GetList();

            // We can use AutoMapper, but we can't use it
            var result = employees.Select(employee => new EmployeeDto {
                Id = employee.Id,
                Rate = employee.Rate,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                EmploymentDate = employee.EmploymentDate,
                CreationDate = employee.CreationDate,
                Jobs = jobs.Where(j => employee.Jobs.Contains(j.Id)).Select(job => new JobDto { Id = job.Id, Title = job.Title }).ToList()
            }).ToList();

            return result;
        }

        public EmployeeDto Create(CreateEmployeeDto newEmployee)
        {
            if (this._employeeRepository.IsExist(newEmployee.FirstName, newEmployee.LastName))
            {
                throw new Exception("Employee exist.");
            }

            var employee = new Employee {
                FirstName = newEmployee.FirstName,
                LastName = newEmployee.LastName,
                Rate = newEmployee.Rate,
                EmploymentDate = newEmployee.EmploymentDate,
                CreationDate = DateTime.UtcNow,
                Jobs = newEmployee.Jobs,
            };

            employee.Id = this._employeeRepository.Save(employee);
            var jobs = this._jobRepository.GetList();

            return new EmployeeDto
            {
                Id = employee.Id,
                Rate = employee.Rate,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                EmploymentDate = employee.EmploymentDate,
                CreationDate = employee.CreationDate,
                Jobs = jobs.Where(j => employee.Jobs.Contains(j.Id)).Select(job => new JobDto { Id = job.Id, Title = job.Title }).ToList()
            };
        }

        public bool Delete(long employeeId)
        {
            return this._employeeRepository.Delete(employeeId);
        }

        public bool IsExist(string fName, string lName)
        {
            return this._employeeRepository.IsExist(fName, lName);
        }
    }
}
