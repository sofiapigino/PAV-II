import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Cuidado que va aca adentro
  Titulo= 'Pymes Demo - 2020';

  constructor() { }

  ngOnInit() {
  }

}