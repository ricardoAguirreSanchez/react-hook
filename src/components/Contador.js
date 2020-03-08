import React from 'react';
import { useState, Fragment } from 'react';

const Contador = () => {

    const [numero,setNumero] = useState(0);
    const aumenta = ()=>{
        setNumero(numero + 1)
    };

    return (
        <Fragment>
            <h3>Mi primer componente: {numero}</h3>
            {numero > 9?<h1>TE PASASTE!</h1>:''}
            <button onClick={aumenta}>Aumentar</button>
        </Fragment>
    );
}

export default Contador;