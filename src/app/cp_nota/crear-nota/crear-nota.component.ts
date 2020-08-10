import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { Nota } from 'src/app/models/nota';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit {

  nombreUsuario: string = '';
  titulo: string = '';	
  contenido: string = '';
  toastr: ToastrService;
  
  constructor(
    private notaService: NotaService,
    private router: Router,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.nombreUsuario = this.tokenService.getUserName();
  }

  crearNota(): void {
    const nota = new Nota(this.nombreUsuario, this.titulo, this.contenido, new Date());
    this.notaService.crearNota(nota).subscribe(
      data => {
        //  this.toastr.success('Nota creada', 'Ok', {
        //    timeOut: 3000, positionClass: 'toast-top-center'
        //  });
         this.router.navigate(['/printNotes']);
      },
      err => {
      //  this.toastr.error(err.error.mensaje , 'Fail', {
      //    timeOut: 3000, positionClass: 'toast-top-center'
      //  });
       this.router.navigate(['/printNotes']);
      }
    );
 }

}
