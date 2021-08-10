import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsServices: GifsService) {}

  ngOnInit(): void {}
  buscar(event:any) {
    console.log(event);
    if(event) {
      this.query(event)
    }
    this.txtBuscar.nativeElement.value = '';
  }
  query(query: string) {
    this.gifsServices.buscarGifs(query)
  }


}
