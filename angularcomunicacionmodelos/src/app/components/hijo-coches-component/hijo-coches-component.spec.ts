import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoCochesComponent } from './hijo-coches-component';

describe('HijoCochesComponent', () => {
  let component: HijoCochesComponent;
  let fixture: ComponentFixture<HijoCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoCochesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoCochesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
