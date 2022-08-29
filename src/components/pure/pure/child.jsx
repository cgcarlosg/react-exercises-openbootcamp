import React, {useRef} from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }
    return (
        <div style={{background: 'green'}}>
            <p onMouseOver={() => console.log('On mouse over')}>Hello, {name}</p>
            <button onClick={pressButton}>Boton 1</button>
            <button onClick={()=>pressButtonParams('hello')}>Boton 2</button>
            <input placeholder = 'Send a text ro your father' 
                   onFocus={()=>console.log('Input Focuse')}
                   onChange={(e)=>console.log('Input changed:', e.target.value)}
                    onCopy={()=>console.log('copied text from input')}
                    ref = {messageRef}
                    
                   />
            <button onClick={()=>send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop: '20px'}}> 
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='New Name'/>
                <button type='submit'>Update Name</button>
            </form></div>
        </div>
    );
}

export default Child;