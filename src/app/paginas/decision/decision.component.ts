import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
