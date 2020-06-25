import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volver() {
    this.router.navigateByUrl('');
  }
}
