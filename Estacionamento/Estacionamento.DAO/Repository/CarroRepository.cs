using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Estacionamento.DAO.Repository
{
    public class CarroRepository
    {
        private DbContextEstacionamento _context;
        public CarroRepository(DbContextEstacionamento context) {
            _context = context;
        }

        public void AddCarro(Carro carro)
        {
            _context.Carro.Add(carro);
        }
    }
}
