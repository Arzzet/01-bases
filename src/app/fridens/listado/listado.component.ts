import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  fridens: string[] = ['Peibol', 'Li', 'Gerli', 'Rug'];
  fridenBorrado: string = '';
  
  borrarFriden() {
    this.fridenBorrado = this.fridens.shift() || ''; 
    // document.getElementsByTagName('span')[0].innerHTML = fridenBorrado;
  }
}
