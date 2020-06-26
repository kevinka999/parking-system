using System;
using System.Collections.Generic;
using System.Text;

namespace Estacionamento.DAO.Repository
{
    public class EstacionamentoRepository
    {
        private DbContextEstacionamento _estacionamentoRepository;

        public EstacionamentoRepository(DbContextEstacionamento estacionamentoRepository)
        {
            _estacionamentoRepository = estacionamentoRepository;
        }
    }
}
