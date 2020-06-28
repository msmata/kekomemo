import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/modelo/comida';
import { ComidaService } from 'src/app/servicios/comida.service';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  comidas: Comida[];
  comidaSugerida: Comida;
  private altaExitosa: boolean = false;
  private altaConError: boolean = false;

  constructor(private router: Router, private comidaService: ComidaService, private registroService: RegistroService) { }

  ngOnInit(): void {
    this.listarComidas();
  }

  volver() {
    this.router.navigateByUrl('');
  }

  registrarComida() {
    this.registroService.grabarRegistro(this.comidaSugerida.id)
    .then(() => this.altaExitosa = true)
    .catch(() => this.altaConError = true);
  }

  sugerirComida() {

    if (this.comidas.length == 0) {
      this.comidaSugerida = {id:-1, nombre: "CACA", dias: 0, nueva: false};
      return;
    }

    let bolillero:Comida[] = [];

    this.comidas.forEach(c => {

      if (c.dias == -1) {
        c.nueva = true;
        for (let i = 0;i < this.comidas.length;i++) {
          bolillero.push(c);
        }
      } else {
        c.nueva = false;
        for (let i = 0;i < c.dias;i++) {
          bolillero.push(c);
        }
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
