import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { FridensModule } from './fridens/fridens.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FridensModule,
    ContadorModule,
    DbzModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
