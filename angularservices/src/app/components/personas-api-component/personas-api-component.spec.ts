import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PersonasApiComponent } from './personas-api-component';
import { PersonaService } from '../../service/service.personas';

describe('PersonasApiComponent', () => {
  let component: PersonasApiComponent;
  let fixture: ComponentFixture<PersonasApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasApiComponent],
      providers: [
        {
          provide: PersonaService,
          useValue: { getPersonas: () => of([]) },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonasApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
