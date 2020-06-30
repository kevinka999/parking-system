using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Estacionamento.DAO.Models
{
    [Table("Estacionamento")]
    public class EstacionamentoModel
    {
        public int Id { get; set; }
        [ForeignKey("Veiculo")]
        public int VeiculoId { get; set; }
        [ForeignKey("Preco")]
        public int PrecoId { get; set; }
        public DateTime DataEntrada { get; set; }
        public DateTime DataSaida { get; set; }
        public double ValorPagar { get; set; }

        public virtual VeiculoModel Veiculo { get; set; }
        public virtual PrecoModel Preco { get; set; }
    }
}
