import {Component, OnInit} from "@angular/core";
import {Band, BandService} from "../../services/band.service";

@Component({
  selector: "app-band",
  templateUrl: "./band.component.html"
})
export class BandComponent implements OnInit {
  bands: Band[] = [];
  selectedBand: Band;

  constructor(private service: BandService) {}

  ngOnInit(): void {
    this.bands = this.service.initStubBands();
  }

  selectBand(band: Band): void {
    this.selectedBand = band;
  }

  removeBand(band: Band): Band[] {
    return this.service.deleteBand(band, this.bands);
  }
}
