import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes de la aplicacion
import { LoginComponent } from './cp_auth/login/login.component';
import { RegistroComponent } from './cp_auth/registro/registro.component';
import { CrearNotaComponent } from './cp_nota/crear-nota/crear-nota.component';
import { ImprimirNotasComponent } from './cp_nota/imprimir-notas/imprimir-notas.component';
import { EditarNotaComponent } from './cp_nota/editar-nota/editar-nota.component';
import { ImprimirUsuariosComponent } from './cp_nota/imprimir-usuarios/imprimir-usuarios.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch:'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegistroComponent },
  { path: 'createNote',  component: CrearNotaComponent },
  { path: 'printNotes',  component: ImprimirNotasComponent },
  { path: 'printNote/:idNota', component: EditarNotaComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'printUsers', component: ImprimirUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
