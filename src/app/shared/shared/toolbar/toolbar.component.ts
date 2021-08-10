import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  show = true;
  sidenav:any;

  constructor() { }

  ngOnInit(): void {
  }

  cambio(){

  }

}
