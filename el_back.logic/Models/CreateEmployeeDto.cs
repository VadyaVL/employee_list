using System;
using System.Collections.Generic;

namespace el_back.logic.Models
{
    public class CreateEmployeeDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime EmploymentDate { get; set; }
        public long Rate { get; set; }
        public IEnumerable<long> Jobs { get; set; }
    }
}
