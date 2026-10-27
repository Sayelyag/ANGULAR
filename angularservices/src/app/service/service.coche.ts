import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Coche } from '../models/coche';

@Injectable({ providedIn: 'root' })
export class ServiceCoche {
  constructor(private readonly _http: HttpClient) {}

  getCoches(): Observable<Coche[]> {
    return this._http.get<Coche[]>(environment.urlApiCoches);
  }
}
