import {Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {Band} from "../../../services/band.service";
import {MatCheckbox} from "@angular/material";

@Component({
  selector: "app-band-buttons",
  templateUrl: "./band-buttons.component.html",
  styleUrls: ["./band-buttons.component.scss"]
})
export class BandButtonsComponent {


  @ViewChild(MatCheckbox) checkBox: MatCheckbox;

  @Input() band: Band;

  @Output()
  bandSelected: EventEmitter<Band> = new EventEmitter();

  @Output()
  bandUnselected: EventEmitter<Band> = new EventEmitter();

  @Output()
  bandToRemove: EventEmitter<Band> = new EventEmitter();

  checkBand(band: Band): void {
    if (!this.checkBox.checked) {
      this.bandSelected.emit(band);
    } else {
      this.bandUnselected.emit(band);
    }
  }

  removeBand(band: Band): void {
    this.bandToRemove.emit(band);
  }
}
