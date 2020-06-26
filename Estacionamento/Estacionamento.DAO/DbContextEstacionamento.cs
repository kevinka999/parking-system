using Microsoft.EntityFrameworkCore;
using Estacionamento.DAO.Models;

namespace Estacionamento.DAO
{
    public class DbContextEstacionamento : DbContext
    {
        public DbContextEstacionamento(DbContextOptions<DbContextEstacionamento> options) : base(options) { }

        public DbSet<Models.Veiculo> Veiculo { get; set; }
        public DbSet<Models.Estacionamento> Estacionamento  { get; set; }
        public DbSet<Models.Preco> Preco { get; set; }
    }
}
