import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../service/service.plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-api-component',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './plantilla-funcion-simple-api-component.css',
  templateUrl: './plantilla-funcion-simple-api-component.html',
})
export class PlantillaFuncionSimpleApiComponent implements OnInit {
  public personas: Plantilla[] = [];
  public funciones: string[] = [];
  public funcionSeleccionada = '';
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
        console.error('Error al cargar las funciones de plantilla:', error);
      },
    });
  }

  async mostrarPlantilla(): Promise<void> {
    if (!this.funcionSeleccionada) {
      this.error = 'Selecciona una función.';
      return;
    }

    try {
      this.personas = await this._service.getPlantillaByFuncionAsync(
        this.funcionSeleccionada,
      );
      this.error = '';
      this._cdr.detectChanges();
    } catch (error) {
      this.personas = [];
      this.error = 'No se pudo cargar la plantilla para esa función.';
      console.error('Error al cargar la plantilla:', error);
    }
  }
}
