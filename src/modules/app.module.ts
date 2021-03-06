import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '../components/app/app.component';
import {BandModule} from "./band.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
