import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('carlos');

    function showMessage(texto){
        alert(`Message received: ${texto}`);
    }

    function updateName(newName){
        setName(newName);
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
