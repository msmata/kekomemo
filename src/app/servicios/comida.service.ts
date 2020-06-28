import { Injectable } from '@angular/core';
import { Comida } from '../modelo/comida';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(private http: HttpClient) {}

   public obtenerComidas(): Observable<Comida[]> {
     return this.http.get<Comida[]>('http://localhost:8080/api/comida');
   }

   public agregarComida(comida: string): Promise<void | Comida> {
    return this.http.post('http://localhost:8080/api/comida', {nombre: comida})
    .toPromise()
    .then(response => response as Comida)
    .catch(null); // handle error
   }

   public obtenerComida(id: number): Comida {
      return {id: 1, nombre: "", dias: 1, nueva: false};
   }
}
