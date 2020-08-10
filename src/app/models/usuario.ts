import { Rol } from '../models/rol';

export class Usuario {
   
    nombreUsuario: string;
    passwordUsuario: string;
    nombre: string;	
    apellido: string; 
    email: string;
    roles: Rol[];
    imagen: any;

    constructor(nombreUsuario: string){
       this.nombreUsuario = nombreUsuario;
    }
    
}