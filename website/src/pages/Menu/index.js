import React from 'react';
import NavMenu from './navMenu.js';
import Routes from '../../routes.js'

import './style.css';

export default function Menu(){
    return (
        <div className="menuContent">
            <NavMenu />
            <Routes />
        </div>
    )
}