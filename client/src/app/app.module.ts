import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';
import { HomeComponent } from './components/home/home.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { GastoListComponent } from './components/gasto-list/gasto-list.component';
import { GastosService } from './services/gastos.service';
import { FormsModule } from '@angular/forms';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';
import { IngresoListComponent } from './components/ingreso-list/ingreso-list.component';
import { IngresosService } from './services/ingresos.service';
import { ServicioFormComponent } from './components/servicio-form/servicio-form.component';
import { ServicioListComponent } from './components/servicio-list/servicio-list.component';
import { ServiciosService } from './services/servicios.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AgendaComponent } from './components/agenda/agenda.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { RecuperarContrasenaComponent } from './components/auth/recuperar-contrasena/recuperar-contrasena.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    RecuperarContrasenaComponent,
    InicioUsuarioComponent,
    GastoFormComponent,
    GastoListComponent,
    IngresoFormComponent,
    IngresoListComponent,
    ServicioFormComponent,
    ServicioListComponent,
    AgendaComponent,
    UsuarioComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GastosService,
    IngresosService,
    ServiciosService
  ]
})
export class AppModule { }
