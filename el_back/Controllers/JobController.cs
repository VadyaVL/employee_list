using System.Collections.Generic;
using el_back.logic.Models;
using el_back.logic.Services;
using Microsoft.AspNetCore.Mvc;

namespace el_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        #region Service

        private IJobService _jobService;

        #endregion

        public JobController(IJobService jobService) : base()
        {
            this._jobService = jobService;
        }

        [HttpGet("load-list")]
        public ActionResult<IEnumerable<JobDto>> LaodList()
        {
            return Ok(this._jobService.GetList());
        }
    }
}
