import React, {useState, useCallback} from 'react';
import {Link} from 'react-router-dom';

import ImagemMenu from '../../assets/imagemMenu.png';
import './style.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


export default function NavMenu() {
  //const history = useHistory();
  const [valorPagina, setValorPagina] = useState("/Estacionamento");

  // const handleTrocarPagina = useCallback((caminho) => {
  //   setValorPagina(caminho);
  //   history.push(caminho)
  // }, [history]);

  const ImagemCabecalho = () => {
    return(
      <img src={ImagemMenu} className="imagemMenu" alt="Estacionamento"/>
    );
  }

  return (
    <>
      <ImagemCabecalho />

      <BottomNavigation
        value={valorPagina}
        // onChange={(event, value) => {
        //   handleTrocarPagina(value);
        // }}
        showLabels
        className="navMenu"
      >
        <Link to="/Estacionamento">
          <BottomNavigationAction value="/Estacionamento" label="Estacionamento" icon={<DirectionsCarIcon />} />
        </Link>
        <BottomNavigationAction value="/Preco" label="Preços" icon={<LocalOfferIcon />} />
      </BottomNavigation>
    </>
  );
}