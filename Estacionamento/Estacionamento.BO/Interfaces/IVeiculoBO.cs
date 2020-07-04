using Estacionamento.DAO.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Estacionamento.BO.Interfaces
{
    public interface IVeiculoBO
    {
        Task<VeiculoModel> AdicionarVeiculo(string placaVeiculo);
        Task<VeiculoModel> BuscarVeiculo(string placaVeiculo);
    }
}
