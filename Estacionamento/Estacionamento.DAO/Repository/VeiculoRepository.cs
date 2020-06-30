using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Web;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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

        public async Task AddVeiculo(VeiculoModel veiculo)
        {
            await _context.VeiculoModel.AddAsync(veiculo);
            await _context.SaveChangesAsync();
        }

        public async Task<VeiculoModel> GetVeiculo(string placaVeiculo)
        {
            return await _context.VeiculoModel.Where(x => x.Placa == placaVeiculo)
                                            .FirstOrDefaultAsync();
        }
    }
}
