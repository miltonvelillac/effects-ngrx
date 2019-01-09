import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios-info',
  templateUrl: './usuarios-info.component.html',
  styles: ['']
})
export class UsuariosInfoComponent implements OnInit {
  usuario: Usuario;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('usuario')
      .subscribe(
        usuario => {
          this.usuario = usuario;
        }
      );
  }

}
