import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesFormateurComponent } from './les-formateur.component';

describe('LesFormateurComponent', () => {
  let component: LesFormateurComponent;
  let fixture: ComponentFixture<LesFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesFormateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LesFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
