import {Injectable} from "@angular/core";
enum Genre {JAZZ, BLUES, COUNTRY, CLASSIC_ROCK, HEAVY_METAL, FOLK, OTHERS}

export interface Album {
  name: string;
  year: number;
  imageUrl?: string;
  members?: string[];
}

export interface Band {
  name: string;
  genre: Genre;
  description?: string;
  imageUrl?: string;
  albumsList?: Album[];
}

@Injectable()
export class BandService {
  initStubBands(): Band[] {
    return [
      {
        name: "Deep Purple",
        genre: Genre.CLASSIC_ROCK
      },
      {
        name: "Black Sabbath",
        genre: Genre.HEAVY_METAL
      },
      {
        name: "Pink Floyd",
        genre: Genre.CLASSIC_ROCK
      }
    ];
  }

  insertBand(band: Band, bands: Band[]): number {
    return bands.push(band);
  }

  deleteBand(band: Band, bands: Band[]): Band[] {
    return bands.splice(bands.indexOf(band), 1);
  }
}
