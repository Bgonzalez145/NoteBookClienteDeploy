import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

  apiURL  = 'https://notebookdeploy.herokuapp.com/api';
  apiURL2 = 'http://localhost:8080/api';

  isLogged = false;
  isAdmin = false;
  roles: string[];

  usuario: Usuario;
  nombreUsuario: string;
  passwordUsuario: string;
  nombre: string;	
  apellido: string; 
  email: string;
  rol1 = "";
  rol2 = "";

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(
    private tokenService: TokenService, 
    private authService: AuthService,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()!=null){
      this.tokenService.setIsLogged(true);
      this.isLogged = this.tokenService.getIsLogged();
    }

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
        if(rol === 'ROL_ADMIN'){
            this.isAdmin = true; 
        }
     }
    );

    this.authService.informacionUsuario(this.tokenService.getUserName()).subscribe(
      data =>{
        this.usuario = data; 
        this.nombreUsuario = this.usuario.nombreUsuario;
        this.passwordUsuario = this.usuario.passwordUsuario;
        this.nombre = this.usuario.nombre;	
        this.apellido = this.usuario.apellido; 
        this.email = this.usuario.email;
        this.rol1 = this.usuario.roles[0].nombre;
        if(this.isAdmin===true){
          this.rol2 = this.usuario.roles[1].nombre;
        }
        this.getImage(this.nombreUsuario);
      },
      err => {
      }
    );
  }

  getImage(nombreUsuario: string){
    this.httpClient.get<any>(this.apiURL + `/get/${nombreUsuario}`)
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
  }

  cerrarSesion(): void{
    this.tokenService.setIsLogged(false);
    this.tokenService.logOut();
  }

}
