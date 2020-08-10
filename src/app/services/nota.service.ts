import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota'

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  apiURL  = 'https://notebookdeploy.herokuapp.com/api';
  apiURL2 = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  public imprimirNotas(): Observable<Nota[]>{
     return this.httpClient.get<Nota[]>(this.apiURL + '/printNotes');
  }

  public imprimirNotasUsuario(nombreUsuario: string): Observable<Nota[]>{
     return this.httpClient.get<Nota[]>(this.apiURL + `/printNotesUser/${nombreUsuario}`);
  }

  public crearNota(nota: Nota):Observable<any>{
     return this.httpClient.post<any>(this.apiURL + '/createNote', nota);
  }

  public actualizarNota(idNota: string, nota: Nota): Observable<any>{
    return this.httpClient.post<any>(this.apiURL + `/updateNote/${idNota}`, nota);
  }

  public borrarNota(idNota: string): Observable<any>{
    return this.httpClient.get<any>(this.apiURL + `/deleteNote/${idNota}`);
  }

  public imprimirNota(id: string): Observable<Nota> {
    return this.httpClient.get<Nota>(this.apiURL + `/printNote/${id}`);
  }

  public generarReporte(nombreUsuario: string): Observable<any>{
    return this.httpClient.get<any>(this.apiURL + `/printReportNotes/${nombreUsuario}`);
  }
}
