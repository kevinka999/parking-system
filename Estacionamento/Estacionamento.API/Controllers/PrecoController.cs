using System;
using System.Collections.Generic;
using System.Linq;
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
        public async Task Adicionar(Double valorInicial, DateTime dataInicial, DateTime dataFinal)
        {
            PrecoModel preco = new PrecoModel
            {
                ValorInicial = valorInicial,
                DataInicial = dataInicial,
                DataFinal = dataFinal
            };

            await _precoBO.InserirPreco(preco);
        }

        [Route("Atualizar")]
        public async Task Atualizar(int idPreco, Double valorInicial, DateTime dataInicial, DateTime dataFinal)
        {
            PrecoModel preco = new PrecoModel
            {
                Id = idPreco,
                ValorInicial = valorInicial,
                DataInicial = dataInicial,
                DataFinal = dataFinal
            };

            await _precoBO.AtualizarPreco(preco);
        }

        [Route("Excluir")]
        public async Task Excluir(int idPreco)
        {
            await _precoBO.ExcluirPreco(idPreco);
        }
    }
}
