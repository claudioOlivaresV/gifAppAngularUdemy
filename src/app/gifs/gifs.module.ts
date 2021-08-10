import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
