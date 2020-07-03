using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estacionamento.API.DTO
{
    public class PrecoDTO
    {
        public int idPreco { get; set; }
        public Double valorInicial { get; set; }
        public DateTime dataInicial { get; set; }
        public DateTime dataFinal { get; set; }
    }
}
