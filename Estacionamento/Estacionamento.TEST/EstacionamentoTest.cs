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
    public class EstacionamentoTest
    {
        private IEstacionamentoRepository _estacionamentoRepository;
        private IEstacionamentoBO _estacionamentoBO;
        private IPrecoBO _precoBO;
        private IVeiculoBO _veiculoBO;

        public EstacionamentoTest() 
        {
            _estacionamentoRepository = Substitute.For<IEstacionamentoRepository>();
            _precoBO = Substitute.For<IPrecoBO>();
            _veiculoBO = Substitute.For<IVeiculoBO>();

            _estacionamentoBO = new EstacionamentoBO(_estacionamentoRepository, _precoBO, _veiculoBO);
        }

        [Fact]
        public async Task Inserir_Estacionamento_Corretamente()
        {
            string placaVeiculo = "AAAA-1111";
            DateTime dataCadastro = DateTime.Now;

            _veiculoBO.BuscarVeiculo(placaVeiculo).Returns(
                new VeiculoModel {
                    Id = 1,
                    Placa = placaVeiculo
                }
            );

            _precoBO.BuscarPrecoAtivo(Arg.Any<DateTime>()).Returns(
                new PrecoModel
                {
                    Id = 1,
                    DataInicial = dataCadastro,
                    DataFinal = dataCadastro,
                    ValorInicial = 10,
                }
            );

            await _estacionamentoBO.InserirEstacionamento(placaVeiculo);

            await _estacionamentoRepository.Received(1)
                                            .AddEstacionamento(Arg.Is<EstacionamentoModel>(
                                                x => x.VeiculoId == 1 &&
                                                x.PrecoId == 1 &&
                                                x.DataEntrada.Date == dataCadastro.Date &&
                                                x.DataSaida == DateTime.MinValue &&
                                                x.ValorPagar == 0
                                            ));
        }

        [Fact]
        public async Task Encerrar_Estacionamento_Corretamente()
        {
            int idEstacionamento = 1;
            DateTime dataAgora = DateTime.Now;

            _estacionamentoRepository.GetEstacionamento(idEstacionamento).Returns(
                new EstacionamentoModel
                {
                    Id = idEstacionamento,
                    VeiculoId = 1,
                    PrecoId = 1,
                    DataEntrada = dataAgora
                }
            );

            _precoBO.BuscarPrecoAtivo(Arg.Any<DateTime>()).Returns(
                new PrecoModel
                {
                    Id = 1,
                    ValorInicial = 10,
                    DataInicial = dataAgora,
                    DataFinal = dataAgora.AddDays(1)
                }
            );

            await _estacionamentoBO.EncerrarEstacionamento(idEstacionamento);

            await _estacionamentoRepository.Received(1)
                                        .UpdateEstacionamento(Arg.Is<EstacionamentoModel>(
                                            x => x.VeiculoId == 1 &&
                                            x.PrecoId == 1 &&
                                            x.DataEntrada.Date == dataAgora.Date &&
                                            x.DataSaida.Date == dataAgora.Date &&
                                            x.ValorPagar == 5
                                        ));
        }

        [Fact]
        public void Calcular_Valor_A_Pagar_Corretamente()
        {
            EstacionamentoModel estacionamento = new EstacionamentoModel
            {
                Id = 1,
                DataEntrada = DateTime.Now,
                DataSaida = DateTime.Now.AddMinutes(1)
            };

            Double actionValorResultado = _estacionamentoBO.CalcularValorPagar(10, estacionamento);

            Assert.Equal(5, actionValorResultado);
        }
    }
}
