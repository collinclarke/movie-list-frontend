import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLookupComponent } from './movie-lookup.component';

describe('MovieLookupComponent', () => {
  let component: MovieLookupComponent;
  let fixture: ComponentFixture<MovieLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
