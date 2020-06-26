using System;
using System.Collections.Generic;
using System.Text;

namespace Estacionamento.DAO.Repository
{
    public class PrecoRepository
    {
        private DbContextEstacionamento _precoRepository;

        public PrecoRepository(DbContextEstacionamento precoRepository)
        {
            _precoRepository = precoRepository;
        }
    }
}
