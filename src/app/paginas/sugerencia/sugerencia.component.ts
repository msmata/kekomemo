import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/modelo/comida';
import { ComidaService } from 'src/app/servicios/comida.service';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  private comidas: Comida[];
  comidaSugerida: Comida;

  constructor(private router: Router, private comidaService: ComidaService) { }

  ngOnInit(): void {
    this.listarComidas();
  }

  volver() {
    this.router.navigateByUrl('');
  }

  sugerirComida() {

    if (this.comidas.length == 0) {
      this.comidaSugerida = {id:-1, nombre: "CACA", dias: 0};
      return;
    }

    let bolillero:Comida[] = [];

    this.comidas.forEach(c => {
      for (let i = 0;i < c.dias;i++) {
        bolillero.push(c);
      }
    });

    this.girarBolillero(bolillero);

    let indiceRandom = Math.floor(Math.random() * bolillero.length);

    this.comidaSugerida = bolillero[indiceRandom];

    this.comidas = this.comidas.filter(c => c.id != this.comidaSugerida.id);
  }

  listarComidas() {
    this.comidaService.obtenerComidas().subscribe(resultado => {
      this.comidas = resultado;
      this.sugerirComida();
    });
  }

  girarBolillero(bolillero: Comida[]) {
    for(let i = bolillero.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = bolillero[i]
      bolillero[i] = bolillero[j]
      bolillero[j] = temp
    }
  }
}
