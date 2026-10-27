import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
// Global is a JavaScript module without a TypeScript declaration file.
// @ts-ignore
import { Global } from '../components/Global';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PersonaService {
  constructor(private _http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    const urlApi = environment.urlApiPersonas;
    return this._http.get<Persona[]>(urlApi);
  }
}
