import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsComponent } from './comics-component';
import { ComicService } from '../../service/service.comic';

describe('ComicsComponent', () => {
  let component: ComicsComponent;
  let fixture: ComponentFixture<ComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicsComponent],
      providers: [
        {
          provide: ComicService,
          useValue: { getComicsAsync: async () => [] },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
