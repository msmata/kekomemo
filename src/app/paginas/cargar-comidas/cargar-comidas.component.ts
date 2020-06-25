import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-comidas',
  templateUrl: './cargar-comidas.component.html',
  styleUrls: ['./cargar-comidas.component.css']
})
export class CargarComidasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volver() {
    this.router.navigateByUrl('');
  }
}
