import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Band} from "../../../services/band.service";

@Component({
  selector: "app-band-buttons",
  templateUrl: "./band-buttons.component.html"
})
export class BandButtonsComponent {

  @Input() selectedBand: Band;
  @Input() band: Band;
  @Output()
  bandSelected: EventEmitter<Band> = new EventEmitter();
  @Output()
  bandToRemove: EventEmitter<Band> = new EventEmitter();

  selectBand(band: Band): void {
    this.bandSelected.emit(band);
  }

  unselectBand(): void {
    this.bandSelected.emit(null);
  }

  removeBand(band: Band): void {
    this.bandToRemove.emit(band);
  }
}
