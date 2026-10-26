import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeportePadreComponent } from './deporte-padre-component';

describe('DeportePadreComponent', () => {
  let component: DeportePadreComponent;
  let fixture: ComponentFixture<DeportePadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeportePadreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeportePadreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
