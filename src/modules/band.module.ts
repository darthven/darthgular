import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BandComponent} from "../components/band/band.component";
import {BandService} from "../services/band.service";

@NgModule({
  declarations: [
    BandComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    BandComponent
  ],
  providers: [BandService]
})
export class BandModule {}
