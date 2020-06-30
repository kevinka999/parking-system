using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Estacionamento.DAO.Models
{
    [Table("Veiculo")]
    public class VeiculoModel
    {
        public int Id { get; set; }
        public string Placa { get; set; }
    }
}
