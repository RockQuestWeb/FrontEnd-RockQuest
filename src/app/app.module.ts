import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { SliderComponent } from './principal/slider/slider.component';
import { CardsPrincipalesComponent } from './principal/cards-principales/cards-principales.component';
import { ImformacionComponent } from './principal/imformacion/imformacion.component';
import { FooterComponent } from './principal/footer/footer.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { RegistrarComponent } from './registrar/registrar.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {RouterModule,Route} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgresoComponent } from './estudiante/progreso/progreso.component';
import { DatosEstudianteComponent } from './estudiante/datos-estudiante/datos-estudiante.component';
import { DatosProfesorComponent } from './estudiante/datos-profesor/datos-profesor.component';
import { TablaPremiosComponent } from './estudiante/tabla-premios/tabla-premios.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ListaEstudianteComponent } from './profesor/lista-estudiante/lista-estudiante.component';
import { CreadorComponent } from './creador/creador.component';
import { MenuCreadorComponent } from './creador/menu-creador/menu-creador.component';
import { CreadorMisionComponent } from './creador/menu-creador/creador-mision/creador-mision.component';
import { CreadorMundoComponent } from './creador/menu-creador/creador-mundo/creador-mundo.component';
import { ImformacionMisionComponent } from './creador/menu-creador/creador-mision/imformacion-mision/imformacion-mision.component';
import { CrearMisionComponent } from './creador/menu-creador/creador-mision/crear-mision/crear-mision.component';
import { TablaMisionesComponent } from './creador/menu-creador/creador-mision/tabla-misiones/tabla-misiones.component';
import { CreadorPersonajeComponent } from './creador/menu-creador/creador-personaje/creador-personaje.component';
import { CreadorObjetosComponent } from './creador/menu-creador/creador-objetos/creador-objetos.component';
import { ImformacionObjetosComponent } from './creador/menu-creador/creador-objetos/imformacion-objetos/imformacion-objetos.component';
import { CargarImagenComponent } from './creador/menu-creador/creador-objetos/cargar-imagen/cargar-imagen.component';
import { CargarImagenPersonajeComponent } from './creador/menu-creador/creador-personaje/cargar-imagen-personaje/cargar-imagen-personaje.component';
import { ImformacionPersonajeComponent } from './creador/menu-creador/creador-personaje/imformacion-personaje/imformacion-personaje.component';
import { ManejoPuntosComponent } from './profesor/manejo-puntos/manejo-puntos.component';
import { CrearAlumnoComponent } from './profesor/crear-alumno/crear-alumno.component';

const RUTAS:Route[]=[
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'registro', component: RegistrarComponent},
  { path: 'ingresar', component: LoginComponent},
  { path: 'estudiante', component: EstudianteComponent},
  { path: 'profesor', component: ProfesorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    SliderComponent,
    CardsPrincipalesComponent,
    ImformacionComponent,
    FooterComponent,
    EstudianteComponent,
    RegistrarComponent,
    LoginComponent,
    ProgresoComponent,
    DatosEstudianteComponent,
    DatosProfesorComponent,
    TablaPremiosComponent,
    ProfesorComponent,
    ListaEstudianteComponent,
    CreadorComponent,
    MenuCreadorComponent,
    CreadorMisionComponent,
    CreadorMundoComponent,
    ImformacionMisionComponent,
    CrearMisionComponent,
    TablaMisionesComponent,
    CreadorPersonajeComponent,
    CreadorObjetosComponent,
    ImformacionObjetosComponent,
    CargarImagenComponent,
    CargarImagenPersonajeComponent,
    ImformacionPersonajeComponent,
    ManejoPuntosComponent,
    CrearAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
