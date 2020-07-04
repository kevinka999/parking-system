using System;
using System.Collections.Generic;
using System.Text;
using Estacionamento.DAO.Repository.Interfaces;
using Estacionamento.DAO.Models;
using System.Linq;
using System.Threading.Tasks;
using Estacionamento.BO.Interfaces;

namespace Estacionamento.BO
{
    public class PrecoBO : IPrecoBO
    {
        private IPrecoRepository _precoRepository;

        public PrecoBO(IPrecoRepository precoRepository)
        {
            _precoRepository = precoRepository;
        }

        public async Task InserirPreco(PrecoModel preco)
        {
            await _precoRepository.AddPreco(preco);
        }

        public async Task AtualizarPreco(PrecoModel preco)
        {
            await _precoRepository.UpdatePreco(preco);
        }

        public async Task ExcluirPreco(int idPreco)
        {
            PrecoModel preco = await _precoRepository.GetPreco(idPreco);
            await _precoRepository.RemovePreco(preco);
        }

        public async Task<PrecoModel> BuscarPrecoAtivo(DateTime dataBuscar)
        {
            List<PrecoModel> TabelaPrecos = await _precoRepository.GetAllPrecos();

            PrecoModel precoAtivo = TabelaPrecos.Where(x => x.DataInicial <= dataBuscar)
                                                .Where(x => x.DataFinal >= dataBuscar)
                                                .FirstOrDefault();
            if (precoAtivo == null)
                precoAtivo = TabelaPrecos.OrderByDescending(x => x.DataFinal).FirstOrDefault();

            return precoAtivo;
        }

        public async Task<List<PrecoModel>> BuscarPrecos()
        {
            return await _precoRepository.GetAllPrecos();
        }
    }
}
