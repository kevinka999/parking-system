using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Estacionamento.BO;
using Estacionamento.DAO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Estacionamento.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarroController : ControllerBase
    {
        private CarroBO _carroBO;
        public CarroController(CarroBO carroBO)
        {
            _carroBO = carroBO;
        }
        [HttpPost]
        public void AdicionarCarro(Carro carro)
        {
            _carroBO.AdicionarCarro(carro);
        }
    }
}
