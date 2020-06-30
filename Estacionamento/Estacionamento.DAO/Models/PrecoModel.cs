using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Estacionamento.DAO.Models
{
    [Table("Preco")]
    public class PrecoModel
    {
        public int Id { get; set; }
        public double ValorInicial { get; set; }
        public DateTime DataInicial { get; set; }
        public DateTime DataFinal { get; set; }
    }
}
