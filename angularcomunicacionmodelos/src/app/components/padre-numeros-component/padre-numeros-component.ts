import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  public numeros: number[] = [];
  public suma = 0;

  constructor() {
    this.numeros = Array.from({ length: 5 }, () => this.generarNumeroAleatorio());
  }

  generarNumero(): void {
    this.numeros = [...this.numeros, this.generarNumeroAleatorio()];
  }

  sumarNumero(numero: number): void {
    this.suma += numero;
  }

  private generarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 100);
  }
}
