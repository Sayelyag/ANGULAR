import { Injectable } from '@angular/core';
import Comic from '../models/comic';

interface ComicData {
  nombre: string;
  imagen: string;
  descripcion: string;
}

@Injectable({ providedIn: 'root' })
export class ComicService {
  private readonly path = '/assets/comics.json';

  async getComicsAsync(): Promise<Comic[]> {
    const response = await fetch(this.path);
    if (!response.ok) {
      throw new Error(`No se pudo cargar el archivo de comics (${response.status}).`);
    }

    const data = (await response.json()) as ComicData[];
    return data.map(
      (comic) => new Comic(comic.nombre, comic.imagen, comic.descripcion),
    );
  }

  getComics(): Promise<Comic[]> {
    return this.getComicsAsync();
  }
}
