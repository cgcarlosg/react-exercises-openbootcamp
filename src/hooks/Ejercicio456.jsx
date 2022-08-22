import React, { useEffect, useState } from 'react';

export const Clock = () => {

const estadoInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
};

const [estado, setEstado] = useState(estadoInicial);

function tick(){
    setEstado((prevState) => {
       let edad = prevState.edad +1;
       return {
          ...prevState,
          fecha: new Date(),
          edad
       }
    });
 }

    useEffect(() => {
        const timerID = setInterval (
           () => tick(), 1000
         );

    return () => {
        clearInterval(timerID);
    }

  }, []);

return (
        <div>
            <h2>
            Hora Actual <br></br>
            {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>{estado.nombre} {estado.apellidos}</h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    )
}

export default Clock;