import { Genre } from "./genre.enum";
import { Album } from "./album.model";

export interface Band {
    name: string;
    genre: Genre;
    description?: string;
    imageUrl?: string;
    albumsList?: Album[];
}
