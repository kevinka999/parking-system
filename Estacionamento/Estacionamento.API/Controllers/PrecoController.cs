﻿using System;
using System.Collections.Generic;
using System.Linq;
using Estacionamento.API.DTO;
using Estacionamento.BO;
using Estacionamento.DAO.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Estacionamento.API.Controllers
{
    [ApiController]
    [Route("Preco")]
    public class PrecoController
    {
        private PrecoBO _precoBO;

        public PrecoController(PrecoBO precoBO)
        {
            _precoBO = precoBO;
        }

        [Route("Index")]
        public async Task<List<PrecoModel>> Index()
        {
            return await _precoBO.BuscarPrecos();
        }

        [Route("Adicionar")]
        public async Task Adicionar(PrecoDTO precoRequest)
        {
            PrecoModel preco = new PrecoModel
            {
                ValorInicial = precoRequest. valorInicial,
                DataInicial = precoRequest.dataInicial,
                DataFinal = precoRequest.dataFinal
            };

            await _precoBO.InserirPreco(preco);
        }

        [Route("Atualizar")]
        public async Task Atualizar(PrecoDTO precoRequest)
        {
            PrecoModel preco = new PrecoModel
            {
                Id = precoRequest.idPreco,
                ValorInicial = precoRequest.valorInicial,
                DataInicial = precoRequest.dataInicial,
                DataFinal = precoRequest.dataFinal
            };

            await _precoBO.AtualizarPreco(preco);
        }

        [Route("Excluir")]
        public async Task Excluir(PrecoDTO precoRequest)
        {
            await _precoBO.ExcluirPreco(precoRequest.idPreco);
        }
    }
}
