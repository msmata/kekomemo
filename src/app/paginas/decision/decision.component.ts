import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ComidaService } from 'src/app/servicios/comida.service';
import { Comida } from 'src/app/modelo/comida';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  private formComida;

  constructor(private router: Router, private comidaService: ComidaService, private registroService: RegistroService, private formBuilder: FormBuilder) {
    this.formComida = this.formBuilder.group({
      comidaNueva: ''
    });
  }

  private comidas: Comida[];
  altaExitosa: boolean = false;
  altaConError: boolean = false;

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
    if (confirm("Cargamos esta comida para hoy: " + this.formComida.value.comidaNueva + " ?")) {
      this.comidaService.agregarComida(this.formComida.value.comidaNueva)
      .then((response: Comida) => {
        this.registroService.grabarRegistro(response.id)
          .then(() => this.altaExitosa = true)
          .catch(() => this.altaConError = true);
      })
      .catch(error => {
        console.log('Ocurrio un error al guardar la comida: ', error);
        this.altaConError = true
      });

      this.formComida.reset();
    }
  }

  registrar(comida: Comida) {
    if (confirm("Vas a registrar " + comida.nombre + "?")){
      this.registroService.grabarRegistro(comida.id)
      .then(() => this.altaExitosa = true)
      .catch(() => this.altaConError = true);
    }
  }

  listarComidas() {
    this.comidaService.obtenerComidas().subscribe(resultado => this.comidas = resultado);
  }
}
