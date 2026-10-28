import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  public arrayComics: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = []
  }

  cargarComics(): void {
    let path = "assets/comics.json";
    fetch(path)
      .then((response) => response.json())
      .then((data: any[]) => {
        for (let elem of data) {
          let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
          this.arrayComics.push(comic);
          console.log(elem);
        }
        this._cdr.detectChanges();
      });
  }
}
