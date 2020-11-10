import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreadorComponent } from './creador/creador.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: '/principal' },
{ path: 'principal', component: PrincipalComponent },
{ path: 'registro', component: RegistrarComponent},
{ path: 'ingresar', component: LoginComponent},
{ path: 'estudiante', component: EstudianteComponent},
{ path: 'profesor', component: ProfesorComponent},
{ path: 'creador', component: CreadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
