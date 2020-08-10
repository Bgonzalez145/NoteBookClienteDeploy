import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-imprimir-notas',
  templateUrl: './imprimir-notas.component.html',
  styleUrls: ['./imprimir-notas.component.css']
})
export class ImprimirNotasComponent implements OnInit {

  notas: Nota[] = [];
  toastr: ToastrService;

  constructor(
    private notaService: NotaService, 
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.imprimirNotasUsuario();
  }

  imprimirNotasUsuario(): void {
    this.notaService.imprimirNotasUsuario(this.tokenService.getUserName()).subscribe(
      data => {
        this.notas = data;
      },
      err => {
       console.log(err);
     }
    );
    //location.reload();
 }

 borrarNota(idNota: string) {
   this.notaService.borrarNota(idNota).subscribe(
     data => {
      //  this.toastr.success('Nota Eliminada', 'OK', {
      //    timeOut: 3000, positionClass: 'toast-top-center'
      //  });
       this.imprimirNotasUsuario();
     },
     err => {
      //  this.toastr.error(err.error.mensaje, 'Fail', {
      //    timeOut: 3000,  positionClass: 'toast-top-center',
      //  });
     }
   );
 }

 generarReporte(){
   this.notaService.generarReporte(this.tokenService.getUserName()).subscribe(
     data =>{
         window.alert(' Reporte enviado ');
     },
     err => {
         window.alert(' Fallo al enviar reporte ');
     }
   );
 }

}
