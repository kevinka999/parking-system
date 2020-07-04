using Estacionamento.DAO.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Estacionamento.DAO.Repository.Interfaces
{
    public interface IEstacionamentoRepository
    {
        Task AddEstacionamento(EstacionamentoModel estacionamento);
        Task UpdateEstacionamento(EstacionamentoModel estacionamento);
        Task<EstacionamentoModel> GetEstacionamento(int idEstacionamento);
        Task<List<EstacionamentoModel>> GetAllEstacionamento();
    }
}
