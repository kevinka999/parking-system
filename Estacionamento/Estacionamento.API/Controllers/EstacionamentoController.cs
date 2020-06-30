using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Estacionamento.BO;
using Estacionamento.DAO.Models;
using Microsoft.AspNetCore.Mvc;

namespace Estacionamento.API.Controllers
{
    [ApiController]
    [Route("Estacionamento")]
    public class EstacionamentoController
    {
        private EstacionamentoBO _estacionamentoBO;

        public EstacionamentoController(EstacionamentoBO estacionamentoBO) 
        {
            _estacionamentoBO = estacionamentoBO;
        }

        [HttpGet]
        [Route("Index")]
        public async Task<List<EstacionamentoModel>> Index()
        {
            return await _estacionamentoBO.BuscarEstacionamentos();
        }

        [HttpPost]
        [Route("Adicionar")]
        public async Task Adicionar(string placaVeiculo)
        {
            int numeroTotalCaracteresPlaca = 9;

            if (placaVeiculo.Length == numeroTotalCaracteresPlaca)
                await _estacionamentoBO.InserirEstacionamento(placaVeiculo);
        }

        [HttpPost]
        [Route("Encerrar")]
        public async Task<Double> Encerrar(int idEstacionamento)
        {
            Double PrecoPagar = await _estacionamentoBO.EncerrarEstacionamento(idEstacionamento);
            return PrecoPagar;
        }
    }
}
