using Estacionamento.DAO.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Estacionamento.DAO.Repository.Interfaces
{
    public interface IVeiculoRepository
    {
        Task AddVeiculo(VeiculoModel veiculo);
        Task<VeiculoModel> GetVeiculo(string placaVeiculo);
    }
}
