import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deporte-hijo-component',
  standalone: false,
  styleUrl: './deporte-hijo-component.css',
  templateUrl: './deporte-hijo-component.html',
})
export class DeporteHijoComponent {
  @Input() sport!: string;
  public mensaje!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<string> = new EventEmitter<string>();

  mostrarFavorito():void{
    this.mensaje = "Seleccionado " + this.sport + " como deporte favorito";
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
