using System.Collections.Generic;
using System.Text;
using Estacionamento.DAO.Repository;
using Estacionamento.DAO.Models;

namespace Estacionamento.BO
{
    public class PrecoBO
    {
        private PrecoRepository _precoRepository;

        public PrecoBO(PrecoRepository precoRepository)
        {
            _precoRepository = precoRepository;
        }
    }
}
