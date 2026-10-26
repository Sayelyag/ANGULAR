import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeporteHijoComponent } from './deporte-hijo-component';

describe('DeporteHijoComponent', () => {
  let component: DeporteHijoComponent;
  let fixture: ComponentFixture<DeporteHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeporteHijoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeporteHijoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
