using System;
using System.Collections.Generic;

namespace el_back.models
{
    public class Employee
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IEnumerable<long> Jobs { get; set; }
        public DateTime EmploymentDate { get; set; }
        public long Rate { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
