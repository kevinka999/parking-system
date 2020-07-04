import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

export default function NovoEstacionamento(){
    return (
        <Card>
            <form className="formulario">
                <Typography variant="h4" gutterBottom>Novo estacionamento</Typography>
                <TextField id="outlined-basic" label="Placa do Veiculo" variant="outlined" className="campoFormulario" />

                <div className="botaoFormulario">
                    <Fab color="primary" variant="extended">
                        <AddIcon />
                        &nbsp;Adicionar
                    </Fab>
                    <Fab color="primary" variant="extended">
                        <AddIcon />
                        &nbsp;Adicionar
                    </Fab>
                </div>
            </form>
        </Card>
    );
}