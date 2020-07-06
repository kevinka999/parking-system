using Estacionamento.BO.Interfaces;
using Estacionamento.DAO.Repository.Interfaces;
using Estacionamento.DAO.Models;
using NSubstitute;
using System;
using System.Threading.Tasks;
using Xunit;
using Estacionamento.BO;
using System.Collections.Generic;

namespace Estacionamento.TEST
{
    public class PrecoTest
    {
        private IPrecoRepository _precoRepository;
        private IPrecoBO _precoBO;

        public PrecoTest()
        {
            _precoRepository = Substitute.For<IPrecoRepository>();
            _precoBO = new PrecoBO(_precoRepository);
        }

        [Fact]
        public async Task Buscar_Preco_Ativo_Corretamente()
        {
            List<PrecoModel> ArrangeListPreco = new List<PrecoModel>();
            PrecoModel ArrangePrecoAtivo = new PrecoModel
            {
                Id = 1,
                ValorInicial = 2,
                DataInicial = DateTime.Now,
                DataFinal = DateTime.Now.AddMinutes(1)
            };
            PrecoModel ArrangePrecoOutro = new PrecoModel
            {
                Id = 2,
                ValorInicial = 4,
                DataInicial = DateTime.Now.AddMonths(1),
                DataFinal = DateTime.Now.AddMonths(1).AddMinutes(1)
            };

            ArrangeListPreco.Add(ArrangePrecoAtivo);
            ArrangeListPreco.Add(ArrangePrecoOutro);


            _precoRepository.GetAllPrecos().Returns(ArrangeListPreco);


            PrecoModel ActionPrecoResult = await _precoBO.BuscarPrecoAtivo(DateTime.Now);

            Assert.Equal(ArrangePrecoAtivo, ActionPrecoResult);
        }
    }
}
