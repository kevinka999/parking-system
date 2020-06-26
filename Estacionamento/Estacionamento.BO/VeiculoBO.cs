using System;
using System.Collections.Generic;
using System.Text;
using Estacionamento.DAO.Repository;
using Estacionamento.DAO.Models;

namespace Estacionamento.BO
{
    public class VeiculoBO
    {
        private VeiculoRepository _veiculoRepository;

        public VeiculoBO(VeiculoRepository veiculoRepository) 
        {
            _veiculoRepository = veiculoRepository;
        }

        public void AdicionarVeiculo (Veiculo veiculo)
        {
            _veiculoRepository.AddVeiculo(veiculo);
        }
    }
}
