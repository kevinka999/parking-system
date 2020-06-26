using System;
using System.Collections.Generic;
using System.Text;

namespace Estacionamento.DAO.Models
{
    public class Estacionamento
    {
        public int Id { get; set; }
        public int VeiculoId { get; set; }
        public int PrecoId { get; set; }
        public DateTime DataEntrada { get; set; }
        public DateTime DataSaida { get; set; }
        public double ValorPagar { get; set; }

        public virtual Veiculo Veiculo { get; set; }
        public virtual Preco Preco { get; set; }
    }
}
