import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicar-numeros-dos-component',
  standalone: false,
  templateUrl: './multiplicar.numeros.dos.component.html',
})
export class MultiplicarNumerosDosComponent {
  public multiplicacion: number;
  public mostrarLista1 = false;

    constructor() {
        this.multiplicacion = 0;
    }

    mostrarTabla1(): void {
        this.mostrarLista1 = true;
    }
}
