export class NuevoUsuario {
    
    nombreUsuario: string;
	passwordUsuario: string;
    nombre: string;
    apellido: string;
    email: string;
    roles: string[];
    imagen: File;

    constructor(nombreUsuario: string, passwordUsuario: string, nombre: string, apellido: string, email: string, imagen: File){
        this.nombreUsuario = nombreUsuario;
        this.passwordUsuario = passwordUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.imagen = imagen;
     }
    
}
