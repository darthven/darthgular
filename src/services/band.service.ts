import {Injectable} from "@angular/core";
export enum Genre {
  JAZZ = "Jazz",
  BLUES = "Blues",
  COUNTRY = "Country",
  CLASSIC_ROCK = "Classic rock",
  HEAVY_METAL = "Heavy metal",
  FOLK = "Folk",
  OTHERS = "Others"
}

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
        genre: Genre.CLASSIC_ROCK,
        description: "",
        imageUrl: "",
        albumsList: [
          {
            name: "Shades of Deep Purple",
            year: 1968
          },
          {
            name: "The Book of Taliesyn",
            year: 1968
          },
          {
            name: "Deep Purple",
            year: 1969
          },
          {
            name: "Deep Purple In Rock",
            year: 1970
          },
        ]
      },
      {
        name: "Black Sabbath",
        genre: Genre.HEAVY_METAL,
        description: "",
        imageUrl: "",
        albumsList: [
          {
            name: "Black Sabbath",
            year: 1970
          },
          {
            name: "Paranoid",
            year: 1970
          },
          {
            name: "Master of Reality",
            year: 1971
          },
          {
            name: "Black Sabbath, Vol. 4",
            year: 1972
          },
        ]
      },
      {
        name: "Pink Floyd",
        genre: Genre.CLASSIC_ROCK,
        description: "",
        imageUrl: "",
        albumsList: [
          {
            name: "The Piper at the Gates of Dawn",
            year: 1967
          },
          {
            name: "A Saucerful of Secrets",
            year: 1968
          },
          {
            name: "Music from the Film More",
            year: 1969
          },
          {
            name: "Ummagumma",
            year: 1969
          },
        ]
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
