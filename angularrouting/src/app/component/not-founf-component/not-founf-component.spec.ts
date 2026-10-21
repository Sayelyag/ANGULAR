import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFounfComponent } from './not-founf-component';

describe('NotFounfComponent', () => {
  let component: NotFounfComponent;
  let fixture: ComponentFixture<NotFounfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFounfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFounfComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
