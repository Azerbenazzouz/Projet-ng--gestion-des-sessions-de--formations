import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesFormationComponent } from './les-formation.component';

describe('LesFormationComponent', () => {
  let component: LesFormationComponent;
  let fixture: ComponentFixture<LesFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LesFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
