import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 9001
        },
        {
          nombre: 'Vegeta',
          poder: 9002
        }
    ];
      

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log("DbzService constructor");
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}