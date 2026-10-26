import { Component } from '@angular/core';

@Component({
  selector: 'app-deporte-padre-component',
  standalone: false,
  styleUrl: './deporte-padre-component.css',
  templateUrl: './deporte-padre-component.html',
})
export class DeportePadreComponent {
  public deporte: Array<string>;
  public mensaje!: string;

  seleccionarFavorito(event: string):void {
    console.log("Leyendo Padre");
    this.mensaje = "Seleccionado " + event + " como deporte favorito";
  }
  constructor() {
    this.deporte = ["Futbol", "Baloncesto", "Tenis", "Natacion", "Ciclismo"];
  }
}
