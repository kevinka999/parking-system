import React, {useState, useEffect, useCallback} from 'react';
import api from '../../services/api';

import {format} from 'date-fns'
import {TableContainer, Table, TableHead, TableBody, TableCell, TableRow} from '@material-ui/core';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import {Paper, Button, TextField, Fab} from '@material-ui/core';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddIcon from '@material-ui/icons/Add';

export default function Estacionamento(){
  const [veiculosEstacionados, setVeiculosEstacionados] = useState([]);
  const [dialogEstacionamento, setDialogEstacionamento] = useState(false);
  const [placaVeiculo, setPlacaVeiculo] = useState("");

  const handleDialogEstacionamento = () => setDialogEstacionamento(true);
  const handleFecharDialogEstacionamento = () => setDialogEstacionamento(false);

  const handleAlterarPlacaVeiculo = (e) => {
    setPlacaVeiculo(e.target.value);
  }

  const handleFinalizarEstacionamento = useCallback(async (idEstacionamento) => {
    try{
      await api.post('/Estacionamento/Encerrar/', {idEstacionamento}).then(setDialogEstacionamento(false));
    } catch(error) {
        alert("Houve um problema ao finalizar!");
    }
  }, []) 

  const handleAdicionarEstacionamento = useCallback(async (placaAdicionar) => {
    try{
      await api.post('/Estacionamento/Adicionar/', {'placaVeiculo': placaAdicionar})
    } catch(error) {
      alert("Houve um problema ao adicionar!");
    }
  }, []);

  useEffect(() => {
    async function fetch() {
      await api.get('Estacionamento/Index').then(({data}) => setVeiculosEstacionados(data))
    }
    fetch()
  }, [handleFinalizarEstacionamento, handleAdicionarEstacionamento])

  const DialogNovoEstacionamento = () => {
    return (
      <Dialog open={dialogEstacionamento} onClose={handleFecharDialogEstacionamento} aria-labelledby="idDialogTitle">
        <DialogTitle id="idDialogTitle">Adicionar Estacionamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escreva a placa do veiculo a ser estacionado.
          </DialogContentText>
          <TextField 
            id="btnPlacaVeiculo" 
            variant="outlined" 
            label="Placa Veiculo"
            margin="dense"
            value={placaVeiculo}
            onChange={handleAlterarPlacaVeiculo}
            autoFocus
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="default" onClick={handleFecharDialogEstacionamento}>
            Cancelar
          </Button>
          <Button color="default" onClick={() => handleAdicionarEstacionamento(placaVeiculo)}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  const TabelaEstacionamento = () => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Fab color="primary" aria-label="Add" onClick={handleDialogEstacionamento}>
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
      <DialogNovoEstacionamento />
      <TabelaEstacionamento />
    </React.Fragment>
  );
};