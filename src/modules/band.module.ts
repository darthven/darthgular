import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BandComponent} from "../components/band/band.component";
import {BandButtonsComponent} from "../components/band/band-buttons/band-buttons.component";
import {BandMenuComponent} from "../components/band/band-menu/band-menu.component";
import {BandFormComponent} from "../components/band/band-form/band-form.component";
import {BandService} from "../services/band.service";
import {CommonComponentsModule} from "./common.module";
import {TableOverviewComponent} from "../components/band/band-table/band-table.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule,
   MatListModule, MatMenuModule, MatTableModule } from "@angular/material";
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    BandComponent,
    TableOverviewComponent,
    BandMenuComponent,
    BandFormComponent,
    BandButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CommonComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
  ],
  exports: [
    BandComponent
  ],
  providers: [BandService]
})
export class BandModule {
}
