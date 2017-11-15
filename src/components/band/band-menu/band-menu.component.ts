import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Band} from "../../../services/band.service";


@Component({
  selector: "app-band-menu",
  templateUrl: "./band-menu.component.html"
})
export class BandMenuComponent {

  @Input()
  selectedBand: Band;

  @Output()
  bandToAdd: EventEmitter<Band> = new EventEmitter();

  @Output()
  bandToDownload: EventEmitter<Band> = new EventEmitter();

  addNewBand(band: Band) {
    this.bandToAdd.emit(band);
  }

  downloadBand(band: Band) {
    this.bandToDownload.emit(band);
  }

  restoreBands() {}
}
