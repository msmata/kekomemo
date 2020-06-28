import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ComidaService } from 'src/app/servicios/comida.service';
import { Comida } from 'src/app/modelo/comida';

@Component({
  selector: 'app-cargar-comidas',
  templateUrl: './cargar-comidas.component.html',
  styleUrls: ['./cargar-comidas.component.css']
})
export class CargarComidasComponent implements OnInit {

  private formComida;
  private altaExitosa: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioComidas: ComidaService) {
    this.formComida = this.formBuilder.group({
      comidaNueva: ''
    });
  }

  ngOnInit(): void {
  }

  volver() {
    this.router.navigateByUrl('');
  }

  agregar() {
    this.altaExitosa = false;
    let comidaNueva = this.formComida.value.comidaNueva;

    if (confirm(comidaNueva)) {
      this.servicioComidas.agregarComida(comidaNueva)
      .then((response: Comida) => {
        this.altaExitosa = true;
      })
      .catch(error => {
        console.log('Ocurrio un error al guardar la comida: ', error);
      });
    }

    this.formComida.reset();
  }
}
