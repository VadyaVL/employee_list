using el_back.models;
using System.Collections.Generic;

namespace el_back.dal.Repositories
{
    public interface IEmployeeRepository
    {
        IEnumerable<Employee> GetList();
        long Save(Employee newEmployee);
        bool Delete(long employeeId);
        bool IsExist(string fName, string lName);
    }
}
