import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import { Band } from "../../../models/band.model";

@Component({
  selector: "app-band-menu",
  templateUrl: "./band-menu.component.html",
  styleUrls: ["./band-menu.component.scss"]
})
export class BandMenuComponent {

  @ViewChild('downloader') element: ElementRef;

  @Output()
  bandToAdd: EventEmitter<Band> = new EventEmitter();

  @Output()
  bandToDownload: EventEmitter<ElementRef> = new EventEmitter();

  addNewBand(band: Band) {
    this.bandToAdd.emit(band);
  }

  downloadBand() {
    this.bandToDownload.emit(this.element);
  }

  restoreBands() {}
}
