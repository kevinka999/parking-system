using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Web;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Estacionamento.DAO.Models;
using Estacionamento.DAO.Repository.Interfaces;

namespace Estacionamento.DAO.Repository
{
    public class EstacionamentoRepository : IEstacionamentoRepository
    {
        private DbContextEstacionamento _context;

        public EstacionamentoRepository(DbContextEstacionamento context)
        {
            _context = context;
        }

        public async Task AddEstacionamento(EstacionamentoModel estacionamento)
        {
            await _context.EstacionamentoModel.AddAsync(estacionamento);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateEstacionamento(EstacionamentoModel estacionamento)
        {
            _context.EstacionamentoModel.Update(estacionamento);
            await _context.SaveChangesAsync();
        }

        public async Task<EstacionamentoModel> GetEstacionamento(int idEstacionamento)
        {
            return await _context.EstacionamentoModel.Where(x => x.Id.Equals(idEstacionamento))
                                                    .FirstOrDefaultAsync();
        }

        public async Task<List<EstacionamentoModel>> GetAllEstacionamento()
        {
            return await _context.EstacionamentoModel.Include(x => x.Veiculo)
                                                    .Include(x => x.Preco)
                                                    .OrderByDescending(x => x.DataEntrada)
                                                    .ToListAsync();
        }
    }
}
