import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosInfoComponent } from './usuarios-info/usuarios-info.component';

@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent,
    UsuariosInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
