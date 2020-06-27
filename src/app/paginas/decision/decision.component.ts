import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComidaService } from 'src/app/servicios/comida.service';
import { Comida } from 'src/app/modelo/comida';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  constructor(private router: Router, private comidaService: ComidaService) { }

  private comidas: Comida[];

  ngOnInit(): void {
    this.listarComidas();
  }

  volver() {
    this.router.navigateByUrl('');
  }

  sugerencias() {
    this.router.navigateByUrl('sugerencia');
  }

  agregarComidaHoy() {
    alert("Listo, hoy comes la caca que cargaste");
  }

  listarComidas() {
    this.comidaService.obtenerComidas().subscribe(resultado => this.comidas = resultado);
  }
}
