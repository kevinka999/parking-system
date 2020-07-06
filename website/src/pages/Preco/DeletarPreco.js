import React, {useCallback} from 'react';
import api from '../../services/api';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core';

export default function DialogAtualizarPreco (props) {
  const handleDeletarPreco = useCallback(async () => {
    try{
      await api.post('/Preco/Excluir/', {'idPreco': props.idPreco})
      props.alertSucesso()
      props.fecharDialog()
    } catch(error) {
      alert("Houve um problema ao deletar!");
    }
  }, [props]);

  return (
      <Dialog open={props.valorDialog} onClose={props.fecharDialog} aria-labelledby="idDialogTitle">
          <DialogTitle id="idDialogTitle">Deletar Preco</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Desejar deletar o preco id <strong>{props.idPreco}</strong>?
            </DialogContentText>
            Você tem certeza disso? está ação é irreversível
          </DialogContent>
          <DialogActions>
          <Button color="default" onClick={props.fecharDialog}>
              Cancelar
          </Button>
          <Button color="default" onClick={handleDeletarPreco}>
              Deletar
          </Button>
          </DialogActions>
      </Dialog>
  );
}