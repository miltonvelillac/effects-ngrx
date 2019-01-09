import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(
    // private usuarioService: UsuarioService
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    // this.usuarioService.getUsers()
    //   .subscribe(users => {
    //     this.usuarios = users;
    //   });
    this.store.select('usuarios')
      .subscribe(usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      });

    this.store.dispatch(new usuariosActions.CargarUsuarios());
  }

  verUsuario(usuarioSeleccionado: Usuario) {
    this.store.dispatch(new usuariosActions.CargarUsuarioSuccess(usuarioSeleccionado));
    this.router.navigate(['/usuarios-info']);
  }

}
