import React, { useEffect } from 'react';
import { Contacto } from '../../../models/contacto.class';
import PropTypes from 'prop-types';

import '../../../styles/contactos.scss';


const ContactComponent = ({contacto}) => {

    useEffect(() => {
        console.log('Contacto creado');
        return () => {
            console.log(`Contacto: ${contacto.nombre} is going to unmount`);
        };
    }, [contacto]);

    return (
        <div>
            <h1> Nombre contacto: {contacto.nombre} </h1>
            <h2 className="contacto-nombre"> Apellido contacto: {contacto.apellido} </h2>
            <h3> Email contato: {contacto.email} </h3>
            <h4> 
              Este contacto esta: {contacto.estatus ? 'Contacto En Linea' : 'Contacto No Disponible' }
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactComponent;
