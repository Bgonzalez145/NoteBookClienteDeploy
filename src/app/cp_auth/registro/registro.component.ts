import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  apiURL  = 'https://notebookdeploy.herokuapp.com/api';
  apiURL2 = 'http://localhost:8080/api';

  nuevoUsuario: NuevoUsuario;
  nombreUsuario: string;
	passwordUsuario: string;
  nombre: string;
  apellido: string;
  email: string;

  isLogged = false;
  //private toastr: ToastrService;

  imagen: any = File;
  nameImage: string;
  idImage: string;
  validImage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private httpClient: HttpClient,
  ) { 
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()!=null){
      this.isLogged = true;
    }
  }
  
  onRegister(): void{
    this.nuevoUsuario = new NuevoUsuario(this.nombreUsuario, this.passwordUsuario, this.nombre, this.apellido, this.email, this.imagen);
    this.authService.registro(this.nuevoUsuario).subscribe(
      data => {      
        // Validacion de la creacion del usuario
        this.onUpload(this.nombreUsuario);
        // Resto del procedimiento 
        window.alert(' Usuario creado ');
        window.location.reload();
        this.router.navigate(['/register']);
      },
      err => {
        // Validacion del fallo al crear el usuario

        // Resto del procedimiento 
        window.alert(' Usuario o email ya existen ');
        this.router.navigate(['/register']);
       }
    );
 }

onUpload(nombreUsuario: string){
   const uploadImageData = new FormData();
   uploadImageData.append('imageFile', this.imagen, nombreUsuario);
   this.httpClient.post<any>(this.apiURL + '/upload', uploadImageData)
   .subscribe(response => {});
}

 onSelectedImage(event:any): void {
     // Quitando el nombre de la imagen anterior
     this.nameImage = "";
     this.validImage = "";

     if((event.target.files[0] != null) && ((event.target.files[0].name.substring(event.target.files[0].name.length - 4, event.target.files[0].name.length)===".jpg")||(event.target.files[0].name.substring(event.target.files[0].name.length - 4, event.target.files[0].name.length)===".png"))) {
       // Cargando la imagen actual
       this.imagen = event.target.files[0];
       // Poniendo el nombre de la imagen actual
       this.nameImage = this.imagen.name.substring(this.imagen.name.length - 19, this.imagen.name.length);
       this.validImage = this.nameImage;
     } 
 }

}
