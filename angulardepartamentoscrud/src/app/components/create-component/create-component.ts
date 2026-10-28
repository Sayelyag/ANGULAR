import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDepartamento } from '../../services/service.departamento';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  public mensaje!: string;
  @ViewChild("cajaID") cajaID!: ElementRef;
  @ViewChild("cajaNombre") cajaNombre!: ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _servicio: ServiceDepartamento,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  async insertarDepartamentoAsync(): Promise<void> {
    let id = parseInt(this.cajaID.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let dept: Departamento = new Departamento(id, nombre, localidad);
    let response = await this._servicio.createDepartamentoAsync(dept);
    this._router.navigate(['/home']);
    // this.mensaje = "Departamento creado con exito";
    // this._cdr.detectChanges();
  }
}
