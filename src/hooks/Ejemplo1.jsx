import React, {useState} from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre :"Carlos",
        email : "email@example.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
            
    function incrementarContador() {
        setContador(contador+1)
    }

    function actualizarPersona() {
        setPersona({
            nombre: "Jose",
            email: "cambiador@example.com"
        });
    }

    return (
        <div>
            contador: {contador}
            nombre: {persona.nombre}
            correo: {persona.email}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
