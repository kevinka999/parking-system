import React, {useState, useEffect, useCallback} from 'react';
import DialogNovoEstacionamento from './NovoEstacionamento';
import api from '../../services/api';

import {format} from 'date-fns';
import {Alert} from '@material-ui/lab';
import {TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper, Button, Fab, Collapse} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddIcon from '@material-ui/icons/Add';

export default function Estacionamento(){
  const [veiculosEstacionados, setVeiculosEstacionados] = useState([]);
  const [dialogAberto, setDialogAberto] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const [adicionadoSucesso, setAdicionadoSucesso] = useState(false);

  const handleFinalizarEstacionamento = useCallback(async (idEstacionamento) => {
    try{
      await api.post('/Estacionamento/Encerrar/', {idEstacionamento});
      setUpdateTable(!updateTable)
    } catch(error) {
        alert("Houve um problema ao finalizar!");
    }
  }, [updateTable]);

  useEffect(() => {
    async function fetch() {
      await api.get('Estacionamento/Index').then(({data}) => setVeiculosEstacionados(data))
    }

    fetch()
  }, [updateTable])

  const handleAbrirAlertaSucesso = () => {
    setAdicionadoSucesso(true)
    setTimeout(() => setAdicionadoSucesso(false), 2000)
  }

  const AlertAdicionadoSucesso = () => {
    return(
      <Collapse in={adicionadoSucesso}>
        <Alert severity="success">Veiculo adicionado ao estacionamento com <strong>sucesso!</strong></Alert>
      </Collapse>
    );
  }

  const TabelaEstacionamento = () => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Fab color="primary" aria-label="Add" onClick={() => setDialogAberto(true)}>
                  <AddIcon />
                </Fab>
              </TableCell>
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
                <TableCell align="center">{estacionado.id}</TableCell>
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
                      <CheckCircleIcon />
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
  }

  return (
    <React.Fragment>
      <AlertAdicionadoSucesso/>
      <DialogNovoEstacionamento
        valorDialog={dialogAberto}
        fecharDialog={() => {
          setDialogAberto(false)
          setUpdateTable(!updateTable)
        }}
        adicionadoSucesso={handleAbrirAlertaSucesso}
      />
      <TabelaEstacionamento />
    </React.Fragment>
  );
};