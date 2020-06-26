using System;
using System.Collections.Generic;
using System.Text;

namespace Estacionamento.DAO.Models
{
    public class Preco
    {
        public int Id { get; set; }
        public double ValorInicial { get; set; }
        public DateTime DataInicial { get; set; }
        public DateTime DataFinal { get; set; }
    }
}
