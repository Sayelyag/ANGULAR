import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoNumerosComponent } from './hijo-numeros-component';

describe('HijoNumerosComponent', () => {
  let component: HijoNumerosComponent;
  let fixture: ComponentFixture<HijoNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoNumerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoNumerosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
