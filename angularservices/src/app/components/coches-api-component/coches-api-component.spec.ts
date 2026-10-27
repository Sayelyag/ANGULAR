import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CochesApiComponent } from './coches-api-component';
import { ServiceCoche } from '../../service/service.coche';
import { of } from 'rxjs';

describe('CochesApiComponent', () => {
  let component: CochesApiComponent;
  let fixture: ComponentFixture<CochesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CochesApiComponent],
      providers: [
        {
          provide: ServiceCoche,
          useValue: { getCoches: () => of([]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CochesApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
