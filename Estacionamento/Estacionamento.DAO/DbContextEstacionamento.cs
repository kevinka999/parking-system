using Microsoft.EntityFrameworkCore;
using Estacionamento.DAO.Models;

namespace Estacionamento.DAO
{
    public class DbContextEstacionamento : DbContext
    {
        public DbContextEstacionamento(DbContextOptions<DbContextEstacionamento> options) : base(options) { }

        public DbSet<VeiculoModel> VeiculoModel { get; set; }
        public DbSet<EstacionamentoModel> EstacionamentoModel  { get; set; }
        public DbSet<PrecoModel> PrecoModel { get; set; }
    }
}
