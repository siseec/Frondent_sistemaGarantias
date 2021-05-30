import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  user:Usuario=null;
  constructor() { }
}
