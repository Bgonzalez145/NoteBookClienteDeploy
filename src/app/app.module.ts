import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// Componentes de la aplicacion
import { LoginComponent } from './cp_auth/login/login.component';
import { RegistroComponent } from './cp_auth/registro/registro.component';
import { MenuMainComponent } from './cp_nota/menu-main/menu-main.component';
import { CrearNotaComponent } from './cp_nota/crear-nota/crear-nota.component';
import { ImprimirNotasComponent } from './cp_nota/imprimir-notas/imprimir-notas.component';
import { EditarNotaComponent } from './cp_nota/editar-nota/editar-nota.component';
import { ImprimirUsuariosComponent } from './cp_nota/imprimir-usuarios/imprimir-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuMainComponent,
    CrearNotaComponent,
    ImprimirNotasComponent,
    EditarNotaComponent,
    ImprimirUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
