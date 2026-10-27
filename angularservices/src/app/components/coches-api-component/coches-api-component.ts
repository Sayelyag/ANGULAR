import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoche } from '../../service/service.coche';

@Component({
  selector: 'app-coches-api-component',
  standalone: true,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
  public arrayCoches: Coche[] = [];

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _service: ServiceCoche,
  ) {}

  ngOnInit(): void {
    this._service.getCoches().subscribe((coches) => {
      this.arrayCoches = coches;
      this._cdr.detectChanges();
    });
  }
}
