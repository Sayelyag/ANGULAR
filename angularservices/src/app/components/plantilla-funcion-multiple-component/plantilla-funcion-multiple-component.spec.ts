import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlantillaFuncionMultipleComponent } from './plantilla-funcion-multiple-component';
import { ServicePlantilla } from '../../service/service.plantilla';

describe('PlantillaFuncionMultipleComponent', () => {
  let component: PlantillaFuncionMultipleComponent;
  let fixture: ComponentFixture<PlantillaFuncionMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaFuncionMultipleComponent],
      providers: [
        {
          provide: ServicePlantilla,
          useValue: {
            getFuncionesPlantilla: () => of([]),
            getPlantillaFunciones: () => Promise.resolve([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionMultipleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
