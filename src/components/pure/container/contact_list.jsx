import React, { useState, useEffect } from 'react';
import { Contacto } from '../../../models/contacto.class';
import { STATUS } from '../../../models/status.enum';
import ContactComponent from '../pure/contacto';


const ContactListComponent = () => {

    const defaultContact = new Contacto('Primer', 'Ejercicio', 'detaller@email.com', STATUS.NO_CONECTADO); 

    const [contactos, setContactos] = useState([defaultContact]);
    const [loading, setLoading] = useState(true);

    // control del ciclo de vida

    useEffect(() => {
        console.log('modificacion de contactos');
        setLoading(false);
        
        return () => {
            console.log('contact List component is going to unmount...')
        };
    }, [contactos]);
   
    return (
        <div>
            <div>
                El contacto suyo:
            </div>
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
