import {Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {MatCheckbox} from "@angular/material";
import { Band } from "../../../models/band.model";

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
      console.log(`Select band ${band.name}`);
      this.bandSelected.emit(band);
    } else {
      console.log(`Unselect band ${band.name}`);
      this.bandUnselected.emit(band);
    }
  }

  removeBand(band: Band): void {
    if (this.checkBox.checked) {
      console.log(`Remove band ${band.name}`);
      this.bandToRemove.emit(band);
    }
  }
}
