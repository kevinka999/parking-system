import React, {useState, useEffect} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
            <TableCell align="center">Placa Veiculo</TableCell>
            <TableCell align="center">Preco Inicial</TableCell>
            <TableCell align="center">Data Entrada</TableCell>
            <TableCell align="center">Data Saida</TableCell>
            <TableCell align="center">Valor a Pagar</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {veiculosEstacionados.map((veiculo) => (
            <TableRow key={veiculo.id}>
              <TableCell align="center">{veiculo.veiculo.placa}</TableCell>
              <TableCell align="center">{veiculo.preco.valorInicial}</TableCell>
              <TableCell align="center">{veiculo.dataEntrada}</TableCell>

              <TableCell align="center">
                {veiculo.valorPagar && (
                  veiculo.dataSaida
                )}
              </TableCell>

              <TableCell align="center">
                {veiculo.valorPagar && (
                  veiculo.valorPagar
                )}
              </TableCell>

              <TableCell align="center">
                {!veiculo.valorPagar && (
                  <Button variant="contained" color="primary">
                    <Icon>done</Icon>
                    &nbsp;Finalizar
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};