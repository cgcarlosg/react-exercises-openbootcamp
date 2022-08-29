import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../../models/contacto.class';

function ContactForm({add}) {

  const nameRef = useRef('');
  const apellidoRef = useRef('');
  const emailRef = useRef('');
  const estatusRef = useRef('')

 function addContacto(e) {
      e.preventDefault();
      const newContacto = new Contacto(
      nameRef.current.value,
      apellidoRef.current.value,
      emailRef.current.value,
      false
    );
    add(newContacto);
  }

  return (
    <>
<form onSubmit={addContacto} className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
     <input ref={nameRef} id="inputName" type="text" placeholder="Nombre" className='form-control form-control-lg'
        required autoFocus></input>
        <input ref={apellidoRef} id="inputApellido" type="text" placeholder="Apellido" className='form-control form-control-lg'
        required></input>
        <input ref={emailRef} id="inputEmail" type="mail" placeholder="Email" className='form-control form-control-lg'
        required></input>
      </div>
      <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button> 
  </form>
 
  </>
  )
}

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
}

export default ContactForm
