import React from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


export default function navMenu() {
  
  return (
    <BottomNavigation
      showLabels
      className="navMenu"
    >
      <BottomNavigationAction label="Estacionamento" icon={<DirectionsCarIcon />} />
      <BottomNavigationAction label="Preços" icon={<LocalOfferIcon />} />
    </BottomNavigation>
  );
}