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
    public class VeiculoBO : IVeiculoBO
    {
        private IVeiculoRepository _veiculoRepository;

        public VeiculoBO(IVeiculoRepository veiculoRepository)
        {
            _veiculoRepository = veiculoRepository;
        }

        public async Task<VeiculoModel> AdicionarVeiculo(string placaVeiculo)
        {
            VeiculoModel veiculo = new VeiculoModel() { Placa = placaVeiculo };
            await _veiculoRepository.AddVeiculo(veiculo);

            return veiculo;
        }

        public async Task<VeiculoModel> BuscarVeiculo(string placaVeiculo)
        {
            VeiculoModel veiculo = await _veiculoRepository.GetVeiculo(placaVeiculo);

            if (veiculo == null)
                veiculo = await AdicionarVeiculo(placaVeiculo);

            return veiculo;
        }
    }
}
