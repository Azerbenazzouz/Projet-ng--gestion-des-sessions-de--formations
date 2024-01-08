import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesCondidatComponent } from './les-condidat.component';

describe('LesCondidatComponent', () => {
  let component: LesCondidatComponent;
  let fixture: ComponentFixture<LesCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesCondidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LesCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
