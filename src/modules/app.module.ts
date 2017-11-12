import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from '../components/app/app.component';
import {RegFormComponent} from '../components/regform/regform.component';


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
