using System;
using System.Collections.Generic;
using System.Text;
using Estacionamento.DAO.Repository;
using Estacionamento.DAO.Models;

namespace Estacionamento.BO
{
    public class EstacionamentoBO
    {
        private EstacionamentoRepository _estacionamentoRepository;

        public EstacionamentoBO(EstacionamentoRepository estacionamentoRepository)
        {
            _estacionamentoRepository = estacionamentoRepository;
        }
    }
}
