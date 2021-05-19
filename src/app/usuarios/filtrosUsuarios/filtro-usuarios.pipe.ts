import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../model/usuarioInterface';

@Pipe({
  name: 'filtroUsuarios'
})
export class FiltroUsuariosPipe implements PipeTransform {

  ListaUsuario: Usuario[] = [];

  transform(ArregloUsuario: Usuario[], buscar: string = ''): Usuario[] {
    if (buscar.length === 0) {
      return ArregloUsuario;

    }

    for (const usr of ArregloUsuario) {

      if (usr.cedula == buscar) {
        this.ListaUsuario.push(usr);

      }
    }
    return this.ListaUsuario;


  }

}
