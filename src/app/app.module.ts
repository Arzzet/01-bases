import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { FridenComponent } from './fridens/friden/friden.component';
import { ListadoComponent } from './fridens/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FridenComponent,
    ListadoComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
