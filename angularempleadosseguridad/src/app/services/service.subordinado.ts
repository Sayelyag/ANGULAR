import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Subordinado } from '../models/subordinado';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceSubordinado {
  constructor(private _http: HttpClient) {}

  async getSubordinadosAsync(): Promise<Subordinado[]> {
    const request = "/api/Empleados";
    return firstValueFrom(
      this._http.get<Subordinado[]>(`${environment.apiSubordinados.replace(/\/$/, '')}${request}`),
    );
  }

  async findSubordinadoAsync(id: number): Promise<Subordinado> {
    const request = "/api/Empleados/" + id;
    return firstValueFrom(
      this._http.get<Subordinado>(`${environment.apiSubordinados.replace(/\/$/, '')}${request}`),
    );
  }
}
