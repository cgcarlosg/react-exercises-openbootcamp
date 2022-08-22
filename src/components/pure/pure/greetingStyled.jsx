import React, {useState} from 'react';

const loggedStyle = {
    color: 'white' //para usuario loggeado
}

const unloggedStyle = {
    color: 'tomato', //para usuario no loggeado
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);
    const greetingUser = (<p> Hola,  {props.nombre} </p>);
    const pleaseLogin = (<p>Please Login</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
        {logged ?  greetingUser : pleaseLogin }
           
            <button onClick={() => {
                console.log('boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
