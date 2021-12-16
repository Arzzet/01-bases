import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9001
    },
    {
      nombre: 'Vegeta',
      poder: 9002
    }
  ];

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
    console.log(argumento);
  }



}
