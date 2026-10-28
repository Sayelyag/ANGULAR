import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subordinado } from '../../models/subordinado';
import { ServiceSubordinado } from '../../services/service.subordinado';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-subordinados',
  standalone: false,
  styleUrl: './subordinados.css',
  templateUrl: './subordinados.html',
})
export class Subordinados implements OnInit {
  public subordinados: Subordinado[] = [];
  public errorMessage = '';

  constructor(private _service: ServiceSubordinado) {}

  async ngOnInit(): Promise<void> {
    await this.loadSubordinados();
  }

  async loadSubordinados(): Promise<void> {
    try {
      this.subordinados = await this._service.getSubordinadosAsync();
    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        this.errorMessage = 'Necesitas iniciar sesión para consultar los subordinados.';
        return;
      }

      this.errorMessage = 'No se han podido cargar los subordinados.';
      console.error('Error al cargar los subordinados', error);
    }
  }
}
