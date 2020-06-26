using System;
using System.Collections.Generic;
using System.Linq;
using Estacionamento.BO;
using Estacionamento.DAO.Models;
using Microsoft.AspNetCore.Mvc;

namespace Estacionamento.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrecoController
    {
        private PrecoBO _precoBO;

        public PrecoController(PrecoBO precoBO)
        {
            _precoBO = precoBO;
        }
    }
}
