import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlantillaFuncionSimpleApiComponent } from './plantilla-funcion-simple-api-component';
import { ServicePlantilla } from '../../service/service.plantilla';

describe('PlantillaFuncionSimpleApiComponent', () => {
  let component: PlantillaFuncionSimpleApiComponent;
  let fixture: ComponentFixture<PlantillaFuncionSimpleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaFuncionSimpleApiComponent],
      providers: [
        {
          provide: ServicePlantilla,
          useValue: { getPlantillas: () => of([]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionSimpleApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
