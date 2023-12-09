import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTabsComponent } from './slider-tabs.component';

describe('SliderTabsComponent', () => {
  let component: SliderTabsComponent;
  let fixture: ComponentFixture<SliderTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
