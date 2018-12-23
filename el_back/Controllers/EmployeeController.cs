using System.Collections.Generic;
using el_back.logic.Models;
using el_back.logic.Services;
using Microsoft.AspNetCore.Mvc;

namespace el_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        #region Service

        private IEmployeeService _employeeService;

        #endregion

        public EmployeeController(IEmployeeService employeeService) : base()
        {
            this._employeeService = employeeService;
        }

        [HttpGet("load-list")]
        public ActionResult<IEnumerable<EmployeeDto>> LaodList()
        {
            return Ok(this._employeeService.GetList());
        }

        [HttpPost("create")]
        public ActionResult<EmployeeDto> Cleate([FromBody]CreateEmployeeDto model)
        {
            return Ok(this._employeeService.Create(model));
        }

        [HttpDelete("delete/{employeeId}")]
        public ActionResult<bool> Get(long employeeId)
        {
            return Ok(this._employeeService.Delete(employeeId));
        }
    }
}
