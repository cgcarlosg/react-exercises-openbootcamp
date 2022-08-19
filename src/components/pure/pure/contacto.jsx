import React from 'react';
import { Contacto } from '../../../models/contacto.class';
import PropTypes from 'prop-types';


const ContactComponent = ({contacto}) => {
    return (
        <div>
            <h1> Nombre contacto: {contacto.nombre} </h1>
            <h3> Apellido contacto: {contacto.apellido} </h3>
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
