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
    public class VeiculoController : ControllerBase
    {
        private VeiculoBO _veiculoBO;

        public VeiculoController(VeiculoBO veiculoBO)
        {
            _veiculoBO = veiculoBO;
        }

        [HttpPost]
        public void AdicionarCarro(Veiculo carro)
        {
        }
    }
}
