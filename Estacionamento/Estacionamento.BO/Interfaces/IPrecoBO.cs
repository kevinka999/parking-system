using Estacionamento.DAO.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Estacionamento.BO.Interfaces
{
    public interface IPrecoBO
    {
        Task InserirPreco(PrecoModel preco);
        Task AtualizarPreco(PrecoModel preco);
        Task ExcluirPreco(int idPreco);
        Task<PrecoModel> BuscarPrecoAtivo(DateTime dataBuscar);
        Task<List<PrecoModel>> BuscarPrecos();
    }
}
