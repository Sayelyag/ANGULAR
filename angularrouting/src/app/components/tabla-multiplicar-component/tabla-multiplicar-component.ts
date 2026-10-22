import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent implements OnInit {
  public numero?: number;
  public resultados: number[] = [];

  constructor(private readonly activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((parametros: Params) => {
      const numero = Number(parametros['numero']);
      if (Number.isInteger(numero)) {
        this.numero = numero;
        this.resultados = Array.from({ length: 10 }, (_, indice) => numero * (indice + 1));
      }
    });
  }
}
