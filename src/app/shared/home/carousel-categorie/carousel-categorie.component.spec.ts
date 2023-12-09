import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCategorieComponent } from './carousel-categorie.component';

describe('CarouselCategorieComponent', () => {
  let component: CarouselCategorieComponent;
  let fixture: ComponentFixture<CarouselCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
