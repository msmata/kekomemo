import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarComidasComponent } from './paginas/cargar-comidas/cargar-comidas.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SugerenciaComponent } from './paginas/sugerencia/sugerencia.component';
import { DecisionComponent } from './paginas/decision/decision.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cargarComidas', component: CargarComidasComponent },
  { path: 'sugerencia', component: SugerenciaComponent },
  { path: 'decision', component: DecisionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
