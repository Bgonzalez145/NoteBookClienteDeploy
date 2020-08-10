import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { LoginUsuario } from '../models/login-usuario';
import { Usuario } from '../models/usuario';
import { JwtDTO } from '../models/jwt-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL  = 'https://notebookdeploy.herokuapp.com/api';
  apiURL2 = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  public registro(nuevoUsuario: NuevoUsuario): Observable<string>{
      return this.httpClient.post<string>(this.apiURL + '/register', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.apiURL + '/login', loginUsuario);
  }

  public informacionUsuario(nombreUsuario: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.apiURL + `/printUser/${nombreUsuario}`);
  }

  public imprimirUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.apiURL + '/printUsers');
  }

}