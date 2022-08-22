import React, { useState, useEffect, useRef } from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    function incrementarContador1() {
        setContador1(contador1+1);
    }

    function incrementarContador2() {
        setContador2(contador2+1);
    }

/*     useEffect(() => {
        console.log('cambio en el estado del componente');
        console.log('mostrando referencia al elemento del DOM');
        console.log(miRef);
     });*/
     useEffect(() => {
        console.log('cambio en el estado del contador 1');
        console.log('mostrando referencia al elemento del DOM');
        console.log(miRef);
     },[contador1]); //[contador1, contador2] en caso de querer escoger varios componentes seleccionados
    
    return (
        <div>
               <h1>Ejemplo de useEffect, useRef y useEffect</h1>
               <h2>contador 1: {contador1} </h2>
               <h2>contador 2: {contador2} </h2>
               <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

               <div>
                <button onClick={incrementarContador1}>Incrementar Contador 1 </button>
                <button onClick={incrementarContador2}>Incrementar Contador 2 </button>
               </div>
        </div>
    );
}

export default Ejemplo2;
