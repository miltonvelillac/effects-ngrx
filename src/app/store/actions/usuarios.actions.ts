import {Action} from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[Usuario] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuario] Cargar usuarios Fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuario] Cargar usuarios Success';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;
    constructor(public payload: any) {}
}


export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;
    constructor(public usuarios: Usuario[]){}
}

export type usuariosAcciones = CargarUsuarios |
                               CargarUsuariosFail |
                               CargarUsuariosSuccess;
