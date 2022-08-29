import React, { useEffect } from 'react';
import { Contacto } from '../../../models/contacto.class';
import PropTypes from 'prop-types';

import '../../../styles/contactos.scss';


const ContactComponent = ({contacto, changeEstatus, remove}) => {

    useEffect(() => {
        console.log('Contacto creado');
        return () => {
            console.log(`Contacto: ${contacto.nombre} is going to unmount`);
        };
    }, [contacto]);


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contacto.nombre}</span>
            </th>
       <td className='align-middle'>
         <span>{contacto.apellido} </span>
       </td>
       <td className='align-middle'>
         <span>{contacto.email} </span>
       </td>

       <td className='align-middle'>
       { contacto.estatus ? 
        <i onClick={()=>changeEstatus(contacto)} 
            class="bi bi-alarm-fill mx-2 contact-action" 
            style={{ fontSize: 20, color:'green' }}>true</i> : 
        <i onClick={()=>changeEstatus(contacto)} 
                class="bi bi-alarm-fill mx-2 contact-action" 
                style={{ fontSize: 22, color:'red' }}>false
                    {contacto.estatus}
            </i>
            }
    
            <i onClick={()=>remove(contacto)} class="bi-trash mx-3 contact-action" style={{ fontSize: 20, color:'tomato' }}></i>
       </td>
      
        </tr>
        
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    changeEstatus: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default ContactComponent;
