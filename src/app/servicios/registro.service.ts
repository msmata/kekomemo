import { Injectable } from '@angular/core';
import { Registro } from '../modelo/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private registros:Registro[];

  constructor() {
    this.registros.push({id: 1, idComida: 1, fecha: new Date('2020-05-25T12:30:00')});
    this.registros.push({id: 2, idComida: 4, fecha: new Date('2020-06-06T20:30:00')});
    this.registros.push({id: 3, idComida: 2, fecha: new Date('2020-06-08T13:00:00')});
    this.registros.push({id: 4, idComida: 1, fecha: new Date('2020-06-15T12:30:00')});
  }

  obtenerUltimoRegistro(idComida: number): Registro {
    let registrosComida = this.registros.filter(r => r.idComida = idComida).sort((r1, r2) => {
      if (r1.fecha > r2.fecha) return 1;
      if (r2.fecha > r1.fecha) return -1;
      return 0;
    });

    return registrosComida[0];
  }

  grabarRegistro(idComida: number) {
    this.registros.push({id: 0, idComida: idComida, fecha: new Date()});
  }
}
