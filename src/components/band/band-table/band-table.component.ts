import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { BandService} from "../../../services/band.service";
import { Observable } from "rxjs/Observable";
import { DataSource } from '@angular/cdk/table';
import { Band } from '../../../models/band.model';
import { Genre } from '../../../models/genre.enum';
@Component({
  selector: 'app-table-overview-example',
  styleUrls: ['./band-table.component.scss'],
  templateUrl: 'band-table.component.html',
})
export class TableOverviewComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'genre', 'albumsList', 'options'];
  dataSource: BandDatasource;

  bands: Band[];

  @Input()
  band: Band;

  @Output()
  selectedBandEmitter: EventEmitter<Band> = new EventEmitter<Band>();

  @Output()
  unselectedBandEmitter: EventEmitter<Band> = new EventEmitter<Band>();

  constructor(private service: BandService) {
  }

  ngOnInit() {
    this.dataSource = new BandDatasource(this.service);
  }

  ngAfterViewInit() {
    this.dataSource.connect().subscribe(data => this.bands = data);
  }

  bandIsSelected(band: Band) {
    console.log(`Band ${band.name} is selected`);
    this.selectedBandEmitter.emit(band);
  }

  bandIsUnselected(band: Band) {
    console.log(`Band ${band.name} is unselected`);
    this.unselectedBandEmitter.emit(band);
  }

  addBand(band: Band): void {
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
    this.service.insertBand(stubBand, this.bands);
  }

  deleteBand(band: Band): void {
    this.service.deleteBand(band, this.bands);
  }
}

export class BandDatasource extends DataSource<Band> {
  constructor(private bandService: BandService) {
    super();
  }

  connect(): Observable<Band[]> {
    return this.bandService.getBands();
  }

  disconnect(): void {}
}
