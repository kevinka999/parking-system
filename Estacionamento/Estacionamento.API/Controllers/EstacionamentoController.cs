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
    public class EstacionamentoController
    {
        private EstacionamentoBO _estacionamentoBO;

        public EstacionamentoController(EstacionamentoBO estacionamentoBO) 
        {
            _estacionamentoBO = estacionamentoBO;
        }
    }
}
