using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Estacionamento.DAO.Models;

namespace Estacionamento.DAO.Repository
{
    public class VeiculoRepository
    {
        private DbContextEstacionamento _context;

        public VeiculoRepository(DbContextEstacionamento context) 
        {
            _context = context;
        }

        public void AddVeiculo(Veiculo veiculo)
        {
            _context.Veiculo.Add(veiculo);
        }
    }
}
