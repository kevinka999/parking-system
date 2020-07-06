import React, {useState, useEffect, useCallback} from 'react';
import api from '../../services/api';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, Grid} from '@material-ui/core';

export default function DialogAtualizarPreco (props) {
    const [precoValorInicial, setPrecoValorInicial] = useState(0);
    const [precoDataInicial, setPrecoDataInicial] = useState(new Date());
    const [precoDataFinal, setPrecoDataFinal] = useState(new Date());

    const handleTratarPreco = (objectPreco) => {
        setPrecoValorInicial(objectPreco.valorInicial)
        setPrecoDataInicial(objectPreco.dataInicial)
        setPrecoDataFinal(objectPreco.dataFinal)
    }

    useEffect(() => {
        async function fetch(){
          await api.post("/Preco/Buscar/", {'idPreco': props.idPreco}).then(({data}) => handleTratarPreco(data))
        }
    
        fetch()
      }, [props])

    const handleAtualizarPreco = useCallback(async (idPreco, valorInicial, dataInicial, dataFinal) => {
        try {
            const bodyRequest = {
                'idPreco': idPreco,
                'valorInicial': parseFloat(valorInicial),
                'dataInicial': new Date(dataInicial),
                'dataFinal': new Date(dataFinal),
            }

            await api.post('/Preco/Atualizar/', bodyRequest).then(() => {
                props.alertSucesso()
                props.fecharDialog()
            })
        } catch(error) {
            alert("Houve um problema ao atualizar!");
        }
    }, [props]);

    return (
        <Dialog open={props.valorDialog} onClose={props.fecharDialog} aria-labelledby="idDialogTitle">
            <DialogTitle id="idDialogTitle">Atualizar Preco</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Preencha os campos do formulario para atualizar o preco id <strong>{props.idPreco}</strong>
            </DialogContentText>
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
            <Button color="default" onClick={() => handleAtualizarPreco(
                props.idPreco,
                precoValorInicial,
                precoDataInicial,
                precoDataFinal
            )}>
                Atualizar
            </Button>
            </DialogActions>
        </Dialog>
    );
}