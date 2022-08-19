import React from 'react';
import { Contacto } from '../../../models/contacto.class';
import { STATUS } from '../../../models/status.enum';
import ContactComponent from '../pure/contacto';


const ContactListComponent = () => {

    const defaultContact = new Contacto('Primer', 'Ejercicio', 'detaller@email.com', STATUS.NO_CONECTADO); 

    return (
        <div>
            <div>
                El contacto suyo:
            </div>
            <ContactComponent contacto={defaultContact} ></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
