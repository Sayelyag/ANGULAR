import { Component } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public arrayCoches: Array<Coche>;
  constructor() {
    this.arrayCoches = new Array<Coche>();
    this.arrayCoches = [
      new Coche("Pontiac", "Firebird", 0, 50),
      new Coche("Chevrolet", "Camaro", 0, 10),
      new Coche("Ford", "Mustang", 0, 75),
      new Coche("Dodge", "Challenger", 0, 25),
      new Coche("Nissan", "GT-R", 0, 45)
    ]
  }
}
