import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  public listadoDeAlumnos: string[] = [
    'Adrian Gonzalez',
    'Juan Perez',
    'Pedro Perez',
    'Juan Dominguez',
    'Juan Gonzalez',
  ];
  public estado: boolean = false;
  public nombre?: string;

  constructor() {
    for( let i = 0; i < this.listadoDeAlumnos.length; i++ ) {
      console.log(this.listadoDeAlumnos[i]);
    }

  }
  ngOnInit(): void {}

  public mostrarListado(): void {
    this.estado = true;
  }

  public ocultarListado(): void {
    this.estado = false;
  }

  public agregarAlumno(e:any): void {

    this.listadoDeAlumnos.push(e);
  }

}
