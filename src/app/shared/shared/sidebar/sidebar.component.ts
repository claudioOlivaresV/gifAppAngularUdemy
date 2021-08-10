import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  gifs: string [] = []


  constructor(private gifsServices: GifsService) { }

  ngOnInit(): void {}

  get data (){
    return this.gifsServices.historial;
  }

  buscar(query:string) {
    console.log(query);
    this.gifsServices.buscarGifs(query)
  }

}
