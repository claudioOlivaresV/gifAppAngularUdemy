import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsServices: GifsService ) { }

  get resultados() {
    return this.gifsServices.resultados;  
  }

  ngOnInit(): void {
  }

}
