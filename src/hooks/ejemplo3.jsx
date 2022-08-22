import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesion es: {state.sesion} </h2>
        </div>
    );
}

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession () {
        setSessionData(
            {
                token: 'jwt1234567',
                sesion: sessionData.sesion + 1
            }
        );
    }

    return (
        <div>
            <miContexto.Provider value={sessionData}>
            <h1>Ejemplo de componente con contexto</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSession}>Actualizar sesion</button>
            </miContexto.Provider>
        </div>
    );
}

export default  MiComponenteConContexto;
