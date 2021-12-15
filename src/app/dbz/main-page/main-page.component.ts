import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

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

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) { return }
    // if(typeof(this.nuevo.poder)!= 'number' ) { return }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo= {
      nombre: "",
      poder: 0
    }
  }

}
