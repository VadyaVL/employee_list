using System.Collections.Generic;
using el_back.models;

namespace el_back.dal.Repositories
{
    public class TextJobRepository : IJobRepository
    {
        // private static string DB_FILE = "job.json";
        // We can use BD, or json file, but job-list is unmutable - we define jobs as simple list
        private IEnumerable<Job> jobTable = new List<Job>
        {
            new Job { Id = 1, Title = "Developer" },
            new Job { Id = 2, Title = "CEO" },
            new Job { Id = 3, Title = "QA" },
            new Job { Id = 4, Title = "Business Analytics" },
        };

        public IEnumerable<Job> GetList()
        {
            return this.jobTable;
        }
    }
}
