import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  listadoDeAlumnos: string[] = [
    'Adrian Gonzalez',
    'Juan Perez',
    'Pedro Perez',
    'Juan Dominguez',
    'Juan Gonzalez',
  ];

  constructor() {
    for( let i = 0; i < this.listadoDeAlumnos.length; i++ ) {
      console.log(this.listadoDeAlumnos[i]);
    }

  }
  ngOnInit(): void {}
}
