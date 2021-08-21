import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetFavouriteComponent } from './planet-favourite.component';

describe('PlanetFavouriteComponent', () => {
  let component: PlanetFavouriteComponent;
  let fixture: ComponentFixture<PlanetFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
