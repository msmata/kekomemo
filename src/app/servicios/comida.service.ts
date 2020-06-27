import { Injectable } from '@angular/core';
import { Comida } from '../modelo/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor() {}

   public obtenerComidas(): Comida[] {
     return [];
   }

   public agregarComida(comida: string) {

   }

   public obtenerComida(id: number): Comida {
      return {id: 1, nombre: ""};
   }
}
