using Estacionamento.BO.Interfaces;
using Estacionamento.DAO.Repository.Interfaces;
using Estacionamento.DAO.Models;
using NSubstitute;
using System;
using System.Threading.Tasks;
using Xunit;
using Estacionamento.BO;

namespace Estacionamento.TEST
{
    public class VeiculoTest
    {
        private IVeiculoRepository _veiculoRepository;
        private IVeiculoBO _veiculoBO;

        public VeiculoTest()
        {
            _veiculoRepository = Substitute.For<IVeiculoRepository>();
            _veiculoBO = new VeiculoBO(_veiculoRepository);
        }
    }
}
