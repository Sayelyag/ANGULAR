import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamento } from '../../services/service.departamento';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent implements OnInit{
  public departamento!: Departamento;

  @ViewChild("cajaID") cajaID!: ElementRef;
  @ViewChild("cajaNombre") cajaNombre!: ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamento,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    this._activeRoute.params.subscribe(async (params: Params) => {
      let id = parseInt(params['id']);
      this.departamento = await this._service.findDepartamentoAsync(id);
      this._cdr.detectChanges();
    });
  }

  async actualizarDepartamento(): Promise<void> {
    let id = parseInt(this.cajaID.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let dept = new Departamento(id, nombre, localidad);
    this.departamento = dept;
    let response = await this._service.updateDepartamentoAsync(this.departamento);
    this._router.navigate(['/details', dept.numero, dept.nombre, dept.localidad]);
  }
}
