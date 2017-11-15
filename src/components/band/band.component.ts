import {Component, OnInit} from "@angular/core";
import {Band, BandService, Genre} from "../../services/band.service";

@Component({
  selector: "app-band",
  templateUrl: "./band.component.html",
  styleUrls: ["./band.component.css"]
})
export class BandComponent implements OnInit {

  bands: Band[] = [];
  selectedBand: Band;

  constructor(private service: BandService) {
  }

  ngOnInit(): void {
    this.bands = this.service.initStubBands();
  }

  bandSelected(band: Band) {
    this.selectedBand = band;
  }

  addBand(band: Band): number {
    // TODO replace this to the real data after providing of the band's creation form
    const stubBand = {
      name: "Hank Williams",
      genre: Genre.COUNTRY,
      description: "",
      imageUrl: "",
      albumsList: [
        {
          name: "Test1",
          year: 1921
        },
        {
          name: "Test2",
          year: 1922
        },
        {
          name: "Test3",
          year: 1923
        },
        {
          name: "Test4",
          year: 1924
        },
      ]
    };
    return this.service.insertBand(stubBand, this.bands);
  }

  deleteBand(band: Band): Band[] {
    return this.service.deleteBand(band, this.bands);
  }
}
