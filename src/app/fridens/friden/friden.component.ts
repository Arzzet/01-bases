import { Component } from "@angular/core"

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
}