import { STATUS } from "./status.enum";

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    estatus = STATUS.NO_CONECTADO;

    constructor(nombre, apellido, email, estatus) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estatus = estatus
    }
}