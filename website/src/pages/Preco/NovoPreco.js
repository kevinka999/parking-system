import React, {useState, useCallback} from 'react';
import api from '../../services/api';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, Grid} from '@material-ui/core';

export default function DialogNovoPreco (props) {
  const [precoValorInicial, setPrecoValorInicial] = useState(0);
  const [precoDataInicial, setPrecoDataInicial] = useState(new Date());
  const [precoDataFinal, setPrecoDataFinal] = useState(new Date());
  
  const resetarTodosStates = () => {
      setPrecoValorInicial("");
      setPrecoDataInicial("");
      setPrecoDataFinal("");
  }

  const handleAdicionarPreco = useCallback(async (valorInicial, dataInicial, dataFinal) => {
    try {
      const bodyRequest = {
          'valorInicial': parseFloat(valorInicial),
          'dataInicial': new Date(dataInicial),
          'dataFinal': new Date(dataFinal),
      }

      await api.post('/Preco/Adicionar/', bodyRequest).then(() => {
        props.alertSucesso()
        props.fecharDialog()
        resetarTodosStates()
      })
    } catch(error) {
      alert("Houve um problema ao adicionar!");
    }
  }, [props]);

  return (
    <Dialog open={props.valorDialog} onClose={props.fecharDialog} aria-labelledby="idDialogTitle">
      <DialogTitle id="idDialogTitle">Adicionar Preco</DialogTitle>
      <DialogContent>
        <DialogContentText>Preencha os campos do formulario para cadastrar</DialogContentText>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField 
                id="lbPrecoInicial"
                variant="outlined"
                label="Preco Inicial"
                type="number"
                margin="dense"
                value={precoValorInicial}
                onChange={(e) => setPrecoValorInicial(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                variant="outlined"
                label="Data Valida Inicial"
                type="datetime-local"
                margin="dense"
                value={precoDataInicial}
                onChange={(e) => setPrecoDataInicial(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                variant="outlined"
                label="Data Valida Final"
                type="datetime-local"
                margin="dense"
                value={precoDataFinal}
                onChange={(e) => setPrecoDataFinal(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
          </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="default" onClick={props.fecharDialog}>
          Cancelar
        </Button>
        <Button color="default" onClick={() => handleAdicionarPreco(
            precoValorInicial,
            precoDataInicial,
            precoDataFinal
        )}>
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}