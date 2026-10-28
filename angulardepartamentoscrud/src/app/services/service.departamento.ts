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
    console.log("JSON enviado al backend: " + json);
    let request = "api/departamentos";
    return firstValueFrom(
      this._http.post<Departamento>(environment.apiDepartamentos + request, json, { headers: header})
    );
  }

  async findDepartamentoAsync(id: number): Promise<Departamento> {
    let request = "api/departamentos/" + id;
    return firstValueFrom(this._http.get<Departamento>(environment.apiDepartamentos + request));
  }

  async updateDepartamentoAsync(departamento: Departamento): Promise<any> {
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set("Content-Type", "application/json");
    let request = "api/departamentos/";
    return firstValueFrom(
      this._http.put(environment.apiDepartamentos + request, json, { headers: header })
    );
  }

  async deleteDepartamentoAsync(id: number): Promise<void> {
    let request = "api/departamentos/" + id;
    return firstValueFrom(this._http.delete<void>(environment.apiDepartamentos + request));
  }
}
