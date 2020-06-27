import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargarComidasComponent } from './paginas/cargar-comidas/cargar-comidas.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SugerenciaComponent } from './paginas/sugerencia/sugerencia.component';
import { DecisionComponent } from './paginas/decision/decision.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CargarComidasComponent,
    InicioComponent,
    SugerenciaComponent,
    DecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
