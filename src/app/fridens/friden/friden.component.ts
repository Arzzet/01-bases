import { Component } from "@angular/core"

import { DbzService } from "src/app/dbz/services/dbz.service";

@Component({
    selector: "app-friden",
    templateUrl: "./friden.component.html",
})
export class FridenComponent{
    name: string = "Pablo";
    age: number = 34;
    special: string = "Medic de cerebros";

    get nombreCapitalizado(){
        return this.name.toUpperCase();
    }
    
    getTitle(): string{
        return `${this.name}, ${this.special}`;
    }

    cambiarNombre(): void{
        this.name = "Peibol";
    }

    cambiarEdad(): void{
        this.age = this.age + 1;

    }

    constructor(private dbzService: DbzService) {  }
}