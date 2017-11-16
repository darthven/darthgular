import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Band, BandService, Genre} from "../../services/band.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: "app-band",
  templateUrl: "./band.component.html",
  styleUrls: ["./band.component.scss"]
})
export class BandComponent implements OnInit {

  bands: Band[] = [];
  selectedBand: Band;

  @ViewChild("alertPopup") element: ElementRef;

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

  downloadBand(el: ElementRef): void {
    console.log(el);
    if (!isNullOrUndefined(this.selectedBand)) {
      const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.selectedBand));
      el.nativeElement.setAttribute("href", `data: ${data}`);
      el.nativeElement.setAttribute("download", "band.json");
    } else {
      alert("Please, select any band from the table");
    }
  }
}
