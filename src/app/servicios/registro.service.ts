import { Injectable } from '@angular/core';
import { Registro } from '../modelo/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() {}

  obtenerUltimoRegistro(idComida: number): Registro {
    /*
    let registrosComida = this.registros.filter(r => r.idComida = idComida).sort((r1, r2) => {
      if (r1.fecha > r2.fecha) return 1;
      if (r2.fecha > r1.fecha) return -1;
      return 0;
    });
*/
    return {id:1, idComida: 1, fecha: new Date()};
  }

  grabarRegistro(idComida: number) {
    
  }
}
