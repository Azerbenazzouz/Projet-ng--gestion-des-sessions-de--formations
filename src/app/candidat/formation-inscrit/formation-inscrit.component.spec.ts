import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationInscritComponent } from './formation-inscrit.component';

describe('FormationInscritComponent', () => {
  let component: FormationInscritComponent;
  let fixture: ComponentFixture<FormationInscritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationInscritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormationInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
