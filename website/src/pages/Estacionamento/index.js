import React, {useState} from 'react';

import api from '../../services/api.js';

export default function Estacionamento(){
    const [estacionados, setEstacionados] = useState([]);

    api.get("Estacionamento/Index").then((response) => {
        console.log(response.data);
    })

    return (
        <h1>Estacionamento</h1>
    );
};