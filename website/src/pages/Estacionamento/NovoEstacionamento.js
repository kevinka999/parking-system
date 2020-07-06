import React, {useState, useCallback} from 'react';
import api from '../../services/api';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField} from '@material-ui/core';

const DialogNovoEstacionamento = (props) => {
    const [placaVeiculo, setPlacaVeiculo] = useState("");

    const handleAdicionarEstacionamento = useCallback(async (placaAdicionar) => {
        try {
          await api.post('/Estacionamento/Adicionar/', {'placaVeiculo': placaAdicionar}).then(() => {
            props.adicionadoSucesso()
            props.fecharDialog()
            setPlacaVeiculo("")
          });
        } catch(error) {
          alert("Houve um problema ao adicionar!");
        }
      }, [props]);

    return (
      <Dialog open={props.valorDialog} onClose={props.fecharDialog} aria-labelledby="idDialogTitle">
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
            onChange={(e) => setPlacaVeiculo(e.target.value)}
            autoFocus
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="default" onClick={props.fecharDialog}>
            Cancelar
          </Button>
          <Button color="default" onClick={() => handleAdicionarEstacionamento(placaVeiculo)}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default DialogNovoEstacionamento;