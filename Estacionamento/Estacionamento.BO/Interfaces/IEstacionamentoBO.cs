using Estacionamento.DAO.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Estacionamento.BO.Interfaces
{
    public interface IEstacionamentoBO
    {
        Task InserirEstacionamento(string placaVeiculo);
        Task EncerrarEstacionamento(int idEstacionamento);
        Task<List<EstacionamentoModel>> BuscarEstacionamentos();
        Double CalcularValorPagar(double valorHora, EstacionamentoModel estacionamento);
    }
}
