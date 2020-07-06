import React, { useCallback } from 'react';
import api from '../../services/api';
import { Button } from "@chakra-ui/core";
import {AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay} from "@chakra-ui/core";

export default function DeletarPreco(props) {
    const handleDeletarPreco = useCallback(async () => {
        try{
            await api.post('/Estacionamento/Excluir/', {'idPreco': props.idPreco})
            props.fecharDialog()
        } catch(error) {
            alert("Houve um problema ao deletar!");
        }
    }, [props]);

    return (
        <AlertDialog
          isOpen={props.valorDialog}
          onClose={props.fecharDialog}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Desejar deletar o preco <strong>ID({props.idPreco})</strong>?
            </AlertDialogHeader>
  
            <AlertDialogBody>
              Você tem certeza que seja excluir? está ação é irreversível
            </AlertDialogBody>
  
            <AlertDialogFooter>
              <Button onClick={props.fecharDialog}>
                Cancelar
              </Button>
              <Button variantColor="red" onClick={handleDeletarPreco} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    );
  }