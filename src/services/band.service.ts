import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Http, Response } from "@angular/http";
import { Band } from "../models/band.model";
import { Genre } from "../models/genre.enum";

@Injectable()
export class BandService {
  constructor(private http: Http) {}

  getBands(): Observable<Band[]> {
    return this.http.get('/assets/bands.json').map(data => {
      return data.json()['bandList'].map(bandItem => Object.assign({}, bandItem, {genre: Genre[bandItem.genre]}));
    });
  }

  insertBand(band: Band, bands: Band[]): number {
    return bands.push(band);
  }

  deleteBand(band: Band, bands: Band[]): Band[] {
    console.log(bands);
    return bands.splice(bands.indexOf(band), 1);
  }
}
