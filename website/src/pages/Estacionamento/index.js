import React, {useState} from 'react';
import MaterialTable from 'material-table';

import api from '../../services/api.js';

export default function Estacionamento(){

  const [colunasTabela, setColunasTabela] = useState();
  const [veiculosEstacionados, setVeiculosEstacionados] = useState([]);

  api.get("Estacionamento/Index").then((response) => {
    inserirColunasTabela();
    setVeiculosEstacionados(response.data);
  });

  function inserirColunasTabela(){
    setColunasTabela([
      { title: 'Placa Veiculo', field: 'veiculo.placa'},
      { title: 'Preco Inicial', field: 'preco.valorInicial'},
      { title: 'Entrada', field: 'dataEntrada'},
      { title: 'Saida', field: 'dataSaida'},
      { title: 'Valor', field: 'valorPagar'}
    ]);
  }
  
  return (
    <MaterialTable
      title="Estacionamento"
      columns={colunasTabela}
      data={veiculosEstacionados}
    />
  );
};