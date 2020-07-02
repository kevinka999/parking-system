import React, {useState, useEffect} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import api from '../../services/api';

export default function Estacionamento(){

  const [veiculosEstacionados, setVeiculosEstacionados] = useState([]);

  useEffect(() => {
    async function fetch() {
      await api.get('Estacionamento/Index').then(({data}) => setVeiculosEstacionados(data))
    }
    fetch()
  }, [])
 
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Placa Veiculo</TableCell>
            <TableCell>Preco Inicial</TableCell>
            <TableCell>Data Entrada</TableCell>
            <TableCell>Data Saida</TableCell>
            <TableCell>Valor a Pagar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {veiculosEstacionados.map((veiculo) => (
            <TableRow key={veiculo.id}>
              <TableCell>{veiculo.veiculo.placa}</TableCell>
              <TableCell>{veiculo.preco.valorInicial}</TableCell>
              <TableCell>{veiculo.dataEntrada}</TableCell>
              <TableCell>{veiculo.dataSaida}</TableCell>
              <TableCell>{veiculo.valorPagar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};