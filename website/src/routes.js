import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Estacionamento from './pages/Estacionamento';
import NovoEstacionamento from './pages/NovoEstacionamento'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Estacionamento}/>
                <Route path="/Novo/Estacionamento" component={NovoEstacionamento}/>
            </Switch>
        </BrowserRouter>
    );
}