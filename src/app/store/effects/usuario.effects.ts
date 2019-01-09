import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from'@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ){}

    // dispatch: false, sirve para no repetir el llamado al servicio
    // @Effect({dispatch: false})
    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType( usuarioActions.CARGAR_USUARIO),
        switchMap(accion => {
            const id = accion['id'];
            return this.usuariosService.getUserById(id)
            .pipe(
                map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
            )
        }
        )
    );
}
