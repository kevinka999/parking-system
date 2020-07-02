import React, {useState, useEffect} from 'react';
import {format} from 'date-fns'

import api from '../../services/api';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function Estacionamento(){
  const [veiculosEstacionados, setVeiculosEstacionados] = useState([]);

  useEffect(() => {
    async function fetch() {
      await api.get('Estacionamento/Index').then(({data}) => setVeiculosEstacionados(data))
    }
    fetch()
  }, [])

  async function handleFinalizarEstacionamento(idEstacionamento){
    try{
        await api.post('/Estacionamento/Encerrar/', {idEstacionamento}).then(({data}) => setVeiculosEstacionados(data))
    } catch(error) {
        alert("Houve um problema ao finalizar!");
    }
  }

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
          {veiculosEstacionados.map((estacionado) => (
            <TableRow key={estacionado.id}>
              <TableCell align="center">{estacionado.veiculo.placa}</TableCell>
              <TableCell align="center">R${estacionado.preco.valorInicial}</TableCell>
              <TableCell align="center">{format(new Date(estacionado.dataEntrada), 'dd/MM/yyyy HH:mm')}</TableCell>
              <TableCell align="center">
                {estacionado.valorPagar !== 0 && (
                  format(new Date(estacionado.dataSaida), 'dd/MM/yyyy HH:mm')
                )}
              </TableCell>
              <TableCell align="center">
                {estacionado.valorPagar !== 0 && (
                  `R$${estacionado.valorPagar}`
                )}
              </TableCell>
              <TableCell align="center">
                {!estacionado.valorPagar && (
                  <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => handleFinalizarEstacionamento(estacionado.id)}
                  >
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