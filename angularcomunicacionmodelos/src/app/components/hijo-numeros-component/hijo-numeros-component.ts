import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numeros-component',
  standalone: false,
  styleUrl: './hijo-numeros-component.css',
  templateUrl: './hijo-numeros-component.html',
})
export class HijoNumerosComponent {
  @Output() seleccionarFavoritoPadre = new EventEmitter<number>();

  @Input() numero = 0;

  seleccionarNumero(): void {
    this.seleccionarFavoritoPadre.emit(this.numero);
  }
}
