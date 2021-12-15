import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FridenComponent } from "./friden/friden.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
      FridenComponent,
      ListadoComponent
  ],
  exports: [
      ListadoComponent
  ],
  imports: [
      CommonModule
  ]
})
export class FridensModule {}
