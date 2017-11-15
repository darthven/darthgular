import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BandComponent} from "../components/band/band.component";
import {BandButtonsComponent} from "../components/band/band-buttons/band-buttons.component";
import {BandMenuComponent} from "../components/band/band-menu/band-menu.component";
import {BandFormComponent} from "../components/band/band-form/band-form.component";
import {BandService} from "../services/band.service";

@NgModule({
  declarations: [
    BandComponent,
    BandMenuComponent,
    BandFormComponent,
    BandButtonsComponent
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
