using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using el_back.models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace el_back.dal.Repositories
{
    // Bad realization, for demonstrate
    public class TextEmployeeRepository : IEmployeeRepository
    {
        private static string DB_FILE = "employee.json";
        private readonly IHostingEnvironment _hostingEnvironment;
        private string _filePath;

        public TextEmployeeRepository(IHostingEnvironment hostingEnvironment)
        {
            this._hostingEnvironment = hostingEnvironment;
            this._filePath = $"{_hostingEnvironment.ContentRootPath}\\{DB_FILE}";

            if (!File.Exists(this._filePath))
            {
                var serializer = new JsonSerializer();

                using (StreamWriter sw = new StreamWriter(this._filePath))
                {
                    using (JsonWriter writer = new JsonTextWriter(sw))
                    {
                        serializer.Serialize(writer, new List<Employee>());
                    }
                }
            }
        }

        public IEnumerable<Employee> GetList()
        {
            return this.ReadAll();
        }

        public bool Delete(long employeeId)
        {
            var employee = this.ReadAll();
            var toDelete = employee.FirstOrDefault(e => e.Id == employeeId);

            if (toDelete == null)
            {
                return false;
            }

            this.WriteAll(employee.Where(e => e.Id != employeeId).ToList());
            return true;
        }

        public long Save(Employee newEmployee)
        {
            var employee = this.ReadAll().ToList();
            var maxId = employee.Count != 0 ? employee.Max(e => e.Id) : 0;
            var newId = maxId + 1;

            newEmployee.Id = newId;
            employee.Insert(0, newEmployee);

            this.WriteAll(employee);
            return newId;
        }

        public bool IsExist(string fName, string lName)
        {
            var employee = this.ReadAll();
            return employee.FirstOrDefault(e => e.FirstName.Equals(fName) && e.LastName.Equals(lName)) != null;
        }

        #region Private

        private IEnumerable<Employee> ReadAll()
        {
            var json = File.ReadAllText(this._filePath);

            return JsonConvert.DeserializeObject<IEnumerable<Employee>>(json);
        }

        private void WriteAll(IEnumerable<Employee> list)
        {
            var serializer = new JsonSerializer();

            using (StreamWriter sw = new StreamWriter(this._filePath))
            {
                using (JsonWriter writer = new JsonTextWriter(sw))
                {
                    serializer.Serialize(writer, list);
                }
            }
        }

        #endregion
    }
}
