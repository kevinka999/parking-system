import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Menu from './pages/Menu';
import Estacionamento from './pages/Estacionamento';
import Preco from './pages/Preco';

export default function Routes(){
    return(
        <BrowserRouter>
            <Menu />
            
            <Switch>
                <Redirect exact from="/" to="/Estacionamento" />

                <Route path="/Estacionamento" exact component={Estacionamento}/>
                <Route path="/Preco" exact component={Preco}/>
            </Switch>
        </BrowserRouter>
    );
}