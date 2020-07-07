import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import ImagemMenu from '../../assets/imagemMenu.png';
import './style.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


export default function NavMenu() {
  let location = useLocation();

  const ImagemCabecalho = () => {
    return(
      <img src={ImagemMenu} className="imagemMenu" alt="Estacionamento"/>
    );
  }

  return (
    <div className="menuContent">
      <ImagemCabecalho />

      <BottomNavigation
        value={location.pathname}
        showLabels
        className="navMenu"
      >
        <BottomNavigationAction value="/Estacionamento" label="Estacionamento" icon={<DirectionsCarIcon />} component={Link} to="/Estacionamento" />
        <BottomNavigationAction value="/Preco" label="Preços" icon={<LocalOfferIcon />} component={Link} to="/Preco" />
      </BottomNavigation>
    </div>
  );
}