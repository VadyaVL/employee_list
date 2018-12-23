using el_back.logic.Models;
using System.Collections.Generic;

namespace el_back.logic.Services
{
    public interface IEmployeeService
    {
        IEnumerable<EmployeeDto> GetList();
        EmployeeDto Create(CreateEmployeeDto newEmployee);
        bool Delete(long employeeId);
        bool IsExist(string fName, string lName);
    }
}
