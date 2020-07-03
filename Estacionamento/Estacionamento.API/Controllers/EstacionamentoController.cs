﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Estacionamento.API.DTO;
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
        public async Task Adicionar(EstacionamentoDTO estacionamentoRequest)
        {
            int numeroTotalCaracteresPlaca = 9;

            if (estacionamentoRequest.placaVeiculo.Length == numeroTotalCaracteresPlaca)
                await _estacionamentoBO.InserirEstacionamento(estacionamentoRequest.placaVeiculo);
        }

        [HttpPost]
        [Route("Encerrar")]
        public async Task<List<EstacionamentoModel>> Encerrar(EstacionamentoDTO estacionamentoRequest)
        {
            await _estacionamentoBO.EncerrarEstacionamento(estacionamentoRequest.idEstacionamento) ;
            return await _estacionamentoBO.BuscarEstacionamentos();
        }
    }
}
