using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Estacionamento.DAO
{
    public class DbContextEstacionamento : Microsoft.EntityFrameworkCore.DbContext
    {
        public DbContextEstacionamento(DbContextOptions<DbContextEstacionamento> options) : base(options) { }

        public DbSet<Carro> Carro { get; set; }
    }
}
