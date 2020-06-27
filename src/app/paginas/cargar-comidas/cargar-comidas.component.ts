import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ComidaService } from 'src/app/servicios/comida.service';

@Component({
  selector: 'app-cargar-comidas',
  templateUrl: './cargar-comidas.component.html',
  styleUrls: ['./cargar-comidas.component.css']
})
export class CargarComidasComponent implements OnInit {

  private formComida;

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
    let comidaNueva = this.formComida.value.comidaNueva;

    if (confirm(comidaNueva)) {
      this.servicioComidas.agregarComida(comidaNueva);
    }

    //  this.formComida.reset();
  }
}
