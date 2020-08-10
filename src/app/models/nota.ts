export class Nota {

    id: string;
	nombreUsuario: string;
    titulo: string;	
	contenido: string;
    fecha: Date;

    constructor(nombreUsuario: string, titulo: string, contenido: string, fecha: Date){
          this.nombreUsuario = nombreUsuario;
          this.titulo = titulo;
          this.contenido = contenido;
          this.fecha = fecha;
    }
    
}
