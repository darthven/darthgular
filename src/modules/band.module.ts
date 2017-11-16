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
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";

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
    CommonComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    BandComponent
  ],
  providers: [BandService]
})
export class BandModule {
}
