import { ListaComponent } from './usuarios/lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuariosInfoComponent } from './usuarios/usuarios-info/usuarios-info.component';

const routes: Routes = [
  {path: 'home', component: ListaComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: 'usuarios-info', component: UsuariosInfoComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
