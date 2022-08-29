import React, { useState, useEffect } from 'react';
import { Contacto } from '../../../models/contacto.class';
import ContactComponent from '../pure/contacto';
import ContactForm from '../pure/forms/contactForm';


const ContactListComponent = () => {

    const defaultContact1 = new Contacto('Primer', 'Ejer', 'tal@email.co', false);
    const defaultContact2 = new Contacto('Segundo', 'Exer', 'ler@email.co', true); 
    const defaultContact3 = new Contacto('tercer', 'Ex', 'ago@email.co', true); 

    const [contactos, setContactos] = useState([defaultContact1, defaultContact2, defaultContact3]);
    const [loading, setLoading] = useState(true);

    // control del ciclo de vida

    useEffect(() => {
        console.log('modificacion de contactos');
        setLoading(false);
        
        return () => {
            console.log('contact List component is going to unmount...')
        };
    }, [contactos]);

    function changeEstatus(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto[index].estatus = !tempContacto[index].estatus;
        setContactos(tempContacto);
    }

    function borrarContacto(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto.splice(index, 1);
        setContactos(tempContacto);
    }

    function addContacto(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto.push(contacto);
        setContactos(tempContacto);
    }
   
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>El contacto suyo:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px' }}>
                        <table >
                            <thead className='bg-dark'>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Estatus</th>
            
                                </tr>
                            </thead>
                            <tbody>
                            { contactos.map((contacto, index) => {
                                return (
                                    <ContactComponent 
                                        key={index} 
                                        contacto={contacto}
                                        changeEstatus={changeEstatus}
                                        remove={borrarContacto}></ContactComponent>
                                )
                            })}
                               
                            </tbody>
                        </table>
                    </div>
                 
                </div>
                    
            </div>
            <ContactForm add={addContacto}></ContactForm>
        </div>
    );
};


export default ContactListComponent;
