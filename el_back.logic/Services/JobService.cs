using el_back.dal.Repositories;
using el_back.logic.Models;
using System.Collections.Generic;
using System.Linq;

namespace el_back.logic.Services
{
    public class JobService: IJobService
    {
        private IJobRepository _jobRepository;

        public JobService(IJobRepository jobRepository)
        {
            this._jobRepository = jobRepository;
        }

        public IEnumerable<JobDto> GetList()
        {
            var jobs = this._jobRepository.GetList();
            // We can use AutoMapper, but we can't use it
            return jobs.Select(job => new JobDto { Id = job.Id, Title = job.Title }).ToList();
        }
    }
}
