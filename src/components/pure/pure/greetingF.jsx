import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

const [age, setage] = useState(44);

const birthday = () => {
    setage(age+1);
}

    return (
        <div>
              <h1>Hola {props.name}</h1>
                <h2>tu edad es de {age}</h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
