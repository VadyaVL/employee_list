using el_back.logic.Models;
using System.Collections.Generic;

namespace el_back.logic.Services
{
    public interface IJobService
    {
        IEnumerable<JobDto> GetList();
    }
}
