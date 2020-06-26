using Estacionamento.DAO;
using Estacionamento.DAO.Repository;
using System;

namespace Estacionamento.BO
{
    public class CarroBO
    {
        private CarroRepository _carroRepository;
        public CarroBO(CarroRepository carroRepository) {
            _carroRepository = carroRepository;
        }

        public void AdicionarCarro (Carro carro)
        {
            _carroRepository.AddCarro(carro);
        }
    }
}
