import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Plantilla } from "../models/plantilla";

@Injectable({ providedIn: 'root' })
export class ServicePlantilla {
  constructor(private _http: HttpClient){}

  getFuncionesPlantilla(): Observable<string[]> {
      const url = environment.urlApiPlantillas;
      const request = "api/plantilla/funciones";
      return this._http.get<string[]>(url + request);
  }

  async getPlantillaByFuncionAsync(funcion: string): Promise<Plantilla[]> {
      const url = environment.urlApiPlantillas;
      const request = "api/plantilla/plantillafuncion/" + encodeURIComponent(funcion);
      return firstValueFrom(this._http.get<Plantilla[]>(url + request));
  }

  async getPlantillaFunciones(funciones: Array<string>): Promise<Plantilla[]> {
    const resultados = await Promise.all(
      funciones.map((funcion) => this.getPlantillaByFuncionAsync(funcion)),
    );
    return resultados.flat();
  }
}
