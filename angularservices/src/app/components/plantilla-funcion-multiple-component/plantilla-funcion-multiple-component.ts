import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../service/service.plantilla';

@Component({
  selector: 'app-plantilla-funcion-multiple-component',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent implements OnInit {
  public personas: Plantilla[] = [];
  public funciones: string[] = [];
  public funcionesSeleccionadas: string[] = [];
  public error = '';

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantilla
  ) {}

  ngOnInit(): void {
    this._service.getFuncionesPlantilla().subscribe({
      next: (response: string[]) => {
        this.funciones = response;
        this.error = '';
        this._cdr.detectChanges();
      },
      error: (error) => {
        this.error = 'No se pudieron cargar las funciones.';
        console.error('Error al cargar las funciones:', error);
      },
    });
  }

  async mostrarPlantilla(): Promise<void> {
    if (this.funcionesSeleccionadas.length === 0) {
      this.error = 'Selecciona al menos una función.';
      return;
    }

    try {
      this.personas = await this._service.getPlantillaFunciones(
        this.funcionesSeleccionadas,
      );
      this.error = '';
      this._cdr.detectChanges();
    } catch (error) {
      this.personas = [];
      this.error = 'No se pudo cargar la plantilla.';
      console.error('Error al cargar la plantilla múltiple:', error);
    }
  }
}
