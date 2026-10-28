import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiplicar-numeros-component',
  standalone: false,
  templateUrl: './multiplicar.numeros.component.html',
})
export class MultiplicarNumerosComponent {
  public multiplicacion: number;
  public mostrarLista1 = false;
    @ViewChild("cajanumero1") cajanumero1: ElementRef;

    constructor() {
        this.multiplicacion = 0;
        this.cajanumero1 = new ElementRef(0);
    }

    mostrarTabla1(): void {
        this.mostrarLista1 = true;
    }
}
