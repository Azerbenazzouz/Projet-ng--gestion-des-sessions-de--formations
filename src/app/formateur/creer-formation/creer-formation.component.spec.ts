import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerFormationComponent } from './creer-formation.component';

describe('CreerFormationComponent', () => {
  let component: CreerFormationComponent;
  let fixture: ComponentFixture<CreerFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
