using System;
using System.Collections.Generic;
using System.Linq;
using Estacionamento.API.DTO;
using Estacionamento.BO;
using Estacionamento.DAO.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Estacionamento.BO.Interfaces;

namespace Estacionamento.API.Controllers
{
    [ApiController]
    [Route("Preco")]
    public class PrecoController
    {
        private IPrecoBO _precoBO;

        public PrecoController(IPrecoBO precoBO)
        {
            _precoBO = precoBO;
        }

        [HttpGet]
        [Route("Index")]
        public async Task<List<PrecoModel>> Index()
        {
            return await _precoBO.BuscarPrecos();
        }

        [HttpGet]
        [Route("BuscarAtivo")]
        public async Task<PrecoModel> BuscarPrecoAtivo()
        {
            DateTime dataBuscar = DateTime.Now;
            return await _precoBO.BuscarPrecoAtivo(dataBuscar);
        }

        [HttpPost]
        [Route("Buscar")]
        public async Task<PrecoModel> BuscarPreco(PrecoDTO precoRequest)
        {
            return await _precoBO.BuscarPrecoById(precoRequest.idPreco);
        }

        [HttpPost]
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

        [HttpPost]
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

        [HttpPost]
        [Route("Excluir")]
        public async Task Excluir(PrecoDTO precoRequest)
        {
            await _precoBO.ExcluirPreco(precoRequest.idPreco);
        }
    }
}
