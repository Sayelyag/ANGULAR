import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class ServiceDepartamento {
  constructor(private _http: HttpClient) {}

  async getDepartamentosAsync(): Promise<Departamento[]> {
    let request = "api/departamentos";
    return firstValueFrom(this._http.get<Departamento[]>(environment.apiDepartamentos + request));
  }

  async createDepartamentoAsync(departamento: Departamento): Promise<Departamento> {
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders();

    header = header.set('Content-Type', 'application/json');
    let request = "api/departamentos";
    return firstValueFrom(
      this._http.post(this.url + request, json, { headers: header})
    );
  }
}
