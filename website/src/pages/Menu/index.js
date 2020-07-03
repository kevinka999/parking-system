import React from 'react';
import NavMenu from './navMenu.js';
import ImagemMenu from '../../assets/imagemMenu.png';
import './style.css';

export default function Menu(){
    return (
        <div className="menuContent">
            <img src={ImagemMenu} className="imagemMenu" alt="Estacionamento"/>
            <NavMenu />
        </div>
    )
}