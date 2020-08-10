import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { ToastrService } from 'ngx-toastr';
import { NotaService } from 'src/app/services/nota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {

  nota: Nota = null;
  private toastr: ToastrService;

  constructor(
    private notaService: NotaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const idNota = this.activatedRoute.snapshot.params.idNota;
    this.notaService.imprimirNota(idNota).subscribe(
      data => {
        this.nota = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/printNotes']);
      }
    );
  }

  actualizarNota(): void {
    const id = this.activatedRoute.snapshot.params.idNota;
    this.notaService.actualizarNota(id, this.nota).subscribe(
      data => {
        // this.toastr.success('Nota Actualizada', 'OK', {
        //   timeOut: 3000, positionClass: 'toast-top-center'
        // });
        this.router.navigate(['/printNotes']);
      },
      err => {
        // this.toastr.error(err.error.mensaje, 'Fail', {
        //   timeOut: 3000,  positionClass: 'toast-top-center',
        // });
        this.router.navigate(['/printNotes']);
      }
    );
  }

}
