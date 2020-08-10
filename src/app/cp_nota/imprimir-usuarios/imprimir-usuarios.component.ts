import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-imprimir-usuarios',
  templateUrl: './imprimir-usuarios.component.html',
  styleUrls: ['./imprimir-usuarios.component.css']
})
export class ImprimirUsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.imprimirUsuarios();
  }

  imprimirUsuarios(){
     this.authService.imprimirUsuarios().subscribe(
       data => {
          this.usuarios = data;
       },
       err => {

       }
     );
  }

}
