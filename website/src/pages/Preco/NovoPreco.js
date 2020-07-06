import React, {useState, useCallback} from 'react';
import api from '../../services/api';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, Grid} from '@material-ui/core';

export default function DialogNovoPreco (props) {
  const [precoValorInicio, setPrecoValorInicio] = useState(0);
  const [precoDataInicio, setPrecoDataInicio] = useState(new Date());
  const [precoDataFinal, setPrecoDataFinal] = useState(new Date());
  
  const resetarTodosStates = () => {
      setPrecoValorInicio("");
      setPrecoDataInicio("");
      setPrecoDataFinal("");
  }

  const handleAdicionarPreco = useCallback(async (precoValorInicio, precoDataInicio, precoDataFim) => {
    const bodyRequest = {
        'valorInicial': parseFloat(precoValorInicio),
        'dataInicial': new Date(precoDataInicio),
        'dataFinal': new Date(precoDataFim),
    }
    try {
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
        <DialogContentText>Preencha os campos do formulario para cadastrar um novo <strong>preco</strong></DialogContentText>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField 
                id="lbPrecoInicial"
                variant="outlined"
                label="Preco Inicial"
                type="number"
                margin="dense"
                value={precoDataInicio}
                onChange={(e) => setPrecoDataInicio(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                variant="outlined"
                label="Data Valida Inicial"
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
            <Grid item xs={6}>
              <TextField 
                variant="outlined"
                label="Data Valida Final"
                type="datetime-local"
                margin="dense"
                value={precoValorInicio}
                onChange={(e) => setPrecoValorInicio(e.target.value)}
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
            precoValorInicio,
            precoDataInicio,
            precoDataFinal
        )}>
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}