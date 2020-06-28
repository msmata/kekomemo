import { Injectable } from '@angular/core';
import { Registro } from '../modelo/registro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) {}

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
    return this.http.post('http://localhost:8080/api/registro', {idComida: idComida})
    .toPromise()
    .then(response => response)
    .catch(null); // handle error
  }
}
