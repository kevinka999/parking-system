import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import ImagemMenu from '../../assets/imagemMenu.png';
import './style.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


export default function NavMenu() {
  const history = useHistory();
  const [valorPagina, setValorPagina] = useState("/Estacionamento");

  const handleTrocarPagina = useCallback(async (caminho) => {
    console.log(caminho)
    history.push(caminho)
  }, [valorPagina]);

  function ImagemCabecalho(){
    return(
      <img src={ImagemMenu} className="imagemMenu" alt="Estacionamento"/>
    );
  }

  return (
    <>
      <ImagemCabecalho />
      <BottomNavigation
        value={valorPagina}
        onChange={(event, value) => {
          console.log(`mudou para ${value}`)
          setValorPagina(value);
        }}
        showLabels
        className="navMenu"
      >
        <BottomNavigationAction value="/Estacionamento" label="Estacionamento" icon={<DirectionsCarIcon />} />
        <BottomNavigationAction value="/Preco" label="Preços" icon={<LocalOfferIcon />} />
      </BottomNavigation>
    </>
  );
}