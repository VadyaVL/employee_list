using el_back.models;
using System.Collections.Generic;

namespace el_back.dal.Repositories
{
    public interface IJobRepository
    {
        IEnumerable<Job> GetList();
    }
}
