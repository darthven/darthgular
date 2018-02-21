import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { Band } from "../../models/band.model";
import { BandService } from "../../services/band.service";

@Component({
  selector: "app-band",
  templateUrl: "./band.component.html",
  styleUrls: ["./band.component.scss"]
})
export class BandComponent implements OnInit {

  selectedBands: Band[] = [];

  @ViewChild("alertPopup") element: ElementRef;

  constructor(private service: BandService) {
  }

  ngOnInit(): void {}

  bandSelected(band: Band) {
    this.selectedBands.push(band);
    console.log(this.selectedBands);
  }

  bandUnselected(band: Band) {
    this.selectedBands.splice(this.selectedBands.indexOf(band), 1);
    console.log(this.selectedBands);
  }

  // addBand(band: Band): number {
  //   // TODO replace this to the real data after providing of the band's creation form
  //   console.log(`Band "${band.name}" was added`);
  //   const stubBand = {
  //     name: "Hank Williams",
  //     genre: Genre.COUNTRY,
  //     description: "",
  //     imageUrl: "",
  //     albumsList: [
  //       {
  //         name: "Test1",
  //         year: 1921
  //       },
  //       {
  //         name: "Test2",
  //         year: 1922
  //       },
  //       {
  //         name: "Test3",
  //         year: 1923
  //       },
  //       {
  //         name: "Test4",
  //         year: 1924
  //       },
  //     ]
  //   };
  //   return this.service.insertBand(stubBand);
  // }

  // deleteBand(band: Band): Band[] {
  //   console.log(`Band "${band.name}" was removed`);
  //   return this.service.deleteBand(band);
  // }

  // downloadBand(el: ElementRef): void {
  //   console.log(el);
  //   if (!isNullOrUndefined(this.selectedBand)) {
  //     const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.selectedBand));
  //     el.nativeElement.setAttribute("href", `data: ${data}`);
  //     el.nativeElement.setAttribute("download", "band.json");
  //   } else {
  //     alert("Please, select any band from the table");
  //   }
  // }
}
