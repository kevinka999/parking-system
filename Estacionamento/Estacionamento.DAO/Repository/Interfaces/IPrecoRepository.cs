using Estacionamento.DAO.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Estacionamento.DAO.Repository.Interfaces
{
    public interface IPrecoRepository
    {
        Task AddPreco(PrecoModel preco);
        Task UpdatePreco(PrecoModel preco);
        Task RemovePreco(PrecoModel preco);
        Task<List<PrecoModel>> GetAllPrecos();
        Task<PrecoModel> GetPreco(int idPreco);
    }
}
