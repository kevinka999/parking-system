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
    public class PrecoRepository : IPrecoRepository
    {
        private DbContextEstacionamento _context;

        public PrecoRepository(DbContextEstacionamento context)
        {
            _context = context;
        }

        public async Task AddPreco(PrecoModel preco)
        {
            await _context.PrecoModel.AddAsync(preco);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePreco(PrecoModel preco)
        {
            _context.PrecoModel.Update(preco);
            await _context.SaveChangesAsync();
        }

        public async Task RemovePreco(PrecoModel preco)
        {
            _context.PrecoModel.Remove(preco);
            await _context.SaveChangesAsync();
        }

        public async Task<List<PrecoModel>> GetAllPrecos()
        {
            return await _context.PrecoModel.OrderByDescending(x => x.Id)
                                            .ToListAsync();
        }

        public async Task<PrecoModel> GetPreco(int idPreco)
        {
            return await _context.PrecoModel.Where(x => x.Id.Equals(idPreco))
                                            .FirstOrDefaultAsync();
        }

    }
}
