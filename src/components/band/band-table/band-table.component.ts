import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Band, BandService, Genre} from "../../../services/band.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-table-overview-example',
  styleUrls: ['./band-table.component.scss'],
  templateUrl: 'band-table.component.html',
})
export class TableOverviewComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'genre', 'albumsList', 'options'];
  dataSource: MatTableDataSource<Band>;

  @Input()
  band: Band;

  @Output()
  selectedBandEmitter: EventEmitter<Band> = new EventEmitter<Band>();

  @Output()
  unselectedBandEmitter: EventEmitter<Band> = new EventEmitter<Band>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: BandService) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.service.initStubBands());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  bandIsSelected(band: Band) {
    this.selectedBandEmitter.emit(band);
  }

  bandIsUnselected(band: Band) {
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
    this.service.insertBand(stubBand, this.dataSource.data);
  }

  deleteBand(band: Band): void {
    this.service.deleteBand(band, this.dataSource.data);
  }
}
