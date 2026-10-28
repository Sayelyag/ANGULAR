import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {
  public arrayComics: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = []
  }

  cargarComics(): void {
    let path = "assets/comics.xlsx";
    fetch(path)
      .then((response) => response.arrayBuffer())
      .then((data: ArrayBuffer) => {
        // Process the Excel file
        let workbook = XLSX.read(data, { type: 'array' });
        //recuperar as hojas del libro
        //recuperams el name de la hoja
        let hojaName = workbook.SheetNames[0];
        //recuperamos la hoja
        let hoja = workbook.Sheets[hojaName];
        //convertimos la hoja a JSON
        const comicData = XLSX.utils.sheet_to_json(hoja);
        console.log(comicData);
        this.arrayComics = comicData.map((elem: any) => new Comic(elem.nombre, elem.imagen, elem.descripcion));
        //recorremos el array de arrays y creamos los objetos Comic

        // for (let elem of data) {
        //   let comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        //   this.arrayComics.push(comic);
        // }
        this._cdr.detectChanges();
      });
  }
}
