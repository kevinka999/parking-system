import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Estacionamento from './pages/Estacionamento';
import NovoEstacionamento from './pages/NovoEstacionamento'
import Preco from './pages/Preco';
import NovoPreco from './pages/NovoPreco'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/Estacionamento" />

                <Route path="/Estacionamento" exact component={Estacionamento}/>
                <Route path="/Estacionamento/Novo" component={NovoEstacionamento}/>

                <Route path="/Preco" exact component={Preco}/>
                <Route path="/Preco/Novo" component={NovoPreco}/>
            </Switch>
        </BrowserRouter>
    );
}