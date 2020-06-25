import { Injectable } from '@angular/core';
import { Comida } from '../modelo/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  private comidas: Comida[];

  constructor() {
    this.comidas.push({id: 1, nombre: 'Guiso de lentejas'});
    this.comidas.push({id: 2, nombre: 'Milanesa de carne frita'});
    this.comidas.push({id: 3, nombre: 'Suprema de pollo'});
    this.comidas.push({id: 4, nombre: 'Hamburguesas de lenteja'});
    this.comidas.push({id: 5, nombre: 'Arroz con pollo y azafran'});
   }

   public obtenerComidas(): Comida[] {
     return this.comidas;
   }

   public agregarComida(comida: Comida) {
     this.comidas.push(comida);
   }

   public obtenerComida(id: number): Comida {
      return this.comidas.find(c => c.id == id);
   }
}
