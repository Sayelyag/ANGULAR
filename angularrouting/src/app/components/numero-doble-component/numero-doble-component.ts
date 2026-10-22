import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  public doble!: number;
  public numero!: number;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.doble = 0;
  }

  redirect(num: number): void {
    this._router.navigate(['/numero-doble', num]);
  }

  goToHome(): void {
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      const numero = parametros['numero'];
      if (numero !== undefined) {
        this.numero = parseInt(numero, 10);
        this.doble = this.numero * 2;
      }
    });
  }
}
