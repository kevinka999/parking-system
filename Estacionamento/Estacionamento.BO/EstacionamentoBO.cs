using System;
using System.Collections.Generic;
using System.Text;
using Estacionamento.DAO.Repository;
using Estacionamento.DAO.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Estacionamento.BO
{
    public class EstacionamentoBO
    {
        private EstacionamentoRepository _estacionamentoRepository;
        private PrecoBO _precoBO;
        private VeiculoBO _veiculoBO;

        public EstacionamentoBO(EstacionamentoRepository estacionamentoRepository, PrecoBO precoBO, VeiculoBO veiculoBO) 
        {
            _estacionamentoRepository = estacionamentoRepository;
            _precoBO = precoBO;
            _veiculoBO = veiculoBO;
        }

        public async Task InserirEstacionamento(string placaVeiculo)
        {
            DateTime dataCadastro = DateTime.Now;
            VeiculoModel veiculoEstacionar = await _veiculoBO.BuscarVeiculo(placaVeiculo);
            PrecoModel precoPagar = await _precoBO.BuscarPrecoAtivo(dataCadastro);

            EstacionamentoModel estacionamento = new EstacionamentoModel
            {
                PrecoId = precoPagar.Id,
                VeiculoId = veiculoEstacionar.Id,
                DataEntrada = dataCadastro,
            };

            await _estacionamentoRepository.AddEstacionamento(estacionamento);
        }

        public async Task EncerrarEstacionamento(int idEstacionamento)
        {
            EstacionamentoModel estacionamento = await _estacionamentoRepository.GetEstacionamento(idEstacionamento);

            DateTime dataSaida = DateTime.Now;
            estacionamento.DataSaida = dataSaida;

            PrecoModel preco = await _precoBO.BuscarPrecoAtivo(DateTime.Now);
            double valorPagar = CalcularValorPagar(preco.ValorInicial, estacionamento);
            estacionamento.ValorPagar = valorPagar;

            await _estacionamentoRepository.UpdateEstacionamento(estacionamento);
        }

        public async Task<List<EstacionamentoModel>> BuscarEstacionamentos()
        {
            return await _estacionamentoRepository.GetAllEstacionamento();
        }

        private Double CalcularValorPagar(double valorHora, EstacionamentoModel estacionamento)
        {
            Double valorPagar;

            TimeSpan duracaoEstacionamento = estacionamento.DataSaida.Subtract(estacionamento.DataEntrada);
            int duracaoTotalMinutos = Convert.ToInt32(Math.Round(duracaoEstacionamento.TotalMinutes));

            if (duracaoTotalMinutos > 60)
            {
                int duracaoRestanteMinutos;
                Math.DivRem(duracaoTotalMinutos, 60, out duracaoRestanteMinutos);
                int duracaoTotalHoras = duracaoTotalMinutos / 60;

                valorPagar = valorHora * duracaoTotalHoras;

                if (duracaoRestanteMinutos > 10)
                    valorPagar += valorHora;
            }

            else if (duracaoTotalMinutos <= 30)
                valorPagar = valorHora / 2;

            else
                valorPagar = valorHora;

            return valorPagar;
        }
    }
}
