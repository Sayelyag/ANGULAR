import { Component } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamento } from '../../services/service.departamento';
import { ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(
    private _service: ServiceDepartamento,
    private _cdr: ChangeDetectorRef
  ) {}
  async ngOnInit(): Promise<void> {
    await this.loadDepartamentos();
  };
  async deleteDepartamento(id: number): Promise<void> {
    console.log(`Eliminando departamento con ID: ${id}`);
    let response = await this._service.deleteDepartamentoAsync(id);
    await this.loadDepartamentos();
  }

  async loadDepartamentos(): Promise<void> {
    this.departamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges();
  }
}
